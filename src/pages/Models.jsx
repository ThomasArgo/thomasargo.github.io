import MediaGallery from "../components/MediaGallery";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import SectionCard from "../components/SectionCard";
import { models } from "../data/portfolio";

export default function Models() {
  return (
    <div className="page">
      <PageMeta title="Models" />
      <PageHero
        eyebrow="Projects"
        title="3D Modeling Projects"
        description="Mechanical studies, CAD workflows, and showcase renders migrated from the original static portfolio."
      />

      <div className="stacked-sections">
        {models.map((model) => (
          <SectionCard className="page-fade" key={model.title}>
            <div className="section-heading">
              <div>
                <h2>{model.title}</h2>
                <p className="platform-tag">{model.platform}</p>
              </div>
            </div>
            <p>{model.description}</p>
            <MediaGallery media={model.media} title={model.title} />
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
