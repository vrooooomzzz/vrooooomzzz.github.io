# Application Design - Multi-Page Layout Switcher

## Overview

The multi-page layout switcher should be implemented as a small app-level layout state layer around the existing portfolio sections. The current single-page scrolling experience remains the default-safe baseline, while multi-page mode uses GitHub Pages-compatible hashes and renders one active section at a time.

## Design Goals

- Preserve existing single-page behavior.
- Add multi-page browsing without a routing framework.
- Keep section IDs and navigation data as the source of truth.
- Keep section components reusable and mode-agnostic.
- Place layout switching in desktop and mobile navbar experiences.
- Keep localStorage and hash behavior isolated for testability.

## Primary Components

| Component | Responsibility |
|---|---|
| `App` | Orchestrates mode-aware rendering and passes mode-aware props to `Navbar`. |
| `Navbar` | Presents navigation and layout switch controls without owning routing logic. |
| `usePortfolioLayout` | Coordinates layout mode, active page, hash behavior, and persistence. |
| Layout helper utilities | Validate mode values, parse hashes, generate hashes, and access storage safely. |
| Existing section components | Render content unchanged in either mode. |

## Recommended Architecture

1. `App` gets enabled navigation items and enabled section IDs from existing helpers.
2. `App` continues using `useActiveSection` to know the current scroll section in single-page mode.
3. `App` calls `usePortfolioLayout(enabledSectionIds, scrollActiveSection)`.
4. `usePortfolioLayout` returns current layout state and mode-aware callbacks.
5. `App` passes that state into `Navbar`.
6. `Navbar` renders desktop and mobile switch controls and delegates interactions back to `App`.
7. `App` renders all sections in single-page mode and one active section in multi-page mode.

## Layout Modes

### Single-Page Mode

- Renders all enabled sections.
- Navigation uses section anchors such as `#projects`.
- Navigation action smooth-scrolls to the selected section.
- Active section comes from scroll tracking.

### Multi-Page Mode

- Renders one enabled section at a time.
- Navigation uses hashes such as `#/projects`.
- Navigation action updates the page hash.
- Active section comes from the parsed hash with safe fallback.

## Interface Direction

`Navbar` should receive mode-aware props instead of importing routing or storage helpers directly:

```ts
type NavbarProps = {
  activeSection?: SectionId
  navigationItems?: NavigationItem[]
  layoutMode: LayoutMode
  onToggleLayoutMode: () => void
  onNavigate: (sectionId: SectionId) => void
  getNavigationHref: (sectionId: SectionId) => string
}
```

This keeps the rendering component simple and makes the layout behavior easier to test.

## Design Artifacts

- `components.md`: component definitions and responsibilities.
- `component-methods.md`: high-level method and prop contracts.
- `services.md`: browser-side orchestration and helper service boundaries.
- `component-dependency.md`: dependency matrix and communication patterns.

## Design Risks And Mitigations

| Risk | Mitigation |
|---|---|
| Breaking current single-page navigation | Keep `scrollToSection` and `useActiveSection` behavior for single-page mode. |
| Confusing hash formats | Use `#section` for single-page anchors and `#/section` for multi-page pages. |
| Navbar overcrowding | Add compact desktop and drawer controls using existing visual language. |
| Duplicated section definitions | Reuse `SectionId`, enabled navigation items, and existing section component map. |
| Storage errors | Catch localStorage read/write failures and fall back safely. |

## Requirements Traceability

| Requirement | Design Response |
|---|---|
| FR-MLS-01 | `Navbar` receives layout mode and toggle props for desktop/mobile switch controls. |
| FR-MLS-02 | Single-page mode keeps all-section rendering and smooth-scroll navigation. |
| FR-MLS-03 | Multi-page mode renders one active enabled section. |
| FR-MLS-04 | Hash helper utilities use `#/sectionId` page hashes. |
| FR-MLS-05 | Layout storage helper persists valid mode values only. |
| FR-MLS-06 | `App` applies page-like rendering wrapper in multi-page mode during implementation. |
| FR-MLS-07 | Helper and app behavior boundaries support focused Vitest coverage. |
| NFR-MLS-01 | No path routing, backend, or GitHub Pages workflow changes. |
| NFR-MLS-02 | Layout logic is isolated in a small hook/controller and utilities. |
| NFR-MLS-03 | Navbar props support accessible labels, active state, and keyboard-operable controls. |
| NFR-MLS-04 | No heavyweight routing or animation dependency is introduced. |
| NFR-MLS-05 | Only layout mode is stored; no personal data or secrets. |

## Next Stage Input

Units Generation should create one focused unit of work for:

- Layout mode and hash state helpers.
- App rendering changes.
- Navbar switcher and mode-aware navigation.
- Focused Vitest coverage.
- Documentation summary for students if code changes introduce new extension points.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User approved disabling it during Requirements Analysis for this static UI-only feature. |
| Property-Based Testing | Disabled | User approved focused example-based tests instead. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable in this consolidated artifact. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| TypeScript fence | Informational only and fenced correctly. |
| Special characters | Hash examples and file paths wrapped in code formatting. |
