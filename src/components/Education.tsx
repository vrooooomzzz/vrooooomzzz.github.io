import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'

import ContentCard from './shared/ContentCard'
import SectionShell from './shared/SectionShell'
import { education, sectionContent } from '../data/portfolio'
import { getAnimationDelayClass } from '../utils/animation'

function Education() {
  return (
    <SectionShell
      id="education"
      eyebrow={sectionContent.education.eyebrow}
      title={sectionContent.education.title}
      intro={sectionContent.education.description}
      nextSectionId="experience"
    >
        <VStack align="stretch" gap={6}>
          {education.map((edu, index) => (
            <ContentCard
              key={edu.institution}
              className={`reveal-up ${getAnimationDelayClass(index)}`}
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.42)',
                transform: 'translateY(-3px)',
                boxShadow: '0 16px 34px rgba(3, 10, 21, 0.55)',
              }}
            >
              <Box display="flex" gap={4} flexWrap="wrap" alignItems="center" mb={4}>
                <Box
                  w="54px"
                  h="54px"
                  borderRadius="md"
                  bg="rgba(34, 128, 235, 0.15)"
                  border="1px solid"
                  borderColor="rgba(69, 162, 255, 0.36)"
                  p={2}
                >
                  <Image src={edu.logo} alt={`${edu.institution} logo`} w="100%" h="100%" objectFit="contain" />
                </Box>
                <Box>
                  <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="var(--text-100)">
                    {edu.degree}
                  </Heading>
                  <Text className="code-font" color="var(--accent-300)" fontSize="sm" mt={1}>
                    {edu.institution}
                  </Text>
                </Box>
              </Box>

              <Box mb={4}>
                <Text color="var(--text-300)">
                  <Text as="span" className="code-font" color="var(--text-100)">
                    PERIOD:
                  </Text>{' '}
                  {edu.period}
                </Text>
                <Text color="var(--text-300)">
                  <Text as="span" className="code-font" color="var(--text-100)">
                    FOCUS:
                  </Text>{' '}
                  {edu.specialization}
                </Text>
              </Box>

              <VStack align="stretch" gap={2}>
                {edu.description.map((item) => (
                  <Text key={item} color="var(--text-300)" lineHeight="1.75" pl={4} position="relative">
                    <Box as="span" position="absolute" left={0} top={0} color="var(--accent-400)">
                      -
                    </Box>
                    {item}
                  </Text>
                ))}
              </VStack>
            </ContentCard>
          ))}
        </VStack>
    </SectionShell>
  )
}

export default Education
