import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import ContentCard from "./shared/ContentCard";
import LogoMark from "./shared/LogoMark";
import SectionShell from "./shared/SectionShell";
import {
  certificates,
  sectionContent,
  skills,
  subsectionContent,
} from "../data/portfolio";
import type { CertificateEntry, SkillEntry } from "../types/portfolio";
import { getAnimationDelayClass } from "../utils/animation";

function SkillTile({ skill }: { skill: SkillEntry }) {
  return (
    <Box
      as="li"
      display="flex"
      alignItems="center"
      gap={2}
      minH="40px"
      px={2.5}
      py={2}
      borderRadius="md"
      bg="var(--surface-800)"
      border="1px solid"
      borderColor="var(--line-700)"
      transition="all 0.2s ease"
      _hover={{
        transform: "translateY(-2px)",
        borderColor: "rgba(98, 240, 213, 0.4)",
        bg: "var(--control-hover-bg)",
      }}
    >
      <LogoMark
        logoKey={skill.logoKey}
        logoLabel={skill.logoLabel}
        logoAccent={skill.logoAccent}
        size="xs"
      />
      <Text
        color="var(--text-100)"
        fontSize="xs"
        fontWeight={650}
        lineHeight="1.25"
      >
        {skill.label}
      </Text>
    </Box>
  );
}

function Skills() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateEntry | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  const openCertificateInNewTab = (file: string) => {
    window.open(file, "_blank", "noopener,noreferrer");
  };

  return (
    <SectionShell
      id="skills"
      eyebrow={sectionContent.skills.eyebrow}
      title={sectionContent.skills.title}
      intro={sectionContent.skills.description}
      nextSectionId="contact"
    >
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6} mb={8}>
        {skills.map((category, index) => (
          <ContentCard
            key={category.category}
            p={6}
            className={`reveal-up ${getAnimationDelayClass(index)}`}
            _hover={{
              transform: "translateY(-3px)",
              borderColor: "rgba(98, 240, 213, 0.45)",
              boxShadow: "var(--card-hover-shadow)",
            }}
          >
            <Text
              className="code-font"
              color="var(--accent-300)"
              fontSize="sm"
              mb={4}
            >
              {category.category.toUpperCase()}
            </Text>
            <Box
              as="ul"
              display="flex"
              flexWrap="wrap"
              gap={2.5}
              p={0}
              m={0}
              listStyleType="none"
            >
              {category.skills.map((skill) => (
                <SkillTile key={skill.label} skill={skill} />
              ))}
            </Box>
          </ContentCard>
        ))}
      </SimpleGrid>

      <VStack align="stretch" gap={4} className="reveal-up delay-2">
        <HStack justify="space-between" align="end" flexWrap="wrap" gap={3}>
          <Box>
            <Text
              className="code-font"
              color="var(--accent-300)"
              fontSize="sm"
              mb={2}
            >
              {subsectionContent.skills.certificatesEyebrow}
            </Text>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="var(--text-100)"
            >
              {subsectionContent.skills.certificatesTitle}
            </Heading>
          </Box>
          <Text color="var(--text-300)" maxW="560px" fontSize="sm">
            {subsectionContent.skills.certificatesDescription}
          </Text>
        </HStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
          {certificates.map((certificate, index) => (
            <Box
              key={certificate.title}
              role="button"
              tabIndex={0}
              aria-label={certificate.ariaLabel}
              onClick={() => setSelectedCertificate(certificate)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedCertificate(certificate);
                }
              }}
              p={4}
              borderRadius="xl"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              transition="all 0.25s ease"
              className={`reveal-up ${getAnimationDelayClass(index)}`}
              _hover={{
                transform: "translateY(-4px)",
                borderColor: "rgba(98, 240, 213, 0.48)",
                boxShadow: "var(--card-hover-shadow)",
              }}
              data-testid={`certificate-card-${certificate.title.toLowerCase().replaceAll(" ", "-")}`}
            >
              <Box
                overflow="hidden"
                borderRadius="lg"
                border="1px solid"
                borderColor="var(--line-700)"
                bg="var(--media-shell-bg)"
                mb={4}
              >
                <object
                  aria-label={`${certificate.title} preview`}
                  data={`${certificate.file}#page=1&view=FitH`}
                  type="application/pdf"
                  style={{
                    width: "100%",
                    height: "320px",
                    border: "0",
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <Box
                    h="320px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={2}
                    px={6}
                    textAlign="center"
                  >
                    <Text color="var(--text-100)" fontWeight={600}>
                      Preview unavailable in this browser
                    </Text>
                    <Text color="var(--text-300)" fontSize="sm">
                      Click this card to open the certificate.
                    </Text>
                  </Box>
                </object>
              </Box>
              <VStack align="stretch" gap={2}>
                <HStack justify="space-between" align="start" gap={3}>
                  <HStack align="center" gap={3} minW={0}>
                    <LogoMark
                      logoKey={certificate.logoKey}
                      logoLabel={certificate.logoLabel}
                      logoAccent={certificate.logoAccent}
                      size="lg"
                    />
                    <Box minW={0}>
                      <Heading as="h5" fontSize="lg" color="var(--text-100)">
                        {certificate.title}
                      </Heading>
                      <Text color="var(--text-300)" fontSize="sm">
                        {certificate.issuer}
                      </Text>
                    </Box>
                  </HStack>
                  <Badge
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    fontSize="0.68rem"
                    fontWeight={500}
                    bg="rgba(34, 128, 235, 0.18)"
                    border="1px solid"
                    borderColor="rgba(69, 162, 255, 0.36)"
                    color="var(--text-100)"
                    textTransform="none"
                  >
                    {certificate.kind}
                  </Badge>
                </HStack>
                <Text color="var(--text-300)" fontSize="sm" lineHeight="1.7">
                  {certificate.description}
                </Text>
                <Text
                  color="var(--accent-300)"
                  fontSize="sm"
                  className="code-font"
                >
                  Click to expand PDF
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {selectedCertificate ? (
        <Box
          position="fixed"
          inset={0}
          zIndex={2000}
          bg="var(--modal-overlay-bg)"
          backdropFilter="blur(8px)"
          px={{ base: 4, md: 8 }}
          pt={{ base: 20, md: 24 }}
          pb={{ base: 4, md: 6 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          overflowY="auto"
          onClick={() => setSelectedCertificate(null)}
          data-testid="certificate-modal"
        >
          <Box
            w="min(1100px, 100%)"
            minH={{ base: "calc(100dvh - 7rem)", md: "calc(100dvh - 9rem)" }}
            h={{ base: "calc(100dvh - 7rem)", md: "calc(100dvh - 9rem)" }}
            bg="var(--surface-900)"
            border="1px solid"
            borderColor="var(--line-500)"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="var(--elevated-shadow)"
            display="flex"
            flexDirection="column"
            onClick={(event) => event.stopPropagation()}
          >
            <HStack
              justify="space-between"
              align={{ base: "start", md: "center" }}
              flexWrap="wrap"
              px={{ base: 4, md: 6 }}
              py={4}
              borderBottom="1px solid"
              borderColor="var(--line-700)"
              bg="var(--panel-header-bg)"
            >
              <HStack align="center" gap={3}>
                <LogoMark
                  logoKey={selectedCertificate.logoKey}
                  logoLabel={selectedCertificate.logoLabel}
                  logoAccent={selectedCertificate.logoAccent}
                  size="lg"
                />
                <Box>
                  <Heading
                    as="h3"
                    fontSize={{ base: "md", md: "lg" }}
                    color="var(--text-100)"
                  >
                    {selectedCertificate.title}
                  </Heading>
                  <Text color="var(--text-300)" fontSize="sm">
                    {selectedCertificate.issuer} - {selectedCertificate.kind}
                  </Text>
                  <Text
                    color="var(--text-300)"
                    fontSize="sm"
                    lineHeight="1.6"
                    maxW="640px"
                    mt={1}
                  >
                    {selectedCertificate.description}
                  </Text>
                </Box>
              </HStack>
              <HStack
                gap={3}
                flexWrap="wrap"
                justify={{ base: "flex-start", md: "flex-end" }}
              >
                <Button
                  size="sm"
                  bg="var(--active-nav-bg)"
                  border="1px solid"
                  borderColor="var(--active-nav-border)"
                  color="var(--text-100)"
                  _hover={{ bg: "var(--control-hover-bg)" }}
                  onClick={() =>
                    openCertificateInNewTab(selectedCertificate.file)
                  }
                  data-testid="certificate-open-new-tab"
                >
                  Open in new tab
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  color="var(--text-300)"
                  _hover={{
                    bg: "var(--control-hover-bg)",
                    color: "var(--text-100)",
                  }}
                  onClick={() => setSelectedCertificate(null)}
                  data-testid="certificate-close"
                >
                  Close
                </Button>
              </HStack>
            </HStack>
            <Box flex="1" minH={0} bg="var(--media-shell-bg)">
              <iframe
                title={`${selectedCertificate.title} expanded preview`}
                src={`${selectedCertificate.file}#page=1&view=FitH`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </SectionShell>
  );
}

export default Skills;
