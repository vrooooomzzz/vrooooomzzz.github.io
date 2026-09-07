# Components - Journal Inline Posts

## Journal Component

- **Location**: `src/components/Journal.tsx`
- **Purpose**: Render educational videos and a unified writing list containing local in-site posts and WordPress posts.
- **Responsibilities**:
  - Display source-aware writing cards.
  - Render source badges for local and WordPress posts.
  - Route local cards to in-site post pages.
  - Preserve WordPress cards as external links.
  - Preserve existing video feed behavior.
- **Interfaces**:
  - Consumes `writingEntries` or equivalent aggregate data from portfolio data exports.
  - Uses shared card/action components for visual consistency.

## JournalPostPage Component

- **Location**: Proposed `src/components/JournalPostPage.tsx`
- **Purpose**: Render full local Markdown post content inside the portfolio.
- **Responsibilities**:
  - Resolve active local post by slug.
  - Display title, date, category, topics, source label, and article content.
  - Provide navigation back to the Journal list.
  - Show a graceful not-found state for unknown slugs.
- **Interfaces**:
  - Receives a post slug from app-level hash state.
  - Reads local post data from the static content registry.

## WritingCard Component

- **Location**: Proposed extraction inside `src/components/Journal.tsx` or `src/components/shared/`.
- **Purpose**: Render one writing entry card regardless of local or WordPress source.
- **Responsibilities**:
  - Present metadata consistently.
  - Show source and category badges.
  - Use local in-app navigation for local posts.
  - Use external links for WordPress posts.
- **Interfaces**:
  - Accepts a source-aware writing entry and card index.

## Local Journal Content Registry

- **Location**: Proposed `src/data/journalPosts.ts` and `src/content/journal/`.
- **Purpose**: Provide static local Markdown post metadata and article content.
- **Responsibilities**:
  - Import local Markdown content at build time.
  - Export typed local post entries.
  - Provide stable slugs for hash links.
- **Interfaces**:
  - Exports local post array and lookup helpers.

## Portfolio Data Aggregator

- **Location**: `src/data/portfolio.ts`
- **Purpose**: Continue serving as the central export for app content.
- **Responsibilities**:
  - Export source-aware writing entries.
  - Preserve existing `blog` compatibility where practical or replace with a clearer writing collection.
  - Keep type-safe content aggregation.

## App Routing Orchestrator

- **Location**: `src/App.tsx` and existing layout hook utilities.
- **Purpose**: Coordinate section rendering and local post deep-link rendering.
- **Responsibilities**:
  - Recognize hash-compatible local post URLs.
  - Render `JournalPostPage` when a local post hash is active.
  - Preserve single-page and multi-page section navigation behavior.

## Test Components

- **Locations**: `src/data/portfolio.test.ts`, `src/App.test.tsx`
- **Purpose**: Verify metadata, rendering, and routing behavior.
- **Responsibilities**:
  - Validate local and WordPress writing entries.
  - Verify source badges.
  - Verify local post direct hash rendering.
  - Verify WordPress links remain external.
