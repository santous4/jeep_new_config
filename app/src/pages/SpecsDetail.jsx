import { useParams, Link, Navigate } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { Footer } from "../design-system/Footer";
import { Button } from "../design-system/Button";
import { MODELS, byModelId, money } from "../data/models";
import { downloadModelSpecPdf } from "../lib/generateSpecPdf";
import wranglerImg from "../assets/jeep/wrangler.png";
import logoJeep from "../assets/jeep/logo-jeep-white.png";
import logoAlFuttaim from "../assets/jeep/logo-alfuttaim-te.png";

export function SpecsDetail() {
  const { modelId } = useParams();
  const modelExists = MODELS.some((m) => m.id === modelId);
  if (!modelExists) return <Navigate to="/specs" replace />;
  const model = byModelId(modelId);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      <SpecsTopBar backTo="/specs" backLabel="← All models" />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: 40, alignItems: "start" }}>
          <div style={{ background: "#eeeeee", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={wranglerImg} alt={model.name} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div>
            <span style={{ fontSize: 12, color: "#888b8d", textTransform: "uppercase" }}>{model.bodyStyle}</span>
            <h1 style={{ margin: "4px 0 4px", fontSize: 37, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>{model.name}</h1>
            <div style={{ width: "3.2em", height: 3, background: "#ffba00", marginBottom: 16 }} />
            <p style={{ margin: "0 0 20px", fontSize: 15, color: "#636363", lineHeight: 1.5 }}>{model.tagline}</p>

            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24 }}>
              <span style={{ fontSize: 12, color: "#888b8d", textTransform: "uppercase" }}>Starting from</span>
              <span style={{ fontSize: 26, fontWeight: 700 }}>{money(model.startingPrice)}</span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Button variant="primary" size="lg" onClick={() => downloadModelSpecPdf(model)} style={{ flex: "1 1 200px" }}>
                PDF download
              </Button>
              {model.hasConfigurator ? (
                <Button variant="tertiary" size="lg" href="/" style={{ flex: "1 1 200px", border: "1px solid #212121" }}>
                  Configure this Wrangler
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 21, fontWeight: 700, textTransform: "uppercase" }}>Key specifications</h2>
          <div>
            {model.highlights.map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "12px 0", borderBottom: "1px solid #eeeeee" }}>
                <span style={{ fontSize: 14, color: "#636363" }}>{h.k}</span>
                <span style={{ fontSize: 14, fontWeight: 500, textAlign: "right" }}>{h.v}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: "18px 0 0", fontSize: 12, color: "#888b8d", lineHeight: 1.44 }}>
            Figures shown are indicative and may vary by exact configuration. Contact your nearest Al-Futtaim Jeep showroom to confirm specifications and pricing.
          </p>
        </div>
      </div>

      <Footer logos={[logoJeep, logoAlFuttaim]} legal={["Privacy policy", "Terms of use", "Cookie settings"]} copyright="© Al-Futtaim 2026. All rights reserved" />
    </div>
  );
}
