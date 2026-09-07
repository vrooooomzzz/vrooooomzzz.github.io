import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { about, hero, sectionContent } from "../../data/portfolio";

function BusinessAbout() {
  return (
    <Box
      id="about"
      className="business-about business-casebook-section business-profile-spread"
      data-presentation="business-about"
      py={{ base: 16, md: 24 }}
      data-testid="about-section"
    >
      <Container maxW="1180px" px={{ base: 4, md: 8 }}>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "180px minmax(0, 1fr)" }}
          gap={{ base: 5, lg: 10 }}
          pb={9}
          borderBottom="2px solid"
          borderColor="var(--text-100)"
        >
          <Box>
            <Text color="var(--text-300)" fontSize="sm">
              {sectionContent.about.eyebrow}
            </Text>
          </Box>
          <Heading
            as="h2"
            tabIndex={-1}
            data-chapter-heading
            className="business-section-title"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1"
            color="var(--text-100)"
          >
            {sectionContent.about.title}
          </Heading>
        </Box>

        <Box
          className="business-summary-grid"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            xl: "minmax(0, 1.12fr) minmax(300px, 0.68fr)",
          }}
          gap={{ base: 10, xl: 12 }}
          pt={{ base: 10, md: 14 }}
          alignItems="start"
        >
          <Box>
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              lineHeight="1.45"
              color="var(--text-100)"
              pb={7}
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              {sectionContent.about.description}
            </Text>
            {about.paragraphs.map((paragraph) => (
              <Box
                key={paragraph}
                display="grid"
                gridTemplateColumns="minmax(0, 1fr)"
                gap={4}
                py={7}
                borderBottom="1px solid"
                borderColor="var(--line-700)"
              >
                <Text
                  color="var(--text-300)"
                  lineHeight="1.95"
                  fontSize={{ base: "md", md: "lg" }}
                >
                  {paragraph}
                </Text>
              </Box>
            ))}
          </Box>

          <Box
            className="business-capability-table"
            borderTop="4px solid"
            borderColor="var(--accent-500)"
          >
            <Flex
              gap={5}
              py={4}
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              <Text color="var(--text-100)" fontWeight={800}>
                Skills I am practising
              </Text>
            </Flex>
            {hero.stackHighlights.map((capability) => (
              <Box
                key={capability}
                display="grid"
                gridTemplateColumns="minmax(0, 1fr)"
                gap={3}
                py={4}
                borderBottom="1px solid"
                borderColor="var(--line-700)"
              >
                <Text color="var(--text-100)" fontSize="sm" fontWeight={700}>
                  {capability}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        <SimpleGrid
          className="business-outcome-register"
          columns={{ base: 1, md: 3 }}
          mt={{ base: 12, md: 16 }}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          {about.metrics.map((metric) => (
            <Box
              key={metric.label}
              py={7}
              px={{ base: 0, md: 6 }}
              className="business-outcome-cell"
            >
              <Flex gap={4}>
                <Text
                  color="var(--text-300)"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  {metric.label}
                </Text>
              </Flex>
              <Text
                mt={2}
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={800}
                color="var(--text-100)"
              >
                {metric.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default BusinessAbout;
