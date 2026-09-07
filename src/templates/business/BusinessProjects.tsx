import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import ExternalAction from "../../components/shared/ExternalAction";
import LogoMark from "../../components/shared/LogoMark";
import { projects, sectionContent } from "../../data/portfolio";

function BusinessProjects() {
  return (
    <Box
      id="projects"
      className="business-projects business-casebook-section business-case-study-series"
      data-presentation="business-projects"
      py={{ base: 16, md: 24 }}
      data-testid="projects-section"
    >
      <Box maxW="1180px" mx="auto" px={{ base: 4, md: 8 }}>
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
              {sectionContent.projects.eyebrow}
            </Text>
          </Box>
          <Box>
            <Heading
              as="h2"
              tabIndex={-1}
              data-chapter-heading
              className="business-section-title"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1"
              color="var(--text-100)"
            >
              {sectionContent.projects.title}
            </Heading>
            <Text mt={5} maxW="760px" color="var(--text-300)" lineHeight="1.85">
              {sectionContent.projects.description}
            </Text>
          </Box>
        </Box>

        <VStack
          align="stretch"
          gap={0}
          mt={{ base: 10, md: 14 }}
          borderTop="1px solid"
          borderColor="var(--line-700)"
        >
          {projects.map((project) => {
            return (
              <Box
                key={project.id}
                className="business-case-file"
                data-inline-clearance="16px"
                data-testid={`business-case-label-${project.id}`}
                display="grid"
                gridTemplateColumns={{
                  base: "1fr",
                  md: "minmax(0, 1fr)",
                  xl: "minmax(0, 1fr) minmax(280px, 0.64fr)",
                }}
                borderBottom="1px solid"
                borderColor="var(--line-700)"
              >
                <VStack
                  align="stretch"
                  gap={6}
                  minW={0}
                  py={{ base: 0, md: 8 }}
                  px={{ base: 0, md: 7 }}
                  pb={{ base: 8, md: 8 }}
                  borderRight={{ base: "0", xl: "1px solid" }}
                  borderColor="var(--line-700)"
                >
                  <Flex justify="space-between" align="center" gap={5}>
                    <LogoMark
                      logoKey={project.logoKey}
                      logoLabel={project.logoLabel}
                      logoAccent={project.logoAccent}
                      size="lg"
                    />
                    <Text
                      color="var(--text-300)"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      Project snapshot
                    </Text>
                  </Flex>
                  <Heading
                    as="h3"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    color="var(--text-100)"
                  >
                    {project.title}
                  </Heading>
                  <Box>
                    <Text
                      color="var(--accent-300)"
                      fontSize="xs"
                      fontWeight={800}
                      textTransform="uppercase"
                    >
                      What I made
                    </Text>
                    <Text mt={3} color="var(--text-300)" lineHeight="1.9">
                      {project.description}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      color="var(--accent-300)"
                      fontSize="xs"
                      fontWeight={800}
                      textTransform="uppercase"
                    >
                      Skills practised
                    </Text>
                    <Flex gap={2} wrap="wrap" mt={3}>
                      {project.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          px={2.5}
                          py={1}
                          borderRadius="sm"
                          bg="var(--control-bg-soft)"
                          color="var(--text-300)"
                          border="1px solid"
                          borderColor="var(--line-700)"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box
                    pt={5}
                    borderTop="1px solid"
                    borderColor="var(--line-700)"
                  >
                    <Text
                      color="var(--accent-300)"
                      fontSize="xs"
                      fontWeight={800}
                      textTransform="uppercase"
                    >
                      Explore the project
                    </Text>
                    <Text mt={2} color="var(--text-300)" fontSize="sm">
                      Open the project links to see the code, notes, and how it
                      came together.
                    </Text>
                    <HStack gap={3} mt={4} wrap="wrap">
                      {project.actions.map((action, actionIndex) => (
                        <ExternalAction
                          key={action.href}
                          href={action.href}
                          label={action.label}
                          ariaLabel={action.ariaLabel}
                          tone={actionIndex === 0 ? "primary" : "outline"}
                          testId={`business-project-${project.id}-action-${actionIndex}`}
                        />
                      ))}
                    </HStack>
                  </Box>
                </VStack>

                <Box
                  className="business-case-visual"
                  display={{ base: "block", md: "none", xl: "block" }}
                  p={{ base: 0, xl: 7 }}
                  pb={{ base: 8, xl: 7 }}
                >
                  <Image
                    className="business-case-image"
                    src={project.image}
                    alt={project.imageAlt}
                    w="100%"
                    aspectRatio={{ base: "16 / 9", xl: "4 / 5" }}
                    objectFit="cover"
                  />
                  <Text mt={3} color="var(--text-300)" fontSize="xs">
                    Project image / {project.title}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}

export default BusinessProjects;
