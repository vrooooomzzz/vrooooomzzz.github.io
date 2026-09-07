# Frontend Components - Multi-Page Layout Switcher

## Component Hierarchy

| Component | Children Or Collaborators | Responsibility |
|---|---|---|
| `App` | `Navbar`, section components, `usePortfolioLayout` | Owns layout orchestration and rendering strategy. |
| `Navbar` | Desktop links, mobile drawer links, switch controls | Presents navigation and delegates mode-aware behavior. |
| `usePortfolioLayout` | layout helpers, scroll utilities | Owns mode, page hash, persistence, and navigation behavior. |
| Section components | Existing content components | Render unchanged in either mode. |

## App State And Props

### App-Owned Inputs

- Enabled navigation items.
- Enabled section IDs.
- Existing section component map.
- Scroll-active section from `useActiveSection`.

### App-Derived Layout State

- `layoutMode`
- `activeSection`
- `activePageSection`
- `toggleLayoutMode`
- `navigateToSection`
- `getNavigationHref`

### App Rendering Behavior

| Mode | Main Rendering |
|---|---|
| `single` | Render all enabled sections in navigation order. |
| `multi` | Render only the component for `activePageSection`. |

Multi-page mode may wrap the active section in a main-level container that provides top spacing below the fixed navbar and a focused page feel.

## Navbar Props

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

## Navbar Interaction Flows

### Desktop Navigation Link

1. Visitor selects a navbar link.
2. Link href reflects current layout mode.
3. Click handler prevents default when needed.
4. Navbar calls `onNavigate(sectionId)`.
5. App-level layout behavior performs scroll or hash navigation.

### Mobile Navigation Link

1. Visitor opens the mobile drawer.
2. Visitor selects a section.
3. Navbar calls `onNavigate(sectionId)`.
4. Navbar closes the drawer.
5. App renders or scrolls according to mode.

### Layout Switch Control

1. Visitor activates the switch control.
2. Navbar calls `onToggleLayoutMode()`.
3. App-level layout behavior switches mode and preserves context.
4. Mobile drawer closes after the toggle when invoked from the drawer.

## Layout Hook Behavior

| Function | Frontend Role |
|---|---|
| `toggleLayoutMode` | Switches between layout modes and updates hash/persistence. |
| `navigateToSection` | Performs smooth scroll in single-page mode and hash update in multi-page mode. |
| `getNavigationHref` | Provides `#sectionId` or `#/sectionId` for link hrefs. |
| hash change listener | Keeps active page in sync with browser back and forward. |
| storage helpers | Restore and persist valid layout mode preferences. |

## Accessibility Expectations

- Switch controls have clear accessible names.
- Switch controls expose stable `data-testid` values.
- Active navigation item uses an appropriate active state such as `aria-current`.
- Keyboard users can tab to and activate the switcher and navigation links.
- Multi-page mode does not trap focus.

## Testing Expectations

| Test Area | Expected Coverage |
|---|---|
| Switch control | Renders and toggles layout mode. |
| Single-page rendering | Multiple enabled sections render together. |
| Multi-page rendering | Only active selected section renders as the page. |
| Hash behavior | Valid `#/sectionId` opens matching page; invalid hashes fall back. |
| Persistence | Valid saved mode restores; invalid value defaults safely. |
| Navigation hrefs | Hrefs change by layout mode. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| TypeScript fence | Informational only and fenced correctly. |
| Special characters | Hash examples, prop names, and code identifiers wrapped in code formatting. |
