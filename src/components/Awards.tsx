import { Badge, Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import ContentCard from './shared/ContentCard'
import SectionShell from './shared/SectionShell'
import { awards, sectionContent } from '../data/portfolio'
import { getAnimationDelayClass } from '../utils/animation'

function Awards() {
  return (
    <SectionShell
      id="awards"
      eyebrow={sectionContent.awards.eyebrow}
      title={sectionContent.awards.title}
      intro={sectionContent.awards.description}
      nextSectionId="projects"
    >
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {awards.map((award, index) => (
            <ContentCard
              key={award.title}
              p={6}
              textAlign="left"
              className={`reveal-up ${getAnimationDelayClass(index)}`}
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.45)',
                transform: 'translateY(-4px)',
                boxShadow: '0 16px 34px rgba(3, 10, 21, 0.55)',
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Box
                  w="48px"
                  h="48px"
                  p={2}
                  borderRadius="md"
                  bg="rgba(34, 128, 235, 0.15)"
                  border="1px solid"
                  borderColor="rgba(69, 162, 255, 0.36)"
                >
                  {award.logo ? (
                    <Image
                      src={award.logo}
                      alt={`${award.organization} logo`}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                    />
                  ) : (
                    <Text
                      role="img"
                      aria-label={`${award.organization} mark`}
                      className="code-font"
                      color="var(--accent-300)"
                      fontSize="xs"
                      fontWeight={800}
                      textAlign="center"
                    >
                      {award.logoText}
                    </Text>
                  )}
                </Box>
                <Badge
                  className="code-font"
                  px={2.5}
                  py={1}
                  borderRadius="md"
                  bg="rgba(98, 240, 213, 0.12)"
                  border="1px solid"
                  borderColor="rgba(98, 240, 213, 0.45)"
                  color="var(--text-100)"
                  fontWeight={500}
                  fontSize="0.65rem"
                >
                  {award.tag}
                </Badge>
              </Box>

              <Heading as="h3" fontSize="xl" color="var(--text-100)" mb={2}>
                {award.title}
              </Heading>
              <Text className="code-font" color="var(--accent-300)" fontSize="sm" mb={3}>
                {award.organization}
              </Text>
              <Text color="var(--text-300)" mb={3} lineHeight="1.75">
                {award.description}
              </Text>
              <Text className="code-font" color="var(--text-300)" fontSize="xs">
                YEAR: {award.year}
              </Text>
            </ContentCard>
          ))}
        </SimpleGrid>
    </SectionShell>
  )
}

export default Awards
