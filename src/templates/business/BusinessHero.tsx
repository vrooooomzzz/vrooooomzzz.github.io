import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

import ExternalAction from "../../components/shared/ExternalAction";
import { hero, profile } from "../../data/portfolio";
import { scrollToSection } from "../../utils/scroll";

function BusinessHero() {
  return (
    <Box
      id="home"
      className="business-hero business-casebook-cover"
      data-presentation="business-home"
      py={{ base: 12, md: 18 }}
    >
      <Container maxW="1180px" px={{ base: 4, md: 8 }}>
        <Flex
          justify="space-between"
          align="flex-end"
          gap={5}
          pb={5}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Box>
            <Text
              color="var(--accent-300)"
              fontSize="xs"
              fontWeight={800}
              textTransform="uppercase"
            >
              Editorial casebook
            </Text>
            <Text mt={2} color="var(--text-300)" fontSize="sm">
              A quick introduction and a few things I have made
            </Text>
          </Box>
          <Text color="var(--text-300)" fontSize="xs" textAlign="right">
            Current edition
          </Text>
        </Flex>

        <Box
          className="business-cover-grid"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            xl: "minmax(0, 1.18fr) minmax(300px, 0.62fr)",
          }}
          gap={{ base: 10, xl: 14 }}
          py={{ base: 10, md: 14 }}
          alignItems="start"
        >
          <VStack align="stretch" gap={7} minW={0}>
            <Box>
              <Text
                color="var(--text-300)"
                fontSize="sm"
                fontWeight={700}
                textTransform="uppercase"
              >
                {profile.role}
              </Text>
              <Heading
                as="h1"
                tabIndex={-1}
                data-chapter-heading
                fontSize={{ base: "5xl", md: "7xl" }}
                lineHeight="0.98"
                color="var(--text-100)"
                mt={3}
                overflowWrap="anywhere"
              >
                {profile.name}
              </Heading>
            </Box>

            <Box
              className="business-opening-statement"
              pl={{ base: 0, md: 6 }}
              borderLeft={{ base: "0", md: "4px solid" }}
              borderColor="var(--accent-500)"
            >
              <Text
                color="var(--accent-300)"
                fontSize="xs"
                fontWeight={800}
                textTransform="uppercase"
              >
                Hello, here is what I am learning
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                lineHeight="1.25"
                color="var(--text-100)"
                mt={3}
                maxW="860px"
              >
                {hero.headline}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
                color="var(--text-300)"
                maxW="800px"
                mt={5}
              >
                {hero.intro}
              </Text>
            </Box>

            <Flex gap={3} wrap="wrap">
              <Button
                onClick={() => scrollToSection("projects")}
                bg="var(--primary-bg)"
                color="var(--primary-text)"
                _hover={{
                  bg: "var(--primary-hover-bg)",
                  transform: "translateY(-2px)",
                }}
                data-testid="business-hero-primary-action"
              >
                Explore my projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                borderColor="var(--line-500)"
                color="var(--text-100)"
                _hover={{ bg: "var(--control-bg-soft)" }}
                data-testid="business-hero-secondary-action"
              >
                Get in touch
              </Button>
              <ExternalAction
                href={profile.resume.href}
                label={profile.resume.label}
                ariaLabel={profile.resume.ariaLabel}
                icon={<FiDownload />}
                download={profile.resume.fileName}
                testId="business-hero-resume-download"
              />
            </Flex>
          </VStack>

          <Box
            className="business-subject-record"
            borderTop="4px solid"
            borderColor="var(--accent-500)"
          >
            <Image
              src={profile.profileImage}
              alt={`${profile.name} profile`}
              w="100%"
              aspectRatio="4 / 3.5"
              objectFit="cover"
            />
            <Box
              borderLeft="1px solid"
              borderRight="1px solid"
              borderColor="var(--line-700)"
            >
              {[
                ["Student", profile.name],
                ["Current focus", profile.role],
                ["Based in", profile.location],
              ].map(([label, value]) => (
                <Box
                  key={label}
                  display="grid"
                  gridTemplateColumns="88px minmax(0, 1fr)"
                  gap={4}
                  px={4}
                  py={3}
                  borderBottom="1px solid"
                  borderColor="var(--line-700)"
                >
                  <Text
                    color="var(--text-300)"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {label}
                  </Text>
                  <Text
                    color="var(--text-100)"
                    fontSize="sm"
                    fontWeight={700}
                    overflowWrap="anywhere"
                  >
                    {value}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          className="business-capability-register"
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "180px minmax(0, 1fr)" }}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Box
            py={5}
            pr={{ base: 0, md: 6 }}
            borderRight={{ base: "0", md: "1px solid" }}
            borderColor="var(--line-700)"
          >
            <Text
              color="var(--accent-300)"
              fontSize="xs"
              fontWeight={800}
              textTransform="uppercase"
            >
              Learning toolkit
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }}>
            {hero.stackHighlights.map((capability) => (
              <Flex
                key={capability}
                gap={3}
                px={{ base: 0, md: 5 }}
                py={5}
                borderBottom={{ base: "1px solid", md: "0" }}
                borderColor="var(--line-700)"
              >
                <Text color="var(--text-100)" fontSize="sm" fontWeight={700}>
                  {capability}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>

        <SimpleGrid
          className="business-evidence-register"
          columns={{ base: 1, sm: 3 }}
          mt={8}
        >
          {hero.stats.map((stat) => (
            <Box key={stat.label} py={5} px={{ base: 0, sm: 5 }}>
              <Flex gap={4}>
                <Text
                  color="var(--text-300)"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  {stat.label}
                </Text>
              </Flex>
              <Text
                mt={2}
                color="var(--text-100)"
                fontSize="xl"
                fontWeight={800}
              >
                {stat.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default BusinessHero;
