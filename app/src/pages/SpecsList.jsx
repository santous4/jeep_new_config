import { Link } from "react-router-dom";
import { SpecsTopBar } from "../components/SpecsTopBar";
import { Footer } from "../design-system/Footer";
import { MODELS, money } from "../data/models";
import wranglerImg from "../assets/jeep/wrangler.png";
import logoJeep from "../assets/jeep/logo-jeep-white.png";
import logoAlFuttaim from "../assets/jeep/logo-alfuttaim-te.png";

export function SpecsList() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      <SpecsTopBar />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 64px" }}>
        <h1 style={{ margin: "0 0 8px", fontSize: 37, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>Download vehicle specifications</h1>
        <div style={{ width: "3.2em", height: 3, background: "#ffba00", marginBottom: 18 }} />
        <p style={{ margin: "0 0 40px", fontSize: 16, color: "#636363", lineHeight: 1.44, maxWidth: 640 }}>
          Choose a model to see its high-level specifications and download a PDF spec sheet.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {MODELS.map((m) => (
            <Link
              key={m.id}
              to={`/specs/${m.id}`}
              style={{ display: "block", border: "1px solid #e0e0e0", textDecoration: "none", color: "inherit", background: "#ffffff", transition: "box-shadow .2s ease" }}
            >
              <div style={{ background: "#eeeeee", padding: "20px 20px 8px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 160 }}>
                <img src={wranglerImg} alt={m.name} style={{ width: "100%", maxWidth: 220, height: "auto", display: "block" }} />
              </div>
              <div style={{ padding: 20 }}>
                <h2 style={{ margin: "0 0 4px", fontSize: 21, fontWeight: 700, textTransform: "uppercase" }}>{m.name}</h2>
                <p style={{ margin: "0 0 14px", fontSize: 13, color: "#636363", lineHeight: 1.44, minHeight: 36 }}>{m.tagline}</p>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, paddingTop: 12, borderTop: "1px solid #eeeeee" }}>
                  <span style={{ fontSize: 12, color: "#888b8d", textTransform: "uppercase" }}>From</span>
                  <span style={{ fontSize: 16, fontWeight: 700 }}>{money(m.startingPrice)}</span>
                </div>
                <span style={{ display: "block", marginTop: 14, fontSize: 13, fontWeight: 700, textTransform: "uppercase", textDecoration: "underline" }}>View specifications</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer logos={[logoJeep, logoAlFuttaim]} legal={["Privacy policy", "Terms of use", "Cookie settings"]} copyright="© Al-Futtaim 2026. All rights reserved" />
    </div>
  );
}
