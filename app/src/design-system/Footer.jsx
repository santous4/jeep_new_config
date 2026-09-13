export function Footer({ columns = [], social = [], logos = [], legal = [], copyright, onBackToTop, backToTopIcon, style }) {
  return (
    <footer style={{ width: "100%", backgroundColor: "var(--surface-footer)", fontFamily: "var(--font-brand)", ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--footer-padding)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px", cursor: "pointer" }} onClick={onBackToTop}>
            {backToTopIcon ? <img src={backToTopIcon} alt="" style={{ width: "29px", height: "29px" }} /> : null}
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-inverse)" }}>Back to top</span>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            {social.map((s) => (
              <a key={s.href} href={s.href}>
                <img src={s.icon} alt="" width="27" height="27" />
              </a>
            ))}
          </div>
        </div>

        {columns.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`,
              gap: "30px",
              borderTop: "1px solid var(--border-footer)",
              padding: "30px 0",
            }}
          >
            {columns.map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-inverse)", textTransform: "uppercase", marginBottom: "16px" }}>
                  {col.title}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" style={{ fontSize: "var(--font-size-xsmall)", lineHeight: 1.67, color: "var(--text-footer-link)", textDecoration: "none" }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px 0 0",
            flexWrap: "wrap",
            gap: "20px",
            borderTop: columns.length === 0 ? "1px solid var(--border-footer)" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "29px" }}>
            {logos.map((l) => (
              <img key={l} src={l} alt="" style={{ maxHeight: "33px", objectFit: "contain" }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap", fontSize: "var(--font-size-xsmall)", lineHeight: 1.67, color: "var(--text-inverse)" }}>
            <span>{copyright}</span>
            {legal.map((l) => (
              <a key={l} href="#" style={{ color: "var(--text-footer-link)", textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
