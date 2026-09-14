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

Frame numbers must be zero-based, sequential integers named exactly `<n>.jpg`
(`.jpeg`, `.png` and `.webp` also work). Any frame count is fine — the rotate
slider and drag gesture adapt to however many frames a color has. 24–36 frames
(one full turntable revolution) is a typical count for a smooth spin.

## Behaviour

- A color with a populated folder here renders real photographed frames and
  responds to drag / the rotate slider by switching frames.
- A color with no folder (or an empty one) falls back to the existing single
  static image with a synthetic CSS rotation and paint-tint overlay — nothing
  breaks while frames are still being sourced.
- This only applies to the "Exterior" view. Interior and wheel views are
  unaffected.
