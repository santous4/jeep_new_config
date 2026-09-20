import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { Curtain, DisplayHeading, Drift, Reveal, Rule, StatRail } from "../components/specs/primitives";
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
      <Curtain />
      <SpecsTopBar />

      <section className="spx-hero" aria-labelledby="spx-hero-title">
        <div className="spx-hero-inner">
          <div>
            <Reveal as="span" className="spx-eyebrow" delay={40} immediate>
              2026 Lineup · United Arab Emirates
            </Reveal>
            {/* Two short lines, which is what lets the DS's 80px hero size be
                used at all — see .spx-display-xl in specs.css. */}
            <DisplayHeading className="spx-display-xl" id="spx-hero-title" lines={["Every figure.", "One download."]} />
            <Rule delay={560} immediate />
            <Reveal as="p" className="spx-lede" delay={660} immediate>
              Five Jeep models, every headline figure, and a spec sheet you can take with you. Choose a model to see its
              full specification and download the PDF.
            </Reveal>
          </div>
          <Drift className="spx-hero-media" delay={300}>
            <img className="jm-float" src={wranglerImg} alt="" aria-hidden="true" width="560" height="270" />
          </Drift>
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
            <Reveal as="span" className="spx-eyebrow">
              The lineup
            </Reveal>
            <DisplayHeading as="h2" className="spx-h2" id="spx-lineup-title" lines={["Choose your Jeep"]} immediate={false} />
            <Rule delay={340} />
            <Reveal as="p" className="spx-sub" delay={420}>
              Every model links to its full specification and a downloadable PDF sheet.
            </Reveal>
          </div>

          <div className="spx-tabs" role="group" aria-label="Filter models by body style">
            {CATEGORIES.map((c) => (
              <button key={c} type="button" className="ofr-chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="spx-bento">
            {visible.map((m, i) => (
              // Cascade, not a curtain-up: 70ms between tiles reads as one
              // movement rather than five separate ones.
              <Reveal key={m.id} delay={i * 70}>
                <Link to={`/specs/${m.id}`} className="spx-card" aria-label={`${m.name} specifications`}>
                  <div className="spx-card-media">
                    <img src={wranglerImg} alt="" aria-hidden="true" loading="lazy" width="320" height="180" />
                    {m.badge ? <span className="spx-card-tag">{m.badge}</span> : null}
                  </div>
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
              </Reveal>
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
