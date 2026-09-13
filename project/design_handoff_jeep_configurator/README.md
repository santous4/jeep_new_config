# Handoff: Jeep UAE Car Configurator (2026 Wrangler 4-Door)

## Overview
A full "Configure & Buy" flow for the Jeep UAE consumer site (Al-Futtaim Trading Enterprises),
built against an 11-area product checklist covering entry/state, step architecture, visualizer,
pricing transparency, finance, availability, comparison, in-context information, save/share/export,
lead capture and handoff, and friction/exit prevention.

The prototype configures one model — the 2026 Jeep(R) Wrangler 4-Door — across seven steps:
Trim, Exterior, Wheels, Interior, Packs, Accessories, Summary.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended
look and behaviour, not production code to copy directly. The task is to **recreate this design in
the target codebase's existing environment** (the live site is a Next.js white-label Al-Futtaim
commerce stack) using its established patterns, component library and data layer. If no environment
exists yet, choose the most appropriate framework and implement the design there.

Specifically: the prototype's inline-styled markup is a rendering of the design, not an architecture
recommendation. Real data (trims, options, prices, stock, finance rates) must come from the
platform's services, not the hardcoded arrays in the prototype's logic class.

## Fidelity
**High-fidelity.** Final colours, typography, spacing, states and interactions, all grounded in the
Jeep UAE Design System. Recreate pixel-accurately using the codebase's existing components.

Two deliberate approximations, both of which must be replaced in production:
1. **Vehicle render.** The prototype tints a single black Rubicon studio cut-out with a CSS filter +
   masked multiply overlay. Production must use the real per-configuration render sequence (webp/avif
   via CDN, 36-frame 360, interior views, detail crops).
2. **Prices and specs.** Grounded in public 2026 Wrangler UAE listings, not the dealer feed. Replace
   with the live pricing service.

---

## Screens / Views

The configurator is a single persistent screen with a swappable right-hand panel, plus nine overlays.

### 1. Page shell
- **Purpose:** Hosts every state; the user never navigates away from the configurator.
- **Layout:** Vertical stack — fixed header (64px) > optional alert bars > sticky step nav (sticky
  at top 64px) > two-column main grid > design-system Footer. Shell reserves `padding-bottom: 152px`
  for the fixed summary bar (measured height 130px; it wraps to two rows below ~980px).
- **Main grid:** `grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr))`,
  `align-items: start`. Collapses to a single column below ~800px.

### 2. Header (fixed, 64px, #000000)
- Left: white Jeep wordmark (22px tall), "CONFIGURE & BUY" (14px/700/uppercase, #ffffff),
  "2026 Wrangler 4-Door" (13px, rgba(255,255,255,.7)).
- Right, 8px gap: "N saved builds", "Compare trims", "Share" (1px rgba(255,255,255,.35) border,
  7px 14px padding), "Start over" (rgba(255,255,255,.7)). All 13px, transparent backgrounds.

### 3. Resume bar (conditional, #ffba00 on #000000 text)
- Appears when a build was restored from URL hash or localStorage. 10px 24px padding, 14px copy,
  an outlined "START OVER" button and a dismiss x.

### 4. Stock-outage bar (conditional, #f5f5f5, 1px #e0e0e0 bottom border)
- 13px #636363 copy + underlined "Retry now". Demonstrates checklist item 11 (error states preserve
  configuration). In the prototype it is fired by a labelled demo control and self-clears after 6s.

### 5. Step navigation (sticky, top 64px, #ffffff, 1px #e0e0e0 bottom border)
- Horizontally scrollable, `min-width: 760px`, 7 equal `flex: 1` buttons.
- Each: 20x20 marker + 12px/700/uppercase #636363 label, 8px gap, 14px 8px 12px padding.
- Marker states, rendered **in flow** (never absolutely positioned):
  - upcoming/current: 1px #cccccc border, #636363 numeral
  - completed: solid #000000 fill, #ffba00 checkmark
- Active step: 2px #ffba00 underline pinned to the nav's bottom edge.
- Every step is clickable at any time (non-linear navigation).

### 6. Visualizer column (#eeeeee, `position: sticky; top: 114px`)
- **Spec strip** (#191920): five stacked key/value pairs — Power, 0-100, Drivetrain, Consumption,
  Seats. Key 10px uppercase rgba(255,255,255,.6); value 14px/700 #ffffff. 10px 16px padding each.
  Right-aligned "FULL SPEC" link in #ffba00, 12px/700/uppercase.
- **Stage:** 24px 24px 8px padding, `min-height: 300px`, centred, `overflow: hidden`. Car image
  `max-width: 760px`, wrapped in `isolation: isolate`.
  - Base image filter: `brightness(1.05 + (1 - paintMult) * 1.5) contrast(0.82 + paintMult * 0.3) saturate(0.35)`
  - Paint overlay: absolutely inset div, `background: <paint hex>`, `opacity: .62`,
    `mix-blend-mode: multiply`, `mask-image: url(wrangler.png)`, `mask-size: 100% 100%`
  - Both share `transform: scale(S) translateX(T) rotateY((rotation - 8) * 2.2deg)`,
    `transform-origin: 50% 55%`, `transition: transform .35s ease, filter .35s ease`
  - S = (interior ? 2.6 : 1) x (zoom ? 1.9 : 1) x (wheel view ? 2.4 : 1); T = 22% for wheel view,
    -6% for interior, else 0
- **Skeleton:** on any change, a #eeeeee cover with a #e0e0e0 block pulsing
  `omShimmer 1s ease-in-out infinite` for 320ms. Never a blank frame.
- **Caption:** 11px #757575 — "Colour and wheel renders are indicative..."
- **View controls:** four toggle buttons (Exterior / Interior / Wheel / Detail), #ffffff on
  1px #e0e0e0, 12px/700/uppercase #636363, 8px 14px; selected gets `inset 0 0 0 2px #ffba00`.
  Plus a "Rotate 360" range input (0-35, `accent-color: #ffba00`) and a Zoom in/out toggle.
- **Availability rail** (#ffffff, 1px #e0e0e0 top border, 14px 24px): 10px status dot, 14px/700
  uppercase status, 13px #636363 detail, a dashed demo-outage control, and an underlined
  "SEE MATCHING UNITS" link.
  - Dot colours: in stock #1f7a3d, in transit #ffba00, build-to-order #636363, feed down #888b8d

### 7. Option panel (#ffffff, 1px #e0e0e0 left border, `padding: 28px 76px 40px 28px`)
The 76px right padding is **load-bearing**: it moves the per-row info buttons out of the floating
WhatsApp button's fixed column (measured: info column x805-833, FAB x856-908).
- **Heading:** 26px/700/uppercase, 1.25 line-height, with a 3.2em x 3px #ffba00 rule beneath.
  Option count 12px #888b8d, right-aligned. Hint paragraph 14px #636363, 1.44 line-height.
- **Availability filter:** #f5f5f5 block, 12px 14px, checkbox (`accent-color: #ffba00`) +
  13px label — "Show only combinations available within 8 weeks".
- **Option row** (10px vertical gap): `display: flex; gap: 14px; align-items: center;`
  `padding: 14px; border: 1px solid #e0e0e0; background: #ffffff; position: relative;`
  - Swatch, 48x48, 1px #e0e0e0 border — **only on Exterior, Wheels and Interior**; suppressed via
    `display: none` on Trim, Packs and Accessories, where it would carry no information.
    - Exterior: solid hex, or `linear-gradient(135deg, hex 0%, #ffffff40 45%, hex 100%)` for
      metallic/pearl
    - Wheels: `radial-gradient(circle at 50% 50%, face 0 40%, #1a1a1a 41% 100%)`, `border-radius: 100px`
    - Interior: macro material texture, `background-size: 8px 8px`
  - Name 15px/500 #212121; optional #ffba00 badge, 10px/700/uppercase, 2px 6px ("MOST CHOSEN")
  - Sub 12px #757575, 1.38 line-height; blocked note 12px #53565a
  - Price 14px #53565a, right-aligned, "+AED 2,900" or "Included"
  - Info button 28x28, 1px #e0e0e0, 16px `icon-info-line.svg`; `stopPropagation` so it never
    triggers selection
  - Selected: `box-shadow: inset 0 0 0 2px #ffba00` on a non-interactive absolutely-inset span
- **Footer link:** "COMPARE ALL TRIMS SIDE BY SIDE" (Trim step) or "COMPARE WHAT IS INSIDE EACH PACK"
  (Packs step), 13px/700/uppercase, underlined.

### 8. Summary step (replaces the option panel at step 7)
- Heading "YOUR WRANGLER" + yellow rule; reference code paragraph.
- Spec lines: group label 10px uppercase #888b8d over 15px name, price right-aligned, each row
  11px vertical padding with a 1px #eeeeee bottom border.
- Exit ramps, all design-system Buttons: ENQUIRE NOW (primary), BOOK A TEST DRIVE (secondary),
  RESERVE THIS CAR (tertiary + 1px #212121 border), each `flex: 1 1 160px`.
- Secondary row of four outlined buttons: SAVE BUILD, SHARE, PDF QUOTE, FULL SPEC.
- Inclusions paragraph, 12px #757575.

### 9. Sticky summary bar (fixed bottom, #000000, z-index 70, measured 130px)
- Optional expanded breakdown above it (#191920, `max-height: 46vh`, scrollable): itemised rows
  14px with rgba(255,255,255,.08) separators, then an inclusions note.
- Main row, 12px 24px, `flex-wrap: wrap`, 16px gap:
  - Spec line 12px rgba(255,255,255,.65), ellipsised
  - Headline price 21px/700; secondary price 13px rgba(255,255,255,.7)
  - Delta chip: #ffba00 on #000000, 12px/700, 2px 7px, `animation: omRise .25s ease-out`,
    auto-clears after 2.6s
  - Cash / Finance / Lease segmented control, 1px rgba(255,255,255,.25); active = #ffba00 on #000000
  - "Price breakdown" text button, "PAYMENT OPTIONS" outlined button
  - Primary CTA — design-system Button, size lg: "CONTINUE", or "ENQUIRE NOW" on Summary

### 10. Floating assistance (fixed, right 16px, bottom 146px, z-index 65)
- 52px circular #ffffff button, `box-shadow: 0 1px 3px rgba(48,49,51,.1)`, 30px WhatsApp PNG.
  Bottom-right per the design system's documented fixed elements; 146px clears the summary bar.
- Opens a 240px #ffffff popover with 1px #e0e0e0 border: "Request a callback", "Chat with a
  specialist", "WhatsApp 800 5119".

### 11. Drawer (fixed right, `min(560px, 100%)`, z-index 86, over a rgba(0,0,0,.45) scrim)
- `animation: omSlide .22s ease-out`. Sticky #000000 header, 16px/700/uppercase title + x.
  Body 24px padding. Eight variants:
  - **Option detail** — 180px image band, name 21px/700, one plain-language benefit sentence 16px,
    price row between hairlines, fitment note 13px #757575
  - **Payment options** — Cash/Finance/Lease tabs, #f5f5f5 headline block (31px/700 figure), four
    range sliders (down payment 0-60% step 5, tenure 12-84 step 12, balloon 0-40% step 5, rate
    1.99-6.99% step 0.25), trade-in 2x2 input grid + apply button, apply/eligibility CTAs,
    12px disclaimer
  - **Compare trims** — "Show differences only" checkbox, 1.2fr/1fr/1fr grid, header row #f5f5f5
  - **Saved builds** — 44px swatch, name, sub, price-diff line, "OPEN" link per build
  - **Availability** — status block, matching units (92x70 photo, title, VIN-level diff, location,
    price, ENQUIRE), reserve CTA, refund note
  - **Full specification** — key/value rows, 1px #eeeeee separators
  - **Enquire** — four fields + submit, or the confirmation state
  - **Pack contents** — per-pack card with item list and an overlap warning on #f5f5f5

### 12. Modals (centred, rgba(0,0,0,.55) scrim)
- **Dependency conflict** (z-index 90, max 460px): 21px/700/uppercase "CHECK THIS CHANGE",
  15px explanation naming exactly what is removed, CONTINUE (yellow) / KEEP AS IS (outlined).
- **Exit intent** (z-index 88, max 520px): "KEEP THIS BUILD", email field + "EMAIL MY BUILD",
  plus a "No thanks, keep configuring" text link. Never a discount offer.

---

## Interactions & Behavior

### Navigation
- Any step is reachable at any time from the step nav; downstream selections are preserved unless
  incompatible.
- Primary CTA advances one step; on Summary it opens the enquiry drawer.

### Dependency handling (never a silent grey-out)
Every conflict opens the modal, states the consequence in words, and requires confirmation:
- Trim change that invalidates wheels / interior / packs — "Selecting {trim} removes {list}.
  Everything else in your build is kept."
- Sky One-Touch Power Top vs Roof Rack Cross Rails — mutually exclusive, either direction.
- Xtreme Recon forces 17" beadlock-capable wheels.
- Removing Xtreme Recon removes the Warn Front Winch (needs its steel bumper).
Blocked rows stay visible with an explanatory note ("Available on Rubicon only", "Requires the
Xtreme Recon package") and are non-selectable rather than hidden.

### Pricing
- Total = (base + colour + wheels + interior + packs + accessories) x 1.05 VAT + AED 2,100
  registration and admin.
- Every change flashes a +/- delta chip on the sticky bar for 2.6s.
- Breakdown expands in place, above the bar; never a separate page.

### Finance
- `monthly = (P - B / (1+r)^n) * r / (1 - (1+r)^-n)` where P = total - down payment - trade-in,
  B = balloon amount, r = annual rate / 12, n = tenure in months.
- Lease is modelled as `total * 0.0142` per month (replace with the real lease engine).
- Trade-in applies a flat indicative AED 42,000 to the down payment (replace with the valuation API).
- Monthly figure is visible on the sticky bar from step one; the finance scenario persists into the
  lead payload.

### Availability (deterministic in the prototype; replace with the stock feed)
- Sahara + Bright White or Black + 18" wheels + <=2 add-ons -> **In stock**
- Rubicon or Rubicon X -> **In transit**, 4-6 weeks
- everything else -> **Build to order**, 12-16 weeks
- Feed failure degrades to an informational bar; the configurator and pricing keep working.

### Forms
- UAE mobile validation: `/^(\+?971|0)?5[024568]\d{7}$/` after stripping spaces and hyphens.
  Inline 12px #53565a error, no red.
- No OTP unless a deposit is being placed.
- On success: confirmation state with the reference code, a 4-working-hour SLA, a route back to the
  build, and the SAP C4C payload rendered for inspection.

### Animations (all short, per the design system)
- `omFlash`, `omShimmer` (1s infinite skeleton), `omSlide` (.22s drawer), `omRise` (.2-.25s modal
  and delta chip). Design-system Buttons carry the 0.5s colour inversion. No parallax, no scale.

### Exit prevention
- Desktop exit intent (`mouseout` with `clientY <= 0`) offers save-and-email, suppressed while a
  drawer is open.
- Assistance is always reachable and never auto-opens.

### Responsive
- Two columns collapse to one below ~800px. The visualizer stays sticky; the summary bar wraps to
  two rows and the shell's 152px bottom padding absorbs it. Step nav scrolls horizontally with a
  760px minimum.

---

## State Management

Persisted (localStorage key `jeep-wrangler-config-v1`, and base64-encoded into `location.hash` as
`#build=...` on every change):
`step, trim, color, wheels, interior, packs[], options[], mode, down, tenure, balloon, rate, tradeIn`

Ephemeral: `view, rotation, zoom, rendering, drawer, infoItem, breakdownOpen, availableOnly,
diffOnly, assistOpen, conflict, exitIntent, showResume, stockDown, submitted, phone, phoneError,
shareLabel, delta, saved`

- On mount: URL hash wins over localStorage; either restores and shows the resume bar.
- "Start over" clears storage and the hash and resets to step 1.
- Every mutation goes through one `apply(next)` helper that persists, rewrites the hash, diffs the
  total to fire the delta chip, and triggers the 320ms render skeleton.
- Conflicts are stored as `{text, run}` and executed only on confirmation.

### Data the production build needs
Model/trim catalogue, option catalogue with price deltas and compatibility rules, render sequence
URLs per configuration, live stock by configuration with VIN-level detail, finance products and
rates, trade-in valuation, SAP C4C lead endpoint, Emarsys abandonment trigger.

---

## Design Tokens
All from the Jeep UAE Design System (`_ds/.../tokens/*.css`). Do not introduce new values.

**Brand:** #ffba00 yellow, #000000 black, #ffffff page.
**Greys:** #191920, #212121, #53565a (card price), #636363, #757575, #888b8d, #9e9e9e, #cccccc,
#e0e0e0, #eeeeee, #f5f5f5, #fcfcfc.
**Status (prototype additions, confirm before shipping):** in stock #1f7a3d.
**Type:** BrandFont (Roboto) 300/400/500/700. Ramp 80/48/37/31/26/24/21/18/16/14/12/10px.
Display line-heights 1 and 1.25; body 1.38-1.44. Letter-spacing always normal. Nothing italic.
Headings bold uppercase; 500 reserved for option/model names.
**Spacing:** 50px section rhythm (32px mobile), 24-28px panel padding, 14px row padding, 8-16px gaps.
**Radii:** 0 for CTAs and blocks; 4px inputs; 5px dropdowns; 100px small pills and wheel swatches.
**Shadows:** `0 1px 3px rgba(48,49,51,.1)` on the pill/FAB only.
**Borders:** 1px #e0e0e0 hairlines; 2px #ffba00 active underline; 3px #ffba00 heading rule (3.2em).
**Motion:** 0.5s CTA colour inversion; 0.2-0.35s UI transitions.

---

## Assets
All copied from the bound design system at
`/projects/9a8023e8-1c2e-4e9c-8524-9ed48cabe8c7/assets/`:

| File | Origin | Use |
| --- | --- | --- |
| `assets/wrangler.png` | `images/model-wrangler-4-door.png` | The single studio cut-out used for all views. **Replace with the real render sequence.** |
| `assets/stock-a.jpg` | `images/used-wrangler-2-door-2023.jpg` | Matching-unit thumbnails. Replace with live inventory photography. |
| `assets/logo-jeep-white.png` | DAM | Header and footer |
| `assets/logo-alfuttaim-te.png` | DAM | Footer lockup |
| `assets/icons/WhatsApp.png` | DAM | Floating assistance button |
| `assets/icons/icon-info-line.svg` | Eva line set | Per-option info affordance |
| `assets/icons/icon-phone-line.svg` | Eva line set | Call CTA |
| `assets/icons/icon-arrow-ios-forward.svg`, `icon-heart-line.svg`, `icon-check.svg`, `icon-pin-line.svg`, `icon-clipboard-line.svg` | Eva sets | Available, currently unused |

Icons are recoloured with the design system's CSS filter chains, never by editing the file.

---

## Design-system components used
Mounted from `JeepUAEDesignSystem_9a8023` rather than rebuilt:
- **Button** — primary (bottom-bar CTA, Enquire now, Send enquiry), secondary (Book a test drive),
  tertiary (Reserve this car, Call 800 5119)
- **Input** — all enquiry fields, `bordered`
- **Select** — preferred showroom
- **Footer** — logo lockup, legal links, copyright

Hand-built because the system has no equivalent (its readme explicitly excludes configurator
controls): the step nav, visualizer stage and view controls, option rows and swatches, sticky
summary bar, drawer shell, and the conflict/exit modals. Where the production codebase already has
primitives for these, use those instead.

## Copy rules
ALL-CAPS for headings, tabs, nav and every CTA. Sentence case for body. Capitalised Words for form
labels. Prices always comma-grouped, never abbreviated: "AED 289,900", "Monthly from AED 2,820".
`Jeep(R)` and `Uconnect(R) 5` carry their marks. Footer: "(c) Al-Futtaim 2026. All rights reserved".
No emoji. No exclamation marks.

---

## Files
| Path | What it is |
| --- | --- |
| `Jeep Wrangler Configurator.dc.html` | The prototype. Template markup, then the logic class holding the catalogue, pricing, finance, stock and dependency rules. |
| `assets/` | Images and icons listed above. |
| `config checklist.docx` | The original 11-area product checklist this was built against. |

Open the prototype directly in a browser. Interactions worth exercising before implementing:
switch trim from Rubicon while beadlock wheels are selected (conflict modal), toggle Sky One-Touch
against Roof Rack Cross Rails (bidirectional conflict), open Payment options and drag the sliders,
press the dashed "Demo: stock feed failure" control, and submit the enquiry form with an invalid
then a valid UAE mobile number.

## Known gaps against the checklist
Deliberately out of scope for this prototype, listed so they are not missed:
- Arabic / RTL (EN only was agreed).
- Real 360 sequence, pinch-zoom and swipe-to-rotate on touch; the image-weight budget.
- PDF quote generation (the prototype calls `window.print()`).
- Emarsys abandonment trigger, CRM reference-code retrieval, and the Insider anti-flicker wrapper
  required if personalisation or A/B code injects into the configurator.
