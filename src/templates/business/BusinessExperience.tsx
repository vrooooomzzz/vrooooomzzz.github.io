import { Box, Text } from "@chakra-ui/react";

import { experience } from "../../data/portfolio";
import BusinessDetailList from "./BusinessDetailList";
import BusinessSectionHeading from "./BusinessSectionHeading";

function BusinessExperience() {
  return (
    <Box
      as="section"
      id="experience"
      className="business-casebook-section business-experience-chapters"
      data-presentation="business-experience"
      data-testid="experience-section"
    >
      <BusinessSectionHeading sectionId="experience" />
      <Box className="business-experience-index">
        {experience.map((entry) => (
          <Box
            as="article"
            key={`${entry.company}-${entry.period}`}
            className="business-experience-entry"
          >
            <Box className="business-experience-role">
              <Text as="h3">{entry.title}</Text>
              <Text>{entry.company}</Text>
            </Box>
            <Text className="business-experience-period">{entry.period}</Text>
            <BusinessDetailList
              details={entry.description}
              testIdPrefix="business-experience"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BusinessExperience;
