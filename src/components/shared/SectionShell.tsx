import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { HiArrowDown } from 'react-icons/hi'

import type { SectionId } from '../../types/portfolio'
import { scrollToSection } from '../../utils/scroll'

type SectionShellProps = {
  id: SectionId
  eyebrow: string
  title: string
  intro: string
  nextSectionId?: SectionId
  children: ReactNode
}

function SectionShell({ id, eyebrow, title, intro, nextSectionId, children }: SectionShellProps) {
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
          <Text className="code-font" color="var(--text-300)" letterSpacing="widest" fontSize="xs">
            {eyebrow}
          </Text>
          <Heading
            as="h2"
            tabIndex={-1}
            data-chapter-heading
            fontSize={{ base: '3xl', md: '5xl' }}
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

      {nextSectionId ? (
        <Box
          role="button"
          tabIndex={0}
          position="absolute"
          bottom={6}
          left="50%"
          transform="translateX(-50%)"
          color="var(--text-300)"
          _hover={{ color: 'var(--text-100)' }}
          cursor="pointer"
          onClick={() => scrollToSection(nextSectionId)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              scrollToSection(nextSectionId)
            }
          }}
          className="pulse-line"
          display={{ base: 'none', md: 'block' }}
          aria-label={`Scroll to ${nextSectionId} section`}
          data-testid={`${id}-next-section`}
        >
          <HiArrowDown size={28} />
        </Box>
      ) : null}
    </Box>
  )
}

export default SectionShell
