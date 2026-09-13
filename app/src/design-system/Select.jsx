export function Select({ children, bordered = false, placeholder, value, style, ...rest }) {
  const isPlaceholder = value === "" || value === undefined;
  return (
    <select
      value={value}
      style={{
        width: "100%",
        height: "var(--control-height-field)",
        fontFamily: "var(--font-brand)",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: isPlaceholder ? "var(--text-placeholder)" : "var(--text-body)",
        padding: "0 10px",
        backgroundColor: "var(--surface-card)",
        border: bordered ? "2px solid var(--border-input)" : "none",
        borderRadius: "var(--radius-dropdown)",
        outline: "none",
        cursor: "pointer",
        appearance: "none",
        ...style,
      }}
      {...rest}
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {children}
    </select>
  );
}
