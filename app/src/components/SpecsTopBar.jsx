import { Link } from "react-router-dom";
import logoJeep from "../assets/jeep/logo-jeep-white.png";

export function SpecsTopBar({ backTo, backLabel }) {
  return (
    <header style={{ background: "#000000", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "0 24px", height: 64 }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 20, textDecoration: "none" }}>
        <img src={logoJeep} alt="Jeep" style={{ height: 22, width: "auto", display: "block" }} />
        <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700, textTransform: "uppercase" }}>Vehicle Specifications</span>
      </Link>
      {backTo ? (
        <Link to={backTo} style={{ color: "rgba(255,255,255,.85)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", textDecoration: "none" }}>
          {backLabel}
        </Link>
      ) : null}
    </header>
  );
}
