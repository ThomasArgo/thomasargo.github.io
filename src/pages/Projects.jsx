import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import MotionSection from "../components/MotionSection";
import ProjectCategoryCard from "../components/ProjectCategoryCard";
import { projectCategories } from "../data/portfolio";

export default function Projects() {
  return (
    <div className="page">
      <PageMeta title="Projects" />
      <PageHero
        align="left"
        eyebrow="Portfolio architecture"
        title="Project categories with clearer technical focus."
        description="The portfolio is organized into systems, websites, and software paths so each body of work gets a more intentional presentation."
        tags={["Structured", "Technical", "Curated"]}
      />

      <MotionSection className="section-block">
        <div className="category-grid category-grid--wide">
          {projectCategories.map((category) => (
            <ProjectCategoryCard key={category.to} {...category} />
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
