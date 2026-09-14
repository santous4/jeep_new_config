// 2026 Jeep model lineup for the UAE — indicative figures grounded in public
// listings, not the dealer feed. Replace with the live catalogue service in
// production. Hero images are placeholders (reusing the Wrangler render)
// until real per-model photography is supplied.

export const MODELS = [
  {
    id: "wrangler",
    name: "Wrangler",
    tagline: "The original 4x4. Open-air freedom with best-in-class off-road capability.",
    bodyStyle: "2-Door / 4-Door SUV",
    startingPrice: 192499,
    seats: 5,
    hasConfigurator: true,
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
    tagline: "The only open-air, off-road pickup truck. Wrangler capability with a bed.",
    bodyStyle: "4-Door Pickup",
    startingPrice: 219900,
    seats: 5,
    hasConfigurator: false,
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
    tagline: "The most awarded SUV ever, refined with luxury and advanced 4x4 systems.",
    bodyStyle: "5-Seat SUV",
    startingPrice: 229900,
    seats: 5,
    hasConfigurator: false,
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
    tagline: "Three rows of Grand Cherokee luxury and capability for the whole family.",
    bodyStyle: "7-Seat SUV",
    startingPrice: 249900,
    seats: 7,
    hasConfigurator: false,
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
    tagline: "A compact SUV with Jeep 4x4 DNA, sized for the city and ready for the trail.",
    bodyStyle: "5-Seat Compact SUV",
    startingPrice: 109900,
    seats: 5,
    hasConfigurator: false,
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

export const money = (n) => "AED " + Math.round(n).toLocaleString("en-AE");
export const byModelId = (id) => MODELS.find((m) => m.id === id) || MODELS[0];
