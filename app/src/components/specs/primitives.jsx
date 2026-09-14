import { useEffect, useState } from "react";
import { useInView, useCountUp } from "../../hooks/useMotion";

// Fires on mount instead of on scroll. Hero content is above the fold by
// definition, so gating it on an intersection (with a negative rootMargin that
// can exclude the lower fold) risks leaving it invisible.
function useMountedIn(active) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!active) return;
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, [active]);
  return on;
}

// Scroll-reveal wrapper. `delay` staggers siblings — keep it under ~8 items so
// the last one doesn't feel laggy. `immediate` opts into the mount trigger.
export function Reveal({ children, delay = 0, immediate = false, as: Tag = "div", className = "", style, ...rest }) {
  const [ref, inView] = useInView();
  const mounted = useMountedIn(immediate);
  const shown = immediate ? mounted : inView;
  return (
    <Tag
      ref={immediate ? undefined : ref}
      data-in={shown ? "true" : "false"}
      className={`spx-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Masked line-by-line headline rise.
export function DisplayHeading({ lines, className = "", id, immediate = false }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const mounted = useMountedIn(immediate);
  const shown = immediate ? mounted : inView;
  return (
    <h1 ref={immediate ? undefined : ref} id={id} data-in={shown ? "true" : "false"} className={`spx-display ${className}`}>
      {lines.map((line, i) => (
        <span className="spx-display-line" key={i}>
          <span style={{ transitionDelay: `${i * 90}ms` }}>{line}</span>
        </span>
      ))}
    </h1>
  );
}

function formatValue(n, decimals) {
  return decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-AE");
}

export function StatRail({ stats }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div className="spx-stats" ref={ref}>
      {stats.map((s) => (
        <Stat key={s.label} stat={s} start={inView} />
      ))}
    </div>
  );
}

function Stat({ stat, start }) {
  const value = useCountUp(stat.value, { start });
  return (
    <div className="spx-stat">
      <div className="spx-stat-value">
        {stat.prefix || ""}
        {formatValue(value, stat.decimals)}
        {stat.unit ? <span className="spx-stat-unit">{stat.unit}</span> : null}
      </div>
      <div className="spx-stat-label">{stat.label}</div>
    </div>
  );
}

// Inline SVG icon set (no emoji, single stroke language: 1.6 / currentColor).
const PATHS = {
  engine: "M4 13v-2a2 2 0 0 1 2-2h1V7h4v2h3l3 3h3v4h-3l-3 3h-7l-3-3H4Z",
  drivetrain: "M12 4v16M4 8h16M6 16h12M8 4v4M16 4v4M8 16v4M16 16v4",
  terrain: "m3 18 5-7 4 5 3-4 6 6H3Z M8 7a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 8 7Z",
  seats: "M6 18v-6a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h1a2 2 0 0 1 2 2v6M6 18h12M9 18v2M15 18v2",
  tow: "M3 15h9l3-5h4l2 5v3h-3M3 15v3h3M6 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm12 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
  cargo: "M4 9h16v10H4zM4 9l2-4h12l2 4M12 9v10",
  screen: "M3 5h18v11H3zM8 20h8M12 16v4",
  roof: "M3 11 12 5l9 6M5 11v8h14v-8M9 19v-5h6v5",
  bolt: "m13 3-8 10h6l-1 8 8-10h-6l1-8Z",
  shield: "M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z",
};

export function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name] || PATHS.bolt} />
    </svg>
  );
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 4v11M7 11l5 4 5-4M5 19h14" />
    </svg>
  );
}
