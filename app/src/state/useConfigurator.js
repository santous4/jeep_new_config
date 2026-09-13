import { useEffect, useMemo, useRef, useState } from "react";
import { TRIMS, COLORS, WHEELS, INTERIORS, PACKS, OPTIONS, STEPS, VAT, FEES, KEY, money, byId } from "../data/catalogue";
import wranglerImg from "../assets/jeep/wrangler.png";
import stockImg from "../assets/jeep/stock-a.jpg";

const initialState = {
  step: "color",
  trim: "sahara",
  color: "hydro",
  wheels: "w18",
  interior: "cloth",
  packs: ["safety"],
  options: ["mats"],
  view: "exterior",
  rotation: 8,
  zoom: false,
  rendering: false,
  mode: "finance",
  down: 20,
  tenure: 60,
  balloon: 0,
  rate: 3.49,
  tradeIn: false,
  drawer: null,
  infoItem: null,
  breakdownOpen: false,
  availableOnly: false,
  diffOnly: true,
  assistOpen: false,
  conflict: null,
  exitIntent: false,
  showResume: false,
  stockDown: false,
  submitted: false,
  phone: "",
  phoneError: false,
  shareLabel: "Share",
  tradeInLabel: "Get indicative value",
  delta: null,
  saved: 3,
  showroom: "dfc",
};

function activePacks(s) {
  return PACKS.filter((p) => s.packs.indexOf(p.id) > -1);
}
function activeOptions(s) {
  return OPTIONS.filter((o) => s.options.indexOf(o.id) > -1);
}
function base(s) {
  return byId(TRIMS, s.trim).price;
}
function extras(s) {
  return (
    byId(COLORS, s.color).price +
    byId(WHEELS, s.wheels).price +
    byId(INTERIORS, s.interior).price +
    activePacks(s).reduce((a, p) => a + p.price, 0) +
    activeOptions(s).reduce((a, o) => a + o.price, 0)
  );
}
function subtotal(s) {
  return base(s) + extras(s);
}
function total(s) {
  return subtotal(s) * (1 + VAT) + FEES;
}
function monthly(s) {
  const t = total(s);
  const dp = t * (s.down / 100) + (s.tradeIn ? 42000 : 0);
  const bal = t * (s.balloon / 100);
  const P = Math.max(t - dp, 0);
  const r = s.rate / 100 / 12;
  const n = s.tenure;
  if (r === 0) return (P - bal) / n;
  return ((P - bal / Math.pow(1 + r, n)) * r) / (1 - Math.pow(1 + r, -n));
}
function leaseMonthly(s) {
  return total(s) * 0.0142;
}
function stock(s) {
  if (s.stockDown) return { label: "Availability unavailable", detail: "Stock feed is retrying. You can keep configuring.", dot: "#888b8d", cta: "Retry" };
  const packsCount = s.packs.length + s.options.length;
  if (s.trim === "sahara" && (s.color === "white" || s.color === "black") && s.wheels === "w18" && packsCount <= 2)
    return { label: "In stock", detail: "4 units at Dubai Festival City and Abu Dhabi. Delivery in 5 working days.", dot: "#1f7a3d", cta: "See matching units" };
  if (s.trim === "rubicon" || s.trim === "rubiconx")
    return { label: "In transit", detail: "Arriving at port in 4–6 weeks. Allocation can be held against a deposit.", dot: "#ffba00", cta: "See matching units" };
  return { label: "Build to order", detail: "Factory order, indicative lead time 12–16 weeks from confirmation.", dot: "#636363", cta: "See close matches" };
}

export function useConfigurator({ startStep = "color", defaultMode = "finance", showMostChosen = true } = {}) {
  const [state, setStateRaw] = useState(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const stockTimer = useRef();
  const deltaTimer = useRef();
  const renderTimer = useRef();

  function persist(s) {
    const keep = {
      step: s.step, trim: s.trim, color: s.color, wheels: s.wheels, interior: s.interior,
      packs: s.packs, options: s.options, mode: s.mode, down: s.down, tenure: s.tenure,
      balloon: s.balloon, rate: s.rate, tradeIn: s.tradeIn,
    };
    try {
      localStorage.setItem(KEY, JSON.stringify(keep));
      history.replaceState(null, "", "#build=" + btoa(JSON.stringify(keep)));
    } catch (e) {
      /* storage unavailable */
    }
  }

  function apply(patch, note) {
    const prev = stateRef.current;
    const merged = { ...prev, ...patch };
    const before = total(prev);
    const after = total(merged);
    stateRef.current = merged;
    setStateRaw(merged);
    persist(merged);
    if (after !== before) {
      const d = after - before;
      const deltaLabel = (d > 0 ? "+" : "−") + money(Math.abs(d));
      clearTimeout(deltaTimer.current);
      stateRef.current = { ...stateRef.current, delta: deltaLabel };
      setStateRaw((s) => ({ ...s, delta: deltaLabel }));
      deltaTimer.current = setTimeout(() => {
        stateRef.current = { ...stateRef.current, delta: null };
        setStateRaw((s) => ({ ...s, delta: null }));
      }, 2600);
    }
    if (note) {
      clearTimeout(renderTimer.current);
      stateRef.current = { ...stateRef.current, rendering: true };
      setStateRaw((s) => ({ ...s, rendering: true }));
      renderTimer.current = setTimeout(() => {
        stateRef.current = { ...stateRef.current, rendering: false };
        setStateRaw((s) => ({ ...s, rendering: false }));
      }, 320);
    }
  }

  function patchState(patch) {
    const prev = stateRef.current;
    const merged = typeof patch === "function" ? patch(prev) : { ...prev, ...patch };
    stateRef.current = merged;
    setStateRaw(merged);
  }

  useEffect(() => {
    let restored = false;
    try {
      const hash = decodeURIComponent((location.hash || "").replace(/^#/, ""));
      if (hash.startsWith("build=")) {
        patchState((s) => ({ ...s, ...JSON.parse(atob(hash.slice(6))) }));
        restored = true;
      } else {
        const raw = localStorage.getItem(KEY);
        if (raw) {
          patchState((s) => ({ ...s, ...JSON.parse(raw) }));
          restored = true;
        }
      }
    } catch (e) {
      /* corrupt state — fall through to defaults */
    }
    if (restored) patchState({ showResume: true, drawer: null, submitted: false });
    else patchState({ step: startStep, mode: defaultMode });

    const onExit = (e) => {
      if (e.clientY <= 0 && !stateRef.current.exitIntent && !stateRef.current.drawer) {
        patchState({ exitIntent: true });
      }
    };
    document.addEventListener("mouseout", onExit);
    return () => {
      document.removeEventListener("mouseout", onExit);
      clearTimeout(stockTimer.current);
      clearTimeout(deltaTimer.current);
      clearTimeout(renderTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function choose(kind, id) {
    const s = stateRef.current;
    if (kind === "trim") {
      const trim = byId(TRIMS, id);
      const wheelOk = !byId(WHEELS, s.wheels).trims || byId(WHEELS, s.wheels).trims.indexOf(id) > -1;
      const intOk = !byId(INTERIORS, s.interior).trims || byId(INTERIORS, s.interior).trims.indexOf(id) > -1;
      const packDrop = activePacks(s).filter((p) => p.trims && p.trims.indexOf(id) < 0);
      if (!wheelOk || !intOk || packDrop.length) {
        const lost = [].concat(wheelOk ? [] : [byId(WHEELS, s.wheels).name], intOk ? [] : [byId(INTERIORS, s.interior).name], packDrop.map((p) => p.name));
        return patchState({
          conflict: {
            text: "Selecting " + trim.name + " removes " + lost.join(", ") + ". Everything else in your build is kept.",
            run: () =>
              apply(
                {
                  trim: id,
                  wheels: wheelOk ? s.wheels : trim.wheelsStd,
                  interior: intOk ? s.interior : "cloth",
                  packs: s.packs.filter((p) => packDrop.map((x) => x.id).indexOf(p) < 0),
                  options: s.options.filter((o) => o !== "winch" || packDrop.map((x) => x.id).indexOf("xtreme") < 0),
                },
                true
              ),
          },
        });
      }
      return apply({ trim: id }, true);
    }
    if (kind === "color") return apply({ color: id }, true);
    if (kind === "wheels") return apply({ wheels: id }, true);
    if (kind === "interior") return apply({ interior: id, view: "interior" }, true);
    if (kind === "packs") {
      const on = s.packs.indexOf(id) > -1;
      if (!on && id === "sky" && s.options.indexOf("rack") > -1)
        return patchState({
          conflict: {
            text: "Selecting Sky One-Touch Power Top removes Roof Rack Cross Rails — the two cannot be fitted together.",
            run: () => apply({ packs: s.packs.concat(["sky"]), options: s.options.filter((o) => o !== "rack") }, true),
          },
        });
      if (!on && id === "xtreme" && s.wheels !== "wbl")
        return patchState({
          conflict: {
            text: "Xtreme Recon includes 17\" beadlock-capable wheels and replaces your " + byId(WHEELS, s.wheels).name + ".",
            run: () => apply({ packs: s.packs.concat(["xtreme"]), wheels: "wbl" }, true),
          },
        });
      if (on && id === "xtreme" && s.options.indexOf("winch") > -1)
        return patchState({
          conflict: {
            text: "Removing Xtreme Recon also removes the Warn Front Winch, which needs its steel front bumper.",
            run: () => apply({ packs: s.packs.filter((p) => p !== "xtreme"), options: s.options.filter((o) => o !== "winch") }, true),
          },
        });
      return apply({ packs: on ? s.packs.filter((p) => p !== id) : s.packs.concat([id]) }, true);
    }
    if (kind === "options") {
      const on = s.options.indexOf(id) > -1;
      if (!on && id === "rack" && s.packs.indexOf("sky") > -1)
        return patchState({
          conflict: {
            text: "Roof Rack Cross Rails cannot be fitted with the Sky One-Touch Power Top. Continuing removes the power top.",
            run: () => apply({ options: s.options.concat(["rack"]), packs: s.packs.filter((p) => p !== "sky") }, true),
          },
        });
      return apply({ options: on ? s.options.filter((o) => o !== id) : s.options.concat([id]) });
    }
  }

  function rowsFor(step) {
    const s = state;
    const mk = (kind, list, selectedTest, extra) =>
      list
        .filter((it) => !(s.availableOnly && it.price > 12000))
        .map((it) => {
          const blocked = it.trims ? it.trims.indexOf(s.trim) < 0 : it.needs ? s.packs.indexOf(it.needs) < 0 : false;
          return Object.assign(
            {
              id: it.id,
              name: it.name,
              sub: it.sub || (it.finish ? it.finish + " finish" : ""),
              price: it.price ? "+" + money(it.price) : "Included",
              badge: (showMostChosen === false ? "" : it.badge) || "",
              blocked,
              blockedNote: it.trims
                ? "Available on " + it.trims.map((t) => byId(TRIMS, t).name.split(" ")[0]).join(" and ") + " only"
                : it.needs
                ? "Requires the Xtreme Recon package"
                : "",
              selected: selectedTest(it),
              pick: () => {
                if (!blocked) choose(kind, it.id);
              },
              info: (e) => {
                e.stopPropagation();
                patchState({ drawer: "info", infoItem: Object.assign({ kind }, it) });
              },
            },
            extra ? extra(it) : {}
          );
        });

    const sw = (css) => ({ swatchStyle: Object.assign({ width: "48px", height: "48px", flex: "none", border: "1px solid #e0e0e0", display: "block" }, css) });
    const noSwatch = { swatchStyle: { display: "none" } };

    if (step === "trim") return mk("trim", TRIMS, (t) => t.id === s.trim, (t) => Object.assign({}, noSwatch, { price: money(t.price) }));
    if (step === "color")
      return mk("color", COLORS, (c) => c.id === s.color, (c) =>
        sw({ background: c.finish === "Solid" ? c.hex : "linear-gradient(135deg," + c.hex + " 0%,#ffffff40 45%," + c.hex + " 100%)", backgroundColor: c.hex })
      );
    if (step === "wheels")
      return mk("wheels", WHEELS, (w) => w.id === s.wheels, (w) => sw({ background: "radial-gradient(circle at 50% 50%," + w.face + " 0 40%,#1a1a1a 41% 100%)", borderRadius: "100px" }));
    if (step === "interior") return mk("interior", INTERIORS, (i) => i.id === s.interior, (i) => sw({ background: i.tex, backgroundSize: "8px 8px" }));
    if (step === "packs") return mk("packs", PACKS, (p) => s.packs.indexOf(p.id) > -1, () => noSwatch);
    return mk("options", OPTIONS, (o) => s.options.indexOf(o.id) > -1, () => noSwatch);
  }

  function tabStyle(on, dark) {
    return {
      background: on ? "#ffba00" : "transparent",
      color: on ? "#000000" : dark ? "#ffffff" : "#212121",
      border: 0,
      fontFamily: "inherit",
      fontSize: "13px",
      fontWeight: 700,
      textTransform: "uppercase",
      padding: "10px 16px",
      cursor: "pointer",
      flex: dark ? "none" : "1",
    };
  }

  const vm = useMemo(() => {
    const s = state;
    const trim = byId(TRIMS, s.trim), color = byId(COLORS, s.color), wheel = byId(WHEELS, s.wheels), interior = byId(INTERIORS, s.interior);
    const stockInfo = stock(s);
    const totalVal = total(s), monthlyVal = monthly(s), leaseVal = leaseMonthly(s);
    const stepIndex = STEPS.map((x) => x.id).indexOf(s.step);
    const isInterior = s.view === "interior";
    const zoomScale = s.zoom ? 1.9 : 1;

    const carScale = (isInterior ? 2.6 : 1) * zoomScale * (s.view === "wheel" ? 2.4 : 1);
    const carShift = s.view === "wheel" ? "22%" : isInterior ? "-6%" : "0%";

    const infoItem = s.infoItem || {};
    const benefit =
      {
        trim: "The trim sets the drivetrain, axles and standard equipment. Everything after this step is fitted on top of it.",
        color: "A factory-applied finish with a matching touch-up pen supplied. Pearl and metallic coats carry a small premium and a longer lead time.",
        wheels: "Wheel diameter changes ride comfort and off-road clearance. Larger diameters look sharper on road; 17-inch keeps more sidewall for dune driving.",
        interior: "Seat material affects heat build-up in UAE summers. Leather ventilates faster with the seat coolers; cloth stays cooler when parked.",
        packs: "A pack bundles factory-fitted equipment at less than the sum of its parts. Packs are built into the car and cannot be added later.",
        options: "Accessories are fitted by the dealer and can be added after delivery, though fitting during PDI avoids a second workshop visit.",
      }[infoItem.kind] || "";

    const drawer = s.drawer;
    const compareTrims = [TRIMS[1], TRIMS[3]];
    const compareRows = [
      ["", compareTrims[0].name, compareTrims[1].name],
      ["Price from", money(compareTrims[0].price), money(compareTrims[1].price)],
      ["Engine", compareTrims[0].engine, compareTrims[1].engine],
      ["Power", compareTrims[0].power, compareTrims[1].power],
      ["0–100 km/h", compareTrims[0].accel, compareTrims[1].accel],
      ["4WD system", compareTrims[0].drive, compareTrims[1].drive],
      ["Axles", "Dana 30 / Dana 35", "Dana 44 heavy duty"],
      ["Lockers", "None", "Front and rear electronic"],
      ["Sway bar", "Fixed", "Electronic disconnect"],
      ["Tyres", "255/70 R18 all-season", "285/70 R17 all-terrain"],
      ["Seats", "5", "5"],
      ["Touchscreen", "12.3-inch Uconnect® 5", "12.3-inch Uconnect® 5"],
    ];
    const compareCells = [];
    compareRows.forEach((r, ri) => {
      if (s.diffOnly && ri > 0 && r[1] === r[2]) return;
      r.forEach((cell, ci) => {
        compareCells.push({
          key: ri + "-" + ci,
          text: cell,
          style: {
            padding: "10px 8px",
            borderBottom: "1px solid #eeeeee",
            fontWeight: ri === 0 ? 700 : ci === 0 ? 400 : 500,
            color: ci === 0 ? "#636363" : "#212121",
            background: ri === 0 ? "#f5f5f5" : "transparent",
            textTransform: ri === 0 ? "uppercase" : "none",
            fontSize: ri === 0 ? "12px" : "13px",
          },
        });
      });
    });

    const summaryLines = [
      { group: "Model", name: "2026 Jeep® Wrangler 4-Door", price: money(trim.price) },
      { group: "Trim", name: trim.name, price: "Included" },
      { group: "Exterior", name: color.name, price: color.price ? "+" + money(color.price) : "Included" },
      { group: "Wheels", name: wheel.name, price: wheel.price ? "+" + money(wheel.price) : "Included" },
      { group: "Interior", name: interior.name, price: interior.price ? "+" + money(interior.price) : "Included" },
    ].concat(
      activePacks(s).map((p) => ({ group: "Pack", name: p.name, price: "+" + money(p.price) })),
      activeOptions(s).map((o) => ({ group: "Accessory", name: o.name, price: "+" + money(o.price) }))
    );

    const payload = JSON.stringify(
      {
        model: "teujp0014-2026",
        material: "JPJL4S26",
        trim: trim.id,
        options: [color.id, wheel.id, interior.id].concat(s.packs, s.options),
        totalOnRoad: Math.round(totalVal),
        finance: { type: s.mode, downPct: s.down, tenure: s.tenure, balloonPct: s.balloon, ratePct: s.rate, monthly: Math.round(monthlyVal) },
        stockRef: stockInfo.label === "In stock" ? "DXB-FC-4812" : null,
        source: { utm_source: "configurator", utm_medium: "web", step: s.step },
      },
      null,
      2
    );

    return {
      s,
      trim, color, wheel, interior, stock: stockInfo, total: totalVal, monthly: monthlyVal, lease: leaseVal,
      steps: STEPS.map((st, i) => ({ id: st.id, num: String(i + 1), label: st.label, active: st.id === s.step, done: i < stepIndex, todo: i >= stepIndex, go: () => apply({ step: st.id }) })),
      specStrip: [
        { k: "Power", v: trim.power },
        { k: "0–100", v: trim.accel },
        { k: "Drivetrain", v: trim.drive },
        { k: "Consumption", v: trim.engine === "3.6L V6" ? "11.2 L/100km" : "9.6 L/100km" },
        { k: "Seats", v: "5" },
      ],
      views: [
        { id: "exterior", label: "Exterior", selected: s.view === "exterior", pick: () => patchState({ view: "exterior", zoom: false }) },
        { id: "interior", label: "Interior", selected: s.view === "interior", pick: () => patchState({ view: "interior", zoom: false }) },
        { id: "wheel", label: "Wheel", selected: s.view === "wheel", pick: () => patchState({ view: "wheel", zoom: false }) },
        { id: "detail", label: "Detail", selected: s.view === "detail", pick: () => patchState({ view: "detail", zoom: true }) },
      ],
      zoomLabel: s.zoom ? "Zoom out" : "Zoom in",
      toggleZoom: () => patchState({ zoom: !s.zoom }),
      setRotation: (v) => patchState({ rotation: Number(v) }),

      wranglerImg,
      carImgStyle: {
        display: "block",
        width: "100%",
        height: "auto",
        filter: "brightness(" + (1.05 + (1 - color.mult) * 1.5) + ") contrast(" + (0.82 + color.mult * 0.3) + ") saturate(0.35)",
        transform: "scale(" + carScale + ") translateX(" + carShift + ") rotateY(" + (s.rotation - 8) * 2.2 + "deg)",
        transformOrigin: "50% 55%",
        transition: "transform .35s ease, filter .35s ease",
      },
      paintOverlayStyle: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: color.hex,
        opacity: 0.62,
        mixBlendMode: "multiply",
        WebkitMaskImage: `url(${wranglerImg})`,
        maskImage: `url(${wranglerImg})`,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        transform: "scale(" + carScale + ") translateX(" + carShift + ") rotateY(" + (s.rotation - 8) * 2.2 + "deg)",
        transformOrigin: "50% 55%",
        transition: "transform .35s ease, background .25s ease",
      },

      retryStock: () => patchState({ stockDown: false }),
      simulateOutage: () => {
        patchState({ stockDown: true });
        clearTimeout(stockTimer.current);
        stockTimer.current = setTimeout(() => patchState({ stockDown: false }), 6000);
      },

      isSummary: s.step === "summary",
      isPicker: s.step !== "summary",
      isTrimStep: s.step === "trim",
      isPacksStep: s.step === "packs",
      stepTitle: { trim: "Choose your trim", color: "Exterior colour", wheels: "Wheels", interior: "Interior", packs: "Equipment packs", options: "Accessories" }[s.step] || "",
      stepCount: rowsFor(s.step).length + " options",
      stepHint:
        {
          trim: "Sahara is the most configured Wrangler in the UAE. Rubicon adds the hardware that matters off road.",
          color: "Pearl and metallic finishes carry a premium. Swatch shown is the real paint sample; the render is an approximation.",
          wheels: "Diameter shown with the tyre fitted as standard on your trim.",
          interior: "Material shown at macro scale. Ventilated seats are standard from Sahara upward.",
          packs: "Factory-fitted. Cannot be added after the car is built.",
          options: "Dealer-fitted. Can be added at delivery or later.",
        }[s.step] || "",
      rows: rowsFor(s.step),
      toggleAvailableOnly: () => apply({ availableOnly: !s.availableOnly }),

      summaryLines,
      refCode: "JEP-26W-" + (4100 + Math.round(totalVal % 800)),

      specLine: trim.name + " · " + color.name + " · " + wheel.name,
      headlinePrice: s.mode === "cash" ? money(totalVal) : money(s.mode === "lease" ? leaseVal : monthlyVal) + "/mo",
      secondaryPrice: s.mode === "cash" ? "Monthly from " + money(monthlyVal) : "Total on-road " + money(totalVal),
      showDelta: !!s.delta,
      deltaLabel: s.delta || "",
      cashTabStyle: tabStyle(s.mode === "cash", true),
      financeTabStyle: tabStyle(s.mode === "finance", true),
      leaseTabStyle: tabStyle(s.mode === "lease", true),
      finCashStyle: tabStyle(s.mode === "cash"),
      finFinanceStyle: tabStyle(s.mode === "finance"),
      finLeaseStyle: tabStyle(s.mode === "lease"),
      setCash: () => apply({ mode: "cash" }),
      setFinance: () => apply({ mode: "finance" }),
      setLease: () => apply({ mode: "lease" }),

      toggleBreakdown: () => patchState({ breakdownOpen: !s.breakdownOpen }),
      breakdownLabel: s.breakdownOpen ? "Hide breakdown" : "Price breakdown",
      breakdown: [{ k: trim.name + " base price", v: money(trim.price) }].concat(
        color.price ? [{ k: color.name, v: money(color.price) }] : [],
        wheel.price ? [{ k: wheel.name, v: money(wheel.price) }] : [],
        interior.price ? [{ k: interior.name, v: money(interior.price) }] : [],
        activePacks(s).map((p) => ({ k: p.name, v: money(p.price) })),
        activeOptions(s).map((o) => ({ k: o.name, v: money(o.price) })),
        [
          { k: "Subtotal", v: money(subtotal(s)) },
          { k: "VAT 5%", v: money(subtotal(s) * VAT) },
          { k: "Registration and admin", v: money(FEES) },
          { k: "Total on-road", v: money(totalVal) },
        ]
      ),

      primaryLabel: s.step === "summary" ? "Enquire now" : "Continue",
      primaryAction: () => {
        if (s.step === "summary") return patchState({ drawer: "enquire" });
        apply({ step: STEPS[Math.min(stepIndex + 1, STEPS.length - 1)].id });
      },

      drawer,
      drawerOpen: !!drawer,
      drawerTitle: { info: "Option detail", finance: "Payment options", compare: "Compare trims", saved: "Saved builds", stock: "Availability", spec: "Full specification", enquire: s.submitted ? "Confirmation" : "Enquire", packs: "Pack contents" }[drawer] || "",
      closeDrawer: () => patchState({ drawer: null }),
      openFinance: () => patchState({ drawer: "finance" }),
      openCompare: () => patchState({ drawer: "compare" }),
      openSaved: () => patchState({ drawer: "saved" }),
      openSavedCompare: () => patchState({ drawer: "saved" }),
      openStock: () => patchState({ drawer: "stock" }),
      openSpec: () => patchState({ drawer: "spec" }),
      openEnquire: () => patchState({ drawer: "enquire", submitted: false }),
      openPackCompare: () => patchState({ drawer: "packs" }),

      infoItem,
      infoBenefit: benefit,
      infoPrice: infoItem.price ? "+" + money(infoItem.price) : "Included in this trim",
      infoFitment: infoItem.fit || (infoItem.kind === "packs" ? "Factory-fitted at build. Cannot be retrofitted." : "Factory-fitted at build."),

      finHeadlineLabel: s.mode === "cash" ? "Total on-road" : s.mode === "lease" ? "Monthly lease" : "Monthly instalment",
      finHeadline: s.mode === "cash" ? money(totalVal) : money(s.mode === "lease" ? leaseVal : monthlyVal),
      finSubline:
        s.mode === "cash"
          ? "Paid in full on collection"
          : s.mode === "lease"
          ? "36 months, 20,000 km/year, insurance and servicing included"
          : s.tenure + " months at " + s.rate.toFixed(2) + "% · " + money((totalVal * s.down) / 100) + " down",
      finControls:
        s.mode === "cash"
          ? []
          : [
              { key: "down", label: "Down payment", value: s.down + "% · " + money((totalVal * s.down) / 100), min: 0, max: 60, step: 5, raw: s.down, set: (v) => apply({ down: Number(v) }) },
              { key: "tenure", label: "Tenure", value: s.tenure + " months", min: 12, max: 84, step: 12, raw: s.tenure, set: (v) => apply({ tenure: Number(v) }) },
              { key: "balloon", label: "Balloon / residual", value: s.balloon + "% · " + money((totalVal * s.balloon) / 100), min: 0, max: 40, step: 5, raw: s.balloon, set: (v) => apply({ balloon: Number(v) }) },
              { key: "rate", label: "Profit rate", value: s.rate.toFixed(2) + "% per year", min: 199, max: 699, step: 25, raw: Math.round(s.rate * 100), set: (v) => apply({ rate: Number(v) / 100 }) },
            ],
      tradeInLabel: s.tradeIn ? "AED 42,000 applied to down payment" : s.tradeInLabel,
      applyTradeIn: () => apply({ tradeIn: true }),

      toggleDiffOnly: () => patchState({ diffOnly: !s.diffOnly }),
      compareCells,

      savedBuilds: [
        {
          key: "b1", name: "Sahara · Hydro Blue Pearl", sub: "18\" Tech Grey · Safety Group", price: money(276900), diff: "AED 13,600 less than current build",
          swatchStyle: { width: "44px", height: "44px", flex: "none", background: "#1f4d80", border: "1px solid #e0e0e0", display: "block" },
          load: () => apply({ trim: "sahara", color: "hydro", wheels: "w18", interior: "cloth", packs: ["safety"], options: [], drawer: null }, true),
        },
        {
          key: "b2", name: "Rubicon · Sarge Green", sub: "Beadlock-capable · Xtreme Recon", price: money(368400), diff: "Adds Xtreme Recon, 35\" tyres",
          swatchStyle: { width: "44px", height: "44px", flex: "none", background: "#6d6f52", border: "1px solid #e0e0e0", display: "block" },
          load: () => apply({ trim: "rubicon", color: "sarge", wheels: "wbl", interior: "leatherblk", packs: ["xtreme", "safety"], options: ["rails"], drawer: null }, true),
        },
        {
          key: "b3", name: "Sport S · Bright White", sub: "17\" Machined · no packs", price: money(220500), diff: "Lowest monthly of your saved builds",
          swatchStyle: { width: "44px", height: "44px", flex: "none", background: "#f2f2f0", border: "1px solid #e0e0e0", display: "block" },
          load: () => apply({ trim: "sports", color: "white", wheels: "w17a", interior: "cloth", packs: [], options: [], drawer: null }, true),
        },
      ],
      savedLabel: s.saved + " saved builds",

      stockUnits: [
        { key: "u1", img: stockImg, title: "2026 Wrangler 4-Door " + trim.name.split(" ")[0], diff: (color.id === "white" ? "Anvil Clear-Coat" : "Bright White Clear-Coat") + " instead of " + color.name + ", otherwise identical", vin: "VIN ending 4812 · Dubai Festival City", price: money(totalVal - 3500) },
        { key: "u2", img: stockImg, title: "2026 Wrangler 4-Door " + trim.name.split(" ")[0], diff: "Adds Trailer Tow group, 18\" wheels", vin: "VIN ending 5177 · Abu Dhabi Airport Road", price: money(totalVal + 6300) },
        { key: "u3", img: stockImg, title: "2026 Wrangler 4-Door " + trim.name.split(" ")[0], diff: (interior.id === "cloth" ? "Black Leather-Trimmed" : "Black Cloth") + " interior, no accessories", vin: "VIN ending 5290 · Sharjah", price: money(totalVal - 9100) },
      ],

      specSheet: [
        { k: "Engine", v: trim.engine }, { k: "Power", v: trim.power }, { k: "Torque", v: trim.engine === "3.6L V6" ? "347 Nm" : "400 Nm" },
        { k: "Transmission", v: "8-speed automatic" }, { k: "4WD system", v: trim.drive }, { k: "0–100 km/h", v: trim.accel },
        { k: "Seats", v: "5" }, { k: "Ground clearance", v: s.wheels === "wbl" ? "312 mm" : "242 mm" },
        { k: "Wading depth", v: s.wheels === "wbl" ? "864 mm" : "762 mm" }, { k: "Towing capacity", v: "3,500 kg" },
        { k: "Infotainment", v: "12.3-inch Uconnect® 5" }, { k: "Safety features", v: "Up to 110 available safety and security features" },
        { k: "Warranty", v: "3 years / 60,000 km" }, { k: "Service pack", v: "3 years included" },
      ],

      packDetail: PACKS.map((p) => ({ id: p.id, name: p.name, price: "+" + money(p.price), items: p.items, overlap: p.overlap || "" })),

      setShowroom: (v) => patchState({ showroom: v }),
      setPhone: (v) => patchState({ phone: v, phoneError: false }),
      submitLead: () => {
        const ok = /^(\+?971|0)?5[024568]\d{7}$/.test(s.phone.replace(/[\s-]/g, ""));
        if (!ok) return patchState({ phoneError: true });
        patchState({ submitted: true, saved: s.saved + 1 });
      },
      payload,

      saveBuild: () => {
        persist(s);
        patchState({ saved: s.saved + 1, drawer: "saved" });
      },
      shareBuild: () => {
        persist(s);
        try {
          navigator.clipboard.writeText(location.href);
        } catch (e) {
          /* clipboard blocked */
        }
        patchState({ shareLabel: "Link copied" });
        setTimeout(() => patchState({ shareLabel: "Share" }), 2000);
      },
      downloadQuote: () => window.print(),
      startOver: () => {
        try {
          localStorage.removeItem(KEY);
          history.replaceState(null, "", location.pathname);
        } catch (e) {
          /* noop */
        }
        patchState({ step: "trim", trim: "sahara", color: "white", wheels: "w18", interior: "cloth", packs: [], options: [], showResume: false, drawer: null });
      },
      dismissResume: () => patchState({ showResume: false }),

      toggleAssist: () => patchState({ assistOpen: !s.assistOpen }),
      dismissExit: () => patchState({ exitIntent: false }),

      conflictText: s.conflict ? s.conflict.text : "",
      confirmConflict: () => {
        const c = s.conflict;
        patchState({ conflict: null });
        if (c) c.run();
      },
      cancelConflict: () => patchState({ conflict: null }),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return vm;
}
