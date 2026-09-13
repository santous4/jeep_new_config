# Jeep Wrangler Configurator

React + Vite implementation of the `Jeep Wrangler Configurator.dc.html` design handoff
(see `../project/` and `../chats/chat1.md` for the source prototype and design brief).

## Run

```
npm install
npm run dev
```

Build: `npm run build`. Preview a build: `npm run preview`.

## Structure

- `src/data/catalogue.js` — trim/colour/wheel/interior/pack/option catalogue and pricing constants,
  ported verbatim from the prototype's logic class. Placeholder data grounded in public 2026 Wrangler
  UAE listings, not the dealer feed — replace with the live catalogue/pricing service.
- `src/state/useConfigurator.js` — all configurator state, derived pricing/finance/stock calculations,
  and dependency-conflict handling, ported from the prototype's `Component` class into a single hook.
- `src/design-system/` — the four Jeep UAE Design System components the prototype actually mounts
  (Button, Input, Select, Footer), ported from the design system bundle at
  `../project/_ds/.../_ds_bundle.js` into real React components. Everything else in the configurator
  (step nav, visualizer, option rows, sticky bar, drawers, modals) is hand-built, matching the
  prototype — the design system has no equivalents for these.
- `src/styles/tokens.css` — the design system's CSS variables (colors, type, spacing, elevation,
  motion), ported verbatim from `../project/_ds/.../tokens/*.css`.
- `src/components/` — presentational components for each region of the UI.

## Known approximations (carried over from the design prototype, listed in its README)

- **Vehicle render**: a single black Rubicon studio cut-out tinted with a CSS filter + masked
  multiply overlay per colour, not a real per-configuration render sequence.
- **Prices and specs**: grounded in public UAE listings, not the live dealer/pricing feed.
- **Availability**: a deterministic rule-of-thumb, not the real stock feed.
- **Finance**: a standard amortization formula with an indicative rate; lease and trade-in are flat
  approximations. Replace with the real finance/lease engine and trade-in valuation API.
- English only (no Arabic/RTL). No real 360° render sequence, pinch-zoom, or swipe-to-rotate.
  "PDF quote" calls `window.print()`. No Emarsys/CRM/Insider integration.

See `../README.md` and `../chats/chat1.md` for the full design brief this was built against.
