export function ConflictModal({ vm }) {
  if (!vm.s.conflict) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#ffffff", maxWidth: 460, width: "100%", padding: 28, animation: "omRise .2s ease-out" }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 21, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>Check this change</h3>
        <p style={{ margin: "0 0 20px", fontSize: 15, color: "#212121", lineHeight: 1.44 }}>{vm.conflictText}</p>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={vm.confirmConflict} style={{ flex: 1, background: "#ffba00", color: "#000000", border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 13, cursor: "pointer" }}>
            Continue
          </button>
          <button onClick={vm.cancelConflict} style={{ flex: 1, background: "#ffffff", border: "1px solid #212121", fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
            Keep as is
          </button>
        </div>
      </div>
    </div>
  );
}

export function ExitIntentModal({ vm }) {
  if (!vm.s.exitIntent) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 88, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#ffffff", maxWidth: 520, width: "100%", padding: 28, animation: "omRise .2s ease-out" }}>
        <h3 style={{ margin: "0 0 10px", fontSize: 21, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>Keep this build</h3>
        <p style={{ margin: "0 0 18px", fontSize: 15, color: "#636363", lineHeight: 1.44 }}>
          We can email you this configuration with the render, itemised price and your finance scenario. No account needed.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input type="email" placeholder="Email address" style={{ flex: "1 1 220px", border: "1px solid #cccccc", borderRadius: 4, padding: "11px 12px", fontFamily: "inherit", fontSize: 14 }} />
          <button onClick={vm.dismissExit} style={{ background: "#ffba00", color: "#000000", border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 700, textTransform: "uppercase", padding: "12px 20px", cursor: "pointer" }}>
            Email my build
          </button>
        </div>
        <button onClick={vm.dismissExit} style={{ marginTop: 14, background: "transparent", border: 0, fontFamily: "inherit", fontSize: 13, color: "#757575", textDecoration: "underline", cursor: "pointer", padding: 0 }}>
          No thanks, keep configuring
        </button>
      </div>
    </div>
  );
}
