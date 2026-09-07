import { Box, Image, Text } from "@chakra-ui/react";

import { education } from "../../data/portfolio";
import BusinessDetailList from "./BusinessDetailList";
import BusinessSectionHeading from "./BusinessSectionHeading";

function BusinessEducation() {
  return (
    <Box
      as="section"
      id="education"
      className="business-casebook-section business-education-ledger"
      data-presentation="business-education"
      data-testid="education-section"
    >
      <BusinessSectionHeading sectionId="education" />
      <Box as="ol" className="business-ledger" listStyleType="none">
        {education.map((entry) => (
          <Box
            as="li"
            key={`${entry.institution}-${entry.period}`}
            className="business-ledger-row"
          >
            <Image className="business-ledger-logo" src={entry.logo} alt="" />
            <Box className="business-ledger-title">
              <Text as="h3">{entry.degree}</Text>
              <Text>{entry.institution}</Text>
            </Box>
            <Box className="business-ledger-meta">
              <Text>{entry.period}</Text>
              <Text>{entry.specialization}</Text>
            </Box>
            <BusinessDetailList
              details={entry.description}
              testIdPrefix="business-education"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BusinessEducation;
