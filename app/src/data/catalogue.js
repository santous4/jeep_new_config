// 2026 Jeep Wrangler 4-Door catalogue — grounded in public UAE listings, not the dealer feed.
// Replace with the live pricing/catalogue service in production.

export const TRIMS = [
  { id: "sports", name: "Sport S 2.0L Turbo", price: 208000, sub: "272 hp · Command-Trac part-time 4x4 · 17\" alloys", power: "272 hp", accel: "6.8 s", drive: "Command-Trac", engine: "2.0L I4 Turbo", wheelsStd: "w17a" },
  { id: "sahara", name: "Sahara 2.0L Turbo", price: 239000, badge: "Most chosen", sub: "272 hp · Selec-Trac full-time 4x4 · body-colour fenders", power: "272 hp", accel: "6.8 s", drive: "Selec-Trac", engine: "2.0L I4 Turbo", wheelsStd: "w18" },
  { id: "willys", name: "Willys 3.6L V6", price: 259900, sub: "285 hp · Command-Trac · rock rails and 32\" mud-terrain tyres", power: "285 hp", accel: "7.6 s", drive: "Command-Trac", engine: "3.6L V6", wheelsStd: "w17a" },
  { id: "rubicon", name: "Rubicon 3.6L V6", price: 289900, sub: "285 hp · Rock-Trac 4:1 · lockers and disconnecting sway bar", power: "285 hp", accel: "7.6 s", drive: "Rock-Trac 4:1", engine: "3.6L V6", wheelsStd: "w17b" },
  { id: "rubiconx", name: "Rubicon X 3.6L V6", price: 329900, sub: "285 hp · steel bumpers, 35\" tyres, full leather", power: "285 hp", accel: "7.7 s", drive: "Rock-Trac 4:1", engine: "3.6L V6", wheelsStd: "w17b" },
];

export const COLORS = [
  { id: "white", name: "Bright White Clear-Coat", finish: "Solid", price: 0, hex: "#f2f2f0", mult: 0.18 },
  { id: "black", name: "Black Clear-Coat", finish: "Solid", price: 0, hex: "#141414", mult: 0.9 },
  { id: "anvil", name: "Anvil Clear-Coat", finish: "Metallic", price: 1750, hex: "#8d9094", mult: 0.55 },
  { id: "earl", name: "Earl Clear-Coat", finish: "Metallic", price: 1750, hex: "#93a8b5", mult: 0.55 },
  { id: "sarge", name: "Sarge Green Clear-Coat", finish: "Solid", price: 2400, hex: "#6d6f52", mult: 0.62 },
  { id: "velocity", name: "High Velocity Clear-Coat", finish: "Solid", price: 2400, hex: "#d8c81f", mult: 0.6 },
  { id: "red", name: "Firecracker Red Clear-Coat", finish: "Solid", price: 2400, hex: "#b1241f", mult: 0.68 },
  { id: "hydro", name: "Hydro Blue Pearl-Coat", finish: "Pearl", price: 3500, hex: "#1f4d80", mult: 0.72 },
];

export const WHEELS = [
  { id: "w17a", name: "17\" Machined Alloy", sub: "17 × 7.5 in · 245/75 all-terrain", price: 0, face: "#b8b8b8" },
  { id: "w17b", name: "17\" Black Painted Alloy", sub: "17 × 7.5 in · 33\" all-terrain", price: 0, face: "#2a2a2a" },
  { id: "w18", name: "18\" Tech Grey Machined", sub: "18 × 7.5 in · 255/70 all-season", price: 2900, face: "#8a8d90" },
  { id: "w20", name: "20\" Polished Black", sub: "20 × 8 in · 275/55 road-biased", price: 5600, face: "#3c3c3c" },
  { id: "wbl", name: "17\" Beadlock-Capable", sub: "17 × 7.5 in · 35\" mud-terrain · Rubicon only", price: 7800, face: "#4a4238", trims: ["rubicon", "rubiconx"] },
];

export const INTERIORS = [
  { id: "cloth", name: "Black Cloth", sub: "Cloth · heated front seats optional", price: 0, hex: "#2e2e30", tex: "repeating-linear-gradient(45deg,#2e2e30 0 3px,#3a3a3d 3px 6px)" },
  { id: "leatherblk", name: "Black Leather-Trimmed", sub: "Nappa-look leather · heated and ventilated", price: 6500, hex: "#1c1c1e", tex: "radial-gradient(circle at 30% 30%,#3a3a3d 0 2px,#1c1c1e 2px)" },
  { id: "saddle", name: "Dark Saddle Leather", sub: "Two-tone with black dash · heated", price: 8200, hex: "#6b4429", tex: "radial-gradient(circle at 30% 30%,#8a5c39 0 2px,#6b4429 2px)" },
  { id: "redx", name: "Red / Black Leather", sub: "Rubicon X exclusive · red accent stitching", price: 11000, hex: "#7a1f1c", tex: "radial-gradient(circle at 30% 30%,#9c2f2a 0 2px,#7a1f1c 2px)", trims: ["rubiconx"] },
];

export const PACKS = [
  { id: "cold", name: "Cold Weather Group", sub: "Heated seats, heated steering wheel, remote start", price: 4200, items: ["Heated front seats", "Heated steering wheel", "Remote start system", "All-weather floor mats included"], overlap: "Includes all-weather floor mats — remove the standalone accessory to avoid paying twice." },
  { id: "safety", name: "Advanced Safety Group", sub: "Adaptive cruise, blind-spot, forward collision warning", price: 5900, items: ["Adaptive cruise control with stop", "Blind-spot and cross-path detection", "Forward collision warning plus", "Parallel and perpendicular park assist"] },
  { id: "sky", name: "Sky One-Touch Power Top", sub: "Full-length powered canvas roof", price: 14500, items: ["Power-retracting canvas roof", "Removable rear quarter windows", "Freedom panel storage bag"], overlap: "Not compatible with roof rack cross rails." },
  { id: "tow", name: "Trailer Tow & HD Electrical", sub: "3.5 t capacity, 240-amp alternator, 7-pin", price: 6300, items: ["Class II receiver hitch", "240-amp alternator", "4- and 7-pin wiring harness", "Trailer sway control"] },
  { id: "xtreme", name: "Xtreme Recon Package", sub: "35\" tyres, beadlock-capable wheels, 1.5\" lift", price: 21000, items: ["35-inch mud-terrain tyres", "17\" beadlock-capable wheels", "1.5-inch factory lift", "4.56 axle ratio", "Full-size matching spare"], trims: ["rubicon", "rubiconx"], overlap: "Forces 17\" beadlock-capable wheels; any other wheel selection is replaced." },
];

export const OPTIONS = [
  { id: "rails", name: "Mopar Rock Rails", sub: "Tubular steel, dealer-fitted", price: 3400, fit: "Dealer installation required, approximately 2 hours." },
  { id: "mats", name: "All-Weather Floor Mats", sub: "Deep-dish rubber, front and rear", price: 1100, fit: "Owner-fit, no installation needed." },
  { id: "rack", name: "Roof Rack Cross Rails", sub: "75 kg dynamic load", price: 2200, fit: "Dealer-fitted. Not compatible with the Sky One-Touch power top." },
  { id: "steps", name: "Mopar Side Steps", sub: "Black powder-coated tubular", price: 2800, fit: "Dealer installation required." },
  { id: "winch", name: "Warn Front Winch 9.5 t", sub: "Requires Xtreme Recon steel bumper", price: 9800, fit: "Dealer installation required. Needs the Xtreme Recon front bumper.", needs: "xtreme" },
];

export const STEPS = [
  { id: "trim", label: "Trim" },
  { id: "color", label: "Exterior" },
  { id: "wheels", label: "Wheels" },
  { id: "interior", label: "Interior" },
  { id: "packs", label: "Packs" },
  { id: "options", label: "Accessories" },
  { id: "summary", label: "Summary" },
];

export const VAT = 0.05;
export const FEES = 2100;
export const KEY = "jeep-wrangler-config-v1";

export const money = (n) => "AED " + Math.round(n).toLocaleString("en-AE");
export const byId = (list, id) => list.find((x) => x.id === id) || list[0];
