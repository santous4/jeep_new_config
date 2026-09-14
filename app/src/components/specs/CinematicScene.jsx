import { useMemo } from "react";
import { sceneFor, photoFor } from "../../data/scenes";
import { useParallax, useReducedMotion } from "../../hooks/useMotion";

// Deterministic star field so it doesn't reshuffle on every render.
function starField(count) {
  const stars = [];
  let seed = 9871;
  for (let i = 0; i < count; i++) {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    const x = (seed / 2147483648) * 100;
    seed = (seed * 1103515245 + 12345) % 2147483648;
    const y = (seed / 2147483648) * 62;
    seed = (seed * 1103515245 + 12345) % 2147483648;
    const r = 0.4 + (seed / 2147483648) * 0.9;
    stars.push({ x, y, r });
  }
  return stars;
}

// Lit windows for the city skyline, same deterministic approach.
function windowGrid() {
  const cells = [];
  let seed = 4421;
  for (let x = 12; x < 1200; x += 26) {
    for (let y = 150; y < 400; y += 22) {
      seed = (seed * 1103515245 + 12345) % 2147483648;
      if (seed / 2147483648 > 0.68) cells.push({ x, y });
    }
  }
  return cells;
}

export function CinematicScene({ sceneId, parallax = true, className = "" }) {
  const scene = sceneFor(sceneId);
  const photo = photoFor(sceneId);
  const reduced = useReducedMotion();
  const enabled = parallax && !reduced && !photo;
  const { containerRef, register } = useParallax(enabled);

  const stars = useMemo(() => (scene.stars ? starField(46) : []), [scene.stars]);
  const windows = useMemo(() => (scene.layers.some((l) => l.windows) ? windowGrid() : []), [scene.layers]);

  if (photo) {
    return (
      <div className={`spx-scene ${className}`} ref={containerRef} aria-hidden="true">
        <img className="spx-scene-photo" src={photo} alt="" loading="lazy" decoding="async" />
        <div className="spx-scene-haze" style={{ background: scene.haze }} />
      </div>
    );
  }

  return (
    <div className={`spx-scene ${className}`} ref={containerRef} aria-hidden="true">
      <div className="spx-scene-sky" style={{ background: scene.sky }} />

      {scene.stars ? (
        <svg className="spx-scene-layer" style={{ top: 0, bottom: "auto", height: "62%" }} viewBox="0 0 100 62" preserveAspectRatio="none">
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r * 0.12} fill="#fff" opacity={0.15 + (i % 5) * 0.14} />
          ))}
        </svg>
      ) : null}

      {scene.glow ? (
        <div
          className="spx-scene-glow"
          style={{
            left: scene.glow.x,
            top: scene.glow.y,
            width: scene.glow.size,
            height: scene.glow.size,
            background: `radial-gradient(circle, ${scene.glow.color} 0%, rgba(0,0,0,0) 70%)`,
            transform: "translate(-50%,-50%)",
          }}
        />
      ) : null}

      {scene.layers.map((layer, i) => (
        <svg
          key={i}
          className="spx-scene-layer"
          style={{ height: `${72 + i * 10}%`, opacity: layer.opacity }}
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          ref={enabled ? (node) => register(node, layer.speed) : undefined}
        >
          <path d={layer.d} fill={layer.fill} />
          {layer.windows
            ? windows.map((w, wi) => (
                <rect key={wi} x={w.x} y={w.y} width="5" height="7" fill="#ffd27a" opacity={wi % 3 === 0 ? 0.5 : 0.24} />
              ))
            : null}
        </svg>
      ))}

      <div className="spx-scene-haze" style={{ background: scene.haze }} />

      <svg className="spx-scene-grain">
        <filter id={`spx-grain-${sceneId}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#spx-grain-${sceneId})`} opacity="0.5" />
      </svg>
    </div>
  );
}
