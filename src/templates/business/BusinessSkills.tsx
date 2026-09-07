import { Box, Link, Text } from "@chakra-ui/react";

import LogoMark from "../../components/shared/LogoMark";
import { certificates, skills, subsectionContent } from "../../data/portfolio";
import BusinessSectionHeading from "./BusinessSectionHeading";

function BusinessSkills() {
  return (
    <Box
      as="section"
      id="skills"
      className="business-casebook-section business-capability-matrix"
      data-presentation="business-skills"
      data-testid="skills-section"
    >
      <BusinessSectionHeading sectionId="skills" />
      <Box className="business-skill-table">
        {skills.map((category) => (
          <Box key={category.category} className="business-skill-row">
            <Text as="h3">{category.category}</Text>
            <Box as="ul">
              {category.skills.map((skill) => (
                <Box as="li" key={skill.label}>
                  <LogoMark
                    logoKey={skill.logoKey}
                    logoLabel={skill.logoLabel}
                    logoAccent={skill.logoAccent}
                    size="xs"
                  />
                  <Text>{skill.label}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="business-certificate-section">
        <Box className="business-certificate-heading">
          <Box>
            <Text>{subsectionContent.skills.certificatesEyebrow}</Text>
            <Text as="h3">{subsectionContent.skills.certificatesTitle}</Text>
          </Box>
          <Text>{subsectionContent.skills.certificatesDescription}</Text>
        </Box>
        <Box className="business-certificate-gallery">
          {certificates.map((certificate, index) => (
            <Link
              key={certificate.title}
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="business-certificate-card"
              aria-label={certificate.ariaLabel}
              data-testid={`certificate-card-${certificate.title.toLowerCase().replaceAll(" ", "-")}`}
            >
              <Box className="business-certificate-preview">
                <object
                  aria-label={`${certificate.title} preview`}
                  data={`${certificate.file}#page=1&view=FitH`}
                  type="application/pdf"
                  data-testid={`business-certificate-preview-${index}`}
                >
                  <Box className="business-certificate-fallback">
                    <Text>Preview unavailable in this browser</Text>
                    <Text>Open the certificate PDF to view it.</Text>
                  </Box>
                </object>
              </Box>
              <Box className="business-certificate-copy">
                <Box className="business-certificate-title">
                  <LogoMark
                    logoKey={certificate.logoKey}
                    logoLabel={certificate.logoLabel}
                    logoAccent={certificate.logoAccent}
                  />
                  <Box>
                    <Text as="h4">{certificate.title}</Text>
                  </Box>
                </Box>
                <Box
                  className="business-inline-details"
                  data-testid={`business-credential-details-${index}`}
                >
                  <Text className="business-inline-detail business-inline-meta">
                    <Text as="strong" className="business-inline-label">
                      Issuer:
                    </Text>{" "}
                    {certificate.issuer}
                    <Text
                      as="span"
                      className="business-inline-divider"
                      aria-hidden="true"
                    >
                      /
                    </Text>
                    <Text as="strong" className="business-inline-label">
                      Type:
                    </Text>{" "}
                    {certificate.kind}
                  </Text>
                  <Text className="business-inline-detail">
                    <Text as="strong" className="business-inline-label">
                      Description:
                    </Text>{" "}
                    {certificate.description}
                  </Text>
                </Box>
                <Text className="business-certificate-open">Open PDF</Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessSkills;
