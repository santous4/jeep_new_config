import { Link } from "react-router-dom";
import logoJeep from "../assets/jeep/logo-jeep-white.png";

export function Header({ vm }) {
  return (
    <header className="om-header" style={{ background: "#000000", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "0 24px", height: 64, position: "sticky", top: 0, zIndex: 60 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, minWidth: 0, overflow: "hidden", flexShrink: 1 }}>
        <img src={logoJeep} alt="Jeep" style={{ height: 22, width: "auto", display: "block", flexShrink: 0 }} />
        <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "normal", whiteSpace: "nowrap" }}>Configure &amp; Buy</span>
        <span className="om-header-year" style={{ color: "rgba(255,255,255,.7)", fontSize: 13, whiteSpace: "nowrap" }}>2026 Wrangler 4-Door</span>
      </div>
      <div className="om-header-actions" style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0, flexShrink: 1, overflowX: "auto" }}>
        <button onClick={vm.openSaved} style={{ flexShrink: 0, whiteSpace: "nowrap", background: "transparent", border: 0, color: "#ffffff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "8px 10px" }}>
          {vm.savedLabel}
        </button>
        <button onClick={vm.openCompare} style={{ flexShrink: 0, whiteSpace: "nowrap", background: "transparent", border: 0, color: "#ffffff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "8px 10px" }}>
          Compare trims
        </button>
        <button onClick={vm.shareBuild} style={{ flexShrink: 0, whiteSpace: "nowrap", background: "transparent", border: "1px solid rgba(255,255,255,.35)", color: "#ffffff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "7px 14px" }}>
          {vm.s.shareLabel}
        </button>
        <button onClick={vm.startOver} style={{ flexShrink: 0, whiteSpace: "nowrap", background: "transparent", border: 0, color: "rgba(255,255,255,.7)", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "8px 10px" }}>
          Start over
        </button>
        <Link to="/offers" style={{ flexShrink: 0, whiteSpace: "nowrap", color: "#ffba00", fontSize: 13, fontWeight: 700, textDecoration: "none", padding: "8px 10px" }}>
          Offers
        </Link>
        <Link to="/specs" style={{ flexShrink: 0, whiteSpace: "nowrap", color: "#ffba00", fontSize: 13, fontWeight: 700, textDecoration: "none", padding: "8px 10px" }}>
          Download specs
        </Link>
      </div>
    </header>
  );
}
