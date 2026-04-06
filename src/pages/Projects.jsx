import ProjectCategoryCard from "../components/ProjectCategoryCard";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import { projectCategories } from "../data/portfolio";

export default function Projects() {
  return (
    <div className="page">
      <PageMeta title="Projects" />
      <PageHero
        eyebrow="Projects"
        title="Project Categories"
        description="Explore the same portfolio sections from the original site, rebuilt as routed React pages."
      />

      <section className="category-grid page-fade">
        {projectCategories.map((category) => (
          <ProjectCategoryCard key={category.to} {...category} />
        ))}
      </section>
    </div>
  );
}
