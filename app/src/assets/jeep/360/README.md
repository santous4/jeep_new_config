# 360° exterior frames

Drop numbered frame images here and the configurator picks them up automatically —
no code changes needed. Frames are discovered at build time via `import.meta.glob`
in `src/data/rotate360.js`.

## Folder layout

```
360/
  <colorId>/
    0.jpg
    1.jpg
    2.jpg
    ...
```

`<colorId>` must match one of the `id` values in `src/data/catalogue.js` → `COLORS`:

```
white, black, anvil, earl, sarge, velocity, red, hydro
```

Frame files are named by number only — `1.jpg`, `2.jpg`, … or zero-padded
`01.avif`, `02.avif`, … Either works; they are sorted numerically, not
alphabetically. Supported extensions: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
Any frame count is fine — the rotate slider and drag gesture adapt to however
many frames a color has. 24–36 frames (one full turntable revolution) is a
typical count for a smooth spin.

Frame order defines the spin direction: dragging left advances the sequence, so
capture/order frames such that the car's nose sweeps left as the index rises.

## What is currently here

`black/` holds 36 real turntable frames of a Wrangler Sport S (1000×460 AVIF,
~304 KB total). Every other color still falls back to the single static render
with the synthetic tint, because a frame set is a single fixed paint color —
these shots are opaque with no alpha, so they cannot be re-tinted (you can't
blend a black car into Bright White). Full color coverage needs one folder per
color.

Note the current set is a 2-door Sport S while the configurator is labelled
4-Door, and AVIF needs Safari 16+ / Firefox 93+ (add a `.webp` or `.jpg`
fallback set if you must support older browsers).

## Behaviour

- A color with a populated folder here renders real photographed frames and
  responds to drag / the rotate slider by switching frames.
- A color with no folder (or an empty one) falls back to the existing single
  static image with a synthetic CSS rotation and paint-tint overlay — nothing
  breaks while frames are still being sourced.
- This only applies to the "Exterior" view. Interior and wheel views are
  unaffected.
