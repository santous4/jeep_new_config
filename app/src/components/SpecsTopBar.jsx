import { Link } from "react-router-dom";
import logoJeep from "../assets/jeep/logo-jeep-white.png";

export function SpecsTopBar({ backTo, backLabel }) {
  return (
    <header className="spx-topbar">
      <Link to="/" className="spx-topbar-brand">
        <img src={logoJeep} alt="Jeep" />
        <span className="spx-topbar-title">Specifications</span>
      </Link>
      {backTo ? (
        <Link to={backTo} className="spx-topbar-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          {backLabel}
        </Link>
      ) : (
        <Link to="/" className="spx-topbar-back">
          Configure a Wrangler
        </Link>
      )}
    </header>
  );
}
