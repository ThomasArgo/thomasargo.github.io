import { Link } from "react-router-dom";
import TagList from "./TagList";

export default function ProjectCategoryCard({
  to,
  label,
  eyebrow,
  description,
  tags = [],
}) {
  return (
    <Link className="category-card surface-card" to={to}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{label}</h2>
      <p className="category-card__copy">{description}</p>
      <TagList tags={tags} />
      <span className="card-link">
        Explore
        <span aria-hidden="true">+</span>
      </span>
    </Link>
  );
}
