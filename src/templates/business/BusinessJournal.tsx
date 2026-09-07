import { Box, Image, Link, Text } from "@chakra-ui/react";

import ExternalAction from "../../components/shared/ExternalAction";
import {
  sectionContent,
  subsectionContent,
  videos,
  writing,
} from "../../data/portfolio";
import { getYouTubeEmbedUrl } from "../../utils/media";

function BusinessJournal() {
  return (
    <Box
      as="section"
      id="journal"
      className="business-casebook-section business-journal-issue"
      data-presentation="business-journal"
      data-testid="journal-section"
    >
      <Box className="business-journal-masthead">
        <Text>{sectionContent.journal.eyebrow}</Text>
        <Text
          as="h2"
          tabIndex={-1}
          data-chapter-heading
          className="business-section-title"
        >
          {sectionContent.journal.title}
        </Text>
        <Text>{sectionContent.journal.description}</Text>
      </Box>
      <Box className="business-subsection-heading">
        <Text>{subsectionContent.journal.videosEyebrow}</Text>
        <Text as="h3">{subsectionContent.journal.videosTitle}</Text>
      </Box>
      <Box className="business-journal-lead">
        {videos.map((video) => (
          <Box
            as="article"
            key={video.id}
            className="business-video-feature"
            data-aligned-card="true"
            data-testid={`business-video-card-${video.id}`}
          >
            <Box className="business-video-frame">
              <iframe
                src={getYouTubeEmbedUrl(video.videoId)}
                title={video.title}
                allowFullScreen
              />
            </Box>
            <Box className="business-video-body">
              <Text as="h3">{video.title}</Text>
              <Text
                className="business-inline-detail business-video-description"
                data-testid={`business-video-description-${video.id}`}
              >
                <Text as="strong" className="business-inline-label">
                  Description:
                </Text>{" "}
                {video.description}
              </Text>
              <Box className="business-video-action">
                <ExternalAction
                  href={video.watchLink.href}
                  label="Watch on YouTube"
                  ariaLabel={video.watchLink.ariaLabel}
                  variant="link"
                  testId={`video-watch-link-${video.id}`}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="business-subsection-heading">
        <Text>{subsectionContent.journal.writingEyebrow}</Text>
        <Text as="h3">{subsectionContent.journal.writingTitle}</Text>
      </Box>
      <Box className="business-writing-index">
        {writing.map((post, index) => (
          <Box as="article" key={post.href} className="business-writing-entry">
            <Image src={post.image} alt={post.imageAlt} />
            <Box className="business-writing-copy">
              <Text as="h3">{post.title}</Text>
              <Box
                className="business-inline-details"
                data-testid={`business-writing-details-${index}`}
              >
                <Text className="business-inline-detail business-inline-meta">
                  <Text as="strong" className="business-inline-label">
                    Published:
                  </Text>{" "}
                  {post.publishedDate}
                  <Text
                    as="span"
                    className="business-inline-divider"
                    aria-hidden="true"
                  >
                    /
                  </Text>
                  <Text as="strong" className="business-inline-label">
                    Category:
                  </Text>{" "}
                  {post.category}
                </Text>
                <Text className="business-inline-detail">
                  <Text as="strong" className="business-inline-label">
                    Summary:
                  </Text>{" "}
                  {post.summary}
                </Text>
                <Text className="business-inline-detail">
                  <Text as="strong" className="business-inline-label">
                    Topics:
                  </Text>{" "}
                  {post.topics.join(" · ")}
                </Text>
              </Box>
            </Box>
            <Link
              href={post.href}
              aria-label={`Read blog post: ${post.title}`}
              data-testid={`writing-post-${post.source}-${index}`}
            >
              {post.source === "local" ? "Read here" : "Read post"}
            </Link>
          </Box>
        ))}
      </Box>
      <ExternalAction
        href="https://nhamhung.wordpress.com/"
        label="Visit blog"
        ariaLabel="Visit Learn IT together blog"
        testId="journal-visit-blog"
      />
    </Box>
  );
}

export default BusinessJournal;
