export function StepNav({ vm }) {
  return (
    <nav style={{ background: "#ffffff", borderBottom: "1px solid #e0e0e0", position: "sticky", top: 64, zIndex: 50, overflowX: "auto" }}>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 760, padding: "0 16px" }}>
        {vm.steps.map((step) => (
          <button
            key={step.id}
            onClick={step.go}
            style={{ position: "relative", flex: "1 1 0", background: "transparent", border: 0, borderBottom: "2px solid transparent", fontFamily: "inherit", cursor: "pointer", padding: "14px 8px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap" }}
          >
            {step.done ? (
              <span style={{ width: 20, height: 20, flex: "none", background: "#000000", color: "#ffba00", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>
            ) : (
              <span style={{ width: 20, height: 20, flex: "none", border: "1px solid #cccccc", color: "#636363", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{step.num}</span>
            )}
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#636363" }}>{step.label}</span>
            {step.active ? <span style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: 2, background: "#ffba00" }} /> : null}
          </button>
        ))}
      </div>
    </nav>
  );
}
