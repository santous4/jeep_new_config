import { useRef } from "react";

const PX_PER_STEP = 8;

function useDragRotate(vm) {
  const drag = useRef({ active: false, startX: 0, startRotation: 0 });

  const onPointerDown = (e) => {
    if (!vm.rotateMax) return;
    drag.current = { active: true, startX: e.clientX, startRotation: vm.rotationIndex };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const steps = Math.round((e.clientX - drag.current.startX) / PX_PER_STEP);
    vm.setRotation(drag.current.startRotation - steps);
  };
  const onPointerUp = (e) => {
    drag.current.active = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      /* already released */
    }
  };
  return { onPointerDown, onPointerMove, onPointerUp };
}

export function Visualizer({ vm }) {
  const dragHandlers = useDragRotate(vm);
  return (
    <section style={{ background: "#eeeeee", alignSelf: "start", position: "sticky", top: 114 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0, background: "#191920", color: "#ffffff", padding: "0 8px" }}>
        {vm.specStrip.map((s) => (
          <div key={s.k} style={{ padding: "10px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 10, textTransform: "uppercase", color: "rgba(255,255,255,.6)" }}>{s.k}</span>
            <span style={{ fontSize: 14, fontWeight: 700 }}>{s.v}</span>
          </div>
        ))}
        <button onClick={vm.openSpec} style={{ marginLeft: "auto", background: "transparent", border: 0, color: "#ffba00", fontFamily: "inherit", fontSize: 12, fontWeight: 700, textTransform: "uppercase", cursor: "pointer", padding: "10px 16px" }}>
          Full spec
        </button>
      </div>

      {/* Real 360 frames are studio shots on white — match the stage to them so
          the frame edge doesn't read as a pasted white box on the grey. */}
      <div style={{ position: "relative", padding: "24px 24px 8px", minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: vm.has360 ? "#ffffff" : "transparent", transition: "background .25s ease" }}>
        <div
          style={{ position: "relative", width: "100%", maxWidth: 760, isolation: "isolate", cursor: vm.rotateMax ? "grab" : "default", touchAction: "pan-y" }}
          onPointerDown={dragHandlers.onPointerDown}
          onPointerMove={dragHandlers.onPointerMove}
          onPointerUp={dragHandlers.onPointerUp}
        >
          <img src={vm.imgSrc} alt="Configured Jeep Wrangler 4-Door" draggable={false} style={vm.carImgStyle} />
          {vm.paintOverlayStyle ? <div style={vm.paintOverlayStyle} /> : null}
        </div>
        {vm.s.rendering ? (
          <div style={{ position: "absolute", inset: 0, background: "#eeeeee", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "70%", height: "52%", background: "#e0e0e0", animation: "omShimmer 1s ease-in-out infinite" }} />
          </div>
        ) : null}
        <div style={{ position: "absolute", left: 24, bottom: 12, fontSize: 11, color: "#757575" }}>
          {vm.has360 ? "Drag the car or use the slider below to spin 360°." : "Colour and wheel renders are indicative. Production build pulls the live render sequence per configuration."}
        </div>
      </div>

      <div className="om-viz-controls" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, padding: "8px 24px 20px" }}>
        {vm.views.map((v) => (
          <button key={v.id} onClick={v.pick} style={{ position: "relative", background: "#ffffff", border: "1px solid #e0e0e0", fontFamily: "inherit", fontSize: 12, textTransform: "uppercase", fontWeight: 700, color: "#636363", padding: "8px 14px", cursor: "pointer" }}>
            {v.label}
            {v.selected ? <span style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 2px #ffba00", pointerEvents: "none" }} /> : null}
          </button>
        ))}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginLeft: "auto", minWidth: 0, flex: "1 1 220px" }}>
          <span style={{ fontSize: 11, textTransform: "uppercase", color: "#757575", whiteSpace: "nowrap" }}>Rotate 360°</span>
          <input type="range" min="0" max={vm.rotateMax} step="1" value={vm.rotationIndex} onChange={(e) => vm.setRotation(e.target.value)} style={{ flex: 1, minWidth: 60, accentColor: "#ffba00" }} />
          <button onClick={vm.toggleZoom} style={{ flexShrink: 0, background: "#ffffff", border: "1px solid #e0e0e0", fontFamily: "inherit", fontSize: 12, textTransform: "uppercase", fontWeight: 700, padding: "8px 12px", cursor: "pointer" }}>
            {vm.zoomLabel}
          </button>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #e0e0e0", background: "#ffffff", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, padding: "14px 24px" }}>
        <span style={{ width: 10, height: 10, borderRadius: 100, background: vm.stock.dot, display: "block", flex: "none" }} />
        <span style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase" }}>{vm.stock.label}</span>
        <span style={{ fontSize: 13, color: "#636363" }}>{vm.stock.detail}</span>
        <button onClick={vm.simulateOutage} style={{ marginLeft: "auto", background: "transparent", border: "1px dashed #cccccc", fontFamily: "inherit", fontSize: 11, textTransform: "uppercase", color: "#888b8d", cursor: "pointer", padding: "6px 10px" }}>
          Demo: stock feed failure
        </button>
        <button onClick={vm.openStock} style={{ background: "transparent", border: 0, fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "#212121", textDecoration: "underline", cursor: "pointer" }}>
          {vm.stock.cta}
        </button>
      </div>
    </section>
  );
}
