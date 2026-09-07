# Code Generation Plan - Multi-Page Layout Switcher

## Purpose

Implement the approved Multi-Page Layout Switcher unit in the existing React/Vite portfolio without adding new runtime dependencies.

## Unit Context

| Item | Value |
|---|---|
| Unit | Multi-Page Layout Switcher |
| Project type | Brownfield React/Vite static portfolio |
| Workspace root | `/Users/nhamhhung/my-portfolio` |
| Application code location | Workspace root, primarily `src/` |
| Documentation location | `aidlc-docs/construction/multi-page-layout-switcher/code/` |
| Routing decision | Native hash handling with `#/sectionId` |
| State decision | Small `usePortfolioLayout` hook plus pure helpers |
| Test decision | Vitest and React Testing Library |

## Source Artifacts

- Requirements: `aidlc-docs/inception/requirements/multi-page-layout-switcher-requirements.md`
- User stories: `aidlc-docs/inception/user-stories/multi-page-layout-switcher-stories.md`
- Application design: `aidlc-docs/inception/application-design/multi-page-layout-switcher/application-design.md`
- Unit of work: `aidlc-docs/inception/application-design/multi-page-layout-switcher/unit-of-work.md`
- Functional design: `aidlc-docs/construction/multi-page-layout-switcher/functional-design/`
- NFR requirements: `aidlc-docs/construction/multi-page-layout-switcher/nfr-requirements/`
- NFR design: `aidlc-docs/construction/multi-page-layout-switcher/nfr-design/`

## Stories Implemented

| Story | Status | Implementation Surface |
|---|---|---|
| MLS-01: Switch Between Layout Modes | [x] | `Navbar`, `usePortfolioLayout`, `App` |
| MLS-02: Browse One Section Per Page | [x] | `App`, `usePortfolioLayout` |
| MLS-03: Navigate With GitHub Pages-Safe Hash URLs | [x] | `usePortfolioLayout`, `Navbar` |
| MLS-04: Remember The Selected Layout Mode | [x] | `usePortfolioLayout` helpers |
| MLS-05: Present Multi-Page Mode As A Polished Page Experience | [x] | `App`, `Navbar` |
| MLS-06: Verify Layout Modes With Lightweight Tests | [x] | Vitest test files |

## Target Files

### Files To Create

- `src/hooks/usePortfolioLayout.ts`
- `src/hooks/usePortfolioLayout.test.ts`
- `aidlc-docs/construction/multi-page-layout-switcher/code/code-generation-summary.md`

### Files To Modify

- `src/App.tsx`
- `src/components/Navbar.tsx`
- `src/App.test.tsx`

### Files Expected To Remain Unchanged

- `.github/workflows/deploy.yml`
- `vite.config.ts`
- `package.json`
- Existing section components under `src/components/`
- Existing portfolio data files under `src/data/`

## Generation Steps

### Step 1: Create Layout Hook And Helper Logic

- [x] Create `src/hooks/usePortfolioLayout.ts`.
- [x] Export `LayoutMode`.
- [x] Export helper functions for mode validation, storage read/write, hash generation, hash parsing, and fallback section resolution.
- [x] Export `usePortfolioLayout`.
- [x] Implement graceful localStorage read/write fallback.
- [x] Implement hash change synchronization for multi-page mode.
- [x] Implement mode-aware `navigateToSection`.
- [x] Implement mode-aware `getNavigationHref`.

**Stories covered**: MLS-02, MLS-03, MLS-04

### Step 2: Integrate Layout State Into App

- [x] Modify `src/App.tsx`.
- [x] Import `usePortfolioLayout`.
- [x] Keep existing enabled navigation and section component map.
- [x] Use scroll-active section as input to layout state.
- [x] Pass layout props and navigation callbacks to `Navbar`.
- [x] Render all enabled sections in single-page mode.
- [x] Render only the active page section in multi-page mode.
- [x] Add a minimal app-level multi-page wrapper for fixed-navbar spacing and page focus.

**Stories covered**: MLS-01, MLS-02, MLS-05

### Step 3: Update Navbar For Mode-Aware Navigation

- [x] Modify `src/components/Navbar.tsx`.
- [x] Add layout mode props: `layoutMode`, `onToggleLayoutMode`, `onNavigate`, and `getNavigationHref`.
- [x] Remove direct routing decisions from Navbar and delegate navigation to parent callbacks.
- [x] Add a desktop layout switch control with stable `data-testid`.
- [x] Add a mobile drawer layout switch control with stable `data-testid`.
- [x] Use mode-aware hrefs for desktop, mobile, and brand links.
- [x] Preserve active navigation styling and `aria-current` behavior.
- [x] Preserve drawer close behavior after navigation and switch actions.

**Stories covered**: MLS-01, MLS-03, MLS-05

### Step 4: Add Layout Helper Tests

- [x] Create `src/hooks/usePortfolioLayout.test.ts`.
- [x] Test layout mode validation.
- [x] Test page hash generation and parsing.
- [x] Test invalid hash fallback.
- [x] Test storage read/write behavior for valid and invalid values.
- [x] Test storage failure fallback where practical.

**Stories covered**: MLS-03, MLS-04, MLS-06

### Step 5: Extend App And Navbar Behavior Tests

- [x] Modify `src/App.test.tsx`.
- [x] Preserve existing smoke render coverage.
- [x] Test that the layout switch control renders.
- [x] Test that single-page mode renders multiple enabled sections.
- [x] Test that switching to multi-page mode renders the selected page behavior.
- [x] Test direct `#/sectionId` initialization where practical.
- [x] Test mode-aware navigation hrefs where practical.

**Stories covered**: MLS-01, MLS-02, MLS-03, MLS-05, MLS-06

### Step 6: Generate Code Summary Documentation

- [x] Create `aidlc-docs/construction/multi-page-layout-switcher/code/code-generation-summary.md`.
- [x] List files created and modified.
- [x] Map implemented stories to code surfaces.
- [x] Document test coverage added.
- [x] Note that no deployment or package dependency changes were required.

**Stories covered**: MLS-06

### Step 7: Verify No Duplicate Brownfield Files

- [x] Confirm no duplicate modified files were created, such as `Navbar_new.tsx` or `App_modified.tsx`.
- [x] Confirm application code remains under workspace `src/`.
- [x] Confirm documentation remains under `aidlc-docs/`.

**Stories covered**: MLS-06

## Dependencies And Interfaces

| Dependency | Usage |
|---|---|
| `src/data/portfolio.ts` navigation export | Source of enabled section IDs and labels. |
| `src/utils/scroll.ts` | Existing smooth-scroll behavior and active section tracking. |
| `src/types/portfolio.ts` | Existing `SectionId` and `NavigationItem` contracts. |
| Chakra UI | Existing navbar and layout primitives. |
| Vitest / React Testing Library | Existing local test stack. |

## Quality Gates

- [x] TypeScript compiles through `npm run build`.
- [x] Existing lint behavior remains compatible with `npm run lint`.
- [x] Tests pass through `npm run test`.
- [x] No new runtime dependency is added.
- [x] GitHub Pages deployment configuration remains unchanged.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable; no ASCII diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Code fences | Not applicable; no fenced code blocks included. |
| Special characters | File paths, story IDs, and code identifiers wrapped in code formatting. |
