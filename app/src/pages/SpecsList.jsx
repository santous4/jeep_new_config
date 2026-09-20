import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { StatRail } from "../components/specs/primitives";
import { Footer } from "../design-system/Footer";
import { MODELS, CATEGORIES, money } from "../data/models";
import wranglerImg from "../assets/jeep/wrangler.png";
import logoJeep from "../assets/jeep/logo-jeep-white.png";
import logoAlFuttaim from "../assets/jeep/logo-alfuttaim-te.png";

const LINEUP_STATS = [
  { label: "Models available", value: MODELS.length, unit: "" },
  { label: "Trail Rated models", value: 2, unit: "" },
  { label: "Max towing", value: 3470, unit: "kg" },
  { label: "Lineup starts from", value: 109900, unit: "AED" },
];

export function SpecsList() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => (filter === "All" ? MODELS : MODELS.filter((m) => m.category === filter)), [filter]);

  return (
    <div className="spx">
      <SpecsTopBar />

      <section className="spx-hero" aria-labelledby="spx-hero-title">
        <div className="spx-hero-inner">
          <div>
            <span className="spx-eyebrow">2026 Lineup · United Arab Emirates</span>
            <h1 className="spx-display" id="spx-hero-title">
              Download vehicle specifications
            </h1>
            <div className="spx-rule" />
            <p className="spx-lede">
              Five Jeep models, every headline figure, and a spec sheet you can take with you. Choose a model to see its
              full specification and download the PDF.
            </p>
          </div>
          <div className="spx-hero-media">
            <img src={wranglerImg} alt="" aria-hidden="true" width="560" height="270" />
          </div>
        </div>
      </section>

      <section className="spx-section">
        <div className="spx-shell">
          <StatRail stats={LINEUP_STATS} />
        </div>
      </section>

      <section className="spx-section spx-band-subtle" aria-labelledby="spx-lineup-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <span className="spx-eyebrow">The lineup</span>
            <h2 className="spx-h2" id="spx-lineup-title">
              Choose your Jeep
            </h2>
            <div className="spx-rule" />
            <p className="spx-sub">Every model links to its full specification and a downloadable PDF sheet.</p>
          </div>

          <div className="spx-tabs" role="group" aria-label="Filter models by body style">
            {CATEGORIES.map((c) => (
              <button key={c} type="button" className="ofr-chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="spx-bento">
            {visible.map((m) => (
              <Link key={m.id} to={`/specs/${m.id}`} className="spx-card" aria-label={`${m.name} specifications`}>
                <div className="spx-card-media">
                  <img src={wranglerImg} alt="" aria-hidden="true" loading="lazy" width="320" height="200" />
                </div>
                {m.badge ? <span className="spx-card-tag">{m.badge}</span> : null}
                <h3 className="spx-card-name">{m.name}</h3>
                <p className="spx-card-tagline">{m.tagline}</p>
                <div className="spx-card-foot">
                  <div>
                    <span className="spx-card-price-label">From</span>
                    <span className="spx-card-price">{money(m.startingPrice)}</span>
                  </div>
                  <span className="spx-card-link">View specs</span>
                </div>
              </Link>
            ))}
          </div>
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
