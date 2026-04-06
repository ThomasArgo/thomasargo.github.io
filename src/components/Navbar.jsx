import { NavLink } from "react-router-dom";
import { navLinks, siteMeta } from "../data/portfolio";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <NavLink className="brand-mark" to="/">
          <span className="brand-name">{siteMeta.name}</span>
          <span className="brand-role">Portfolio</span>
        </NavLink>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
