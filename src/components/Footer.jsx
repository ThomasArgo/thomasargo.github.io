import { Link } from "react-router-dom";
import MotionSection from "./MotionSection";
import { navLinks, siteMeta } from "../data/portfolio";

export default function Footer() {
  return (
    <MotionSection className="site-footer">
      <div className="footer-panel surface-card">
        <div>
          <p className="eyebrow">Build with me</p>
          <h2 className="footer-title">Open to technical collaboration and design-heavy builds.</h2>
          <p className="footer-copy">
            {siteMeta.availability} If you are building something ambitious, I would
            love to hear about it.
          </p>
        </div>
        <div className="footer-actions">
          <Link className="button-primary" to="/contact">
            Start a Conversation
          </Link>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
          <p className="footer-meta">{siteMeta.footer}</p>
        </div>
      </div>
    </MotionSection>
  );
}
