import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { CinematicScene } from "../components/specs/CinematicScene";
import { Reveal, DisplayHeading, StatRail, ArrowRight } from "../components/specs/primitives";
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

function spanClass(model, index) {
  if (model.featured && index === 0) return "spx-card-wide";
  if (model.featured) return "spx-card-tall";
  return "spx-card-std";
}

export function SpecsList() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => (filter === "All" ? MODELS : MODELS.filter((m) => m.category === filter)), [filter]);

  return (
    <div className="spx">
      <SpecsTopBar />

      <section className="spx-hero" aria-labelledby="spx-hero-title">
        <CinematicScene sceneId="dunes" />
        <div className="spx-hero-car">
          <img src={wranglerImg} alt="" width="880" height="420" />
        </div>
        <div className="spx-hero-inner">
          <Reveal immediate>
            <span className="spx-eyebrow">2026 Lineup · United Arab Emirates</span>
          </Reveal>
          <DisplayHeading immediate id="spx-hero-title" lines={["Know every", "specification"]} />
          <Reveal immediate delay={260}>
            <p className="spx-lede">
              Five Jeep models, every headline figure, and a spec sheet you can take with you. Pick a model to explore
              its capability in detail and download the PDF.
            </p>
          </Reveal>
        </div>
        <div className="spx-scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
      </section>

      <section className="spx-section">
        <div className="spx-shell">
          <Reveal>
            <StatRail stats={LINEUP_STATS} />
          </Reveal>
        </div>
      </section>

      <section className="spx-section" style={{ paddingTop: 0 }} aria-labelledby="spx-lineup-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <Reveal>
              <span className="spx-eyebrow">The lineup</span>
              <h2 className="spx-h2" id="spx-lineup-title">
                Choose your Jeep
              </h2>
              <p className="spx-sub">
                Every model below links to its full specification and a downloadable PDF sheet.
              </p>
            </Reveal>
          </div>

          <Reveal delay={80} style={{ marginBottom: 28 }}>
            <div className="spx-segment" role="group" aria-label="Filter models by body style">
              {CATEGORIES.map((c) => (
                <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="spx-bento">
            {visible.map((m, i) => (
              <Reveal key={m.id} delay={Math.min(i, 6) * 70} className={`spx-cell ${spanClass(m, i)}`}>
                <Link to={`/specs/${m.id}`} className="spx-card" aria-label={`${m.name} specifications`}>
                  <CinematicScene sceneId={m.scene} className="spx-card-media" parallax={false} />
                  <span className="spx-card-scrim" aria-hidden="true" />
                  <img className="spx-card-car" src={wranglerImg} alt="" aria-hidden="true" loading="lazy" />

                  {m.badge ? <span className="spx-card-tag">{m.badge}</span> : <span className="spx-card-tag">{m.category}</span>}

                  <h3 className="spx-card-name">{m.name}</h3>
                  <p className="spx-card-tagline">{m.tagline}</p>

                  <div className="spx-card-foot">
                    <div>
                      <span className="spx-card-price-label">From</span>
                      <span className="spx-card-price">{money(m.startingPrice)}</span>
                    </div>
                    <span className="spx-card-go" aria-hidden="true">
                      <ArrowRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="spx-sub" role="status">
              No models in this category.
            </p>
          ) : null}
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
