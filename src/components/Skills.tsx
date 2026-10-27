import {
  skills,
  certificates,
  sectionContent,
  subsectionContent,
} from "../data/portfolio";
import SectionShell from "./shared/SectionShell";

export function LearningEvidence() {
  return (
    <>
      <div className="analytics-skill-groups">
        {skills.map((category) => (
          <div key={category.category}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill.label}>{skill.label}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="business-certificate-section">
        <p className="analytics-overline">
          {subsectionContent.skills.certificatesEyebrow}
        </p>
        <h3 className="analytics-evidence-title">
          {subsectionContent.skills.certificatesTitle}
        </h3>
        <p className="analytics-evidence-intro">
          {subsectionContent.skills.certificatesDescription}
        </p>
        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="certificate-evidence"
              data-testid={`certificate-card-${index}`}
            >
              <p className="certificate-kind">
                {certificate.issuer} / {certificate.kind}
              </p>
              <h4>{certificate.title}</h4>
              <p>{certificate.description}</p>
              {certificate.format === "image" ? (
                <details data-testid={`certificate-preview-${index}`}>
                  <summary>Preview certificate</summary>
                  <img
                    src={certificate.file}
                    alt={`${certificate.title} completion certificate for Nguyễn Đức Tuấn`}
                    loading="lazy"
                    width="4800"
                    height="2960"
                  />
                </details>
              ) : (
                <p className="certificate-document-note">
                  PDF document · opens on request
                </p>
              )}
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={certificate.ariaLabel}
                data-testid={`certificate-open-${index}`}
              >
                Open original {certificate.format === "image" ? "image" : "PDF"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow={sectionContent.skills.eyebrow}
      title={sectionContent.skills.title}
      intro={sectionContent.skills.description}
    >
      <LearningEvidence />
    </SectionShell>
  );
}
