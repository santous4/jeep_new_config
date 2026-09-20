import { useEffect, useRef, useState } from "react";

// Observes an element continuously, so callers can react to it leaving the
// viewport again (the specs page mirrors its hero CTA in a sticky bar).
// This drives layout state, not animation — the Jeep UAE DS keeps motion to
// colour transitions only.
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
