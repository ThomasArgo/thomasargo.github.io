import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import SectionCard from "../components/SectionCard";
import { contactDetails, siteMeta } from "../data/portfolio";

export default function Contact() {
  return (
    <div className="page">
      <PageMeta title="Contact" />
      <PageHero
        eyebrow="Contact"
        title="Contact Information"
        description="Feel free to reach out! Best reached at personal email."
      />

      <SectionCard className="page-fade">
        <div className="section-heading">
          <h2>{siteMeta.name}</h2>
        </div>
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
    </div>
  );
}
