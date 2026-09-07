# Requirements - Journal Inline Posts

## Intent Analysis

- **User Request**: Enhance the Journal so it can include blog posts directly within the website, allowing students without WordPress or another external blog to jot down journal entries in the portfolio itself.
- **Request Type**: User-facing enhancement to an existing Journal feature.
- **Scope Estimate**: Multiple components and data/content model changes.
- **Complexity Estimate**: Moderate, because local Markdown posts need card metadata, in-site reading pages, GitHub Pages-compatible navigation, and coexistence with existing WordPress posts.

## Requirements Decisions

| Question | Answer | Decision |
|---|---|---|
| First implementation meaning | A | Local static journal posts maintained in the codebase. |
| Coexistence with WordPress | A | Show local and WordPress posts together in one writing list with source badges. |
| Local post format | B | Use Markdown files with metadata and full article body. |
| Reading experience | B | Use generated route or hash page for each post, compatible with GitHub Pages. |
| Audience priority | C | Serve both template students and portfolio visitors. |
| Runtime model | A | Keep the site fully static with no backend, database, authentication, or runtime content API. |

## Functional Requirements

| ID | Requirement |
|---|---|
| JIP-FR-01 | The Journal section shall support locally hosted blog or journal posts directly within the portfolio website. |
| JIP-FR-02 | Local journal posts shall be authored as Markdown files in the repository so students can add entries without WordPress or another external publishing platform. |
| JIP-FR-03 | Local journal posts shall include title, publication date, category, summary, topics, optional image metadata, and full article content. |
| JIP-FR-04 | The Journal writing list shall show both local posts and existing WordPress-linked posts in one unified list. |
| JIP-FR-05 | The Journal writing cards shall visually distinguish local in-site posts from external WordPress posts using badges or equivalent source indicators. |
| JIP-FR-06 | Local post cards shall open an in-site reading view rather than navigating to WordPress. |
| JIP-FR-07 | Local post reading views shall use GitHub Pages-compatible hash navigation so direct links remain static-hosting friendly. |
| JIP-FR-08 | Existing WordPress post cards shall continue opening their original WordPress URLs. |
| JIP-FR-09 | The implementation shall include sample local journal content that students can copy, edit, or replace. |
| JIP-FR-10 | Local post content shall remain maintainable by editing repository files, with no visitor-facing login or publishing workflow. |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| JIP-NFR-01 | The site shall remain fully static and compatible with GitHub Pages deployment. |
| JIP-NFR-02 | The implementation shall not introduce a backend, database, authentication system, or runtime content API. |
| JIP-NFR-03 | The Journal enhancement shall preserve TypeScript type safety for journal metadata and card rendering. |
| JIP-NFR-04 | The reading view shall use the existing design system and remain responsive across mobile and desktop layouts. |
| JIP-NFR-05 | Existing WordPress, YouTube, navigation, and multi-page layout behavior shall not regress. |
| JIP-NFR-06 | The implementation shall preserve existing test, lint, and production build behavior. |

## User Scenarios

| ID | Scenario |
|---|---|
| JIP-USC-01 | A student clones the portfolio, adds a Markdown journal file, updates metadata, and sees the post appear in the Journal section. |
| JIP-USC-02 | A visitor opens the portfolio, sees both in-site and WordPress journal cards, and can tell which posts stay on the site. |
| JIP-USC-03 | A visitor opens an in-site journal post and reads the full content through a GitHub Pages-compatible hash URL. |
| JIP-USC-04 | A visitor opens a WordPress-linked post and is taken to the original external article. |

## Constraints and Assumptions

- Local posts are authored by editing repository files before deployment.
- Runtime visitor authoring is out of scope for this implementation.
- Shared public posting by multiple visitors is out of scope because it requires backend persistence.
- Markdown processing should use existing toolchain capabilities where practical; any new dependency must be justified by implementation simplicity and build-time compatibility.
- Existing WordPress posts remain useful as examples of external writing and should not be removed.

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Skipped | Disabled in `aidlc-docs/aidlc-state.md`. |
| Property-Based Testing | Skipped | Disabled in `aidlc-docs/aidlc-state.md`. |
