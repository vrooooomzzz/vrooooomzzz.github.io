# Tech Stack Decisions - Component Refactor And Shared UI Utilities

## Decision Summary

Unit 2 keeps the current frontend stack unchanged. The refactor should improve structure and accessibility using the tools already present in the project.

## Approved Stack

| Area | Decision | Rationale |
|---|---|---|
| UI framework | React 19 | Existing application stack; no reason to change for a static portfolio refactor. |
| Language | TypeScript 5.9 | Existing strict typing supports data-driven components and section IDs. |
| Build tool | Vite 7 | Existing static build pipeline and asset handling are working. |
| UI library | Chakra UI 3 | Existing components and styling are built around Chakra primitives. |
| Icons | React Icons | Existing icon set is sufficient for social, navigation, and external-link actions. |
| Styling | Existing Chakra props, CSS variables, and current CSS files | Preserves the current visual system without broad redesign. |
| Tests | No new test stack in Unit 2 | Test dependencies and test files belong to Unit 5. |

## Rejected Alternatives

### Add New UI Utility Dependency

**Decision**: Rejected.

**Reason**: Unit 2 can implement scroll, mailto, media URL, and animation helpers with small local functions.

### Replace Chakra UI Or Add A New Component Framework

**Decision**: Rejected.

**Reason**: This would be high-risk, visually disruptive, and unrelated to the goal of making the existing portfolio maintainable for students.

### Introduce Global State Management

**Decision**: Rejected.

**Reason**: The portfolio uses static data and local UI state. Drawer state, modal state, selected certificate/image state, and contact form fields are simple enough to remain local.

### Add Runtime CMS Or Fetching

**Decision**: Rejected.

**Reason**: Static TypeScript data is the approved model. Runtime fetching would add complexity and deployment requirements that do not fit GitHub Pages.

## Utility Module Decisions

| Module | Decision | Expected Contents |
|---|---|---|
| `src/utils/scroll.ts` | Add local helper module | `scrollToSection`, enabled navigation helpers, optional active-section hook if readable. |
| `src/utils/contact.ts` | Add local helper module | `ContactFormInput`, `buildMailtoUrl`. |
| `src/utils/media.ts` | Add local helper module | YouTube embed/watch URL helpers. |
| `src/utils/animation.ts` | Add local helper module | Existing reveal delay class logic. |

## Shared Component Decisions

| Component | Decision | Rationale |
|---|---|---|
| `SectionShell` | Add if it keeps section code readable | Repeated section root/container/heading/arrow structure is common. |
| `ContentCard` | Add if it reduces repeated card chrome | Repeated background, border, radius, and hover behavior appears across sections. |
| `ExternalAction` | Add | External link behavior and accessibility should be consistent. |

## Verification Decisions

| Command | Requirement |
|---|---|
| `npm run build` | Must pass after Unit 2 code generation. |
| `npm run lint` | Must pass after Unit 2 code generation. |

Known current lint blockers in Chakra helper files are in scope for Unit 2 because they prevent a clean verification baseline.

## Compatibility Notes

- Keep static asset handling through Vite imports.
- Keep GitHub Pages deployment behavior unchanged in Unit 2.
- Keep local development behavior unchanged in Unit 2.
- Do not add browser automation or network-dependent checks in Unit 2.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
