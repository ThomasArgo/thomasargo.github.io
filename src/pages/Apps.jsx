import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import MotionSection from "../components/MotionSection";
import SectionCard from "../components/SectionCard";
import TagList from "../components/TagList";
import { appProjects } from "../data/portfolio";

export default function Apps() {
  return (
    <div className="page">
      <PageMeta title="Apps" />
      <PageHero
        align="left"
        eyebrow="Software roadmap"
        title="This category is reserved intentionally, not left empty."
        description="The apps section stays in the portfolio as a signal of where the software side of the work is heading next."
        tags={["Roadmap", "Utilities", "Future Builds"]}
      />

      <MotionSection className="stacked-sections">
        {appProjects.map((project) => (
          <SectionCard className="apps-card" key={project.title}>
            <p className="eyebrow">{project.eyebrow}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <TagList tags={project.tags} />
          </SectionCard>
        ))}
      </MotionSection>
    </div>
  );
}
