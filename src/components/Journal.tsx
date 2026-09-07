import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import ContentCard from "./shared/ContentCard";
import ExternalAction from "./shared/ExternalAction";
import SectionShell from "./shared/SectionShell";
import {
  sectionContent,
  subsectionContent,
  videos,
  writing,
} from "../data/portfolio";
import type { WritingEntry } from "../types/portfolio";
import { getAnimationDelayClass } from "../utils/animation";
import { getYouTubeEmbedUrl } from "../utils/media";

const getSourceBadgeLabel = (post: WritingEntry): string =>
  post.source === "local" ? "IN_SITE" : "WORDPRESS";

const getPostActionLabel = (post: WritingEntry): string =>
  post.source === "local" ? "READ_HERE" : "READ_POST";

function Journal() {
  return (
    <SectionShell
      id="journal"
      eyebrow={sectionContent.journal.eyebrow}
      title={sectionContent.journal.title}
      intro={sectionContent.journal.description}
      nextSectionId="skills"
    >
      <VStack align="stretch" gap={{ base: 10, md: 14 }}>
        <VStack align="stretch" gap={5}>
          <Box>
            <Text
              className="code-font"
              color="var(--accent-300)"
              fontSize="sm"
              mb={2}
            >
              {subsectionContent.journal.videosEyebrow}
            </Text>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="var(--text-100)"
            >
              {subsectionContent.journal.videosTitle}
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {videos.map((video, index) => (
              <Box
                key={video.id}
                bg="var(--surface-900)"
                borderRadius="lg"
                overflow="hidden"
                border="1px solid"
                borderColor="var(--line-700)"
                className={`reveal-up ${getAnimationDelayClass(index)}`}
                _hover={{
                  transform: "translateY(-3px)",
                  borderColor: "rgba(98, 240, 213, 0.45)",
                  boxShadow: "var(--card-hover-shadow)",
                }}
                transition="all 0.25s ease"
              >
                <Box
                  position="relative"
                  paddingBottom="56.25%"
                  height="0"
                  overflow="hidden"
                  bg="var(--media-shell-bg)"
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    src={getYouTubeEmbedUrl(video.videoId)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Box p={5}>
                  <Heading as="h4" fontSize="lg" mb={2} color="var(--text-100)">
                    {video.title}
                  </Heading>
                  <Text
                    color="var(--text-300)"
                    mb={4}
                    lineHeight="1.75"
                    fontSize="sm"
                  >
                    {video.description}
                  </Text>
                  <ExternalAction
                    href={video.watchLink.href}
                    label="WATCH_ON_YOUTUBE"
                    ariaLabel={video.watchLink.ariaLabel}
                    variant="link"
                    testId={`video-watch-link-${video.id}`}
                  />
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack align="stretch" gap={5}>
          <Box>
            <Text
              className="code-font"
              color="var(--accent-300)"
              fontSize="sm"
              mb={2}
            >
              {subsectionContent.journal.writingEyebrow}
            </Text>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="var(--text-100)"
            >
              {subsectionContent.journal.writingTitle}
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {writing.map((post, index) => (
              <ContentCard
                key={post.href}
                p={0}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                overflow="hidden"
                className={`reveal-up ${getAnimationDelayClass(index)}`}
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: "rgba(98, 240, 213, 0.45)",
                  boxShadow: "var(--card-hover-shadow)",
                }}
              >
                <Box
                  w="100%"
                  h="190px"
                  overflow="hidden"
                  data-thumbnail-height="190px"
                  data-testid={`writing-image-frame-${post.source}-${index}`}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    data-image-fit="cover"
                    data-testid={`writing-image-${post.source}-${index}`}
                  />
                </Box>
                <VStack align="stretch" gap={4} p={6} flex="1">
                  <HStack
                    justify="space-between"
                    align="start"
                    gap={3}
                    flexWrap="wrap"
                  >
                    <Text
                      className="code-font"
                      color="var(--text-300)"
                      fontSize="xs"
                    >
                      {post.publishedDate}
                    </Text>
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
                      fontWeight={500}
                      textTransform="none"
                    >
                      {post.category}
                    </Badge>
                    <Badge
                      px={2.5}
                      py={1}
                      borderRadius="md"
                      className="code-font"
                      bg={
                        post.source === "local"
                          ? "var(--accent-control-bg)"
                          : "rgba(34, 128, 235, 0.18)"
                      }
                      border="1px solid"
                      borderColor={
                        post.source === "local"
                          ? "rgba(98, 240, 213, 0.34)"
                          : "rgba(69, 162, 255, 0.38)"
                      }
                      color="var(--text-100)"
                      fontSize="0.68rem"
                      fontWeight={500}
                      textTransform="none"
                      data-testid={`writing-source-${post.source}-${index}`}
                    >
                      {getSourceBadgeLabel(post)}
                    </Badge>
                  </HStack>

                  <Heading
                    as="h4"
                    fontSize="xl"
                    color="var(--text-100)"
                    lineHeight="1.25"
                  >
                    {post.title}
                  </Heading>
                  <Text color="var(--text-300)" lineHeight="1.8">
                    {post.summary}
                  </Text>

                  <Flex gap={2} wrap="wrap">
                    {post.topics.map((topic) => (
                      <Badge
                        key={topic}
                        px={2.5}
                        py={1}
                        borderRadius="md"
                        className="code-font"
                        bg="var(--accent-control-bg)"
                        border="1px solid"
                        borderColor="rgba(98, 240, 213, 0.34)"
                        color="var(--text-100)"
                        fontSize="0.68rem"
                        fontWeight={500}
                        textTransform="none"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </Flex>

                  <HStack mt="auto">
                    <ExternalAction
                      href={post.href}
                      label={getPostActionLabel(post)}
                      ariaLabel={`Read blog post: ${post.title}`}
                      variant="link"
                      testId={`writing-post-${post.source}-${index}`}
                    />
                  </HStack>
                </VStack>
              </ContentCard>
            ))}
          </SimpleGrid>

          <HStack justify="center" className="reveal-up delay-3">
            <ExternalAction
              href="https://nhamhung.wordpress.com/"
              label="VISIT_BLOG"
              ariaLabel="Visit Learn IT together blog"
              tone="primary"
              testId="journal-visit-blog"
            />
          </HStack>
        </VStack>
      </VStack>
    </SectionShell>
  );
}

export default Journal;
