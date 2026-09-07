# Business Logic Model - Component Refactor And Shared UI Utilities

## Unit Summary

Unit 2 connects the static portfolio data layer from Unit 1 to the visible React UI. The business logic is frontend orchestration: choosing enabled sections, mapping typed content into components, handling navigation scroll behavior, building static contact/media URLs, and preserving the current single-page portfolio experience.

## Approved Functional Decisions

- **Refactor depth**: Moderate. Replace inline data, add shared helpers, and add small shared UI components where repetition is obvious.
- **Optional section behavior**: Fully honor `navigation.enabled` in both navbar rendering and page section rendering.
- **Shared UI abstraction**: Moderate. Add focused components such as `SectionShell`, `ContentCard`, and `ExternalAction` only where they improve readability.
- **Lint handling**: Fix existing shared UI helper lint errors in Unit 2 so `npm run lint` can become a reliable verification command.

## Core Workflows

### Workflow 1: Render Enabled Portfolio Sections

1. `App` imports `portfolio.navigation`.
2. `App` filters navigation entries to `enabled === true`.
3. `App` derives ordered enabled section IDs.
4. `App` renders only components whose section IDs are enabled.
5. `Navbar` receives or imports the same enabled navigation entries.
6. Active-section tracking observes the same enabled section IDs.

### Workflow 2: Navigate Desktop And Mobile Menus

1. Visitor clicks a desktop or mobile navigation item.
2. `scrollToSection(sectionId)` locates the matching DOM element.
3. Browser scrolls smoothly to the section.
4. Mobile drawer closes after selection.
5. Active-section tracking updates as scrolling changes the viewport.

### Workflow 3: Render Typed Portfolio Content

1. Section component imports focused data from `src/data/portfolio.ts`.
2. Component maps typed arrays into Chakra UI markup.
3. Shared visual primitives apply repeated section/card/action structure where useful.
4. Section-specific layout remains local when abstraction would hide meaning.

### Workflow 4: Render External Actions Accessibly

1. Component receives an `ExternalLink` from portfolio data.
2. `ExternalAction` renders the visual label and external-link behavior.
3. `ariaLabel` is applied to icon-only or ambiguous actions.
4. Links open with `target="_blank"` and `rel="noopener noreferrer"` where external.

### Workflow 5: Submit Contact Form

1. Visitor fills contact form fields.
2. `Contact` passes form state and configured profile email into `buildMailtoUrl`.
3. Utility encodes subject and body.
4. Browser navigates to the generated `mailto:` URL.

### Workflow 6: Render Media

1. `Videos` receives typed `VideoEntry` data.
2. `getYouTubeEmbedUrl(videoId)` builds iframe URLs.
3. `watchLink` from data powers external watch links.
4. `Skills` receives typed certificate entries with Vite-resolved PDF files.
5. Certificate preview and modal behavior remain local to `Skills`.

## Data Flow

| Source | Consumer | Transformation |
|---|---|---|
| `portfolio.navigation` | `App`, `Navbar`, active-section helper | Filter enabled entries and preserve configured order. |
| `profile`, `hero` | `Hero`, `Navbar`, `Contact` | Render identity, social links, CTAs, and contact email. |
| `about`, `education`, `experience`, `awards` | Section components | Map typed entries to section cards and timelines. |
| `projects` | `Projects`, `ExternalAction` | Map typed action links to buttons. |
| `gallery` | `Gallery` | Map typed images to cards and modal preview. |
| `videos` | `Videos`, media helpers | Build embeds and render watch actions. |
| `skills`, `certificates` | `Skills` | Render skills and local PDF previews. |

## Functional Boundaries

- Unit 2 changes UI consumption and shared frontend helpers only.
- Unit 2 does not change portfolio content intentionally.
- Unit 2 does not add tests or testing dependencies.
- Unit 2 does not change GitHub Pages deployment configuration.
- Unit 2 may fix lint errors in shared UI helper files because clean lint is an approved functional decision for this unit.

## Success Criteria

- Components consume Unit 1 data instead of defining student-editable arrays inline.
- Navbar and rendered sections use one enabled navigation source of truth.
- Repeated scroll, contact, media, and animation behavior is centralized where useful.
- Shared UI components improve readability without turning sections into an abstract framework.
- Existing visual content remains materially the same.
- Repository lint blockers in shared UI helper files are addressed during Unit 2 code generation.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
