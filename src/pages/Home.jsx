import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import ProjectCategoryCard from "../components/ProjectCategoryCard";
import SectionCard from "../components/SectionCard";
import { projectCategories, siteMeta } from "../data/portfolio";

export default function Home() {
  return (
    <div className="page page--home">
      <PageMeta title="Portfolio" />
      <PageHero
        eyebrow="Portfolio"
        title={siteMeta.name}
        description={siteMeta.title}
        actions={
          <>
            <Link className="button-primary" to="/projects">
              View Projects
            </Link>
            <Link className="button-secondary" to="/contact">
              Contact
            </Link>
          </>
        }
      />

      <SectionCard className="page-fade">
        <div className="section-heading">
          <h2>About Me</h2>
        </div>
        <p>{siteMeta.about}</p>
      </SectionCard>

      <section className="category-grid page-fade">
        {projectCategories.map((category) => (
          <ProjectCategoryCard key={category.to} {...category} />
        ))}
      </section>
    </div>
  );
}
