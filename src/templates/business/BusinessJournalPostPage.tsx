import { Box, Image, Link, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { HiArrowLeft } from "react-icons/hi";

import { getLocalJournalPostBySlug } from "../../data/journalPosts";
import type { JournalPostPageProps } from "../types";

const businessMarkdown: Components = {
  h1: ({ children }) => (
    <Text as="h2" className="business-article-h2">
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text as="h3" className="business-article-h3">
      {children}
    </Text>
  ),
  h3: ({ children }) => (
    <Text as="h4" className="business-article-h4">
      {children}
    </Text>
  ),
  p: ({ children }) => <Text as="p">{children}</Text>,
  a: ({ href, children }) => {
    const external =
      href?.startsWith("http://") || href?.startsWith("https://");
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => <Box as="ul">{children}</Box>,
  ol: ({ children }) => <Box as="ol">{children}</Box>,
  li: ({ children }) => <Box as="li">{children}</Box>,
  blockquote: ({ children }) => <Box as="blockquote">{children}</Box>,
  pre: ({ children }) => (
    <Box as="pre" overflowX="auto">
      {children}
    </Box>
  ),
  code: ({ children }) => <Box as="code">{children}</Box>,
  img: ({ src, alt }) => <Image src={src} alt={alt ?? ""} />,
  hr: () => <Box as="hr" />,
};

function BusinessJournalPostPage({ slug }: JournalPostPageProps) {
  const post = getLocalJournalPostBySlug(slug);
  return (
    <Box
      className="business-publication-page"
      data-presentation="business-journal-post"
    >
      <Link
        href="#/journal"
        className="business-article-back"
        data-testid="journal-post-back-link"
      >
        <HiArrowLeft />
        Back to Journal
      </Link>
      {!post ? (
        <Box
          className="business-article-not-found"
          data-testid="journal-post-not-found"
        >
          <Text>404 / Journal</Text>
          <Text as="h1">Journal post not found</Text>
          <Text>
            The local journal post link does not match an available entry.
            Return to Journal to browse the current posts.
          </Text>
        </Box>
      ) : (
        <Box
          as="article"
          className="business-publication-article"
          data-testid="journal-post-page"
        >
          <Box as="header" className="business-article-header">
            <Text>
              {post.publishedDate} / {post.category}
            </Text>
            <Text as="h1">{post.title}</Text>
            <Text>{post.summary}</Text>
            <Text>{post.topics.join(" · ")}</Text>
          </Box>
          <Box as="figure" className="business-article-figure">
            <Image
              src={post.image}
              alt={post.imageAlt}
              data-image-fit="contain"
              data-testid="journal-post-image"
            />
            <Text as="figcaption">{post.title}</Text>
          </Box>
          <Box className="business-article-body">
            <ReactMarkdown components={businessMarkdown}>
              {post.content}
            </ReactMarkdown>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default BusinessJournalPostPage;
