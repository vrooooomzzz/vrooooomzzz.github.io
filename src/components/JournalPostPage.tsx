import { Badge, Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { HiArrowLeft } from 'react-icons/hi'

import ContentCard from './shared/ContentCard'
import { getLocalJournalPostBySlug } from '../data/journalPosts'
import type { JournalPostPageProps } from '../templates/types'

const markdownComponents: Components = {
  h1: ({ children }) => (
    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="var(--text-100)" mb={5}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="var(--text-100)" mt={8} mb={4}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h4" fontSize={{ base: 'lg', md: 'xl' }} color="var(--text-100)" mt={7} mb={3}>
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text color="var(--text-300)" lineHeight="1.9" mb={5}>
      {children}
    </Text>
  ),
  strong: ({ children }) => (
    <Box as="strong" color="var(--text-100)" fontWeight={700}>
      {children}
    </Box>
  ),
  em: ({ children }) => <Box as="em">{children}</Box>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http://') || href?.startsWith('https://')

    return (
      <Link
        href={href}
        color="var(--accent-300)"
        textDecoration="underline"
        textUnderlineOffset="3px"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  },
  ul: ({ children }) => (
    <Box as="ul" pl={6} mb={5} color="var(--text-300)">
      {children}
    </Box>
  ),
  ol: ({ children }) => (
    <Box as="ol" pl={6} mb={5} color="var(--text-300)">
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Box as="li" mb={2} lineHeight="1.8">
      {children}
    </Box>
  ),
  blockquote: ({ children }) => (
    <Box
      as="blockquote"
      borderLeft="3px solid"
      borderColor="var(--accent-300)"
      bg="var(--active-nav-bg)"
      px={5}
      py={4}
      mb={5}
    >
      {children}
    </Box>
  ),
  pre: ({ children }) => (
    <Box
      as="pre"
      overflowX="auto"
      bg="var(--media-shell-bg)"
      border="1px solid"
      borderColor="var(--line-700)"
      borderRadius="md"
      p={4}
      mb={5}
    >
      {children}
    </Box>
  ),
  code: ({ children }) => (
    <Box as="code" className="code-font" color="var(--text-100)" fontSize="0.9em">
      {children}
    </Box>
  ),
  img: ({ src, alt }) => (
    <Image src={src} alt={alt ?? ''} maxW="100%" maxH="560px" objectFit="contain" mx="auto" my={6} />
  ),
  hr: () => <Box as="hr" border={0} borderTop="1px solid" borderColor="var(--line-700)" my={8} />,
}

function MarkdownContent({ content }: { content: string }) {
  return <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
}

function JournalPostPage({ slug }: JournalPostPageProps) {
  const post = getLocalJournalPostBySlug(slug)

  return (
    <Box minH="100vh" pt={{ base: '96px', md: '110px' }} pb={{ base: 12, md: 16 }} className="engineering-grid">
      <Container maxW="980px" px={{ base: 4, md: 8 }}>
        <Link
          href="#/journal"
          display="inline-flex"
          alignItems="center"
          gap={2}
          color="var(--accent-300)"
          fontWeight={700}
          mb={6}
          data-testid="journal-post-back-link"
        >
          <HiArrowLeft />
          Back to Journal
        </Link>

        {!post ? (
          <ContentCard p={{ base: 6, md: 8 }} data-testid="journal-post-not-found">
            <Badge
              px={2.5}
              py={1}
              borderRadius="md"
              className="code-font"
              bg="var(--active-nav-bg)"
              border="1px solid"
              borderColor="var(--active-nav-border)"
              color="var(--text-100)"
              mb={4}
            >
              NOT_FOUND
            </Badge>
            <Heading as="h1" color="var(--text-100)" mb={3}>
              Journal post not found
            </Heading>
            <Text color="var(--text-300)" lineHeight="1.8">
              The local journal post link does not match an available entry. Return to Journal to browse the current posts.
            </Text>
          </ContentCard>
        ) : (
          <ContentCard p={0} overflow="hidden" data-testid="journal-post-page">
            <Box
              w="100%"
              aspectRatio={16 / 9}
              overflow="hidden"
              bg="var(--media-shell-bg)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                w="100%"
                h="100%"
                objectFit="contain"
                data-image-fit="contain"
                data-testid="journal-post-image"
              />
            </Box>
            <VStack align="stretch" gap={6} p={{ base: 6, md: 8 }}>
              <HStack justify="space-between" align="start" gap={3} flexWrap="wrap">
                <Text className="code-font" color="var(--text-300)" fontSize="xs">
                  {post.publishedDate}
                </Text>
                <Flex gap={2} wrap="wrap">
                  <Badge
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="var(--active-nav-bg)"
                    border="1px solid"
                    borderColor="var(--active-nav-border)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    textTransform="none"
                  >
                    {post.category}
                  </Badge>
                  <Badge
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="var(--accent-control-bg)"
                    border="1px solid"
                    borderColor="rgba(98, 240, 213, 0.34)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    textTransform="none"
                  >
                    IN_SITE
                  </Badge>
                </Flex>
              </HStack>

              <Box>
                <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)" lineHeight="1.08" mb={4}>
                  {post.title}
                </Heading>
                <Text color="var(--text-300)" lineHeight="1.85">
                  {post.summary}
                </Text>
              </Box>

              <Flex gap={2} wrap="wrap">
                {post.topics.map((topic) => (
                  <Badge
                    key={topic}
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="rgba(34, 128, 235, 0.18)"
                    border="1px solid"
                    borderColor="rgba(69, 162, 255, 0.38)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    textTransform="none"
                  >
                    {topic}
                  </Badge>
                ))}
              </Flex>

              <Box borderTop="1px solid" borderColor="var(--line-700)" pt={6}>
                <MarkdownContent content={post.content} />
              </Box>
            </VStack>
          </ContentCard>
        )}
      </Container>
    </Box>
  )
}

export default JournalPostPage
