import logoJeep from "../assets/jeep/logo-jeep-white.png";

export function Header({ vm }) {
  return (
    <header style={{ background: "#000000", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "0 24px", height: 64, position: "sticky", top: 0, zIndex: 60 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <img src={logoJeep} alt="Jeep" style={{ height: 22, width: "auto", display: "block" }} />
        <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "normal" }}>Configure &amp; Buy</span>
        <span style={{ color: "rgba(255,255,255,.7)", fontSize: 13 }}>2026 Wrangler 4-Door</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={vm.openSaved} style={{ background: "transparent", border: 0, color: "#ffffff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "8px 10px" }}>
          {vm.savedLabel}
        </button>
        <button onClick={vm.openCompare} style={{ background: "transparent", border: 0, color: "#ffffff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "8px 10px" }}>
          Compare trims
        </button>
        <button onClick={vm.shareBuild} style={{ background: "transparent", border: "1px solid rgba(255,255,255,.35)", color: "#ffffff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "7px 14px" }}>
          {vm.s.shareLabel}
        </button>
        <button onClick={vm.startOver} style={{ background: "transparent", border: 0, color: "rgba(255,255,255,.7)", fontSize: 13, fontFamily: "inherit", cursor: "pointer", padding: "8px 10px" }}>
          Start over
        </button>
      </div>
    </header>
  );
}
