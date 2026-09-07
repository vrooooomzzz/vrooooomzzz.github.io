# Code Generation Plan - Journal Inline Posts

## Purpose

Implement the Journal Inline Posts unit in the existing React/Vite portfolio application.

## Unit Context

- **Unit**: Journal Inline Posts
- **Workspace Root**: `/Users/nhamhhung/my-portfolio`
- **Project Type**: Brownfield single-page/static portfolio application
- **Application Code Location**: Workspace root, primarily `src/`
- **Documentation Location**: `aidlc-docs/`
- **Deployment Model**: Static GitHub Pages build

## Stories Covered

- Story 1: Add A Local Markdown Journal Post
- Story 2: Show Local And WordPress Posts Together
- Story 3: Distinguish In-Site And External Writing
- Story 4: Read A Local Post Inside The Portfolio
- Story 5: Support GitHub Pages-Compatible Post Links
- Story 6: Preserve External WordPress Behavior
- Story 7: Keep The Journal Enhancement Fully Static

## Dependencies and Interfaces

- Existing `Journal` section remains the primary writing/video display surface.
- Existing WordPress metadata in `src/data/blog.ts` must remain external-link capable.
- Existing app hash behavior in `usePortfolioLayout` and `App.tsx` must not regress.
- Existing shared UI components `ContentCard`, `ExternalAction`, and `SectionShell` should be reused.
- Existing tests use Vitest and Testing Library.
- No backend, database, authentication, or runtime content API may be introduced.

## Target Files

### Files To Create

- [x] `src/data/journalPosts.ts`
- [x] `src/components/JournalPostPage.tsx`
- [x] `src/utils/journal.ts`
- [x] `src/content/journal/first-local-journal.md`
- [x] `aidlc-docs/construction/journal-inline-posts/code/code-generation-summary.md`

### Files To Modify

- [x] `src/types/portfolio.ts`
- [x] `src/data/blog.ts`
- [x] `src/data/portfolio.ts`
- [x] `src/components/Journal.tsx`
- [x] `src/App.tsx`
- [x] `src/data/portfolio.test.ts`
- [x] `src/App.test.tsx`

## Generation Steps

### Step 1: Add Source-Aware Writing Types

- [x] Add `WritingEntry`, `LocalJournalPost`, and `WordPressWritingPost` types.
- [x] Preserve compatibility with existing WordPress post metadata.
- [x] Add typed fields for source badges, local slugs, local hrefs, and local post content.

### Step 2: Add Local Journal Content

- [x] Create a sample Markdown file in `src/content/journal/`.
- [x] Create `src/data/journalPosts.ts` with typed local post metadata and content imports.
- [x] Add local post lookup by slug.
- [x] Add unified writing entry export combining local and WordPress posts.

### Step 3: Add Journal Navigation Utilities

- [x] Create hash helper functions in `src/utils/journal.ts`.
- [x] Build local Journal post hrefs.
- [x] Parse local Journal post hashes.
- [x] Provide an unknown-slug fallback path.

### Step 4: Update Journal UI

- [x] Update `src/components/Journal.tsx` to render unified writing entries.
- [x] Add source badges for local and WordPress posts.
- [x] Route local entries to in-site post links.
- [x] Preserve WordPress entries as external links.
- [x] Preserve videos and external blog CTA.

### Step 5: Add Local Post Reading Page

- [x] Create `src/components/JournalPostPage.tsx`.
- [x] Render valid local post metadata, topics, and content.
- [x] Render graceful not-found state for unknown slugs.
- [x] Add a keyboard-accessible return-to-Journal action.

### Step 6: Integrate App Hash Routing

- [x] Update `src/App.tsx` to detect local Journal post hashes.
- [x] Render `JournalPostPage` for local post hashes.
- [x] Preserve existing single-page and multi-page section behavior.
- [x] Ensure direct hash URLs work for local posts.

### Step 7: Update Tests

- [x] Update portfolio data tests for local and WordPress writing entries.
- [x] Add app tests for rendering local source badges.
- [x] Add app tests for direct local post hash rendering.
- [x] Add app tests for unknown local post slug fallback.
- [x] Confirm WordPress links remain external.

### Step 8: Generate Code Summary

- [x] Create code generation summary in `aidlc-docs/construction/journal-inline-posts/code/`.
- [x] Document created and modified files.
- [x] Document static deployment behavior and no-backend guarantee.

### Step 9: Verification

- [x] Run `npm run test`.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.

## Quality Gates

- [x] All generation steps above are marked complete after implementation.
- [x] No application code is created inside `aidlc-docs/`.
- [x] No duplicate modified files are created.
- [x] All local and WordPress writing entries pass metadata validation.
- [x] Build output remains a static Vite app.

## Approval Gate

This plan is the single source of truth for Code Generation. Code changes must not begin until this plan is explicitly approved.
