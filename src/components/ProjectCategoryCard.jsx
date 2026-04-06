import { Link } from "react-router-dom";

export default function ProjectCategoryCard({
  to,
  label,
  eyebrow,
  description,
}) {
  return (
    <Link className="category-card glass-card" to={to}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{label}</h2>
      <p>{description}</p>
    </Link>
  );
}
