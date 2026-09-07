# User Stories - Journal Inline Posts

## Story 1: Add A Local Markdown Journal Post

**As a** template student author,  
**I want** to add a journal post as a Markdown file with metadata,  
**so that** I can keep technical writing in my portfolio without using WordPress or another external blog.

### Acceptance Criteria

- [x] A local journal post can be represented by a Markdown file in the repository.
- [x] The post supports title, publication date, category, summary, topics, optional image metadata, and full article body.
- [x] Sample local journal content is available for students to copy, edit, or replace.
- [x] The authoring workflow does not require backend storage, authentication, or runtime APIs.

### Requirement Mapping

- JIP-FR-01, JIP-FR-02, JIP-FR-03, JIP-FR-09, JIP-FR-10
- JIP-NFR-01, JIP-NFR-02, JIP-NFR-03

### INVEST Check

- **Independent**: Can be implemented without changing WordPress post behavior.
- **Negotiable**: Markdown metadata shape can be refined during design.
- **Valuable**: Gives students an in-repo writing workflow.
- **Estimable**: Bound to Markdown content ingestion and metadata typing.
- **Small**: Focused on content representation.
- **Testable**: Metadata completeness and sample content can be validated.

## Story 2: Show Local And WordPress Posts Together

**As a** portfolio visitor reader,  
**I want** to see local posts and WordPress posts in one Journal writing list,  
**so that** I can browse all writing from one place.

### Acceptance Criteria

- [x] The Journal writing list includes both local in-site posts and existing WordPress-linked posts.
- [x] Existing WordPress post cards are not removed.
- [x] Writing cards retain title, date, category, summary, topics, and image presentation where available.
- [x] The Journal continues to include educational videos alongside writing content.

### Requirement Mapping

- JIP-FR-04, JIP-FR-08
- BLOG-FR-02, BLOG-FR-03, BLOG-FR-07
- JIP-NFR-05

### INVEST Check

- **Independent**: Can be validated through Journal list rendering.
- **Negotiable**: Ordering and grouping can be adjusted in design.
- **Valuable**: Keeps the Journal coherent for visitors.
- **Estimable**: Bound to combined content list rendering.
- **Small**: Focused on list coexistence.
- **Testable**: Tests can assert both source types render.

## Story 3: Distinguish In-Site And External Writing

**As a** portfolio visitor reader,  
**I want** source badges on writing cards,  
**so that** I know whether a post opens inside the website or on WordPress.

### Acceptance Criteria

- [x] Local posts display a source indicator such as "In-site" or "Local".
- [x] WordPress posts display a source indicator such as "WordPress" or "External".
- [x] The badge treatment is visually consistent with the existing design system.
- [x] Source indicators remain readable on mobile and desktop.

### Requirement Mapping

- JIP-FR-05
- JIP-NFR-04, JIP-NFR-05

### INVEST Check

- **Independent**: Can be implemented on cards without changing content authoring.
- **Negotiable**: Badge labels and colors can be tuned.
- **Valuable**: Reduces navigation surprises for visitors.
- **Estimable**: Bound to card metadata and UI badges.
- **Small**: Focused on source distinction.
- **Testable**: Tests can assert source labels render.

## Story 4: Read A Local Post Inside The Portfolio

**As a** portfolio visitor reader,  
**I want** to open a local journal post in an in-site reading page,  
**so that** I can read the full article without leaving the portfolio.

### Acceptance Criteria

- [x] Local post cards open an in-site reading view.
- [x] The reading view displays the local post title, metadata, topics, and full Markdown article content.
- [x] The reading view has a way to return to the Journal writing list.
- [x] The reading view uses the existing design system and is responsive.

### Requirement Mapping

- JIP-FR-06
- JIP-NFR-04

### INVEST Check

- **Independent**: Can be implemented for local posts only.
- **Negotiable**: Reading-page layout can be refined in application design.
- **Valuable**: Lets visitors consume local writing directly.
- **Estimable**: Bound to reading view and content rendering.
- **Small**: Focused on local post reading.
- **Testable**: Tests can open a local post and assert content renders.

## Story 5: Support GitHub Pages-Compatible Post Links

**As a** portfolio visitor reader,  
**I want** local post pages to use GitHub Pages-compatible hash navigation,  
**so that** direct links to posts work after static deployment.

### Acceptance Criteria

- [x] Each local post has a stable slug or identifier.
- [x] Each local post can be opened through a hash-compatible URL.
- [x] Direct hash navigation to a local post renders the correct reading view.
- [x] Unknown post slugs fail gracefully by returning to Journal or showing a not-found state.

### Requirement Mapping

- JIP-FR-07
- JIP-NFR-01, JIP-NFR-05

### INVEST Check

- **Independent**: Can be validated through routing/hash behavior.
- **Negotiable**: Exact hash format can be selected during design.
- **Valuable**: Keeps links deployable on GitHub Pages.
- **Estimable**: Bound to existing hash/navigation model.
- **Small**: Focused on static-compatible deep links.
- **Testable**: Tests can initialize the app with a post hash.

## Story 6: Preserve External WordPress Behavior

**As a** portfolio owner and template maintainer,  
**I want** existing WordPress posts to keep linking externally,  
**so that** the new local writing path does not break existing Journal content.

### Acceptance Criteria

- [x] WordPress post cards still open original WordPress URLs.
- [x] WordPress post metadata remains local so the site does not fetch WordPress at runtime.
- [x] The full blog call-to-action can remain available for visitors who want the external blog.
- [x] Existing WordPress-related tests continue to pass or are updated to cover the unified content model.

### Requirement Mapping

- JIP-FR-08
- BLOG-FR-03, BLOG-FR-04, BLOG-FR-06
- JIP-NFR-05, JIP-NFR-06

### INVEST Check

- **Independent**: Can be verified alongside existing external cards.
- **Negotiable**: CTA placement can be refined.
- **Valuable**: Protects current portfolio content.
- **Estimable**: Bound to existing WordPress card behavior.
- **Small**: Focused on regression protection.
- **Testable**: Tests can assert external hrefs remain WordPress URLs.

## Story 7: Keep The Journal Enhancement Fully Static

**As a** portfolio owner and template maintainer,  
**I want** local Journal posts to build into the static site,  
**so that** students can deploy the portfolio to GitHub Pages without managing infrastructure.

### Acceptance Criteria

- [x] The implementation requires no backend, database, authentication, or runtime content API.
- [x] Local post content is resolved at build time or bundled statically.
- [x] The production build emits a deployable static app.
- [x] Existing test, lint, and build scripts continue to pass.

### Requirement Mapping

- JIP-FR-10
- JIP-NFR-01, JIP-NFR-02, JIP-NFR-06

### INVEST Check

- **Independent**: Can be verified at build/test level.
- **Negotiable**: Build-time Markdown strategy can be selected during design.
- **Valuable**: Maintains the template's low-friction deployment model.
- **Estimable**: Bound to static content ingestion and build verification.
- **Small**: Focused on static deployment constraints.
- **Testable**: Build output and dependency behavior can be verified.
