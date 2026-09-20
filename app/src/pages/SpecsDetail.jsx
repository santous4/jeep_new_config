import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { Curtain, DisplayHeading, Drift, Reveal, Rule, StatRail, Icon, DownloadIcon } from "../components/specs/primitives";
import { useIsVisible, useReveal } from "../hooks/useMotion";
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
  const [, ctaShown] = useReveal({ immediate: true });

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
      <Curtain />
      <SpecsTopBar backTo="/specs" backLabel="All models" />

      <section className="spx-hero" aria-labelledby="spx-model-title">
        <div className="spx-hero-inner">
          <div>
            <Reveal as="span" className="spx-eyebrow" delay={40} immediate>
              {model.bodyStyle}
            </Reveal>
            <DisplayHeading id="spx-model-title" lines={[model.name]} />
            <Rule delay={430} immediate />
            <Reveal as="p" className="spx-lede" delay={520} immediate>
              {model.tagline}
            </Reveal>

            <Reveal delay={600} immediate style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)", marginTop: "var(--space-7)" }}>
              <span className="spx-card-price-label">Starting from</span>
              <span style={{ fontSize: "var(--font-size-h4)", fontWeight: "var(--font-weight-bold)", fontVariantNumeric: "tabular-nums" }}>
                {money(model.startingPrice)}
              </span>
            </Reveal>

            {/* This row keeps its own ref: the sticky bar mirrors it, so the
                observer has to stay on the element the visitor actually sees.
                The reveal is applied by class rather than by wrapping it. */}
            <div
              ref={heroCtaRef}
              className="jm-reveal"
              data-shown={ctaShown ? "true" : "false"}
              style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "var(--space-7)", "--jm-delay": "680ms" }}
            >
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

          <Drift className="spx-hero-media" delay={280}>
            <img className="jm-float" src={wranglerImg} alt={`Jeep ${model.name}`} width="560" height="270" />
          </Drift>
        </div>
      </section>

      <section className="spx-section" aria-label="Headline figures">
        <div className="spx-shell">
          <StatRail stats={model.stats} />
        </div>
      </section>

      <section className="spx-section spx-band-subtle" aria-labelledby="spx-story-title">
        <div className="spx-shell">
          <Reveal as="span" className="spx-eyebrow">{model.story.kicker}</Reveal>
          <Reveal as="h2" className="spx-h2" id="spx-story-title" delay={90}>
            {model.story.title}
          </Reveal>
          <Rule delay={260} />
          <Reveal as="p" className="spx-sub" delay={340}>
            {model.story.body}
          </Reveal>
        </div>
      </section>

      <section className="spx-section" aria-labelledby="spx-features-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <Reveal as="span" className="spx-eyebrow">What defines it</Reveal>
            <Reveal as="h2" className="spx-h2" id="spx-features-title" delay={90}>
              Built around four ideas
            </Reveal>
            <Rule delay={260} />
          </div>
          <div className="spx-features">
            {model.features.map((f, i) => (
              <Reveal as="article" className="spx-feature" key={f.title} delay={i * 70}>
                <span className="spx-feature-icon">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="spx-section spx-band-subtle" aria-labelledby="spx-specs-title">
        <div className="spx-shell">
          <div className="spx-section-head">
            <Reveal as="span" className="spx-eyebrow">The detail</Reveal>
            <Reveal as="h2" className="spx-h2" id="spx-specs-title" delay={90}>
              Full specification
            </Reveal>
            <Rule delay={260} />
          </div>
          <dl style={{ margin: 0 }}>
            {model.highlights.map((h, i) => (
              <Reveal className="spx-spec-row" key={h.k} delay={Math.min(i, 8) * 50}>
                <dt>{h.k}</dt>
                <dd>{h.v}</dd>
              </Reveal>
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
            <Reveal as="span" className="spx-eyebrow">Keep looking</Reveal>
            <Reveal as="h2" className="spx-h2" id="spx-more-title" delay={90}>
              Other models
            </Reveal>
            <Rule delay={260} />
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
