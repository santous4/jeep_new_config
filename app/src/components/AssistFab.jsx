import whatsapp from "../assets/jeep/icons/WhatsApp.png";

export function AssistFab({ vm }) {
  return (
    <div style={{ position: "fixed", right: 16, bottom: 146, zIndex: 65, display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
      {vm.s.assistOpen ? (
        <div style={{ background: "#ffffff", border: "1px solid #e0e0e0", boxShadow: "0 1px 3px rgba(48,49,51,.1)", width: 240, padding: 14, display: "flex", flexDirection: "column", gap: 8, animation: "omRise .2s ease-out" }}>
          <span style={{ fontSize: 12, textTransform: "uppercase", fontWeight: 700, color: "#636363" }}>Need a hand?</span>
          <button onClick={vm.openEnquire} style={{ textAlign: "left", background: "transparent", border: 0, fontFamily: "inherit", fontSize: 14, cursor: "pointer", padding: "6px 0" }}>
            Request a callback
          </button>
          <button onClick={vm.openEnquire} style={{ textAlign: "left", background: "transparent", border: 0, fontFamily: "inherit", fontSize: 14, cursor: "pointer", padding: "6px 0" }}>
            Chat with a specialist
          </button>
          <a href="#" style={{ fontSize: 14, padding: "6px 0" }}>WhatsApp 800 5119</a>
        </div>
      ) : null}
      <button onClick={vm.toggleAssist} aria-label="Assistance" style={{ width: 52, height: 52, borderRadius: 100, border: 0, background: "#ffffff", boxShadow: "0 1px 3px rgba(48,49,51,.1)", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={whatsapp} alt="" style={{ width: 30, height: 30 }} />
      </button>
    </div>
  );
}
