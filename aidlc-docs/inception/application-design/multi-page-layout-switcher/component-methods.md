# Component Methods - Multi-Page Layout Switcher

## Type Contracts

These signatures describe the intended design contract. Exact implementation names can be refined during Code Generation if local code style suggests a better fit.

```ts
export type LayoutMode = 'single' | 'multi'

export type PortfolioLayoutState = {
  layoutMode: LayoutMode
  activeSection: SectionId
  activePageSection: SectionId
  toggleLayoutMode: () => void
  navigateToSection: (sectionId: SectionId) => void
  getNavigationHref: (sectionId: SectionId) => string
}
```

## App Methods And Responsibilities

### `App()`

**Purpose**: Render the portfolio shell and choose section rendering strategy.

**Inputs**:

- Navigation data from `src/data/portfolio`.
- Section component map.
- Layout state from `usePortfolioLayout`.

**Outputs**:

- Navbar with mode-aware props.
- Main content that renders either all enabled sections or a single active section.

**High-level behavior**:

- Single-page mode renders all enabled sections in navigation order.
- Multi-page mode renders only the active page section.
- Detailed fallback rules are deferred to Functional Design.

### `renderSection(sectionId: SectionId): ReactElement`

**Purpose**: Render one section from the existing section component map.

**Inputs**:

- `sectionId`: enabled section identifier.

**Outputs**:

- The matching section component.

**Notes**:

- This may remain inline inside `App` if extracting a function does not improve readability.

## Navbar Methods And Props

### `Navbar(props)`

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

**Purpose**: Render branding, navigation, mobile drawer, and layout switch controls.

**Inputs**:

- Active section for visual and accessibility state.
- Enabled navigation items.
- Layout mode and callbacks owned by the application shell.

**Outputs**:

- Desktop navigation links.
- Mobile navigation links.
- Desktop layout switch control.
- Mobile layout switch control.

### `handleSectionClick(sectionId: SectionId): void`

**Purpose**: Delegate navigation to the parent-owned mode-aware navigation callback.

**Inputs**:

- Target section ID.

**Outputs**:

- Calls `onNavigate(sectionId)`.
- Closes the mobile drawer when invoked from drawer context.

### `handleLayoutToggle(): void`

**Purpose**: Delegate mode switching to parent-owned layout state.

**Inputs**:

- None.

**Outputs**:

- Calls `onToggleLayoutMode()`.
- May close the mobile drawer after switching if needed for mobile clarity.

## Layout Hook Methods

### `usePortfolioLayout(sectionIds, scrollActiveSection)`

```ts
function usePortfolioLayout(
  sectionIds: readonly SectionId[],
  scrollActiveSection: SectionId,
): PortfolioLayoutState
```

**Purpose**: Coordinate layout mode, active section, hash page state, and mode-aware navigation.

**Inputs**:

- `sectionIds`: enabled section IDs in display order.
- `scrollActiveSection`: active section from scroll tracking.

**Outputs**:

- Current layout mode.
- Active section to display in the navbar.
- Active page section for multi-page rendering.
- Mode toggle and navigation functions.
- Mode-aware href generator.

### `toggleLayoutMode(): void`

**Purpose**: Switch between single-page and multi-page modes.

**Inputs**:

- Current layout mode.
- Current active section or active page section.

**Outputs**:

- Updated mode state.
- Persisted mode preference.
- Updated hash if switching into multi-page mode.

### `navigateToSection(sectionId: SectionId): void`

**Purpose**: Navigate to a section according to the current layout mode.

**Inputs**:

- Target section ID.

**Outputs**:

- Single-page mode: smooth scrolls to the section.
- Multi-page mode: updates the hash to `#/{sectionId}`.

### `getNavigationHref(sectionId: SectionId): string`

**Purpose**: Return the href appropriate for the current layout mode.

**Inputs**:

- Target section ID.

**Outputs**:

- Single-page mode: `#sectionId`.
- Multi-page mode: `#/sectionId`.

## Layout Helper Methods

### `isLayoutMode(value: unknown): value is LayoutMode`

**Purpose**: Validate stored or external layout mode values.

### `readStoredLayoutMode(storage?: Storage): LayoutMode | null`

**Purpose**: Safely read a valid saved layout mode.

### `writeStoredLayoutMode(mode: LayoutMode, storage?: Storage): void`

**Purpose**: Safely persist layout mode without crashing when storage is unavailable.

### `toPageHash(sectionId: SectionId): string`

**Purpose**: Convert a section ID into the multi-page hash format.

### `parsePageHash(hash: string, sectionIds: readonly SectionId[]): SectionId | null`

**Purpose**: Parse `#/sectionId` hashes and return a valid enabled section ID.

### `resolveSectionId(candidate, sectionIds): SectionId`

```ts
function resolveSectionId(
  candidate: SectionId | null | undefined,
  sectionIds: readonly SectionId[],
): SectionId
```

**Purpose**: Return a valid section ID or a safe default.

## Deferred Details For Functional Design

- Exact fallback behavior when hash, enabled sections, and saved mode conflict.
- Exact event listener strategy for browser back and forward behavior.
- Exact scroll restoration behavior when switching from multi-page to single-page mode.
- Exact storage error handling behavior in private browsing or restricted environments.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable; no ASCII diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| TypeScript fences | Informational only and fenced correctly. |
