import { useEffect, useState } from "react";
import { prefersReducedMotion, useCountUp, useReveal } from "../../hooks/useMotion";

// Presentational primitives for the specs/offers pages.
//
// These carry the motion layer described in styles/motion.css: a scroll-fired
// reveal, a masked line rise for display headings, and figures that count to
// their value. All three fall back to the static Jeep UAE DS page when the
// visitor asks for reduced motion.

// 01 — the yellow page entrance. Unmounts itself once the pass is done, so it
// never sits over the page as an invisible fixed layer.
export function Curtain() {
  const [done, setDone] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (done) return undefined;
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, [done]);

  if (done) return null;
  return <div className="jm-curtain" aria-hidden="true" />;
}

// Shared reveal. `delay` staggers siblings; `immediate` is for content above
// the fold, which the observer's negative rootMargin would otherwise skip.
export function Reveal({ children, as: Tag = "div", className = "", style, delay = 0, immediate = false, ...rest }) {
  const [ref, shown] = useReveal({ immediate });
  return (
    <Tag
      ref={ref}
      data-shown={shown ? "true" : "false"}
      className={`jm-reveal ${className}`.trim()}
      style={delay ? { ...style, "--jm-delay": `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// 03 — the DS's 3.2em yellow section rule, drawn from the left.
export function Rule({ delay = 0, immediate = false, className = "" }) {
  const [ref, shown] = useReveal({ immediate });
  return (
    <div
      ref={ref}
      data-shown={shown ? "true" : "false"}
      className={`spx-rule jm-rule ${className}`.trim()}
      style={delay ? { "--jm-delay": `${delay}ms` } : undefined}
    />
  );
}

// 04 — the render settles in from the right at slight overscale, then breathes
// on a slow float. Drift is on the wrapper and float on the image inside it,
// because an animation and a transition on one element would fight.
export function Drift({ children, className = "", delay = 0, immediate = true }) {
  const [ref, shown] = useReveal({ immediate });
  return (
    <div
      ref={ref}
      data-shown={shown ? "true" : "false"}
      className={`jm-drift ${className}`.trim()}
      style={delay ? { "--jm-delay": `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

// 02 — masked line rise. Each line clips its own box and rises out of it,
// which is what lets the 80px hero size land without arriving as a slab.
export function DisplayHeading({ lines, className = "", id, as: Tag = "h1", stagger = 110, delay = 120, immediate = true }) {
  const [ref, shown] = useReveal({ immediate });
  return (
    <Tag ref={ref} id={id} data-shown={shown ? "true" : "false"} className={`spx-display jm-lines ${className}`.trim()}>
      {lines.map((line, i) => (
        <span className="jm-line" key={line}>
          <span style={{ "--jm-delay": `${delay + i * stagger}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

function formatValue(n, decimals) {
  return decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-AE");
}

// 05 — figures roll to their value as the rail scrolls in, with the 3px top
// rule drawing alongside. Each stat is its own component so the count-up hook
// is never called in a loop.
function Stat({ stat, index, active }) {
  const value = useCountUp(stat.value, { delay: index * 80, active });
  return (
    <div className="spx-stat" style={{ "--jm-delay": `${index * 80}ms` }}>
      <div className="spx-stat-value">
        {stat.prefix || ""}
        {formatValue(value, stat.decimals)}
        {stat.unit ? <span className="spx-stat-unit">{stat.unit}</span> : null}
      </div>
      <div className="spx-stat-label">{stat.label}</div>
    </div>
  );
}

export function StatRail({ stats, immediate = false }) {
  const [ref, shown] = useReveal({ immediate, threshold: 0.35 });
  return (
    <div ref={ref} data-shown={shown ? "true" : "false"} className="spx-stats">
      {stats.map((s, i) => (
        <Stat key={s.label} stat={s} index={i} active={shown} />
      ))}
    </div>
  );
}

// Line icons, single colour, 24x24 standard — matching the DS icon family.
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

export function Icon({ name, size = 24 }) {
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

export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 4v11M7 11l5 4 5-4M5 19h14" />
    </svg>
  );
}
