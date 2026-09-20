// 2026 Jeep model lineup for the UAE — indicative figures grounded in public
// listings, not the dealer feed. Replace with the live catalogue service in
// production.
//
// `stats` drive the headline figures.
// `highlights` drives the spec table and PDF.

export const MODELS = [
  {
    id: "wrangler",
    name: "Wrangler",
    category: "SUV",
    tagline: "The original 4x4. Open-air freedom with best-in-class off-road capability.",
    bodyStyle: "2-Door / 4-Door SUV",
    startingPrice: 192499,
    seats: 5,
    hasConfigurator: true,
    featured: true,
    badge: "Configurable",
    stats: [
      { label: "Max power", value: 285, unit: "hp" },
      { label: "0–100 km/h", value: 6.8, unit: "s", decimals: 1 },
      { label: "Ground clearance", value: 312, unit: "mm" },
      { label: "Wading depth", value: 864, unit: "mm" },
    ],
    story: {
      kicker: "Built for the Empty Quarter",
      title: "Where the road ends, it begins",
      body: "Rock-Trac 4:1 low range, electronic front and rear lockers and a disconnecting sway bar let the Wrangler crawl terrain that stops everything else. Drop the doors, fold the windscreen and the desert stops being scenery.",
    },
    features: [
      { icon: "terrain", title: "Trail Rated", body: "Certified for traction, articulation, ground clearance, manoeuvrability and water fording." },
      { icon: "roof", title: "Open-air freedom", body: "Removable hard top, freedom panels, or the Sky One-Touch power roof that retracts at a button." },
      { icon: "drivetrain", title: "Three 4x4 systems", body: "Command-Trac, Selec-Trac full-time and Rock-Trac with a 4:1 crawl ratio on Rubicon." },
      { icon: "screen", title: "Uconnect 5", body: "12.3-inch touchscreen with off-road pages showing pitch, roll and driveline status live." },
    ],
    highlights: [
      { k: "Engine range", v: "2.0L I4 Turbo · 3.6L V6" },
      { k: "Power range", v: "272–285 hp" },
      { k: "Drivetrain", v: "Command-Trac, Selec-Trac or Rock-Trac 4x4" },
      { k: "Seats", v: "5" },
      { k: "Ground clearance", v: "Up to 312 mm (Rubicon)" },
      { k: "Towing capacity", v: "1,500 kg" },
      { k: "Roof", v: "Removable hard top or Sky One-Touch power soft top" },
    ],
  },
  {
    id: "gladiator",
    name: "Gladiator",
    category: "Pickup",
    tagline: "The only open-air, off-road pickup truck. Wrangler capability with a bed.",
    bodyStyle: "4-Door Pickup",
    startingPrice: 219900,
    seats: 5,
    hasConfigurator: false,
    stats: [
      { label: "Max power", value: 285, unit: "hp" },
      { label: "Towing", value: 3470, unit: "kg" },
      { label: "Payload", value: 725, unit: "kg" },
      { label: "Bed length", value: 1.53, unit: "m", decimals: 2 },
    ],
    story: {
      kicker: "Work and weekend",
      title: "A bed that changes the maths",
      body: "A 1.53-metre cargo bed with a three-position tailgate and 3,470 kg of towing turns a weekend truck into a working one — without giving up the removable roof, doors or fold-down windscreen.",
    },
    features: [
      { icon: "cargo", title: "Five-foot bed", body: "Spray-in liner, 115V outlet and a damped three-position tailgate for long or tall loads." },
      { icon: "tow", title: "3,470 kg towing", body: "Class IV receiver, trailer sway control and an integrated brake controller." },
      { icon: "terrain", title: "Trail Rated", body: "Rubicon spec adds 32-inch mud-terrains, lockers and a disconnecting sway bar." },
      { icon: "roof", title: "Open-air pickup", body: "The only pickup on sale with a removable roof, removable doors and a folding windscreen." },
    ],
    highlights: [
      { k: "Engine", v: "3.6L V6 Pentastar" },
      { k: "Power", v: "285 hp" },
      { k: "Drivetrain", v: "Command-Trac or Rock-Trac 4x4" },
      { k: "Seats", v: "5" },
      { k: "Payload", v: "725 kg" },
      { k: "Towing capacity", v: "3,470 kg (2WD) / 2,721 kg (4WD)" },
      { k: "Bed length", v: "1.53 m" },
    ],
  },
  {
    id: "grand-cherokee",
    name: "Grand Cherokee",
    category: "SUV",
    tagline: "The most awarded SUV ever, refined with luxury and advanced 4x4 systems.",
    bodyStyle: "5-Seat SUV",
    startingPrice: 229900,
    seats: 5,
    hasConfigurator: false,
    featured: true,
    badge: "4xe available",
    stats: [
      { label: "Max power", value: 375, unit: "hp" },
      { label: "Towing", value: 2812, unit: "kg" },
      { label: "Ground clearance", value: 274, unit: "mm" },
      { label: "Drive modes", value: 5, unit: "" },
    ],
    story: {
      kicker: "Refinement, unrestricted",
      title: "Quiet enough for the city. Capable far past it.",
      body: "Quadra-Lift air suspension drops for the highway and lifts 274 mm for the dunes. Active noise cancellation and acoustic glass keep the cabin still while Quadra-Drive II shuffles torque to whichever wheel still has grip.",
    },
    features: [
      { icon: "bolt", title: "4xe plug-in hybrid", body: "375 hp combined with silent electric-only running for short urban trips." },
      { icon: "drivetrain", title: "Quadra-Drive II", body: "Electronic limited-slip rear differential sends torque to the wheel with traction." },
      { icon: "shield", title: "Advanced safety", body: "Adaptive cruise with stop-and-go, blind-spot monitoring and night vision." },
      { icon: "screen", title: "Dual displays", body: "10.1-inch Uconnect 5 plus a dedicated 10.25-inch passenger screen." },
    ],
    highlights: [
      { k: "Engine range", v: "2.0L I4 Turbo · 3.6L V6 · 4xe Plug-in Hybrid" },
      { k: "Power range", v: "293–375 hp" },
      { k: "Drivetrain", v: "Quadra-Trac II or Quadra-Drive II 4x4" },
      { k: "Seats", v: "5" },
      { k: "Ground clearance", v: "Up to 274 mm (air suspension)" },
      { k: "Towing capacity", v: "2,812 kg" },
      { k: "Infotainment", v: "10.1-inch Uconnect 5 with 10.25-inch passenger display" },
    ],
  },
  {
    id: "grand-cherokee-l",
    name: "Grand Cherokee L",
    category: "SUV",
    tagline: "Three rows of Grand Cherokee luxury and capability for the whole family.",
    bodyStyle: "7-Seat SUV",
    startingPrice: 249900,
    seats: 7,
    hasConfigurator: false,
    stats: [
      { label: "Max power", value: 357, unit: "hp" },
      { label: "Seats", value: 7, unit: "" },
      { label: "Max cargo", value: 2391, unit: "L" },
      { label: "Wheelbase", value: 3091, unit: "mm" },
    ],
    story: {
      kicker: "Seven up",
      title: "A third row nobody argues about",
      body: "A 3,091 mm wheelbase buys real space in row three and still leaves 487 litres behind it. Tri-pane panoramic roof overhead, 2,812 kg on the hitch behind.",
    },
    features: [
      { icon: "seats", title: "Three usable rows", body: "Second-row captain's chairs available, with tilt-and-slide access to row three." },
      { icon: "cargo", title: "2,391 L maximum", body: "487 L behind the third row — enough for the airport run with seven aboard." },
      { icon: "roof", title: "Tri-pane roof", body: "Panoramic glass over all three rows with a powered front panel." },
      { icon: "tow", title: "2,812 kg towing", body: "Selec-Terrain traction management with a dedicated tow mode." },
    ],
    highlights: [
      { k: "Engine range", v: "3.6L V6 · 5.7L V8" },
      { k: "Power range", v: "293–357 hp" },
      { k: "Drivetrain", v: "Quadra-Trac II or Quadra-Drive II 4x4" },
      { k: "Seats", v: "7 (three rows)" },
      { k: "Cargo capacity", v: "487 L behind third row · 2,391 L max" },
      { k: "Towing capacity", v: "2,812 kg" },
      { k: "Wheelbase", v: "3,091 mm" },
    ],
  },
  {
    id: "compass",
    name: "Compass",
    category: "SUV",
    tagline: "A compact SUV with Jeep 4x4 DNA, sized for the city and ready for the trail.",
    bodyStyle: "5-Seat Compact SUV",
    startingPrice: 109900,
    seats: 5,
    hasConfigurator: false,
    stats: [
      { label: "Max power", value: 177, unit: "hp" },
      { label: "Ground clearance", value: 199, unit: "mm" },
      { label: "Max cargo", value: 1251, unit: "L" },
      { label: "Seats", value: 5, unit: "" },
    ],
    story: {
      kicker: "City sized",
      title: "Small footprint, same badge",
      body: "Jeep Active Drive keeps the 4x4 promise in a body that still fits a mall car park. 199 mm of clearance and Selec-Terrain mean the weekend plan doesn't have to end at the tarmac.",
    },
    features: [
      { icon: "drivetrain", title: "Jeep Active Drive", body: "On-demand 4x4 with Selec-Terrain modes for sand, mud and snow." },
      { icon: "engine", title: "1.3L turbo", body: "177 hp with a six-speed automatic tuned for stop-start city running." },
      { icon: "cargo", title: "1,251 L folded", body: "438 L with the seats up, expanding to 1,251 L with them down." },
      { icon: "screen", title: "Uconnect 5", body: "10.1-inch touchscreen with wireless Apple CarPlay and Android Auto." },
    ],
    highlights: [
      { k: "Engine", v: "1.3L I4 Turbo" },
      { k: "Power", v: "177 hp" },
      { k: "Drivetrain", v: "Front-wheel drive or Jeep Active Drive 4x4" },
      { k: "Seats", v: "5" },
      { k: "Cargo capacity", v: "438 L · 1,251 L seats folded" },
      { k: "Ground clearance", v: "199 mm" },
      { k: "Infotainment", v: "10.1-inch Uconnect 5" },
    ],
  },
];

export const CATEGORIES = ["All", "SUV", "Pickup"];

export const money = (n) => "AED " + Math.round(n).toLocaleString("en-AE");
export const byModelId = (id) => MODELS.find((m) => m.id === id) || MODELS[0];
