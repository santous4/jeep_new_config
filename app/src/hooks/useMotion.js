import { useEffect, useRef, useState } from "react";

// Motion hooks for the marketing surfaces (specs, lineup, offers).
//
// The Jeep UAE DS forbids entrance animation. That rule is amended for these
// pages only — see the header of styles/motion.css for what is and isn't
// changed. Every hook here returns the finished state immediately when the
// visitor asks for reduced motion, so those users get the static DS page.

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Observes an element continuously, so callers can react to it leaving the
// viewport again (the specs page mirrors its hero CTA in a sticky bar).
// This drives layout state, not animation.
export function useIsVisible({ threshold = 0 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver !== "function") return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// Fires once, when the element first scrolls into view. `immediate` is for
// above-the-fold content, which the observer's negative rootMargin would
// otherwise leave sitting at opacity 0.
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -10% 0px", immediate = false } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    // A frame's delay in both branches below, so the browser paints the "from"
    // state first and the transition runs instead of being collapsed on mount.
    if (immediate) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver !== "function") {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, immediate, reduced]);

  // Reduced motion resolves during render rather than through an effect, so
  // the page never paints a hidden frame first.
  return [ref, reduced || shown];
}

// Counts a figure up to its value on an ease-out cubic. Held at 0 until
// `active`, so the numbers roll when the stat rail scrolls in rather than
// having already finished off-screen.
export function useCountUp(target, { duration = 1400, delay = 0, active = true } = {}) {
  const [value, setValue] = useState(0);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (!active || reduced) return undefined;
    let raf = 0;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const elapsed = ts - start - delay;
      const p = elapsed <= 0 ? 0 : Math.min(1, elapsed / duration);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay, active, reduced]);

  return reduced ? target : value;
}
