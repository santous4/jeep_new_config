import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { ArrowRight, Curtain, DisplayHeading, Reveal, Rule } from "../components/specs/primitives";
import { Footer } from "../design-system/Footer";
import { OFFERS, CATEGORIES, SORTS, filterOffers, headline, urgency } from "../data/offers";
import wranglerImg from "../assets/jeep/wrangler.png";
import logoJeep from "../assets/jeep/logo-jeep-white.png";
import logoAlFuttaim from "../assets/jeep/logo-alfuttaim-te.png";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

function OfferCard({ offer }) {
  const head = headline(offer);
  const urg = urgency(offer);

  // One descriptive accessible name per card. The live page repeats the literal
  // string "Get Offer" for every link, which tells a screen reader user nothing.
  const label = head
    ? `${offer.title} offer — from ${head.value}${head.unit}`
    : `${offer.title} offer — ${offer.perk || "view details"}`;

  return (
    <Link to={offer.href} className={`ofr-card${offer.featured ? " ofr-card-featured" : ""}`} aria-label={label}>
        <div className="ofr-media">
          <div className="ofr-flags">
            {offer.featured ? <span className="ofr-flag ofr-flag-featured">Featured</span> : <span />}
            {urg && urg.level !== "open" ? (
              <span className={`ofr-flag ofr-flag-${urg.level}`}>
                <ClockIcon />
                {urg.text}
              </span>
            ) : null}
          </div>
          <img src={wranglerImg} alt="" aria-hidden="true" loading="lazy" decoding="async" width="320" height="200" />
        </div>

        <div className="ofr-body">
          <span className="ofr-kicker">{offer.vehicle}</span>
          <h3 className="ofr-title">{offer.title}</h3>
          <p className="ofr-blurb">{offer.blurb}</p>

          <div className="ofr-meta">
            {offer.perk ? (
              <span>
                <CheckIcon />
                {offer.perk}
              </span>
            ) : null}
            {urg && urg.level === "open" ? (
              <span>
                <ClockIcon />
                {urg.text}
              </span>
            ) : null}
          </div>

          <div className="ofr-price">
            {head ? (
              <>
                <span className="ofr-price-label">{head.label}</span>
                <span className="ofr-price-value">{head.value}</span>
                <span className="ofr-price-unit">{head.unit}</span>
              </>
            ) : (
              <span className="ofr-price-none">Enquire for pricing</span>
            )}
          </div>

          {offer.price.kind === "monthly" ? (
            <p className="ofr-terms">
              {offer.price.term} · {offer.price.downPct}% down · indicative, subject to credit approval
            </p>
          ) : null}
        </div>

        <div className="ofr-foot">
          <span className="ofr-cta">View offer</span>
          <span className="ofr-go" aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </div>
    </Link>
  );
}

export function Offers() {
  // Filter state lives in the URL, so a filtered view is shareable, bookmarkable
  // and survives the back button — none of which the live page supports.
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";
  const sort = params.get("sort") || "featured";
  const query = params.get("q") || "";

  const setParam = (key, value, fallback) => {
    const next = new URLSearchParams(params);
    if (!value || value === fallback) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => filterOffers(OFFERS, { category, query, sort }), [category, query, sort]);

  const counts = useMemo(() => {
    const map = { all: OFFERS.length };
    OFFERS.forEach((o) => {
      map[o.category] = (map[o.category] || 0) + 1;
    });
    return map;
  }, []);

  const filtered = category !== "all" || query.trim() !== "" || sort !== "featured";

  return (
    <div className="spx">
      <Curtain />
      <SpecsTopBar title="Offers" backTo="/specs" backLabel="Specifications" />

      {/* Deliberately short for a browse page: the job is to get offers above
          the fold, not to fill the viewport with a hero. */}
      <section className="spx-hero" aria-labelledby="ofr-title">
        <div className="spx-hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <Reveal as="span" className="spx-eyebrow" delay={40} immediate>
              Al-Futtaim Jeep · United Arab Emirates
            </Reveal>
            <DisplayHeading id="ofr-title" lines={["Current offers"]} />
            <Rule delay={430} immediate />
            <Reveal as="p" className="spx-lede" delay={520} immediate>
              Every live Jeep offer in one place — finance, pre-owned, servicing and parts. Filter by what you need,
              sort by what matters, and see exactly when each one ends.
            </Reveal>
          </div>
        </div>
      </section>

      <div className="ofr-toolbar">
        <div className="spx-shell ofr-toolbar-inner">
          <div className="ofr-search">
            <SearchIcon />
            <label htmlFor="ofr-q" className="spx-sr-only">
              Search offers
            </label>
            <input
              id="ofr-q"
              type="search"
              value={query}
              placeholder="Search offers, models or services"
              onChange={(e) => setParam("q", e.target.value, "")}
            />
            {query ? (
              <button type="button" className="ofr-search-clear" onClick={() => setParam("q", "", "")} aria-label="Clear search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            ) : null}
          </div>

          <label htmlFor="ofr-sort" className="spx-sr-only">
            Sort offers
          </label>
          <select id="ofr-sort" className="ofr-select" value={sort} onChange={(e) => setParam("sort", e.target.value, "featured")}>
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="spx-shell" style={{ marginTop: 10 }}>
          <div className="ofr-chips" role="group" aria-label="Filter offers by category">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className="ofr-chip"
                aria-pressed={category === c.id}
                onClick={() => setParam("category", c.id, "all")}
              >
                {c.label}
                <span className="ofr-chip-count">{counts[c.id] || 0}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="spx-section" style={{ paddingTop: 8 }} aria-label="Offers">
        <div className="spx-shell">
          <div className="ofr-resultbar">
            <p className="ofr-count" aria-live="polite">
              <strong>{results.length}</strong> {results.length === 1 ? "offer" : "offers"}
              {category !== "all" ? ` in ${CATEGORIES.find((c) => c.id === category)?.label.toLowerCase()}` : ""}
              {query.trim() ? ` matching “${query.trim()}”` : ""}
            </p>
            {filtered ? (
              <button type="button" className="ofr-reset" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
                Clear all filters
              </button>
            ) : null}
          </div>

          <div className="ofr-grid">
            {results.map((o, i) => (
              // Re-keyed on the active filter so a newly filtered set cascades
              // in again instead of snapping into place.
              <Reveal key={`${category}-${sort}-${o.id}`} delay={Math.min(i, 8) * 70}>
                <OfferCard offer={o} />
              </Reveal>
            ))}

            {results.length === 0 ? (
              <div className="ofr-empty">
                <h2>No offers match that</h2>
                <p>
                  Try a different category, or clear the filters to see all {OFFERS.length} live offers. Showroom teams
                  can also quote offers that aren&apos;t listed online.
                </p>
                <button type="button" className="spx-btn spx-btn-primary" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
                  Show all offers
                </button>
              </div>
            ) : null}
          </div>

          <p className="ofr-terms" style={{ marginTop: 28, maxWidth: "80ch" }}>
            All prices in UAE dirhams. Finance figures are indicative, assume the stated term and down payment, and are
            subject to credit approval by Al-Futtaim Finance. Service and accessory prices state whether VAT is
            included. Offers are subject to stock availability and may be withdrawn earlier than the dates shown.
          </p>
        </div>
      </section>

      <Footer
        logos={[logoJeep, logoAlFuttaim]}
        legal={["Privacy policy", "Terms of use", "Cookie settings"]}
        copyright="© Al-Futtaim 2026. All rights reserved"
      />
    </div>
  );
}
