import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import ContentCard from './shared/ContentCard'
import SectionShell from './shared/SectionShell'
import { about, sectionContent } from '../data/portfolio'
import { getAnimationDelayClass } from '../utils/animation'

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow={sectionContent.about.eyebrow}
      title={sectionContent.about.title}
      intro={sectionContent.about.description}
      nextSectionId="education"
    >
        <VStack align="stretch" gap={5} mb={8}>
          {about.paragraphs.map((paragraph, index) => (
            <ContentCard key={paragraph} className={`reveal-up ${getAnimationDelayClass(index)}`}>
              <Text color="var(--text-300)" lineHeight="1.9">
                {paragraph}
              </Text>
            </ContentCard>
          ))}
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
          {about.metrics.map((stat) => (
            <ContentCard
              key={stat.label}
              p={6}
              className="reveal-up delay-3"
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.45)',
                transform: 'translateY(-3px)',
                boxShadow: '0 14px 30px rgba(3, 10, 21, 0.5)',
              }}
              transition="all 0.25s ease"
            >
              <Text className="code-font" fontSize="xs" color="var(--text-300)" mb={2}>
                METRIC
              </Text>
              <Heading as="h3" fontSize="4xl" color="var(--accent-300)" mb={3}>
                {stat.value}
              </Heading>
              <Text color="var(--text-300)">{stat.label}</Text>
            </ContentCard>
          ))}
        </SimpleGrid>
    </SectionShell>
  )
}

export default About
