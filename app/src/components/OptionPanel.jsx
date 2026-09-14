import iconInfo from "../assets/jeep/icons/icon-info-line.svg";
import { Button } from "../design-system/Button";

function Summary({ vm }) {
  return (
    <div>
      <h2 style={{ margin: "0 0 4px", fontSize: 26, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>Your Wrangler</h2>
      <div style={{ width: "3.2em", height: 3, background: "#ffba00", marginBottom: 18 }} />
      <p style={{ margin: "0 0 20px", fontSize: 14, color: "#636363", lineHeight: 1.44 }}>
        Reference {vm.refCode}. Quote this code in any Al-Futtaim Jeep showroom and the agent retrieves this exact build.
      </p>

      {vm.summaryLines.map((line, i) => (
        <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "11px 0", borderBottom: "1px solid #eeeeee" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 10, textTransform: "uppercase", color: "#888b8d" }}>{line.group}</span>
            <span style={{ fontSize: 15, color: "#212121" }}>{line.name}</span>
          </div>
          <span style={{ fontSize: 14, color: "#53565a", whiteSpace: "nowrap" }}>{line.price}</span>
        </div>
      ))}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "24px 0 10px" }}>
        <Button variant="primary" size="lg" onClick={vm.openEnquire} style={{ flex: "1 1 160px" }}>
          Enquire now
        </Button>
        <Button variant="secondary" size="lg" onClick={vm.openEnquire} style={{ flex: "1 1 160px" }}>
          Book a test drive
        </Button>
        <Button variant="tertiary" size="lg" onClick={vm.openStock} style={{ flex: "1 1 160px", border: "1px solid #212121" }}>
          Reserve this car
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        <button onClick={vm.saveBuild} style={{ flex: "1 1 140px", background: "#ffffff", border: "1px solid #e0e0e0", fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
          Save build
        </button>
        <button onClick={vm.shareBuild} style={{ flex: "1 1 140px", background: "#ffffff", border: "1px solid #e0e0e0", fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
          {vm.s.shareLabel}
        </button>
        <button onClick={vm.downloadQuote} style={{ flex: "1 1 140px", background: "#ffffff", border: "1px solid #e0e0e0", fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
          PDF quote
        </button>
        <button onClick={vm.openSpec} style={{ flex: "1 1 140px", background: "#ffffff", border: "1px solid #e0e0e0", fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", padding: 12, cursor: "pointer" }}>
          Full spec
        </button>
      </div>
      <p style={{ margin: "18px 0 0", fontSize: 12, color: "#757575", lineHeight: 1.44 }}>
        Price excludes insurance. Includes 5% VAT, registration and admin. Warranty 3 years / 60,000 km and a 3-year service pack are included; extended cover is quoted separately.
      </p>
    </div>
  );
}

function Picker({ vm }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h2 style={{ margin: "0 0 4px", fontSize: 26, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.25 }}>{vm.stepTitle}</h2>
          <div style={{ width: "3.2em", height: 3, background: "#ffba00" }} />
        </div>
        <span style={{ fontSize: 12, color: "#888b8d", whiteSpace: "nowrap", paddingTop: 6 }}>{vm.stepCount}</span>
      </div>
      <p style={{ margin: "14px 0 18px", fontSize: 14, color: "#636363", lineHeight: 1.44 }}>{vm.stepHint}</p>

      <label style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, padding: "12px 14px", background: "#f5f5f5", fontSize: 13, color: "#212121", cursor: "pointer" }}>
        <input type="checkbox" checked={vm.s.availableOnly} onChange={vm.toggleAvailableOnly} style={{ accentColor: "#ffba00", width: 16, height: 16 }} />
        <span>Show only combinations available within 8 weeks</span>
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {vm.rows.map((row) => (
          <div key={row.id} style={{ position: "relative", display: "flex", alignItems: "center", gap: 14, padding: 14, border: "1px solid #e0e0e0", background: "#ffffff", cursor: "pointer" }} onClick={row.pick}>
            <span style={row.swatchStyle} />
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: "#212121" }}>{row.name}</span>
                {row.badge ? <span style={{ background: "#ffba00", color: "#000000", fontSize: 10, fontWeight: 700, textTransform: "uppercase", padding: "2px 6px" }}>{row.badge}</span> : null}
              </div>
              <span style={{ fontSize: 12, color: "#757575", lineHeight: 1.38 }}>{row.sub}</span>
              {row.blocked ? <span style={{ fontSize: 12, color: "#53565a", lineHeight: 1.38 }}>{row.blockedNote}</span> : null}
            </div>
            <span style={{ fontSize: 14, color: "#53565a", whiteSpace: "nowrap" }}>{row.price}</span>
            <button onClick={row.info} aria-label="More information" style={{ flex: "none", width: 28, height: 28, background: "transparent", border: "1px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
              <img src={iconInfo} alt="" style={{ width: 16, height: 16 }} />
            </button>
            {row.selected ? <span style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 2px #ffba00", pointerEvents: "none" }} /> : null}
          </div>
        ))}
      </div>

      {vm.isPacksStep ? (
        <button onClick={vm.openPackCompare} style={{ marginTop: 16, background: "transparent", border: 0, fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", textDecoration: "underline", cursor: "pointer", padding: 0 }}>
          Compare what is inside each pack
        </button>
      ) : null}
      {vm.isTrimStep ? (
        <button onClick={vm.openCompare} style={{ marginTop: 16, background: "transparent", border: 0, fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", textDecoration: "underline", cursor: "pointer", padding: 0 }}>
          Compare all trims side by side
        </button>
      ) : null}
    </div>
  );
}

export function OptionPanel({ vm }) {
  return (
    <section className="om-option-panel" style={{ background: "#ffffff", borderLeft: "1px solid #e0e0e0", minHeight: "60vh", padding: "28px 76px 40px 28px" }}>
      {vm.isSummary ? <Summary vm={vm} /> : <Picker vm={vm} />}
    </section>
  );
}
