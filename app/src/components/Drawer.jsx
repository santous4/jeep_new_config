import { Button } from "../design-system/Button";
import { Input } from "../design-system/Input";
import { Select } from "../design-system/Select";
import wranglerImg from "../assets/jeep/wrangler.png";
import iconPhone from "../assets/jeep/icons/icon-phone-line.svg";

function InfoDrawer({ vm }) {
  return (
    <div>
      <div style={{ background: "#eeeeee", height: 180, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, overflow: "hidden" }}>
        <img src={wranglerImg} alt="" style={{ width: "120%", maxWidth: "none", opacity: 0.9 }} />
      </div>
      <h3 style={{ margin: "0 0 8px", fontSize: 21, fontWeight: 700, lineHeight: 1.25 }}>{vm.infoItem.name || ""}</h3>
      <p style={{ margin: "0 0 14px", fontSize: 16, color: "#212121", lineHeight: 1.44 }}>{vm.infoBenefit}</p>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "12px 0", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", fontSize: 14 }}>
        <span style={{ color: "#636363" }}>Price</span>
        <span>{vm.infoPrice}</span>
      </div>
      <p style={{ margin: "14px 0 0", fontSize: 13, color: "#757575", lineHeight: 1.44 }}>{vm.infoFitment}</p>
    </div>
  );
}

function FinanceDrawer({ vm }) {
  return (
    <div>
      <div style={{ display: "flex", gap: 0, border: "1px solid #e0e0e0", marginBottom: 20 }}>
        <button onClick={vm.setCash} style={vm.finCashStyle}>Cash</button>
        <button onClick={vm.setFinance} style={vm.finFinanceStyle}>Finance</button>
        <button onClick={vm.setLease} style={vm.finLeaseStyle}>Lease</button>
      </div>
      <div style={{ background: "#f5f5f5", padding: 18, marginBottom: 20 }}>
        <span style={{ fontSize: 12, textTransform: "uppercase", color: "#636363" }}>{vm.finHeadlineLabel}</span>
        <div style={{ fontSize: 31, fontWeight: 700, lineHeight: 1.25 }}>{vm.finHeadline}</div>
        <span style={{ fontSize: 13, color: "#636363" }}>{vm.finSubline}</span>
      </div>

      {vm.finControls.map((c) => (
        <div key={c.key} style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{c.label}</span>
            <span style={{ fontSize: 14, color: "#53565a" }}>{c.value}</span>
          </div>
          <input type="range" min={c.min} max={c.max} step={c.step} value={c.raw} onChange={(e) => c.set(e.target.value)} style={{ width: "100%", accentColor: "#ffba00" }} />
        </div>
      ))}

      <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: 18, marginTop: 6 }}>
        <span style={{ fontSize: 12, textTransform: "uppercase", fontWeight: 700, color: "#636363" }}>Trade-in</span>
        <p style={{ margin: "6px 0 12px", fontSize: 13, color: "#757575", lineHeight: 1.44 }}>Add your current car and we apply an indicative value to the down payment.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 8 }}>
          <input placeholder="Make" style={{ border: "1px solid #cccccc", borderRadius: 4, padding: 10, fontFamily: "inherit", fontSize: 14, minWidth: 0 }} />
          <input placeholder="Model" style={{ border: "1px solid #cccccc", borderRadius: 4, padding: 10, fontFamily: "inherit", fontSize: 14, minWidth: 0 }} />
          <input placeholder="Year" style={{ border: "1px solid #cccccc", borderRadius: 4, padding: 10, fontFamily: "inherit", fontSize: 14, minWidth: 0 }} />
          <input placeholder="Kilometers" style={{ border: "1px solid #cccccc", borderRadius: 4, padding: 10, fontFamily: "inherit", fontSize: 14, minWidth: 0 }} />
        </div>
        <button onClick={vm.applyTradeIn} style={{ marginTop: 10, background: "#ffffff", border: "1px solid #212121", fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", padding: "11px 16px", cursor: "pointer" }}>
          {vm.tradeInLabel}
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
        <button onClick={vm.closeDrawer} style={{ flex: "1 1 180px", background: "#ffba00", color: "#000000", border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 13, cursor: "pointer" }}>
          Apply to my build
        </button>
        <button onClick={vm.openEnquire} style={{ flex: "1 1 180px", background: "#ffffff", border: "1px solid #212121", fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
          Check eligibility
        </button>
      </div>
      <p style={{ margin: "14px 0 0", fontSize: 12, color: "#757575", lineHeight: 1.44 }}>Indicative only. Subject to credit approval by Al-Futtaim Finance. Rates and residual values vary by profile.</p>
    </div>
  );
}

function CompareDrawer({ vm }) {
  return (
    <div>
      <label style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, fontSize: 13, cursor: "pointer" }}>
        <input type="checkbox" checked={vm.s.diffOnly} onChange={vm.toggleDiffOnly} style={{ accentColor: "#ffba00", width: 16, height: 16 }} />
        <span>Show differences only</span>
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 0, fontSize: 13 }}>
        {vm.compareCells.map((cell) => (
          <div key={cell.key} style={cell.style}>{cell.text}</div>
        ))}
      </div>
      <button onClick={vm.openSavedCompare} style={{ marginTop: 18, background: "transparent", border: 0, fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", textDecoration: "underline", cursor: "pointer", padding: 0 }}>
        Compare my saved builds instead
      </button>
    </div>
  );
}

function SavedDrawer({ vm }) {
  return (
    <div>
      <p style={{ margin: "0 0 16px", fontSize: 14, color: "#636363", lineHeight: 1.44 }}>Saved on this device. No account required — add an email and we will keep them across devices.</p>
      {vm.savedBuilds.map((b) => (
        <div key={b.key} style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, border: "1px solid #e0e0e0", marginBottom: 10 }}>
          <span style={b.swatchStyle} />
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={{ fontSize: 15, fontWeight: 500 }}>{b.name}</span>
            <span style={{ fontSize: 12, color: "#757575" }}>{b.sub}</span>
            {b.diff ? <span style={{ fontSize: 12, color: "#53565a" }}>{b.diff}</span> : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <span style={{ fontSize: 14, whiteSpace: "nowrap" }}>{b.price}</span>
            <button onClick={b.load} style={{ background: "transparent", border: 0, fontFamily: "inherit", fontSize: 12, fontWeight: 700, textTransform: "uppercase", textDecoration: "underline", cursor: "pointer", padding: 0 }}>
              Open
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function StockDrawer({ vm }) {
  return (
    <div>
      <div style={{ background: "#f5f5f5", padding: 16, marginBottom: 18 }}>
        <span style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase" }}>{vm.stock.label}</span>
        <p style={{ margin: "6px 0 0", fontSize: 13, color: "#636363", lineHeight: 1.44 }}>{vm.stock.detail}</p>
      </div>
      <span style={{ fontSize: 12, textTransform: "uppercase", fontWeight: 700, color: "#636363" }}>Closest matching units</span>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
        {vm.stockUnits.map((u) => (
          <div key={u.key} style={{ display: "flex", gap: 14, border: "1px solid #e0e0e0", padding: 12 }}>
            <img src={u.img} alt="" style={{ width: 92, height: 70, objectFit: "cover", flex: "none" }} />
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{u.title}</span>
              <span style={{ fontSize: 12, color: "#757575", lineHeight: 1.38 }}>{u.diff}</span>
              <span style={{ fontSize: 12, color: "#888b8d" }}>{u.vin}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontSize: 14, whiteSpace: "nowrap" }}>{u.price}</span>
              <button onClick={vm.openEnquire} style={{ background: "#ffba00", color: "#000", border: 0, fontFamily: "inherit", fontSize: 11, fontWeight: 700, textTransform: "uppercase", padding: "7px 10px", cursor: "pointer" }}>
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={vm.openEnquire} style={{ marginTop: 18, width: "100%", background: "#000000", color: "#ffffff", border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 14, cursor: "pointer" }}>
        Reserve with AED 5,000 deposit
      </button>
      <p style={{ margin: "12px 0 0", fontSize: 12, color: "#757575", lineHeight: 1.44 }}>Deposit is fully refundable for 7 days and is deducted from the final invoice.</p>
    </div>
  );
}

function SpecDrawer({ vm }) {
  return (
    <div>
      {vm.specSheet.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "10px 0", borderBottom: "1px solid #eeeeee", fontSize: 14 }}>
          <span style={{ color: "#636363" }}>{s.k}</span>
          <span style={{ textAlign: "right" }}>{s.v}</span>
        </div>
      ))}
    </div>
  );
}

function EnquireDrawer({ vm }) {
  if (vm.s.submitted) {
    return (
      <div>
        <div style={{ width: 48, height: 48, background: "#ffba00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>✓</div>
        <h3 style={{ margin: "0 0 10px", fontSize: 21, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>Enquiry received</h3>
        <p style={{ margin: "0 0 16px", fontSize: 15, color: "#212121", lineHeight: 1.44 }}>
          A product specialist from Al-Futtaim Jeep will call you within 4 working hours. Your build is saved under reference {vm.refCode} and has been sent to the showroom team.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
          <button onClick={vm.closeDrawer} style={{ flex: "1 1 160px", background: "#ffba00", color: "#000", border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 13, cursor: "pointer" }}>
            Back to my build
          </button>
          <button onClick={vm.shareBuild} style={{ flex: "1 1 160px", background: "#ffffff", border: "1px solid #212121", fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
            {vm.s.shareLabel}
          </button>
        </div>
        <span style={{ fontSize: 12, textTransform: "uppercase", fontWeight: 700, color: "#636363" }}>Payload sent to SAP C4C</span>
        <pre style={{ margin: "8px 0 0", background: "#191920", color: "#e0e0e0", fontSize: 11, lineHeight: 1.5, padding: 14, overflow: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{vm.payload}</pre>
      </div>
    );
  }
  return (
    <div>
      <p style={{ margin: "0 0 18px", fontSize: 14, color: "#636363", lineHeight: 1.44 }}>Your full configuration, price and finance scenario are attached automatically. Four fields is all we need.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Input bordered placeholder="Full name" />
        <Input bordered value={vm.s.phone} onChange={(e) => vm.setPhone(e.target.value)} placeholder="Mobile (+971 5X XXX XXXX)" />
        {vm.s.phoneError ? <span style={{ fontSize: 12, color: "#53565a" }}>Enter a valid UAE mobile number, for example +971 50 123 4567.</span> : null}
        <Input bordered type="email" placeholder="Email" />
        <Select bordered value={vm.s.showroom} onChange={(e) => vm.setShowroom(e.target.value)}>
          <option value="dfc">Preferred showroom — Dubai Festival City</option>
          <option value="auh">Abu Dhabi — Airport Road</option>
          <option value="shj">Sharjah — Al Wahda Street</option>
          <option value="aan">Al Ain — Zayed Bin Sultan Street</option>
        </Select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
        <Button variant="primary" size="lg" onClick={vm.submitLead} style={{ flex: "1 1 180px" }}>
          Send enquiry
        </Button>
        <Button variant="tertiary" size="lg" href="#" iconBefore={iconPhone} style={{ flex: "1 1 140px" }}>
          Call 800 5119
        </Button>
      </div>
      <p style={{ margin: "14px 0 0", fontSize: 12, color: "#757575", lineHeight: 1.44 }}>By submitting you agree to be contacted about this enquiry. No OTP is required unless you place a deposit.</p>
    </div>
  );
}

function PacksDrawer({ vm }) {
  return (
    <div>
      {vm.packDetail.map((p) => (
        <div key={p.id} style={{ border: "1px solid #e0e0e0", padding: 16, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 500 }}>{p.name}</span>
            <span style={{ fontSize: 14, color: "#53565a", whiteSpace: "nowrap" }}>{p.price}</span>
          </div>
          {p.items.map((i, idx) => (
            <div key={idx} style={{ fontSize: 13, color: "#636363", lineHeight: 1.5 }}>{i}</div>
          ))}
          {p.overlap ? <div style={{ marginTop: 10, background: "#f5f5f5", padding: 10, fontSize: 12, color: "#212121", lineHeight: 1.44 }}>{p.overlap}</div> : null}
        </div>
      ))}
    </div>
  );
}

const DRAWER_CONTENT = {
  info: InfoDrawer,
  finance: FinanceDrawer,
  compare: CompareDrawer,
  saved: SavedDrawer,
  stock: StockDrawer,
  spec: SpecDrawer,
  enquire: EnquireDrawer,
  packs: PacksDrawer,
};

export function Drawer({ vm }) {
  if (!vm.drawerOpen) return null;
  const Content = DRAWER_CONTENT[vm.drawer];
  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 85, background: "rgba(0,0,0,.45)" }} onClick={vm.closeDrawer} />
      <aside style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(560px,100%)", zIndex: 86, background: "#ffffff", overflow: "auto", animation: "omSlide .22s ease-out", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "sticky", top: 0, background: "#000000", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "16px 24px", zIndex: 2 }}>
          <span style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase" }}>{vm.drawerTitle}</span>
          <button onClick={vm.closeDrawer} aria-label="Close" style={{ background: "transparent", border: 0, color: "#ffffff", fontFamily: "inherit", fontSize: 22, lineHeight: 1, cursor: "pointer" }}>
            ×
          </button>
        </div>
        <div style={{ padding: 24, flex: 1 }}>{Content ? <Content vm={vm} /> : null}</div>
      </aside>
    </>
  );
}
