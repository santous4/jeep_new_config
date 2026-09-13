export function Input({ bordered = false, style, ...rest }) {
  return (
    <input
      style={{
        width: "100%",
        height: "var(--control-height-field)",
        fontFamily: "var(--font-brand)",
        fontSize: "1rem",
        fontWeight: 400,
        color: "var(--text-body)",
        padding: "0 10px",
        borderRadius: "var(--radius-input)",
        backgroundColor: "var(--surface-card)",
        border: bordered ? "2px solid var(--border-input)" : "none",
        outline: "none",
        ...style,
      }}
      {...rest}
    />
  );
}
