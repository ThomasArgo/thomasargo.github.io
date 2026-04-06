import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import SectionCard from "../components/SectionCard";
import { appProjects } from "../data/portfolio";

export default function Apps() {
  return (
    <div className="page">
      <PageMeta title="Apps" />
      <PageHero
        eyebrow="Projects"
        title="Apps"
        description="This section is kept from the original site and stays ready for future software projects."
      />

      <div className="stacked-sections">
        {appProjects.map((project) => (
          <SectionCard className="centered-card page-fade" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
