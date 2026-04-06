import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import SectionCard from "../components/SectionCard";
import { websiteProjects } from "../data/portfolio";

export default function Websites() {
  return (
    <div className="page">
      <PageMeta title="Websites" />
      <PageHero
        eyebrow="Projects"
        title="Websites"
        description="Browser-based work carried over from the legacy portfolio and packaged for the new React site."
      />

      <div className="stacked-sections">
        {websiteProjects.map((project) => (
          <SectionCard className="feature-card page-fade" key={project.title}>
            <img
              alt={`${project.title} logo`}
              className="feature-logo"
              loading="lazy"
              src={project.image}
            />
            <div className="feature-copy">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
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
      </div>
    </div>
  );
}
