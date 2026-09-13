export function ResumeBar({ vm }) {
  if (!vm.s.showResume) return null;
  return (
    <div style={{ background: "#ffba00", color: "#000000", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "10px 24px", fontSize: 14 }}>
      <span>Resumed your last build — Wrangler 4-Door, saved 2 days ago. Selections and finance scenario restored.</span>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <button onClick={vm.startOver} style={{ background: "transparent", border: "1px solid #000", color: "#000", fontFamily: "inherit", fontSize: 12, fontWeight: 700, textTransform: "uppercase", padding: "5px 12px", cursor: "pointer" }}>
          Start over
        </button>
        <button onClick={vm.dismissResume} style={{ background: "transparent", border: 0, color: "#000", fontFamily: "inherit", fontSize: 18, lineHeight: 1, cursor: "pointer" }}>
          ×
        </button>
      </div>
    </div>
  );
}

export function StockBar({ vm }) {
  if (!vm.s.stockDown) return null;
  return (
    <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", color: "#636363", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "8px 24px", fontSize: 13 }}>
      <span>Live stock is temporarily unavailable. Your configuration and pricing are unaffected — retrying in the background.</span>
      <button onClick={vm.retryStock} style={{ background: "transparent", border: 0, color: "#212121", fontFamily: "inherit", fontSize: 13, textDecoration: "underline", cursor: "pointer" }}>
        Retry now
      </button>
    </div>
  );
}
