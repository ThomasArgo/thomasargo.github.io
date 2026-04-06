import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import MotionSection from "../components/MotionSection";
import SectionCard from "../components/SectionCard";
import TagList from "../components/TagList";
import { websiteProjects } from "../data/portfolio";

export default function Websites() {
  return (
    <div className="page">
      <PageMeta title="Websites" />
      <PageHero
        align="left"
        eyebrow="Web work"
        title="Browser-based builds with a more product-grade presentation."
        description="Website projects are presented as polished technical products, with clearer hierarchy, richer surfaces, and stronger identity."
        tags={["Frontend", "Interactive", "Product Thinking"]}
      />

      <MotionSection className="stacked-sections">
        {websiteProjects.map((project) => (
          <SectionCard className="website-card" key={project.title}>
            <div className="website-card__media">
              <img
                alt={`${project.title} logo`}
                className="feature-logo"
                loading="lazy"
                src={project.image}
              />
            </div>
            <div className="website-card__copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <TagList tags={project.tags} />
              <a
                className="button-primary"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                {project.cta}
              </a>
            </div>
          </SectionCard>
        ))}
      </MotionSection>
    </div>
  );
}
