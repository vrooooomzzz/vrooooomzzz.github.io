import { Badge, Box, Heading, Text, VStack } from '@chakra-ui/react'

import ContentCard from './shared/ContentCard'
import SectionShell from './shared/SectionShell'
import { experience, sectionContent } from '../data/portfolio'
import { getAnimationDelayClass } from '../utils/animation'

function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow={sectionContent.experience.eyebrow}
      title={sectionContent.experience.title}
      intro={sectionContent.experience.description}
      nextSectionId="awards"
    >
        <VStack align="stretch" gap={8} position="relative" pl={{ base: 0, md: 8 }}>
          <Box
            position="absolute"
            left={{ base: '10px', md: '22px' }}
            top="6px"
            bottom="8px"
            w="2px"
            bg="rgba(118, 168, 255, 0.4)"
            className="pulse-line"
          />

          {experience.map((exp, index) => (
            <Box key={`${exp.company}-${exp.title}`} position="relative" pl={{ base: 8, md: 10 }} className={`reveal-up ${getAnimationDelayClass(index)}`}>
              <Box
                position="absolute"
                left={{ base: '2px', md: '14px' }}
                top="12px"
                w="18px"
                h="18px"
                borderRadius="full"
                bg="var(--accent-500)"
                border="3px solid"
                borderColor="var(--bg-900)"
                boxShadow="0 0 0 3px rgba(69, 162, 255, 0.35)"
              />

              <ContentCard
                p={{ base: 5, md: 6 }}
                _hover={{
                  borderColor: 'rgba(98, 240, 213, 0.42)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 16px 38px rgba(3, 10, 21, 0.55)',
                }}
              >
                <VStack align="stretch" gap={3}>
                  <Box display="flex" justifyContent="space-between" gap={4} flexWrap="wrap" alignItems="center">
                    <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="var(--text-100)">
                      {exp.title}
                    </Heading>
                    <Badge
                      px={3}
                      py={1.5}
                      borderRadius="full"
                      className="code-font"
                      bg="rgba(34, 128, 235, 0.18)"
                      border="1px solid"
                      borderColor="rgba(69, 162, 255, 0.42)"
                      color="var(--text-100)"
                      fontWeight={500}
                    >
                      {exp.period}
                    </Badge>
                  </Box>

                  <Text className="code-font" color="var(--accent-300)" fontSize="sm">
                    {exp.company}
                  </Text>

                  <VStack align="stretch" gap={2}>
                    {exp.description.map((item) => (
                      <Text key={item} color="var(--text-300)" lineHeight="1.75" pl={4} position="relative">
                        <Box as="span" position="absolute" left={0} top={0} color="var(--accent-400)">
                          -
                        </Box>
                        {item}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              </ContentCard>
            </Box>
          ))}
        </VStack>
    </SectionShell>
  )
}

export default Experience
