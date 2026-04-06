import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteMeta } from "../data/portfolio";

const MotionDiv = motion.div;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <NavLink className="brand-mark" to="/" onClick={() => setIsOpen(false)}>
          <span className="brand-kicker">Technical portfolio</span>
          <span className="brand-name">{siteMeta.name}</span>
        </NavLink>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="nav-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>

        <div className="nav-links nav-links--desktop">
          {navLinks.map((link) => (
            <NavItem key={link.to} link={link} />
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <MotionDiv
            animate={{ opacity: 1, y: 0 }}
            className="nav-links nav-links--mobile"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
          >
            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                link={link}
                onNavigate={() => setIsOpen(false)}
              />
            ))}
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ link, onNavigate }) {
  return (
    <NavLink
      className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
      onClick={onNavigate}
      to={link.to}
    >
      {link.label}
    </NavLink>
  );
}
