# Jeep UAE Design System

The design system of the **Jeep UAE** consumer website, operated by **Al-Futtaim Trading Enterprises** —
the official Jeep dealership for the United Arab Emirates. The site sells new Jeep models, certified
pre-owned Jeeps, finance and leasing products, and owner services (service booking, recalls, warranty).

Everything here was derived from one source: a saved copy of the site's homepage.

## Sources given to me

| Source | Path in this project | Notes |
| --- | --- | --- |
| Saved homepage of www.jeep-dubaiuae.com | `uploads/www.jeep-dubaiuae.com/index.html` | Server-rendered Next.js DOM; all copy and prices come from here |
| Brand override stylesheet | `uploads/.../www.jeep-dubaiuae.com/styles/JEEP_FE_EN.css` | The white-label theme file: every brand colour, the type ramp and CTA behaviour |
| CSS modules | `uploads/.../_next/static/css/*.css` | Per-component styles (Header, CategoryHero, OffersImage, UsedCarsCarousel, Finance, Footer, Input, Dropdown, ProductCard, Accordion…) |
| DAM assets | `uploads/.../dam.alfuttaim.com/**` | Logos, icons, hero banners, model renders |
| Dealer inventory photos | `uploads/.../cdn.photo-motion.com/**` | Real pre-owned stock photography |

No Figma file, brand book, slide template or repository was provided. Nothing in this system was
invented from memory of the Jeep brand; where the capture was silent, this readme says so.

The platform is a white-label Al-Futtaim automotive commerce stack — the CSS still carries Toyota-era
class names (`HeroToyotaBlack--Bold`, `tyt-nav-link`) and a `polestar` variant. Jeep is themed on top
of it by swapping two colours (yellow, black) and the `BrandFont` alias.

---

## Content fundamentals

**Voice: retail, declarative, capability-first.** Copy states what you get and what it costs. There is
no narrator and almost no "we"; the customer is addressed as "you" or "customers" ("Leasing is a
hassle-free program offering **customers** the option to drive their desired vehicle", "**your** Jeep",
"**Your** finances"). Marketing copy about the brand switches to "our" and "Jeep owners".

**Casing carries the hierarchy.** Section headings, model names, tabs, nav and every CTA are
ALL-CAPS: `WAYS TO OWN YOUR NEW CAR`, `FIND QUALITY CERTIFIED PRE-OWNED CARS`, `WHY CHOOSE A JEEP?`,
`CONFIGURE & BUY`, `VIEW MODEL`, `VALUE MY TRADE-IN`, `SHOW MATCHES`, `MODEL ELIGIBILITY`. Body copy
is sentence case. Form labels are Capitalised Words ("Model Name", "Price from", "Price to").
Inventory titles keep the year first: "2024 Grand Cherokee L 3.6L".

**Prices are the loudest content after the model name.** The pattern is `From <AED> 179,999` on one
line and `Monthly from <AED> 2,820` on the next, with an ⓘ tooltip explaining the assumption
("Indicative monthly installment based on 20% deposit, 60 installments and market prevailing interest
rate"). Amounts are always comma-grouped, never abbreviated, never rounded. The UAE dirham is set as a
glyph from a dedicated `DirhamSymbol` webfont, not the letters "AED" — see Caveats.

**Numbers do the persuading.** "125 point check", "Warranty – minimum 12 months/20,000 kms", "up to
4% cashback", "in 30 seconds", "For 80 years", "up to 110 available safety and security features",
"12.3-inch touchscreen". Feature lists are counted, not adjectival.

**Legal and trademark discipline.** `Jeep®`, `Uconnect® 5`, `Go Anywhere. Do Anything.®` always carry
their marks. Finance copy names the mechanism precisely ("A conventional / Islamic finance method…",
"equated monthly instalments"). The footer runs `© Al-Futtaim 2026. All rights reserved`.

**No emoji anywhere.** No exclamation marks except in partner copy ("the card that gives you more!").
No jokes, no puns, no questions except the two headings that use one ("WHY CHOOSE A JEEP?",
"DON'T HAVE AN ACCOUNT YET?"). British/UAE spellings appear alongside American ("instalment" and
"installment", "Kilometers"); the source is inconsistent — match whatever the surrounding page uses
rather than normalising.

Typical strings to imitate: "VIEW MODEL", "CONFIGURE & BUY", "VIEW DETAILS", "COMPARE FINANCE TYPES",
"4 Saved cars in progress", "Register for an Al-Futtaim Jeep Account", "Back to top",
"PHONE (8005119)", "ENQUIRE NOW".

---

## Visual foundations

**Palette: two colours and a grey ladder.** Brand yellow `#ffba00` and black `#000000` do all the
work; white is the page. Yellow appears only on primary CTAs, active underlines, carousel indicators,
step 1, alert bars and the short heading rule — never as a large fill behind body copy. There is no
secondary brand colour and no accent hue: greys (`#191920 · #212121 · #636363 · #757575 · #888b8d ·
#9e9e9e · #cccccc · #e0e0e0 · #eeeeee · #f5f5f5 · #fcfcfc`) plus `#53565a` for card price text carry
every other need. Backgrounds alternate white and `#eeeeee` bands; chrome (header, footer, in-page
menu) is black or `#191920`. Maximum two background colours per page.

**Type: one family, weight and case for hierarchy.** Everything is `BrandFont` — the site's alias for
Roboto — at 300/400/500/700. The ramp is 80 / 48 / 37 / 31 / 26 / 24 / 21 / 18 / 16 / 14 / 12 / 10 px
with tight line-heights on display sizes (1 and 1.25) and 1.38–1.44 on body. Headings are bold and
uppercase; nothing is italic; letter-spacing is always `normal`. Model card titles are the one place
medium (500) is used.

**Layout: Bootstrap 4 grid, 1440px canvas.** Content sits in a 1140px container; the page gutters are
asymmetric (54px left, 38px right on the header). Sections are separated by 50px of vertical padding
(32px on mobile) rather than by rules or cards. Model grids are 3-up, pre-owned carousels 4-up,
promise strips 4-up, finance options 3-up. Breakpoints in the source: 1280, 1200, 1024, 991, 812,
768, 640, 576.

**Corner radii are the giveaway: almost everything is square.** CTAs and section blocks have radius 0.
Inputs are 4px, dropdowns 5px, the (rarely used) product card 10px, small utility buttons a full
100px pill. Nothing else is rounded.

**Cards are not cards.** Model tiles and used-car tiles have no border, no background and no shadow —
they are flat blocks of image + text on the page, separated by grid gaps. The only shadows in the
system are `0 1px 3px rgba(48,49,51,.1)` on the small white pill button and a hairline tile shadow
`.1px .2px 1px .1px #212121`. No inner shadows. No glass, no blur, no transparency effects except
50%/70% white on dark chrome (footer links, in-page menu divider) and a 0.7 opacity on secondary
price text.

**Borders and rules are hairlines with one thick exception.** 1px `#e0e0e0` between form regions,
1px `#f0f0f0` between hero tabs, 1px `#e1dfdd` for the category divider, 1px `rgba(255,255,255,.1)`
in the footer. The exceptions are the 2px yellow active underline on nav/tabs and the 3px yellow rule
under a section heading (short — 3.2em wide, sitting under the first words only).

**Interaction states are colour inversions, not motion.** The primary CTA is yellow with black text
and flips to **solid black with white text** on hover, with `transition: .5s` — icons inside invert
with it. Text links turn yellow on hover, and their icons are recoloured by a CSS `filter` chain
rather than by swapping files. Disabled controls go grey `#888b8d` at 0.5 opacity. There are no
press/active transforms, no scale, no shadow lift. Focus is suppressed on brand CTAs
(`box-shadow: none`), with a `0 0 0 .2rem rgba(255,186,0,.5)` ring available on danger buttons.

**Animation is minimal.** A 0.5s colour transition on CTAs, a 0.16s width transition on a progress
bar, and carousel slides. No entrance animations, no parallax, no bounce, no easing curves beyond the
browser default.

**Imagery: warm, sunlit, real UAE.** Hero banners are pre-composed marketing artwork (headline, price
and both logos are baked into the JPG) shot in daylight with palms, villas and families — warm
tungsten-to-gold grade, no grain, no duotone, no b&w. Model renders are three-quarter-front studio
cut-outs on white, cropped to 200px tall in the grid. Pre-owned stock is unretouched dealer
photography on turntable backgrounds. Nothing is tinted, masked into shapes, or overlaid with
gradients; the only protection device is the baked-in banner artwork itself. No illustrations, no
patterns, no textures, no gradients anywhere in the system.

**Fixed elements.** The header is the only fixed chrome; a floating WhatsApp button sits bottom-right
on every page, and "Back to top" lives in the footer rather than as a floating control.

---

## Iconography

- **Flat, single-colour SVGs, two families.** A *line* family (`icon-person-line`, `icon-pin-line`,
  `icon-heart-line`, `icon-clipboard-line`, `icon-dash`, `icon-info-line`, `icon-phone-line`,
  `icon-menu-2`, `icon-arrow-ios-forward`, `icon-arrow-circle-right-line`, `icon-trash-line`,
  `icon-shopping-bag-line`) for UI, and a *solid/fill* family (`icon-shield-fill`,
  `icon-checkmark-square-2-fill`, `icon-award-fill`, `icon-book-fill`, plus four Font Awesome solid
  glyphs: `chart-pie-solid`, `credit-card-solid`, `redo-alt-solid`, `arrow-circle-right-solid`) for
  marketing feature blocks. The line set is Eva Icons-styled; the solid set mixes Eva and Font
  Awesome. All of them are copied into `assets/icons/` — there is no icon font and no sprite sheet.
- **Sizes:** 24×24 standard (20×20 under 812px), 13px in inventory meta rows, 16px inline after a
  link, 27px for social, 29px for back-to-top, 21×29 for the numbered "why Jeep" markers.
- **Recolouring is done with CSS filters, never by editing the file.** Production ships black glyphs
  and applies `filter: invert(99%) sepia(31%) saturate(4773%) hue-rotate(312deg) brightness(86%)
  contrast(116%)` to make them brand yellow, `brightness(0) invert(1)` for white, and `invert(1)`
  inside a hovered CTA. Those three chains are tokens (`--icon-filter-brand`, `--icon-filter-white`,
  `--icon-filter-black`) and the `Icon` component exposes them as `tone`.
- **Numbered markers** `1.svg`–`4.svg` are used as list bullets in "Why choose a Jeep?".
- **No emoji, ever.** No unicode characters used as icons. The one non-SVG icon is
  `assets/icons/WhatsApp.png`, the floating chat button, kept as a PNG because the brand mark is
  multi-colour.
- **Logos:** `assets/logo-jeep-white.png` (white Jeep wordmark) and `assets/logo-alfuttaim-te.png`
  (Al-Futtaim Trading Enterprises). Both are the real files from the site's DAM. They appear together
  in the footer, separated by a thin white rule.

---

## Index

**Root**
- `styles.css` — the only file consumers link; `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`.
- `thumbnail.html` — homepage tile for this system.
- `SKILL.md` — Agent Skill wrapper.
- `assets/` — `logo-jeep-white.png`, `logo-alfuttaim-te.png`, `icons/` (31 files), `images/`
  (3 hero banners, 5 model renders, 5 pre-owned photos, trade-in, why-jeep).

**Foundations** (`guidelines/`, all shown on the Design System tab)
Colors: Brand core · Neutrals · Text roles · Surfaces · Action states · Process steps.
Type: Display · Headings · Body & lead · Utility & meta · Weights.
Spacing: Scale · Layout rhythm · Radii · Control sizes · Elevation.
Brand: Logo lockup · Icon set · Photography.

**Components** (`components/`)
- `core/` — **Button**, **Icon**, **Badge**
- `forms/` — **Label**, **Input**, **Select**
- `data-display/` — **SectionTitle**, **CategoryHeading**, **ModelCard**, **UsedCarCard**,
  **FeatureItem**, **StepTile**
- `navigation/` — **Header**, **InPageMenu**, **Tabs**, **CarouselIndicators**, **Footer**

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML
showing its states.

**UI kits** (`ui_kits/`)
- `jeep-uae-website/` — homepage and certified pre-owned listing, click-through. See its `README.md`.

### Intentional additions

The captured site is a compiled Next.js build, so its component *inventory* was read from CSS-module
class names (`Buttons`, `Input`, `Dropdown`, `Label`, `Header`, `Footer`, `InPageMenu`,
`CategoryHero`, `OffersImage`, `UsedCarsCarousel`, `Finance`, `SearchUsedCars`, `WhyBrand`,
`MyBrand`, `LoginToBrand`, `SemiLoggedInUser`, `ProductCard`, `Accordion`, `AfgTabs`, `GridList`)
rather than from source files. Two additions are mine:

- **Icon** — a thin wrapper so the CSS-filter recolouring technique is reusable; production applies
  the filters ad hoc.
- **Badge** — production styles a `usedCarsCarousel_reserveditem` flag and a white pill button but has
  no shared badge component; consolidated here because inventory states need one.

Not built, because the capture had no styling or markup for them: Accordion, AfgTabs, GridList,
RecallInfoStrip, RecommendationSection, the mega-menu dropdown, and the configurator's controls.

### Caveats

- **Fonts are substituted.** `BrandFont` / `BrandFontMedium` map to `/assets/fonts/Jeep/roboto-*.woff2`
  in production; those binaries were not in the capture, so `tokens/fonts.css` loads **Roboto from
  Google Fonts** as the fallback. Send the real `.woff2` files and I will swap in local `@font-face`
  rules.
- **The dirham glyph font is missing.** Prices use a `DirhamSymbol` webfont
  (`/assets/fonts/uae-symbol/currency-symbol.woff2`). Components fall back to the string `AED`.
- **Header nav labels** were not in the captured DOM (client-rendered); the kit uses the footer's
  navigation labels instead.
- **Hover states for the secondary (black) button** are not defined in the source. I inverted it to
  yellow-on-black to mirror the primary; confirm or correct.
