import { Button } from "../design-system/Button";

export function StickyBar({ vm }) {
  return (
    <div id="om-sticky-bar" style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 70, background: "#000000", color: "#ffffff" }}>
      {vm.s.breakdownOpen ? (
        <div style={{ background: "#191920", borderBottom: "1px solid rgba(255,255,255,.1)", padding: "16px 24px", maxHeight: "46vh", overflow: "auto" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {vm.breakdown.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "7px 0", fontSize: 14, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                <span style={{ color: "rgba(255,255,255,.75)" }}>{b.k}</span>
                <span style={{ whiteSpace: "nowrap" }}>{b.v}</span>
              </div>
            ))}
            <p style={{ margin: "12px 0 0", fontSize: 12, color: "rgba(255,255,255,.6)", lineHeight: 1.44 }}>
              Included: 5% VAT, registration and admin, 3-year / 60,000 km warranty, 3-year service pack. Not included: insurance, fuel, extended warranty, dealer-fitted accessories marked as such.
            </p>
          </div>
        </div>
      ) : null}

      <div className="om-sticky-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, padding: "12px 24px" }}>
        <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.65)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{vm.specLine}</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 21, fontWeight: 700 }}>{vm.headlinePrice}</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.7)" }}>{vm.secondaryPrice}</span>
            {vm.showDelta ? <span style={{ background: "#ffba00", color: "#000000", fontSize: 12, fontWeight: 700, padding: "2px 7px", animation: "omRise .25s ease-out" }}>{vm.deltaLabel}</span> : null}
          </div>
        </div>

        <div className="om-sticky-tabs" style={{ display: "flex", border: "1px solid rgba(255,255,255,.25)" }}>
          <button onClick={vm.setCash} style={vm.cashTabStyle}>Cash</button>
          <button onClick={vm.setFinance} style={vm.financeTabStyle}>Finance</button>
          <button onClick={vm.setLease} style={vm.leaseTabStyle}>Lease</button>
        </div>

        <button onClick={vm.toggleBreakdown} style={{ background: "transparent", border: 0, color: "#ffffff", fontFamily: "inherit", fontSize: 13, textDecoration: "underline", cursor: "pointer", padding: "8px 4px" }}>
          {vm.breakdownLabel}
        </button>
        <button onClick={vm.openFinance} className="om-sticky-payment-btn" style={{ background: "transparent", border: "1px solid rgba(255,255,255,.35)", color: "#ffffff", fontFamily: "inherit", fontSize: 13, fontWeight: 700, textTransform: "uppercase", padding: "11px 16px", cursor: "pointer" }}>
          Payment options
        </button>
        <Button variant="primary" size="lg" onClick={vm.primaryAction} style={{ width: "auto", flex: "0 0 auto", padding: "0 26px" }}>
          {vm.primaryLabel}
        </Button>
      </div>
    </div>
  );
}
