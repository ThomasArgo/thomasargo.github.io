import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import MotionSection from "../components/MotionSection";
import SectionCard from "../components/SectionCard";
import MediaGallery from "../components/MediaGallery";
import TagList from "../components/TagList";
import { models } from "../data/portfolio";

export default function Models() {
  const spotlight = models[0];
  const remaining = models.slice(1);

  return (
    <div className="page page--models">
      <PageMeta title="Models" />
      <PageHero
        align="left"
        eyebrow="3D showcase"
        title="Mechanical modeling presented like a premium technical portfolio."
        description="This page is the visual core of the site: detailed assemblies, part studies, and cleanly presented modeling work."
        tags={["Blender", "Onshape", "SolidWorks", "Showcase Gallery"]}
      />

      <MotionSection className="model-spotlight surface-card">
        <div className="model-spotlight__copy">
          <p className="eyebrow">Spotlight build</p>
          <h2>{spotlight.title}</h2>
          <p className="platform-tag">{spotlight.platform}</p>
          <p>{spotlight.description}</p>
          <TagList tags={spotlight.tags} />
        </div>
        <MediaGallery media={spotlight.media} title={spotlight.title} />
      </MotionSection>

      <MotionSection className="model-grid">
        {remaining.map((model) => (
          <SectionCard className="model-card" key={model.title}>
            <div className="section-heading">
              <div>
                <h2>{model.title}</h2>
                <p className="platform-tag">{model.platform}</p>
              </div>
            </div>
            <p>{model.description}</p>
            <TagList tags={model.tags} />
            <MediaGallery
              compact={model.media.length === 1}
              media={model.media}
              title={model.title}
            />
          </SectionCard>
        ))}
      </MotionSection>
    </div>
  );
}
