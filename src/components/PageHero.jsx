import MotionSection from "./MotionSection";
import TagList from "./TagList";

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
  tags = [],
}) {
  return (
    <MotionSection className={`page-hero page-hero--${align}`}>
      <div className="page-hero__content surface-card">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="hero-copy">{description}</p> : null}
        <TagList tags={tags} />
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </MotionSection>
  );
}
