// Auto-discovers 360° turntable frames dropped into src/assets/jeep/360/<colorId>/<n>.ext
// See src/assets/jeep/360/README.md for the naming convention. No code change is
// needed to add real frames — this glob picks them up at build time.
const modules = import.meta.glob("../assets/jeep/360/*/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });

function parseFramePath(path) {
  const m = path.match(/360\/([^/]+)\/(\d+)\.[a-zA-Z]+$/);
  return m ? { color: m[1], frame: Number(m[2]) } : null;
}

const byColor = {};
for (const [path, url] of Object.entries(modules)) {
  const parsed = parseFramePath(path);
  if (!parsed) continue;
  (byColor[parsed.color] ||= []).push({ frame: parsed.frame, url });
}
for (const color in byColor) {
  byColor[color].sort((a, b) => a.frame - b.frame);
}

export const ROTATE_360_FRAMES = Object.fromEntries(Object.entries(byColor).map(([color, list]) => [color, list.map((f) => f.url)]));

export function framesFor(colorId) {
  return ROTATE_360_FRAMES[colorId] || [];
}
