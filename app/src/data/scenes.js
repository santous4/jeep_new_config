// Art-directed environments rendered as layered SVG + gradients. Each layer is a
// separate element so it can parallax independently at its own depth — the reason
// these read as scenes rather than flat backdrops.
//
// Real photography drop-in: put a file at
//   src/assets/jeep/lifestyle/<sceneId>.(jpg|jpeg|png|webp)
// and that scene renders the photo instead, no code change. Same convention as
// the 360 frames in src/assets/jeep/360/.
const photos = import.meta.glob("../assets/jeep/lifestyle/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });

const photoByScene = {};
for (const [path, url] of Object.entries(photos)) {
  const m = path.match(/lifestyle\/([^/]+)\.[a-zA-Z]+$/);
  if (m) photoByScene[m[1]] = url;
}

export function photoFor(sceneId) {
  return photoByScene[sceneId] || null;
}

// Ridge silhouettes drawn in a 1200x400 viewBox, anchored to the bottom edge.
const DUNE_FAR = "M0,236 C150,196 300,258 450,222 C600,186 748,250 900,212 C1048,176 1150,228 1200,212 L1200,400 L0,400 Z";
const DUNE_MID = "M0,288 C180,246 322,300 500,268 C678,236 820,294 1000,262 C1100,244 1160,274 1200,262 L1200,400 L0,400 Z";
const DUNE_NEAR = "M0,338 C200,306 380,356 560,328 C740,300 900,348 1060,322 C1132,310 1180,334 1200,328 L1200,400 L0,400 Z";

const RIDGE_FAR = "M0,252 L118,176 L198,222 L300,132 L402,214 L520,152 L642,230 L760,164 L882,236 L1000,180 L1120,242 L1200,202 L1200,400 L0,400 Z";
const RIDGE_MID = "M0,302 L104,242 L222,292 L342,210 L462,286 L600,232 L722,302 L860,246 L982,300 L1102,252 L1200,296 L1200,400 L0,400 Z";
const RIDGE_NEAR = "M0,348 L140,306 L262,344 L390,292 L520,342 L660,300 L800,350 L940,306 L1070,348 L1200,318 L1200,400 L0,400 Z";

const SKYLINE =
  "M0,400 L0,300 L54,300 L54,244 L96,244 L96,286 L150,286 L150,206 L196,206 L196,168 L236,168 L236,262 L292,262 L292,224 L344,224 L344,300 L392,300 L392,190 L436,190 L436,142 L478,142 L478,246 L534,246 L534,282 L590,282 L590,214 L648,214 L648,160 L690,160 L690,238 L744,238 L744,290 L800,290 L800,196 L848,196 L848,152 L892,152 L892,256 L948,256 L948,228 L1004,228 L1004,296 L1056,296 L1056,218 L1108,218 L1108,266 L1160,266 L1160,300 L1200,300 L1200,400 Z";

const SEA_HORIZON = "M0,300 L1200,300 L1200,400 L0,400 Z";
const CLIFF = "M0,400 L0,318 C90,300 160,268 250,272 C340,276 392,318 470,330 C520,338 560,362 610,372 L610,400 Z";

export const SCENES = {
  dunes: {
    label: "Empty Quarter, golden hour",
    sky: "linear-gradient(180deg,#120a22 0%,#3b1732 28%,#8f3320 54%,#d2662a 74%,#f3a848 90%,#f8c877 100%)",
    glow: { x: "68%", y: "70%", size: "clamp(160px,26vw,380px)", color: "rgba(255,196,110,.85)" },
    haze: "linear-gradient(180deg,rgba(18,10,34,0) 40%,rgba(224,130,60,.16) 68%,rgba(10,10,12,.5) 100%)",
    layers: [
      { d: DUNE_FAR, fill: "#7c3117", opacity: 0.9, speed: 0.06 },
      { d: DUNE_MID, fill: "#3f150d", opacity: 0.95, speed: 0.13 },
      { d: DUNE_NEAR, fill: "#150705", opacity: 1, speed: 0.22 },
    ],
  },
  mountain: {
    label: "Hajar Mountains, late afternoon",
    sky: "linear-gradient(180deg,#0d1424 0%,#23324a 32%,#5a5b63 58%,#9c7d62 80%,#c9a279 100%)",
    glow: { x: "24%", y: "58%", size: "clamp(140px,22vw,320px)", color: "rgba(255,214,160,.6)" },
    haze: "linear-gradient(180deg,rgba(13,20,36,0) 42%,rgba(160,140,120,.18) 70%,rgba(10,10,12,.55) 100%)",
    layers: [
      { d: RIDGE_FAR, fill: "#3a4454", opacity: 0.85, speed: 0.05 },
      { d: RIDGE_MID, fill: "#1e2634", opacity: 0.95, speed: 0.12 },
      { d: RIDGE_NEAR, fill: "#0b0f17", opacity: 1, speed: 0.2 },
    ],
  },
  city: {
    label: "City skyline, night",
    sky: "linear-gradient(180deg,#05060f 0%,#0b1226 38%,#17213f 64%,#2b3356 84%,#3d3f60 100%)",
    glow: { x: "50%", y: "76%", size: "clamp(200px,34vw,460px)", color: "rgba(120,150,255,.45)" },
    haze: "linear-gradient(180deg,rgba(5,6,15,0) 34%,rgba(90,120,220,.14) 66%,rgba(5,5,6,.72) 100%)",
    layers: [
      { d: SKYLINE, fill: "#0a0f1e", opacity: 0.95, speed: 0.1, windows: true },
    ],
  },
  coast: {
    label: "Coastal highway, dusk",
    sky: "linear-gradient(180deg,#1a1236 0%,#3d2450 26%,#7a3a5c 48%,#c05f56 68%,#e8935c 86%,#f2b57a 100%)",
    glow: { x: "78%", y: "62%", size: "clamp(150px,24vw,340px)", color: "rgba(255,170,120,.7)" },
    haze: "linear-gradient(180deg,rgba(26,18,54,0) 40%,rgba(200,110,90,.16) 66%,rgba(8,8,14,.62) 100%)",
    layers: [
      { d: SEA_HORIZON, fill: "#14203c", opacity: 0.92, speed: 0.07 },
      { d: CLIFF, fill: "#0d1020", opacity: 1, speed: 0.18 },
    ],
  },
  camp: {
    label: "Desert camp, blue hour",
    sky: "linear-gradient(180deg,#04060f 0%,#0a1230 34%,#16244d 60%,#2a3560 82%,#3f3f63 100%)",
    glow: { x: "42%", y: "80%", size: "clamp(120px,20vw,280px)", color: "rgba(255,176,92,.7)" },
    haze: "linear-gradient(180deg,rgba(4,6,15,0) 38%,rgba(60,90,180,.12) 68%,rgba(5,5,8,.7) 100%)",
    stars: true,
    layers: [
      { d: DUNE_FAR, fill: "#111c3f", opacity: 0.9, speed: 0.05 },
      { d: DUNE_MID, fill: "#080f24", opacity: 0.95, speed: 0.12 },
      { d: DUNE_NEAR, fill: "#03040a", opacity: 1, speed: 0.2 },
    ],
  },
};

export function sceneFor(id) {
  return SCENES[id] || SCENES.dunes;
}
