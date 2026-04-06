import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageMeta from "../components/PageMeta";
import MotionSection from "../components/MotionSection";
import SectionCard from "../components/SectionCard";
import TagList from "../components/TagList";
import ProjectCategoryCard from "../components/ProjectCategoryCard";
import {
  capabilities,
  featuredWork,
  heroStats,
  projectCategories,
  siteMeta,
} from "../data/portfolio";

const MotionDiv = motion.div;

export default function Home() {
  return (
    <div className="page page--home">
      <PageMeta title="Portfolio" />

      <MotionSection className="hero-grid">
        <div className="hero-shell surface-card">
          <div className="hero-shell__copy">
            <p className="eyebrow">Developer / CAD Designer / 3D Modeler</p>
            <h1 className="display-title">
              Premium technical work with the look and discipline of a real build pipeline.
            </h1>
            <p className="hero-copy hero-copy--wide">{siteMeta.intro}</p>
            <div className="hero-actions hero-actions--left">
              <Link className="button-primary" to="/projects">
                Explore Projects
              </Link>
              <Link className="button-secondary" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-shell__visual">
            <div className="signal-panel">
              <span className="signal-panel__label">Technical identity</span>
              <ul className="signal-list">
                <li>Frontend interfaces with clean interaction design</li>
                <li>Mechanical CAD assemblies built with precision</li>
                <li>3D model presentation focused on believable detail</li>
              </ul>
              <TagList tags={["React", "CAD", "3D Modeling", "Design Systems"]} />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="stats-row">
        {heroStats.map((stat) => (
          <div className="stat-card surface-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="section-block">
        <div className="section-intro">
          <p className="eyebrow">Featured work</p>
          <h2>Selected builds that define the portfolio.</h2>
          <p>
            A mix of mechanical modeling, web tooling, and presentation work designed to
            show both craft and technical range.
          </p>
        </div>
        <div className="featured-grid">
          {featuredWork.map((item) => (
            <MotionDiv key={item.title} whileHover={{ y: -8 }}>
              <Link className="featured-card surface-card" to={item.route}>
                <div className="featured-card__image-wrap">
                  <img alt={item.title} className="featured-card__image" src={item.image} />
                </div>
                <div className="featured-card__body">
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <TagList tags={item.tags} />
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-block">
        <div className="section-intro">
          <p className="eyebrow">Capabilities</p>
          <h2>Built around technical depth, not just aesthetics.</h2>
          <p>
            The work spans frontend development, CAD design, and showcase-ready 3D
            modeling, with each discipline informing the others.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <SectionCard className="capability-card" key={item.title}>
              <p className="eyebrow">{item.title}</p>
              <p className="capability-card__copy">{item.description}</p>
              <TagList tags={item.tags} />
            </SectionCard>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-block section-block--split">
        <SectionCard className="about-card">
          <p className="eyebrow">About</p>
          <h2>{siteMeta.name}</h2>
          <p>{siteMeta.about}</p>
          <p>{siteMeta.availability}</p>
        </SectionCard>

        <div className="category-grid">
          {projectCategories.map((category) => (
            <ProjectCategoryCard key={category.to} {...category} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="cta-banner surface-card">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Looking for someone who can design, build, and present technical work well?</h2>
          <p>
            I’m building projects that combine engineering clarity with polished execution.
          </p>
        </div>
        <Link className="button-primary" to="/contact">
          Let&apos;s Connect
        </Link>
      </MotionSection>
    </div>
  );
}
