# Logical Components - Multi-Page Layout Switcher

## Purpose

Define the logical components that implement the approved NFR patterns without adding infrastructure services.

## Logical Component Summary

| Component | Runtime Location | Responsibility |
|---|---|---|
| Layout Controller Hook | Browser, React app | Orchestrates mode state, page state, navigation, and persistence. |
| Layout Helper Functions | Browser, app utility code | Validate modes, parse hashes, resolve sections, and safely access storage. |
| App Rendering Adapter | `App.tsx` | Chooses single-page or active-page rendering. |
| Navbar Interaction Adapter | `Navbar.tsx` | Presents switch controls and delegates navigation. |
| Test Boundary | Vitest and React Testing Library | Verifies helpers and user-visible behavior. |

## Layout Controller Hook

**Recommended implementation**: `src/hooks/usePortfolioLayout.ts`

### Responsibilities

- Initialize layout mode from safe storage helper.
- Keep current mode in React state.
- Track active page section for multi-page mode.
- Listen for hash changes.
- Provide `toggleLayoutMode`.
- Provide `navigateToSection`.
- Provide `getNavigationHref`.
- Persist mode changes through safe storage helper.

### NFR Role

| NFR Category | Support |
|---|---|
| Maintainability | Centralizes mode and navigation behavior. |
| Reliability | Uses helper fallbacks for storage and hashes. |
| GitHub Pages compatibility | Emits and consumes `#/sectionId` page hashes. |
| Testability | Can be tested through helpers or component behavior. |

## Layout Helper Functions

**Recommended implementation**: same hook file for a small feature, or a nearby `src/utils/portfolioLayout.ts` if the hook file becomes crowded.

### Helper Set

| Helper | Responsibility |
|---|---|
| `isLayoutMode` | Validate `single` and `multi`. |
| `readStoredLayoutMode` | Safely read and validate localStorage value. |
| `writeStoredLayoutMode` | Safely write layout mode without throwing. |
| `toPageHash` | Convert section ID to `#/sectionId`. |
| `parsePageHash` | Convert valid `#/sectionId` hash to enabled section ID. |
| `resolveSectionId` | Resolve invalid section candidates to safe fallback. |

### NFR Role

| NFR Category | Support |
|---|---|
| Reliability | Prevents malformed browser state from crashing UI. |
| Security/privacy | Allows only narrow valid storage values. |
| Testability | Pure functions provide stable local test targets. |
| Maintainability | Keeps tricky logic out of UI components. |

## App Rendering Adapter

**Implementation surface**: `src/App.tsx`

### Responsibilities

- Build enabled navigation items and IDs.
- Use existing scroll-active section tracking.
- Call the layout controller hook.
- Pass mode-aware props to `Navbar`.
- Render all enabled sections in single-page mode.
- Render only active page section in multi-page mode.
- Add minimal app-level multi-page wrapper for top spacing and focus if needed.

### NFR Role

| NFR Category | Support |
|---|---|
| Performance | Avoids rendering inactive sections in multi-page mode. |
| Maintainability | Keeps section component map as single render source. |
| Accessibility | Provides layout structure that avoids fixed-navbar overlap. |

## Navbar Interaction Adapter

**Implementation surface**: `src/components/Navbar.tsx`

### Responsibilities

- Render switch controls for desktop and mobile.
- Use mode-aware hrefs from `getNavigationHref`.
- Delegate navigation to `onNavigate`.
- Delegate mode switching to `onToggleLayoutMode`.
- Keep mobile drawer close behavior after actions.
- Preserve active link state and existing styling.

### NFR Role

| NFR Category | Support |
|---|---|
| Accessibility | Named controls, keyboard operation, active state. |
| Maintainability | Keeps storage/hash logic out of navbar. |
| Testability | Stable test IDs support behavior tests. |

## Test Boundary

**Implementation surface**: existing Vitest test setup and new focused tests.

### Test Groups

| Test Group | Coverage |
|---|---|
| Helper tests | mode validation, hash parsing, fallback resolution, storage guards. |
| App tests | single-page rendering, multi-page rendering, invalid hash fallback. |
| Navbar tests | switch control visibility, navigation hrefs, mode toggle behavior. |

## Infrastructure Components

No infrastructure components are required.

| Component Type | Decision |
|---|---|
| Backend service | Not required. |
| Cache | Not required. |
| Queue | Not required. |
| Server rewrite | Not required. |
| GitHub Pages workflow change | Not required. |
| Monitoring service | Not required. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | File paths, code identifiers, and hash examples wrapped in code formatting. |
