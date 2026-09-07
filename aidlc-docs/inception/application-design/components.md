# Components

## Design Decisions

- **Data organization**: Hybrid. Focused files under `src/data/*` plus a `src/data/portfolio.ts` aggregator.
- **Reusable component extraction**: Moderate. Keep section components recognizable while extracting repeated wrappers, cards, and external action patterns.
- **Deployment base path**: GitHub Actions passes `VITE_BASE_PATH` derived from repository metadata; local fallback is `/`.
- **Test approach**: Vitest with React Testing Library for smoke rendering and data/config tests.

## Application Shell Components

### `App`

- **Purpose**: Render the portfolio page, coordinate section order, and track the active section.
- **Responsibilities**:
  - Import section config from portfolio data.
  - Render `Navbar` and all section components in configured order.
  - Use shared active-section logic.
  - Preserve current one-page portfolio experience.
- **Interfaces**:
  - Inputs: portfolio section configuration and section component registry.
  - Outputs: React page tree.

### `Navbar`

- **Purpose**: Provide fixed desktop and mobile navigation.
- **Responsibilities**:
  - Render navigation items from shared section config.
  - Highlight the active section.
  - Use shared scroll behavior.
  - Expose accessible labels for menu controls and profile/navigation links.
- **Interfaces**:
  - Props: `activeSection?: SectionId`
  - Data: `navigationItems`

## Content Section Components

### `Hero`

- **Purpose**: Present profile identity, headline, highlights, CTAs, social links, and profile image.
- **Responsibilities**:
  - Consume `profile` and `hero` data.
  - Render primary calls to action from data.
  - Expose accessible names for social links.

### `About`

- **Purpose**: Present about copy and summary metrics.
- **Responsibilities**:
  - Consume `about` data.
  - Render paragraphs and metrics.

### `Education`

- **Purpose**: Present education entries.
- **Responsibilities**:
  - Consume `education` data.
  - Render institution logos and education cards.

### `Experience`

- **Purpose**: Present professional experience timeline.
- **Responsibilities**:
  - Consume `experience` data.
  - Render timeline entries and descriptions.

### `Awards`

- **Purpose**: Present awards and achievements.
- **Responsibilities**:
  - Consume `awards` data.
  - Render award cards and tags.

### `Projects`

- **Purpose**: Present project cards and proof links.
- **Responsibilities**:
  - Consume `projects` data.
  - Render technology tags.
  - Use shared external action component for project links.

### `Gallery`

- **Purpose**: Present journey images with modal preview.
- **Responsibilities**:
  - Consume `gallery` data.
  - Render image cards.
  - Preserve modal image preview behavior.

### `Videos`

- **Purpose**: Present YouTube educational videos.
- **Responsibilities**:
  - Consume `videos` data.
  - Build YouTube embed/watch URLs through a utility.
  - Render accessible external watch links.

### `Skills`

- **Purpose**: Present skill categories and certificate previews.
- **Responsibilities**:
  - Consume `skills` and certificate metadata.
  - Preserve certificate PDF preview and expanded modal behavior.
  - Use data validation tests for required certificate fields.

### `Contact`

- **Purpose**: Provide contact form and contact/social links.
- **Responsibilities**:
  - Consume profile contact data.
  - Build mailto URL through a utility.
  - Render accessible social/contact links.

## Shared UI Components

### `SectionShell`

- **Purpose**: Standardize repeated section container structure.
- **Responsibilities**:
  - Render root section `Box`, `Container`, heading eyebrow, title, and optional intro.
  - Preserve `engineering-grid` styling and responsive spacing.
- **Use**: Sections with repeated heading and container structure.

### `ContentCard`

- **Purpose**: Standardize repeated card chrome.
- **Responsibilities**:
  - Provide consistent background, border, hover, radius, and transition props.
  - Avoid hiding section-specific content.

### `ExternalAction`

- **Purpose**: Standardize external links/buttons.
- **Responsibilities**:
  - Render link/action label, icon, target behavior, and accessible label.
  - Support project, social, video, and certificate actions.

## Data Components

### `src/types/portfolio.ts`

- **Purpose**: Define shared portfolio data shapes.
- **Responsibilities**:
  - Export `SectionId`, `NavigationItem`, `Profile`, `EducationEntry`, `ExperienceEntry`, `AwardEntry`, `ProjectEntry`, `GalleryItem`, `VideoEntry`, `SkillCategory`, `CertificateMetadata`, and related types.

### `src/data/*`

- **Purpose**: Store student-editable example content.
- **Responsibilities**:
  - Keep example content realistic.
  - Make replacement points obvious.
  - Maintain Vite-compatible asset imports.

### `src/data/portfolio.ts`

- **Purpose**: Aggregate focused data modules.
- **Responsibilities**:
  - Export a single `portfolio` object for app-level consumption.
  - Re-export focused data where useful.

## Support Components

### Deployment Configuration

- **Purpose**: Make GitHub Pages base path easier for student forks.
- **Responsibilities**:
  - `vite.config.ts` reads `process.env.VITE_BASE_PATH ?? '/'`.
  - GitHub Actions derives and passes the correct base path for repository Pages builds.

### Test Suite

- **Purpose**: Provide lightweight guardrails.
- **Responsibilities**:
  - Smoke render the app.
  - Validate navigation IDs and required sections.
  - Validate key profile/template data.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
