# Unit of Work - Journal Inline Posts

## Unit 1: Journal Inline Posts

### Purpose

Add local Markdown-backed Journal posts directly inside the portfolio while preserving existing WordPress-linked posts and educational videos.

### Responsibilities

- Define source-aware writing entry types for local and WordPress posts.
- Add static local journal post content and metadata.
- Combine local and WordPress posts into one Journal writing list.
- Render source badges on writing cards.
- Render local posts inside an in-site reading page.
- Support GitHub Pages-compatible hash URLs for local posts.
- Preserve existing WordPress external behavior.
- Add tests for metadata, rendering, routing, and static build compatibility.

### Scope

#### In Scope

- Local Markdown post samples.
- Local post metadata and slug handling.
- Unified writing list.
- Source-aware cards.
- Local post reading view.
- Hash-compatible direct local post links.
- Test updates.

#### Out of Scope

- Visitor-facing post editor.
- Backend persistence.
- Database storage.
- Authentication.
- Runtime content API.
- WordPress runtime fetching.

### Target Files

- `src/types/portfolio.ts`
- `src/data/blog.ts`
- `src/data/portfolio.ts`
- `src/components/Journal.tsx`
- `src/components/JournalPostPage.tsx`
- `src/App.tsx`
- `src/data/portfolio.test.ts`
- `src/App.test.tsx`
- `src/content/journal/`
- `src/data/journalPosts.ts`

### Construction Readiness

- Requirements are approved.
- User stories are approved.
- Application design is approved.
- No infrastructure or backend dependency is required.
- Unit can proceed to Functional Design.
