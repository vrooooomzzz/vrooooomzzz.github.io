# Logical Components - Component Refactor And Shared UI Utilities

## Logical Component Overview

Unit 2 adds no backend infrastructure. Its logical components are frontend modules that organize static data consumption, repeated browser behavior, shared UI rendering, and lint-compliant helper exports.

## Component Matrix

| Logical Component | Planned Module(s) | Responsibility |
|---|---|---|
| Portfolio data entrypoint | `src/data/portfolio.ts` | Existing Unit 1 aggregate consumed by UI. |
| Enabled navigation selector | `src/utils/scroll.ts` or local helper | Filter enabled navigation items and derive enabled section IDs. |
| Active section tracker | `src/App.tsx` or `src/utils/scroll.ts` | Track active enabled section while scrolling. |
| Section registry | `src/components/sections.ts` or local to `App.tsx` | Map `SectionId` values to section components. |
| Section shell | `src/components/shared/SectionShell.tsx` | Shared section root, heading, optional intro, and next-arrow behavior. |
| Content card | `src/components/shared/ContentCard.tsx` | Shared repeated card chrome where useful. |
| External action | `src/components/shared/ExternalAction.tsx` | Shared external link/button rendering, labels, and safe link attributes. |
| Scroll utility | `src/utils/scroll.ts` | Smooth-scroll to section IDs and handle missing targets gracefully. |
| Contact utility | `src/utils/contact.ts` | Build encoded mailto URLs from form data. |
| Media utility | `src/utils/media.ts` | Build YouTube embed/watch URLs. |
| Animation utility | `src/utils/animation.ts` | Return existing reveal delay class strings. |
| Chakra helper split files | `src/components/ui/*` | Organize color mode/toaster helpers to satisfy lint and Fast Refresh. |

## Component Responsibilities

### Portfolio Data Entrypoint

- Provides static typed content.
- Remains UI-free.
- Is consumed by components and utilities where appropriate.

### Enabled Navigation Selector

- Accepts `NavigationItem[]`.
- Returns enabled items and/or enabled `SectionId[]`.
- Keeps `navigation.enabled` behavior consistent across `App` and `Navbar`.

### Active Section Tracker

- Observes enabled section IDs.
- Applies the fixed-navbar offset.
- Defaults to `home` when near the page top.
- Ignores disabled sections.

### Section Registry

- Maps known section IDs to section components.
- Keeps rendering order controlled by navigation data.
- Warns and skips if an enabled section has no matching component.

### Section Shell

- Preserves section root IDs and `engineering-grid`.
- Renders heading metadata.
- Renders children without imposing one generic layout on every section.
- May render the down-arrow affordance using shared scroll behavior.

### Content Card

- Encapsulates repeated card border/background/hover treatment.
- Accepts children and optional class names.
- Avoids hiding section-specific content structure.

### External Action

- Accepts data-compatible link fields.
- Applies `aria-label` when provided.
- Applies safe external link attributes.
- Supports only a small variant surface needed by the existing UI.

### Scroll Utility

- Uses DOM lookup by typed section ID.
- Smooth-scrolls if the target exists.
- No-ops or warns if the target is missing.
- Does not import UI components.

### Contact Utility

- Accepts contact form values and recipient email.
- Encodes subject and body.
- Returns a mailto URL string.
- Does not send network requests.

### Media Utility

- Builds YouTube embed URLs.
- Builds YouTube watch URLs if needed.
- Does not validate remote URL reachability.

### Animation Utility

- Converts item index to existing reveal delay classes.
- Keeps repeated delay logic consistent.

### Chakra Helper Split Files

- Preserve current color mode and toaster behavior.
- Move non-component exports into separate files if needed.
- Replace empty interfaces with type aliases or concrete prop types.
- Avoid broad lint suppression.

## Logical Component Interactions

| Source | Target | Interaction |
|---|---|---|
| `App` | Portfolio data entrypoint | Reads navigation and section data. |
| `App` | Enabled navigation selector | Filters sections for rendering and active tracking. |
| `App` | Section registry | Renders section components in configured order. |
| `Navbar` | Enabled navigation selector | Renders enabled links only. |
| Section components | Portfolio data entrypoint | Render focused content. |
| Section components | Shared UI components | Use shell/cards/actions where readable. |
| `Contact` | Contact utility | Builds mailto URL. |
| `Videos` | Media utility | Builds iframe URLs. |
| `Projects`, `Hero`, `Videos`, `Contact` | External action | Render external links consistently. |

## Resilience Design

- Missing DOM target: `scrollToSection` should not throw.
- Missing enabled section mapping: development warning and skipped render.
- Empty optional arrays: component should render gracefully or be hidden through `navigation.enabled`.
- Mailto generation: safely encode fields and provide default subject.

## Scalability Design

- Adding new entries to projects, skills, gallery, videos, certificates, education, experience, or awards should not require component code changes.
- Adding a new section requires adding a `SectionId`, data, navigation entry, and registry mapping.
- No additional backend or infrastructure is needed as content grows within normal portfolio size.

## Performance Design

- Use static imports and direct array mapping.
- Avoid full-app view-model recomputation.
- Avoid new runtime dependencies.
- Keep state local to interaction-heavy sections.

## Security Design

- External links use safe target/rel defaults.
- No secrets, tokens, auth, or backend endpoints are introduced.
- Contact form stays mailto-based.

## Verification Design

- Unit 2 implementation should run `npm run build`.
- Unit 2 implementation should run `npm run lint`.
- Unit 5 later adds formal tests for navigation config and app smoke rendering.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
