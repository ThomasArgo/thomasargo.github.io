import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TagList from "./TagList";

const MotionDiv = motion.div;

export default function ProjectCategoryCard({
  to,
  label,
  eyebrow,
  description,
  tags = [],
}) {
  return (
    <MotionDiv
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
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
    </MotionDiv>
  );
}
