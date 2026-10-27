import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { HiArrowDown } from "react-icons/hi";

import type { SectionId } from "../../types/portfolio";
import { scrollToSection } from "../../utils/scroll";
import { navigation } from "../../data/navigation";

type SectionShellProps = {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro: string;
  nextSectionId?: SectionId;
  children: ReactNode;
};

function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  nextSectionId,
  children,
}: SectionShellProps) {
  const enabled = navigation.filter((item) => item.enabled);
  const next =
    nextSectionId && enabled.some((item) => item.id === nextSectionId)
      ? nextSectionId
      : enabled[enabled.findIndex((item) => item.id === id) + 1]?.id;
  return (
    <Box
      id={id}
      minH="100vh"
      w="100%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      className="engineering-grid"
      data-testid={`${id}-section`}
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <VStack align="stretch" gap={4} mb={12} className="reveal-up">
          <Text
            className="code-font"
            color="var(--text-300)"
            letterSpacing="widest"
            fontSize="xs"
          >
            {eyebrow}
          </Text>
          <Heading
            as="h2"
            tabIndex={-1}
            data-chapter-heading
            fontSize={{ base: "3xl", md: "5xl" }}
            color="var(--text-100)"
          >
            {title}
          </Heading>
          <Text maxW="760px" color="var(--text-300)" lineHeight="1.8">
            {intro}
          </Text>
        </VStack>

        {children}
      </Container>

      {next ? (
        <Box
          role="button"
          tabIndex={0}
          position="absolute"
          bottom={6}
          left="50%"
          transform="translateX(-50%)"
          color="var(--text-300)"
          _hover={{ color: "var(--text-100)" }}
          cursor="pointer"
          onClick={() => scrollToSection(next)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              scrollToSection(next);
            }
          }}
          className="pulse-line"
          display={{ base: "none", md: "block" }}
          aria-label={`Scroll to ${next} section`}
          data-testid={`${id}-next-section`}
        >
          <HiArrowDown size={28} />
        </Box>
      ) : null}
    </Box>
  );
}

export default SectionShell;
