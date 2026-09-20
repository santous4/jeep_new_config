import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { StatRail, Icon, DownloadIcon } from "../components/specs/primitives";
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

  const [heroCtaRef, heroCtaVisible] = useIsVisible();

  // The bar is position:fixed, so it reserves no space of its own — measure it
  // and pad the page, or it covers the last section.
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
    <div className="spx" style={{ paddingBottom: showSticky ? stickyHeight : 0 }}>
      <SpecsTopBar backTo="/specs" backLabel="All models" />

      <section className="spx-hero" aria-labelledby="spx-model-title">
        <div className="spx-hero-inner">
          <div>
            <span className="spx-eyebrow">{model.bodyStyle}</span>
            <h1 className="spx-display" id="spx-model-title">
              {model.name}
            </h1>
            <div className="spx-rule" />
            <p className="spx-lede">{model.tagline}</p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)", marginTop: "var(--space-7)" }}>
              <span className="spx-card-price-label">Starting from</span>
              <span style={{ fontSize: "var(--font-size-h4)", fontWeight: "var(--font-weight-bold)", fontVariantNumeric: "tabular-nums" }}>
                {money(model.startingPrice)}
              </span>
            </div>

            <div ref={heroCtaRef} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "var(--space-7)" }}>
              <button type="button" className="spx-btn spx-btn-primary" onClick={() => downloadModelSpecPdf(model)}>
                <DownloadIcon />
                PDF download
              </button>
              {model.hasConfigurator ? (
                <Link to="/" className="spx-btn spx-btn-ghost">
                  Configure &amp; buy
                </Link>
              ) : null}
            </div>
          </div>

          <div className="spx-hero-media">
            <img src={wranglerImg} alt={`Jeep ${model.name}`} width="560" height="270" />
          </div>
        </div>
      </section>

      <section className="spx-section" aria-label="Headline figures">
        <div className="spx-shell">
          <StatRail stats={model.stats} />
        </div>
      </section>

      <section className="spx-section spx-band-subtle" aria-labelledby="spx-story-title">
        <div className="spx-shell">
          <span className="spx-eyebrow">{model.story.kicker}</span>
          <h2 className="spx-h2" id="spx-story-title">
            {model.story.title}
          </h2>
          <div className="spx-rule" />
          <p className="spx-sub">{model.story.body}</p>
        </div>
      </section>

      <section className="spx-section" aria-labelledby="spx-features-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <span className="spx-eyebrow">What defines it</span>
            <h2 className="spx-h2" id="spx-features-title">
              Built around four ideas
            </h2>
            <div className="spx-rule" />
          </div>
          <div className="spx-features">
            {model.features.map((f) => (
              <article className="spx-feature" key={f.title}>
                <span className="spx-feature-icon">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spx-section spx-band-subtle" aria-labelledby="spx-specs-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <span className="spx-eyebrow">The detail</span>
            <h2 className="spx-h2" id="spx-specs-title">
              Full specification
            </h2>
            <div className="spx-rule" />
          </div>
          <dl style={{ margin: 0 }}>
            {model.highlights.map((h) => (
              <div className="spx-spec-row" key={h.k}>
                <dt>{h.k}</dt>
                <dd>{h.v}</dd>
              </div>
            ))}
          </dl>
          <p className="ofr-terms" style={{ maxWidth: "80ch", marginTop: "var(--space-7)" }}>
            Figures shown are indicative and may vary by exact configuration. Contact your nearest Al-Futtaim Jeep
            showroom to confirm specifications and pricing.
          </p>
        </div>
      </section>

      <section className="spx-section" aria-labelledby="spx-more-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <span className="spx-eyebrow">Keep looking</span>
            <h2 className="spx-h2" id="spx-more-title">
              Other models
            </h2>
            <div className="spx-rule" />
          </div>
          <div className="spx-rail">
            {others.map((m) => (
              <Link key={m.id} to={`/specs/${m.id}`} className="spx-card" aria-label={`${m.name} specifications`}>
                <div className="spx-card-media">
                  <img src={wranglerImg} alt="" aria-hidden="true" loading="lazy" width="230" height="145" />
                </div>
                <h3 className="spx-card-name">{m.name}</h3>
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

      <div ref={stickyRef} className="spx-sticky" data-show={showSticky ? "true" : "false"}>
        <div className="spx-sticky-meta">
          <div className="spx-sticky-name">{model.name}</div>
          <div className="spx-sticky-price">From {money(model.startingPrice)}</div>
        </div>
        <button type="button" className="spx-btn spx-btn-primary" onClick={() => downloadModelSpecPdf(model)}>
          <DownloadIcon />
          PDF download
        </button>
      </div>
    </div>
  );
}
