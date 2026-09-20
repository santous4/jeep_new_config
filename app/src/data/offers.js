// Offers modelled on the live Al-Futtaim Jeep UAE offers page, restructured into
// one consistent schema. The live page has no shared shape: some cards show a
// monthly price, some a cash price, some a slogan, some nothing at all — which
// is why they can't be scanned, sorted or compared. Every offer here declares
// the same fields, and anything the UI needs is derived rather than hand-typed.
//
// price.kind drives how the headline figure is rendered and sorted:
//   "monthly" — finance offer, amount is AED/month
//   "cash"    — total vehicle price
//   "service" — fixed-price aftersales job
//   "none"    — no figure (lead-gen / info offers)

export const CATEGORIES = [
  { id: "all", label: "All offers" },
  { id: "new", label: "New vehicles" },
  { id: "preowned", label: "Pre-owned" },
  { id: "aftersales", label: "Service & parts" },
  { id: "business", label: "Business" },
  { id: "benefits", label: "Other benefits" },
];

export const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "ending", label: "Ending soonest" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
];

export const OFFERS = [
  {
    id: "72-hour-sale",
    category: "new",
    title: "72 Hour Sale Event",
    vehicle: "Across the Jeep range",
    blurb: "Three days only. Walk in, agree your deal and drive out the same day.",
    price: { kind: "none" },
    perk: "Same-day delivery",
    endsAt: "2026-09-23T20:00:00+04:00",
    featured: true,
    terms: "Subject to stock availability at participating Al-Futtaim Jeep showrooms.",
    href: "/offers/72-hour-sale",
  },
  {
    id: "wrangler",
    category: "new",
    title: "Wrangler",
    vehicle: "2026 Wrangler",
    blurb: "The original 4x4, on a monthly plan that keeps the weekend open.",
    price: { kind: "monthly", amount: 1999, term: "60 months", downPct: 20 },
    perk: "3-year service pack included",
    endsAt: "2026-10-31T20:00:00+04:00",
    featured: true,
    terms: "Indicative. Subject to credit approval by Al-Futtaim Finance. 5% VAT included.",
    href: "/offers/wrangler",
  },
  {
    id: "grand-cherokee",
    category: "new",
    title: "Grand Cherokee",
    vehicle: "2026 Grand Cherokee",
    blurb: "The most awarded SUV ever, with Quadra-Lift air suspension.",
    price: { kind: "monthly", amount: 2899, term: "60 months", downPct: 20 },
    perk: "Free registration & insurance",
    endsAt: "2026-10-31T20:00:00+04:00",
    terms: "Indicative. Subject to credit approval by Al-Futtaim Finance. 5% VAT included.",
    href: "/offers/grand-cherokee",
  },
  {
    id: "commander",
    category: "new",
    title: "Commander",
    vehicle: "All-new Jeep Commander",
    blurb: "Seven seats, three rows and the lowest monthly in the range.",
    price: { kind: "monthly", amount: 1799, term: "60 months", downPct: 20 },
    perk: "Free registration & insurance",
    endsAt: "2026-11-30T20:00:00+04:00",
    terms: "Indicative. Subject to credit approval by Al-Futtaim Finance. 5% VAT included.",
    href: "/offers/commander",
  },
  {
    id: "gc-overland-summit",
    category: "new",
    title: "Grand Cherokee Overland & Summit Reserve",
    vehicle: "Grand Cherokee Overland / Summit Reserve",
    blurb: "Exclusive pricing on the two highest trims while allocation lasts.",
    price: { kind: "none" },
    perk: "Limited allocation",
    endsAt: "2026-09-30T20:00:00+04:00",
    terms: "Limited units. Offer applies to in-stock Overland and Summit Reserve only.",
    href: "/offers/grand-cherokee-overland-summit-reserve",
  },
  {
    id: "wrangler-cpo",
    category: "preowned",
    title: "Certified Pre-Owned Wrangler",
    vehicle: "Wrangler — certified pre-owned",
    blurb: "200-point inspected, with the balance of the factory warranty.",
    price: { kind: "cash", amount: 149900 },
    perk: "12-month warranty",
    endsAt: null,
    terms: "Price excludes registration and insurance. Subject to availability.",
    href: "/offers/wrangler-cpo",
  },
  {
    id: "gc-cpo",
    category: "preowned",
    title: "Certified Pre-Owned Grand Cherokee",
    vehicle: "Grand Cherokee — certified pre-owned",
    blurb: "200-point inspected, reconditioned to Al-Futtaim standard.",
    price: { kind: "cash", amount: 159900 },
    perk: "12-month warranty",
    endsAt: null,
    terms: "Price excludes registration and insurance. Subject to availability.",
    href: "/offers/grand-cherokee-cpo",
  },
  {
    id: "we-want-your-jeep",
    category: "preowned",
    title: "We want your Jeep",
    vehicle: "Any make, any model",
    blurb: "Free valuation in 30 minutes, and we settle any outstanding finance.",
    price: { kind: "none" },
    perk: "Free valuation",
    endsAt: null,
    terms: "Valuation is indicative and subject to physical inspection.",
    href: "/offers/we-want-your-jeep",
  },
  {
    id: "summer-care",
    category: "aftersales",
    title: "Summer-proof your Jeep",
    vehicle: "All Jeep models",
    blurb: "Air-con, coolant, battery and brake check before the heat peaks.",
    price: { kind: "service", amount: 699, vatIncluded: true },
    perk: "Free health check",
    endsAt: "2026-09-30T20:00:00+04:00",
    terms: "Price includes 5% VAT. Parts extra if replacement is required.",
    href: "/offers/summer-campaign",
  },
  {
    id: "battery",
    category: "aftersales",
    title: "MOPAR battery offer",
    vehicle: "All Jeep models",
    blurb: "UAE heat kills batteries early. Free test, replace only if needed.",
    price: { kind: "service", amount: 449, vatIncluded: true },
    perk: "Free battery test",
    endsAt: "2026-10-15T20:00:00+04:00",
    terms: "Price includes 5% VAT and fitting. Battery model varies by vehicle.",
    href: "/offers/mopar-battery-offer",
  },
  {
    id: "bilstein-lift",
    category: "aftersales",
    title: "Bilstein 2\" lift kit",
    vehicle: "Wrangler & Gladiator",
    blurb: "Factory-backed suspension lift, fitted and warranty-safe.",
    price: { kind: "service", amount: 10499, vatIncluded: false },
    perk: "Fitting included",
    endsAt: null,
    terms: "Price excludes 5% VAT. Dealer fitting required to preserve warranty.",
    href: "/offers/accessories-campaign-bilstein",
  },
  {
    id: "winch-kit",
    category: "aftersales",
    title: "Winch & mounting kit",
    vehicle: "Wrangler & Gladiator",
    blurb: "For the pull, the climb and the way out.",
    price: { kind: "service", amount: 11608, vatIncluded: false },
    perk: "Fitting included",
    endsAt: null,
    terms: "Price excludes 5% VAT. Requires compatible front bumper.",
    href: "/offers/accessories-winch-mounting-kit",
  },
  {
    id: "beadlock",
    category: "aftersales",
    title: "MOPAR beadlock-capable wheels",
    vehicle: "Wrangler Rubicon",
    blurb: "Wheel and ring kit for genuine low-pressure dune running.",
    price: { kind: "service", amount: 20131, vatIncluded: false },
    perk: "Set of five",
    endsAt: null,
    terms: "Price excludes 5% VAT. Tyres sold separately.",
    href: "/offers/accessories-beadlock-wheels",
  },
  {
    id: "express-lane",
    category: "aftersales",
    title: "MOPAR Express Lane",
    vehicle: "All Jeep models",
    blurb: "Road-ready in 59 minutes, no appointment needed.",
    price: { kind: "none" },
    perk: "No appointment",
    endsAt: null,
    terms: "59-minute service covers standard items only. Walk-in, first come first served.",
    href: "/offers/express-lane-mopar",
  },
  {
    id: "smart-care",
    category: "aftersales",
    title: "Smart Care Plan",
    vehicle: "All Jeep models",
    blurb: "Prepay servicing at today's prices and fix your running costs.",
    price: { kind: "none" },
    perk: "Transfers on resale",
    endsAt: null,
    terms: "Plan transfers to the next owner and is refundable pro-rata.",
    href: "/offers/smart-care-plan",
  },
  {
    id: "business",
    category: "business",
    title: "Jeep for business",
    vehicle: "Fleet from 3 vehicles",
    blurb: "Fleet pricing, priority servicing and a dedicated account manager.",
    price: { kind: "none" },
    perk: "Dedicated manager",
    endsAt: null,
    terms: "Fleet terms require a valid UAE trade licence. Minimum three vehicles.",
    href: "/offers/business-solutions",
  },
  {
    id: "fab-card",
    category: "benefits",
    title: "Blue FAB Credit Card",
    vehicle: "Al-Futtaim customers",
    blurb: "Earn rewards across Al-Futtaim brands, including Jeep servicing.",
    price: { kind: "none" },
    perk: "Rewards on servicing",
    endsAt: null,
    terms: "Issued by First Abu Dhabi Bank. Terms and eligibility apply.",
    href: "/offers/blue-fab-credit-card",
  },
];

export const money = (n) => "AED " + Math.round(n).toLocaleString("en-AE");

// A headline figure every card can render the same way, whatever the offer type.
export function headline(offer) {
  const p = offer.price;
  if (p.kind === "monthly") return { value: money(p.amount), unit: "/month", label: "From" };
  if (p.kind === "cash") return { value: money(p.amount), unit: "", label: "From" };
  if (p.kind === "service") return { value: money(p.amount), unit: p.vatIncluded ? " incl. VAT" : " + VAT", label: "From" };
  return null;
}

// Sort key that keeps the four price kinds comparable without pretending a
// 1,999/month finance deal and a 149,900 cash price are the same number.
export function sortAmount(offer) {
  const p = offer.price;
  if (p.kind === "none") return Number.POSITIVE_INFINITY;
  if (p.kind === "monthly") return p.amount * 60;
  return p.amount;
}

export function daysLeft(offer, now = Date.now()) {
  if (!offer.endsAt) return null;
  const ms = new Date(offer.endsAt).getTime() - now;
  if (ms <= 0) return 0;
  return Math.ceil(ms / 86400000);
}

export function urgency(offer, now = Date.now()) {
  const d = daysLeft(offer, now);
  if (d === null) return null;
  if (d === 0) return { level: "gone", text: "Offer ended" };
  if (d <= 3) return { level: "critical", text: d === 1 ? "Ends today" : `${d} days left` };
  if (d <= 14) return { level: "soon", text: `${d} days left` };
  return { level: "open", text: `Until ${new Date(offer.endsAt).toLocaleDateString("en-AE", { day: "numeric", month: "short" })}` };
}

export function filterOffers(offers, { category = "all", query = "", sort = "featured" } = {}, now = Date.now()) {
  const q = query.trim().toLowerCase();
  let out = offers.filter((o) => {
    if (category !== "all" && o.category !== category) return false;
    if (!q) return true;
    return [o.title, o.vehicle, o.blurb, o.perk].filter(Boolean).join(" ").toLowerCase().includes(q);
  });

  if (sort === "price-asc") out = [...out].sort((a, b) => sortAmount(a) - sortAmount(b));
  else if (sort === "price-desc") out = [...out].sort((a, b) => sortAmount(b) - sortAmount(a));
  else if (sort === "ending") {
    out = [...out].sort((a, b) => {
      const da = daysLeft(a, now), db = daysLeft(b, now);
      if (da === null && db === null) return 0;
      if (da === null) return 1;
      if (db === null) return -1;
      return da - db;
    });
  } else {
    out = [...out].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }
  return out;
}
