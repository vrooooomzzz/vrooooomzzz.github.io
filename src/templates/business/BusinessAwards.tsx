import { Box, Image, Text } from "@chakra-ui/react";

import { awards } from "../../data/portfolio";
import BusinessSectionHeading from "./BusinessSectionHeading";

function BusinessAwards() {
  return (
    <Box
      as="section"
      id="awards"
      className="business-casebook-section business-distinction-register"
      data-presentation="business-awards"
      data-testid="awards-section"
    >
      <BusinessSectionHeading sectionId="awards" />
      <Box className="business-awards-table">
        {awards.map((award) => (
          <Box
            as="article"
            key={`${award.title}-${award.year}`}
            className="business-award-row"
          >
            {award.logo ? (
              <Image src={award.logo} alt="" className="business-award-mark" />
            ) : null}
            <Box className="business-award-title">
              <Text as="h3">{award.title}</Text>
              <Text>{award.organization}</Text>
            </Box>
            <Text className="business-award-year">{award.year}</Text>
            <Text className="business-award-tag">{award.tag}</Text>
            <Text className="business-award-description">
              {award.description}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BusinessAwards;
