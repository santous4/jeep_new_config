import { useState } from "react";

const base = {
  fontFamily: "var(--font-brand)",
  fontWeight: 700,
  textTransform: "uppercase",
  border: 0,
  borderRadius: "var(--radius-none)",
  cursor: "pointer",
  transition: "var(--transition-cta)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  lineHeight: "23px",
};

const sizes = {
  sm: { fontSize: "0.875rem", padding: "5px 16px", minHeight: "var(--control-height-sm)" },
  md: { fontSize: "1rem", padding: "7px 16px 8px", minHeight: "var(--control-height)" },
  lg: { fontSize: "1.213rem", padding: "0.375rem 1.3rem", minHeight: "48px", lineHeight: "35px" },
};

const variants = {
  primary: { backgroundColor: "var(--action-primary-bg)", color: "var(--action-primary-fg)" },
  secondary: { backgroundColor: "var(--action-secondary-bg)", color: "var(--action-secondary-fg)" },
  tertiary: { backgroundColor: "var(--action-tertiary-bg)", color: "var(--action-tertiary-fg)" },
  pill: {
    backgroundColor: "var(--action-tertiary-bg)",
    color: "var(--action-tertiary-fg)",
    borderRadius: "var(--radius-pill)",
    boxShadow: "var(--shadow-pill)",
    textTransform: "none",
  },
  link: { backgroundColor: "transparent", color: "var(--text-body)", padding: 0, minHeight: "auto", textTransform: "none" },
};

const hovers = {
  primary: { backgroundColor: "var(--action-primary-bg-hover)", color: "var(--action-primary-fg-hover)" },
  secondary: { backgroundColor: "var(--action-primary-bg)", color: "var(--action-primary-fg)" },
  tertiary: { backgroundColor: "var(--brand-black)", color: "var(--brand-white)" },
  pill: { backgroundColor: "var(--surface-subtle)" },
  link: { color: "var(--brand-yellow)" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconBefore,
  iconAfter,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Tag = href && !disabled ? "a" : "button";
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(disabled
      ? {
          backgroundColor: variant === "link" ? "transparent" : "var(--action-disabled-bg)",
          opacity: "var(--action-disabled-opacity)",
          cursor: "not-allowed",
        }
      : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...style,
  };
  const iconStyle = { width: "var(--icon-size)", height: "var(--icon-size)", position: "relative", top: "1px" };
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconBefore ? <img src={iconBefore} alt="" style={iconStyle} /> : null}
      <span>{children}</span>
      {iconAfter ? <img src={iconAfter} alt="" style={iconStyle} /> : null}
    </Tag>
  );
}
