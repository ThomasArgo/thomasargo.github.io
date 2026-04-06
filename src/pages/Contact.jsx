import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import MotionSection from "../components/MotionSection";
import SectionCard from "../components/SectionCard";
import { contactDetails, siteMeta } from "../data/portfolio";

export default function Contact() {
  return (
    <div className="page">
      <PageMeta title="Contact" />
      <PageHero
        align="left"
        eyebrow="Contact"
        title="Let’s talk about internships, technical collaboration, or design-heavy builds."
        description="If you are recruiting, building something interesting, or want to connect over technical work, these are the best ways to reach me."
        tags={[siteMeta.location, "Open to opportunities"]}
      />

      <MotionSection className="contact-grid">
        <SectionCard className="contact-card">
          <p className="eyebrow">Direct contact</p>
          <h2>{siteMeta.name}</h2>
          <p>{siteMeta.availability}</p>
          <div className="contact-list">
            {contactDetails.map((item) => (
              <div className="contact-row" key={item.label}>
                <span className="contact-label">{item.label}</span>
                <a className="contact-value" href={item.href}>
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard className="contact-card contact-card--accent">
          <p className="eyebrow">Working style</p>
          <h2>Focused on quality, clarity, and strong presentation.</h2>
          <p>
            I care about the details that make technical work believable: structure,
            precision, interaction polish, and clear communication.
          </p>
        </SectionCard>
      </MotionSection>
    </div>
  );
}
