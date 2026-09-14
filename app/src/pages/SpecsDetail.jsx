import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { CinematicScene } from "../components/specs/CinematicScene";
import { Reveal, DisplayHeading, StatRail, Icon, ArrowRight, DownloadIcon } from "../components/specs/primitives";
import { useIsVisible } from "../hooks/useMotion";
import { Footer } from "../design-system/Footer";
import { MODELS, byModelId, money } from "../data/models";
import { downloadModelSpecPdf } from "../lib/generateSpecPdf";
import wranglerImg from "../assets/jeep/wrangler.png";
import logoJeep from "../assets/jeep/logo-jeep-white.png";
import logoAlFuttaim from "../assets/jeep/logo-alfuttaim-te.png";

export function SpecsDetail() {
  const { modelId } = useParams();
  const exists = MODELS.some((m) => m.id === modelId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [modelId]);

  // Sticky bar mirrors the hero CTA once it scrolls out of view.
  const [heroCtaRef, heroCtaVisible] = useIsVisible();

  // The bar is position:fixed, so it never reserves its own space — measure it
  // and pad the page, otherwise it sits on top of the last section.
  const stickyRef = useRef(null);
  const [stickyHeight, setStickyHeight] = useState(0);
  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setStickyHeight(entry.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!exists) return <Navigate to="/specs" replace />;
  const model = byModelId(modelId);
  const others = MODELS.filter((m) => m.id !== model.id);
  const showSticky = !heroCtaVisible;

  return (
    <div className="spx" style={{ paddingBottom: stickyHeight }}>
      <SpecsTopBar backTo="/specs" backLabel="All models" />

      <section className="spx-hero" aria-labelledby="spx-model-title">
        <CinematicScene sceneId={model.scene} />
        <div className="spx-hero-car">
          <img src={wranglerImg} alt={`Jeep ${model.name}`} width="880" height="420" />
        </div>
        <div className="spx-hero-inner">
          <Reveal immediate>
            <span className="spx-eyebrow">{model.bodyStyle}</span>
          </Reveal>
          <DisplayHeading immediate id="spx-model-title" lines={[model.name]} />
          <Reveal immediate delay={200}>
            <p className="spx-lede">{model.tagline}</p>
          </Reveal>
          <Reveal immediate delay={320}>
            <div ref={heroCtaRef} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28, alignItems: "center" }}>
              <button type="button" className="spx-btn spx-btn-primary" onClick={() => downloadModelSpecPdf(model)}>
                <DownloadIcon />
                PDF download
              </button>
              {model.hasConfigurator ? (
                <Link to="/" className="spx-btn spx-btn-ghost">
                  Build yours
                  <ArrowRight />
                </Link>
              ) : null}
              <span style={{ marginLeft: 6, fontSize: 13, color: "var(--spx-muted)" }}>
                From <strong style={{ color: "var(--spx-fg)", fontVariantNumeric: "tabular-nums" }}>{money(model.startingPrice)}</strong>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="spx-section" aria-label="Headline figures">
        <div className="spx-shell">
          <Reveal>
            <StatRail stats={model.stats} />
          </Reveal>
        </div>
      </section>

      <section className="spx-section" style={{ paddingTop: 0 }} aria-labelledby="spx-story-title">
        <div className="spx-shell">
          <Reveal>
            <div className="spx-story">
              <CinematicScene sceneId={model.story.scene} />
              <div className="spx-story-inner">
                <span className="spx-eyebrow">{model.story.kicker}</span>
                <h2 className="spx-h2" id="spx-story-title">
                  {model.story.title}
                </h2>
                <p className="spx-sub" style={{ fontSize: 16 }}>
                  {model.story.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="spx-section" style={{ paddingTop: 0 }} aria-labelledby="spx-features-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <Reveal>
              <span className="spx-eyebrow">What defines it</span>
              <h2 className="spx-h2" id="spx-features-title">
                Built around four ideas
              </h2>
            </Reveal>
          </div>
          <div className="spx-features">
            {model.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <article className="spx-feature">
                  <span className="spx-feature-icon">
                    <Icon name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="spx-section" style={{ paddingTop: 0 }} aria-labelledby="spx-specs-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <Reveal>
              <span className="spx-eyebrow">The detail</span>
              <h2 className="spx-h2" id="spx-specs-title">
                Full specification
              </h2>
            </Reveal>
          </div>
          <dl style={{ margin: 0 }}>
            {model.highlights.map((h, i) => (
              <Reveal key={h.k} delay={Math.min(i, 7) * 50}>
                <div className="spx-spec-row">
                  <dt>{h.k}</dt>
                  <dd>{h.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal>
            <p style={{ margin: "22px 0 0", fontSize: 12, lineHeight: 1.6, color: "var(--spx-muted)", maxWidth: "70ch" }}>
              Figures shown are indicative and may vary by exact configuration. Contact your nearest Al-Futtaim Jeep
              showroom to confirm specifications and pricing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="spx-section" style={{ paddingTop: 0 }} aria-labelledby="spx-more-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <Reveal>
              <span className="spx-eyebrow">Keep looking</span>
              <h2 className="spx-h2" id="spx-more-title">
                Other models
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <div className="spx-rail">
              {others.map((m) => (
                <Link key={m.id} to={`/specs/${m.id}`} className="spx-card" style={{ minHeight: 260 }} aria-label={`${m.name} specifications`}>
                  <CinematicScene sceneId={m.scene} className="spx-card-media" parallax={false} />
                  <span className="spx-card-scrim" aria-hidden="true" />
                  <img className="spx-card-car" src={wranglerImg} alt="" aria-hidden="true" loading="lazy" />
                  <h3 className="spx-card-name" style={{ fontSize: 22 }}>
                    {m.name}
                  </h3>
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
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        logos={[logoJeep, logoAlFuttaim]}
        legal={["Privacy policy", "Terms of use", "Cookie settings"]}
        copyright="© Al-Futtaim 2026. All rights reserved"
      />

      <div ref={stickyRef} className="spx-sticky" data-show={showSticky ? "true" : "false"} aria-hidden={showSticky ? "false" : "true"}>
        <div className="spx-sticky-meta">
          <div className="spx-sticky-name">{model.name}</div>
          <div className="spx-sticky-price">From {money(model.startingPrice)}</div>
        </div>
        <button
          type="button"
          className="spx-btn spx-btn-primary"
          onClick={() => downloadModelSpecPdf(model)}
          tabIndex={showSticky ? 0 : -1}
        >
          <DownloadIcon />
          PDF download
        </button>
      </div>
    </div>
  );
}
