import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

import ExternalAction from './shared/ExternalAction'
import { hero, profile } from '../data/portfolio'
import type { ExternalLink } from '../types/portfolio'
import { scrollToSection } from '../utils/scroll'

const getSocialIcon = (link: ExternalLink) => {
  if (link.label.toLowerCase().includes('github')) {
    return <FaGithub size={22} />
  }

  if (link.label.toLowerCase().includes('linkedin')) {
    return <FaLinkedin size={22} />
  }

  return <FaEnvelope size={22} />
}

const renderHeadline = () => {
  const [beforeHighlight, afterHighlight] = hero.headline.split(hero.highlightedPhrase)

  if (!beforeHighlight || !afterHighlight) {
    return hero.headline
  }

  return (
    <>
      {beforeHighlight}
      <Box as="span" color="var(--accent-300)">
        {' '}
        {hero.highlightedPhrase}{' '}
      </Box>
      {afterHighlight}
    </>
  )
}

function Hero() {
  return (
    <Box
      id="home"
      minH="100vh"
      w="100%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: '96px', md: '110px' }}
      pb={{ base: 16, md: 20 }}
      px={0}
      className="engineering-grid"
    >
      <Container maxW="1280px" px={{ base: 4, md: 8 }}>
        <Flex direction={{ base: 'column', xl: 'row' }} gap={{ base: 10, xl: 14 }} align="stretch">
          <VStack align={{ base: 'flex-start', lg: 'flex-start' }} gap={6} flex={1.1} className="reveal-up">
            <HStack gap={3} flexWrap="wrap">
              {hero.statusBadges.map((badge, index) => (
                <Badge
                  key={badge}
                  className="code-font"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontWeight={500}
                  fontSize="0.72rem"
                  border="1px solid"
                  borderColor={index === 0 ? 'rgba(69, 162, 255, 0.5)' : 'rgba(98, 240, 213, 0.45)'}
                  bg={index === 0 ? 'rgba(34, 128, 235, 0.16)' : 'rgba(98, 240, 213, 0.1)'}
                  color="var(--text-100)"
                >
                  {badge}
                </Badge>
              ))}
            </HStack>

            <VStack align="flex-start" gap={3}>
              <Text className="code-font" fontSize={{ base: 'sm', md: 'md' }} color="var(--text-300)">
                {hero.eyebrow}
              </Text>
              <Heading
                as="h1"
                tabIndex={-1}
                data-chapter-heading
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                lineHeight="1.05"
                color="var(--text-100)"
              >
                {renderHeadline()}
              </Heading>
            </VStack>

            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="720px" color="var(--text-300)" lineHeight="1.85">
              {hero.intro}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3} w="full">
              {hero.stats.map((stat) => (
                <Box key={stat.label} p={4} borderRadius="md" bg="var(--surface-900)" border="1px solid" borderColor="var(--line-700)">
                  <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                    {stat.label.toUpperCase()}
                  </Text>
                  <Text fontSize="xl" fontWeight={700} color="var(--text-100)">
                    {stat.value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            <HStack gap={3} pt={2} flexWrap="wrap" justify="center" w="100%">
              <Button
                onClick={() => scrollToSection(hero.primaryAction.sectionId)}
                bg="var(--primary-bg)"
                color="var(--primary-text)"
                border="1px solid"
                borderColor="rgba(118, 168, 255, 0.6)"
                _hover={{ bg: 'var(--primary-hover-bg)' }}
                aria-label={hero.primaryAction.ariaLabel}
                data-testid="hero-primary-action"
              >
                {hero.primaryAction.label}
              </Button>
              <Button
                onClick={() => scrollToSection(hero.secondaryAction.sectionId)}
                variant="outline"
                borderColor="rgba(118, 168, 255, 0.45)"
                color="var(--text-100)"
                bg="rgba(34, 128, 235, 0.1)"
                _hover={{ bg: 'rgba(34, 128, 235, 0.2)' }}
                aria-label={hero.secondaryAction.ariaLabel}
                data-testid="hero-secondary-action"
              >
                {hero.secondaryAction.label}
              </Button>
              <ExternalAction
                href={profile.resume.href}
                label={profile.resume.label}
                ariaLabel={profile.resume.ariaLabel}
                icon={<FiDownload />}
                download={profile.resume.fileName}
                testId="hero-resume-download"
              />
            </HStack>

            <HStack gap={4} justify="center" w="100%">
              {profile.socialLinks.map((link) => (
                <ExternalAction
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  ariaLabel={link.ariaLabel}
                  icon={getSocialIcon(link)}
                  variant="icon"
                  testId={`hero-social-link-${link.label.toLowerCase()}`}
                />
              ))}
            </HStack>
          </VStack>

          <VStack flex={0.9} align="stretch" gap={4} className="reveal-up delay-1">
            <Box
              bg="var(--surface-800)"
              border="1px solid"
              borderColor="var(--line-500)"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="var(--elevated-shadow)"
            >
              <Flex
                px={4}
                py={3}
                justify="space-between"
                align="center"
                bg="var(--panel-header-bg)"
                borderBottom="1px solid"
                borderColor="var(--line-700)"
              >
                <Text className="code-font" fontSize="xs" color="var(--text-300)">
                  ENGINEERING SNAPSHOT
                </Text>
                <HStack gap={1.5}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#ee6a5f" />
                  <Box w="8px" h="8px" borderRadius="full" bg="#f3be4e" />
                  <Box w="8px" h="8px" borderRadius="full" bg="#61c554" />
                </HStack>
              </Flex>

              <Box p={{ base: 4, md: 6 }}>
                <HStack gap={4} align="start" mb={4}>
                  <Box
                    w={{ base: '90px', md: '120px' }}
                    h={{ base: '90px', md: '120px' }}
                    borderRadius="lg"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="rgba(118, 168, 255, 0.4)"
                    className="float-soft"
                  >
                    <Image src={profile.profileImage} alt={profile.name} w="100%" h="100%" objectFit="cover" />
                  </Box>
                  <Box>
                    <Text className="code-font" fontSize="xs" color="var(--text-300)">
                      CURRENT ROLE
                    </Text>
                    <Text color="var(--text-100)" fontWeight={600} mt={1}>
                      {profile.role}
                    </Text>
                    <Text className="code-font" fontSize="xs" color="var(--text-300)" mt={3}>
                      LOCATION
                    </Text>
                    <Text color="var(--text-100)" mt={1}>
                      {profile.location}
                    </Text>
                  </Box>
                </HStack>

                <Box pt={2} borderTop="1px solid" borderColor="var(--line-700)">
                  <Text className="code-font" fontSize="xs" color="var(--text-300)" mb={3}>
                    ACTIVE STACK
                  </Text>
                  <Flex gap={2} wrap="wrap">
                    {hero.stackHighlights.map((item) => (
                      <Badge
                        key={item}
                        borderRadius="md"
                        px={2.5}
                        py={1}
                        fontSize="0.68rem"
                        className="code-font"
                        bg="rgba(34, 128, 235, 0.18)"
                        border="1px solid"
                        borderColor="rgba(69, 162, 255, 0.38)"
                        color="var(--text-100)"
                        fontWeight={500}
                      >
                        {item}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Box>
          </VStack>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        color="var(--text-300)"
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        className="pulse-line"
        _hover={{ color: 'var(--text-100)' }}
        display={{ base: 'none', md: 'block' }}
        aria-label="Scroll to about section"
        data-testid="hero-next-section"
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Hero
