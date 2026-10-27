import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import ContentCard from "./shared/ContentCard";
import LogoMark from "./shared/LogoMark";
import SectionShell from "./shared/SectionShell";
import { projects, sectionContent } from "../data/portfolio";
import { getAnimationDelayClass } from "../utils/animation";

function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow={sectionContent.projects.eyebrow}
      title={sectionContent.projects.title}
      intro={sectionContent.projects.description}
      nextSectionId="gallery"
    >
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {projects.map((project, index) => (
          <ContentCard
            key={project.title}
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            _hover={{
              borderColor: "rgba(98, 240, 213, 0.45)",
              transform: "translateY(-4px)",
              boxShadow: "0 18px 38px rgba(3, 10, 21, 0.55)",
            }}
            className={`reveal-up ${getAnimationDelayClass(index)}`}
          >
            <VStack align="stretch" gap={4}>
              <HStack align="center" gap={4}>
                <LogoMark
                  logoKey={project.logoKey}
                  logoLabel={project.logoLabel}
                  logoAccent={project.logoAccent}
                  size="xl"
                />
                <Box minW={0}>
                  <Text
                    className="code-font"
                    fontSize="xs"
                    color="var(--text-300)"
                    mb={1}
                  >
                    ANALYTICAL STUDY
                  </Text>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    color="var(--text-100)"
                    lineHeight="1.2"
                  >
                    {project.title}
                  </Heading>
                </Box>
              </HStack>
              <Text color="var(--text-300)" lineHeight="1.8">
                {project.description}
              </Text>

              <Flex gap={2} wrap="wrap">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="rgba(34, 128, 235, 0.18)"
                    border="1px solid"
                    borderColor="rgba(69, 162, 255, 0.36)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    fontWeight={500}
                  >
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </VStack>

            <details
              className="case-study-details"
              data-testid={`case-study-${project.id}`}
            >
              <summary data-testid={`case-study-${project.id}-toggle`}>
                Read the case study
              </summary>
              <dl>
                {project.caseStudy?.map((part) => (
                  <div key={part.label}>
                    <dt>{part.label}</dt>
                    <dd>{part.text}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </ContentCard>
        ))}
      </SimpleGrid>
    </SectionShell>
  );
}

export default Projects;
