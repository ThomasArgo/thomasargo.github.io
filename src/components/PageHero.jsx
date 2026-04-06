export default function PageHero({ eyebrow, title, description, actions }) {
  return (
    <section className="hero-panel glass-card page-fade">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="hero-copy">{description}</p> : null}
      {actions ? <div className="hero-actions">{actions}</div> : null}
    </section>
  );
}
