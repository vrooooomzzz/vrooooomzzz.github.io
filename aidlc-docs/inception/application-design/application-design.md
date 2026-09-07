# Application Design

## Summary

The portfolio template will remain a static React/Vite single-page app. The design improves maintainability by moving student-editable content into typed data modules, centralizing navigation configuration, adding shared utilities, and introducing moderate reusable UI helpers. GitHub Pages deployment will use repository-derived `VITE_BASE_PATH` in GitHub Actions with `/` as the local fallback. Tests will use Vitest and React Testing Library.

## Design Artifacts

- `components.md` - Component definitions and responsibilities.
- `component-methods.md` - High-level method signatures and interfaces.
- `services.md` - Frontend support services/orchestration modules.
- `component-dependency.md` - Dependency graph, matrix, and communication patterns.

## Component Model

The app keeps its current section-based architecture:

- `App` renders the page shell and ordered sections.
- `Navbar` renders navigation from shared config.
- Section components remain readable and recognizable.
- Shared UI components standardize repeated section/card/action patterns.
- Data modules become the primary editing surface for students.

## Data Model

The design uses focused data files plus an aggregator:

- `src/data/profile.ts`
- `src/data/navigation.ts`
- `src/data/about.ts`
- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/awards.ts`
- `src/data/projects.ts`
- `src/data/gallery.ts`
- `src/data/videos.ts`
- `src/data/skills.ts`
- `src/data/certificates.ts`
- `src/data/portfolio.ts`

Shared types live in `src/types/portfolio.ts`.

## Utility Model

Shared utilities support repeated behavior:

- `src/utils/scroll.ts` - section scrolling and active section tracking.
- `src/utils/contact.ts` - mailto URL generation.
- `src/utils/media.ts` - YouTube URL helpers and small media helpers.
- `src/utils/animation.ts` - repeated reveal delay class behavior if extracted.

## Deployment Model

- Local development uses `base: '/'`.
- GitHub Actions derives the Pages path from repository metadata and passes `VITE_BASE_PATH`.
- Vite reads `process.env.VITE_BASE_PATH ?? '/'`.
- Documentation explains both repository Pages and user/organization Pages behavior.

## Test Model

Vitest and React Testing Library will provide:

- App smoke render.
- Navigation config uniqueness and required section checks.
- Required profile/template data checks.

Tests avoid browser automation and external network calls.

## Design Completeness Check

- **FR1 Preserve sections**: Covered by section component model.
- **FR2 Extract content**: Covered by focused data files and aggregator.
- **FR3 Shared types**: Covered by `src/types/portfolio.ts`.
- **FR4 Centralized navigation**: Covered by `src/data/navigation.ts`.
- **FR5 Shared scroll behavior**: Covered by `src/utils/scroll.ts`.
- **FR6 Reusable UI structure**: Covered by `SectionShell`, `ContentCard`, and `ExternalAction`.
- **FR7 Accessibility labels**: Covered by `ExternalAction` and component responsibilities.
- **FR8 GitHub Pages base path**: Covered by deployment model.
- **FR9 Setup docs**: Covered by documentation service.
- **FR10 README cleanup**: Covered by documentation service.
- **FR11 Lightweight tests**: Covered by test model.
- **FR12 Static hosting**: Preserved by no backend service design.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
