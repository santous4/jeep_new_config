import { useEffect, useRef, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// Adds data-in="true" once the element enters the viewport. Unobserves after
// firing so scrolling back up doesn't re-run the animation.
export function useInView({ threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver !== "function") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

// Like useInView but keeps observing, so callers can react to the element
// leaving the viewport again (sticky bars, scroll-linked chrome).
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

// Translates registered layers against scroll position. One rAF-throttled
// listener drives every layer rather than one listener per layer.
export function useParallax(enabled = true) {
  const containerRef = useRef(null);
  const layersRef = useRef([]);

  const register = (node, speed) => {
    if (!node) return;
    layersRef.current = layersRef.current.filter((l) => l.node !== node);
    layersRef.current.push({ node, speed });
  };

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;
    let settle = 0;

    const apply = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      if (rect.bottom < -200 || rect.top > viewport + 200) return;
      // -1 (below viewport) .. 1 (above viewport)
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      layersRef.current.forEach(({ node, speed }) => {
        node.style.transform = `translate3d(0, ${(progress * speed * 220).toFixed(2)}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
      layersRef.current.forEach(({ node }) => (node.style.willChange = "transform"));
      clearTimeout(settle);
      settle = setTimeout(() => {
        layersRef.current.forEach(({ node }) => (node.style.willChange = "auto"));
      }, 180);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, [enabled]);

  return { containerRef, register };
}

// Counts up to `value` when scrolled into view. Jumps straight to the final
// number when reduced motion is requested, so the data is never withheld.
export function useCountUp(value, { duration = 1400, start = false } = {}) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced || !start ? value : 0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, start, reduced]);

  return display;
}
