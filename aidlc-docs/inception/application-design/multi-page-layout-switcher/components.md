# Components - Multi-Page Layout Switcher

## Design Scope

The feature extends the existing React/Vite portfolio with a mode-aware application shell. It should preserve the current single-page experience while adding a multi-page rendering mode powered by hash state.

## Component Summary

| Component | Type | Purpose |
|---|---|---|
| `App` | Existing application orchestrator | Owns enabled section list, active section/page selection, and mode-aware section rendering. |
| `Navbar` | Existing UI component | Displays navigation links, active state, mobile drawer, and layout switch controls. |
| `usePortfolioLayout` | New hook or controller | Coordinates layout mode, mode persistence, hash page state, and navigation commands. |
| Layout helper utilities | New utility module | Provide pure helpers for localStorage parsing, hash parsing, and hash generation. |
| Section component map | Existing object in `App` | Maps `SectionId` values to reusable section components. |
| Existing section components | Existing content components | Render portfolio content unchanged in either mode. |
| Existing scroll utilities | Existing utility module | Continue supporting single-page smooth scrolling and active section tracking. |

## Component Details

### App

**Purpose**: Coordinate portfolio rendering across single-page and multi-page modes.

**Responsibilities**:

- Build enabled navigation items from the existing navigation data.
- Keep `sectionComponents` as the single map from `SectionId` to section component.
- Use scroll-based active section tracking for single-page mode.
- Use the new layout controller to determine the current layout mode and active page section.
- Render all enabled sections in single-page mode.
- Render only the active enabled section in multi-page mode.
- Pass mode, active section, switch behavior, and navigation behavior to `Navbar`.

**Interfaces**:

- Inputs: navigation data, section component map, browser hash state, localStorage value.
- Outputs: React-rendered portfolio layout.

### Navbar

**Purpose**: Present responsive navigation and the layout switch control.

**Responsibilities**:

- Render existing desktop navigation links and mobile drawer links.
- Render a layout switch control in desktop and mobile experiences.
- Use provided hrefs and navigation callbacks instead of owning routing logic.
- Show active link state based on the active section passed by `App`.
- Close the mobile drawer after navigation or layout switching when appropriate.
- Preserve existing branding, visual language, and accessibility patterns.

**Interfaces**:

- Props:
  - `activeSection`
  - `navigationItems`
  - `layoutMode`
  - `onToggleLayoutMode`
  - `onNavigate`
  - `getNavigationHref`

### usePortfolioLayout

**Purpose**: Keep layout mode and page navigation behavior easy to understand and test.

**Responsibilities**:

- Read a valid saved layout mode from `localStorage`.
- Default safely to single-page mode when no valid saved value exists.
- Persist layout mode changes.
- Parse `window.location.hash` for multi-page section hashes.
- Track active page section in multi-page mode.
- Provide mode-aware navigation behavior:
  - Single-page mode: use smooth scroll and section anchors.
  - Multi-page mode: set GitHub Pages-safe hashes such as `#/projects`.
- Preserve the current or nearest valid section when switching modes.

**Interfaces**:

- Inputs:
  - enabled section IDs
  - current scroll-active section
  - browser hash
  - browser storage
- Outputs:
  - `layoutMode`
  - `activeSection`
  - `activePageSection`
  - `toggleLayoutMode`
  - `navigateToSection`
  - `getNavigationHref`

### Layout Helper Utilities

**Purpose**: Provide pure, focused functions that are easy to test independently.

**Responsibilities**:

- Validate layout mode strings.
- Read and write layout mode values safely.
- Convert section IDs to multi-page hashes.
- Parse hashes into valid section IDs.
- Fall back to the first enabled section or `home` when a hash is invalid.

**Interfaces**:

- Inputs: strings, section ID lists, optional storage object.
- Outputs: valid `LayoutMode`, valid `SectionId`, or safe fallback values.

### Section Component Map

**Purpose**: Preserve a single source of truth for rendering section components by `SectionId`.

**Responsibilities**:

- Continue mapping each `SectionId` to its component.
- Support both all-section rendering and one-section rendering.
- Avoid duplicate section/page configuration.

**Interfaces**:

- Inputs: enabled section IDs.
- Outputs: matching section component instances.

### Existing Section Components

**Purpose**: Render portfolio content without knowing which layout mode is active.

**Responsibilities**:

- Keep stable section IDs.
- Continue rendering content from `src/data`.
- Avoid layout mode conditionals inside individual content sections unless later visual design requires a narrow exception.

## Design Constraints

- Do not add React Router for this feature.
- Do not introduce backend services, secrets, or new deployment requirements.
- Do not duplicate section definitions in multiple places.
- Keep the feature beginner-readable for students extending the template.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User approved disabling it for this static UI-only feature. |
| Property-Based Testing | Disabled | User approved focused example-based tests instead. |
