# NFR Requirements - Component Refactor And Shared UI Utilities

## Unit Summary

Unit 2 refactors the existing React UI to consume the typed portfolio data layer and shared frontend utilities. Its non-functional requirements focus on beginner maintainability, practical accessibility, build/lint reliability, responsive behavior preservation, and avoiding unnecessary runtime or dependency complexity.

## NFR Decisions

- **Maintainability priority**: Beginner readability first, even if some section-specific repetition remains.
- **Accessibility target**: Practical accessibility improvements, not a full audit-level WCAG remediation.
- **Verification strictness**: Both `npm run build` and `npm run lint` should pass before moving on.
- **Performance posture**: Preserve current performance and avoid runtime-heavy abstractions.
- **Technology stack**: Keep the existing React, TypeScript, Vite, Chakra UI, and React Icons stack unchanged.

## Maintainability Requirements

### NFR-M1: Beginner-Readable Components

Components should be easier for students and maintainers to understand after the refactor.

**Acceptance Criteria**:

- Student-editable content arrays are removed from components and consumed from `src/data/*`.
- Section components remain recognizable by portfolio area.
- Shared UI components are introduced only when they reduce obvious repeated structure.
- Section-specific markup remains local when abstraction would make the component harder to read.

### NFR-M2: Single Source Of Navigation Truth

Navigation, active-section tracking, and rendered page sections must use Unit 1 navigation data.

**Acceptance Criteria**:

- `navigation.enabled` controls both navbar items and rendered sections.
- Active-section tracking observes enabled section IDs only.
- Component registries or mappings use typed `SectionId` values where practical.

### NFR-M3: Low-Coupling Utility Design

Utilities should centralize repeated behavior without taking ownership of visual rendering.

**Acceptance Criteria**:

- Scroll helpers do not import section components.
- Contact helpers do not import React or Chakra UI.
- Media helpers do not perform network calls.
- Data modules remain free of UI imports.

## Accessibility Requirements

### NFR-A11Y1: Meaningful Accessible Names

Icon-only and ambiguous actions must have accessible names.

**Acceptance Criteria**:

- Social icon links use meaningful `aria-label` values from data.
- Project, video, and certificate actions use data-provided accessible labels.
- Mobile menu open/close controls retain meaningful labels.

### NFR-A11Y2: Keyboard Interaction Preservation

Existing keyboard interaction support should be preserved during refactor.

**Acceptance Criteria**:

- Gallery image cards remain keyboard accessible if rendered as interactive cards.
- Certificate cards remain keyboard accessible.
- Modal close behavior and Escape handling are not regressed.

### NFR-A11Y3: Semantic Heading Preservation

Refactored shared section shells must preserve meaningful section headings.

**Acceptance Criteria**:

- Section titles remain rendered as headings.
- Heading hierarchy remains broadly consistent with the current page.
- Shared wrappers do not remove visible labels or section titles.

## Verification Requirements

### NFR-V1: Production Build Must Pass

The refactor must pass the production build command.

**Acceptance Criteria**:

- `npm run build` completes successfully.
- TypeScript errors introduced by the refactor are fixed before the stage is complete.
- Vite resolves all asset imports used by data-driven components.

### NFR-V2: Repository Lint Must Pass

The refactor must leave the repository with a passing lint command.

**Acceptance Criteria**:

- `npm run lint` completes successfully.
- Existing lint errors in `src/components/ui/color-mode.tsx` and `src/components/ui/toaster.tsx` are fixed during Unit 2.
- New shared utilities and components do not introduce lint errors.

## Performance Requirements

### NFR-P1: Avoid Runtime-Heavy Abstractions

The refactor should not add unnecessary render-time complexity.

**Acceptance Criteria**:

- No new runtime dependencies are introduced.
- No runtime data fetching is added.
- Section rendering remains based on static imports and plain arrays.
- Shared components avoid expensive computations during render.

### NFR-P2: Preserve Current User-Perceived Performance

The refactor should not materially slow the portfolio experience.

**Acceptance Criteria**:

- Existing static rendering model is preserved.
- Smooth scrolling remains browser-native.
- Certificate and gallery modal behavior remains local and lightweight.

## Responsive Usability Requirements

### NFR-U1: Preserve Desktop And Mobile Navigation

Desktop and mobile navigation should keep their existing behavior while consuming shared data.

**Acceptance Criteria**:

- Desktop navigation highlights the active enabled section.
- Mobile drawer closes after section selection.
- Disabled sections do not appear in either navigation mode.

### NFR-U2: Preserve Section Layouts

Section layouts should remain visually familiar after moving to data-driven rendering.

**Acceptance Criteria**:

- Hero snapshot, timelines, grids, gallery modal, video cards, certificate previews, and contact form remain materially similar.
- Shared wrappers do not create card-in-card layouts or oversized visual changes.

## Availability And Reliability Requirements

### NFR-R1: Static Hosting Compatibility

The refactor must keep the application compatible with static hosting.

**Acceptance Criteria**:

- No backend services, databases, CMS, runtime secrets, or API calls are introduced.
- Contact remains mailto-based.
- Media URLs are generated locally from data.

### NFR-R2: Graceful Disabled Section Handling

Disabled sections should not break navigation or active-section tracking.

**Acceptance Criteria**:

- Enabled section list is non-empty.
- Disabled sections are excluded from navbar and page rendering.
- Missing section registry entries for enabled sections should be handled during implementation through typed mappings and verification.

## Security Requirements

Security extension rules are disabled. Unit 2 still keeps a static-site security posture.

**Acceptance Criteria**:

- External links use `rel="noopener noreferrer"` when opened in a new tab.
- No secrets or private tokens are added.
- No form data is sent to a backend.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
