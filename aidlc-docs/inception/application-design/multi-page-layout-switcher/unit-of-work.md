# Unit Of Work - Multi-Page Layout Switcher

## Unit Summary

| Unit | Type | Scope |
|---|---|---|
| Multi-Page Layout Switcher | Frontend feature unit | Add layout mode selection, hash-based multi-page navigation, conditional section rendering, persistence, and focused tests. |

## Decomposition Decision

Use one focused unit of work. The approved unit plan selected option A for all decomposition questions:

- One unit for layout state, app rendering, navbar controls, hash behavior, persistence, and tests.
- Keep the work inside the existing React app package.
- Assume one student or developer can implement the unit end-to-end.
- Use the existing frontend boundary: `src/App.tsx`, `src/components/Navbar.tsx`, a small hook or utility, and tests.
- Treat the business capability as portfolio browsing mode selection.
- Organize new behavior in `src/hooks/usePortfolioLayout.ts` or a nearby small utility file.

## Unit Responsibilities

The unit is responsible for:

- Defining the layout mode contract, likely `single` and `multi`.
- Reading and writing a valid layout mode preference in `localStorage`.
- Parsing GitHub Pages-safe page hashes such as `#/projects`.
- Creating mode-aware navigation hrefs.
- Preserving existing single-page smooth-scroll navigation.
- Rendering all enabled sections in single-page mode.
- Rendering one active enabled section in multi-page mode.
- Adding a desktop and mobile navbar control for switching layout modes.
- Keeping existing section components mode-agnostic.
- Adding focused Vitest and React Testing Library coverage.

## Unit Boundaries

### In Scope

- `src/App.tsx`
- `src/components/Navbar.tsx`
- `src/utils/scroll.ts` if minor helper reuse or adjustment is needed
- New `src/hooks/usePortfolioLayout.ts` or equivalent small layout utility
- Existing tests and new focused tests
- Documentation summary if implementation introduces a new student-facing extension point

### Out Of Scope

- React Router or another routing framework
- Path-based routes such as `/projects`
- GitHub Pages workflow changes
- Backend services or APIs
- Google Sheets integration
- External content management
- Automatic AI-generated redesign of section content
- Browser end-to-end testing

## Implementation Modules

| Module | Purpose | Notes |
|---|---|---|
| Layout hook or utility | Own mode, hash, and storage behavior | Preferred new code location for student readability. |
| `App` rendering integration | Select all-section or active-section rendering | Reuse the existing section component map. |
| `Navbar` integration | Present switcher and mode-aware links | Keep routing decisions in parent-provided callbacks. |
| Tests | Verify mode switching, hash selection, and rendering differences | Keep local and fast using Vitest. |

## Acceptance Coverage

This unit covers all approved stories:

- MLS-01: Switch Between Layout Modes
- MLS-02: Browse One Section Per Page
- MLS-03: Navigate With GitHub Pages-Safe Hash URLs
- MLS-04: Remember The Selected Layout Mode
- MLS-05: Present Multi-Page Mode As A Polished Page Experience
- MLS-06: Verify Layout Modes With Lightweight Tests

## Ready For Construction

The next construction stages should design and implement this single unit in detail:

1. Functional Design for hash parsing, persistence, toggle behavior, and rendering rules.
2. NFR Requirements for accessibility, maintainability, GitHub Pages compatibility, and performance.
3. NFR Design for concrete patterns that satisfy those NFRs.
4. Code Generation for implementation and tests.
5. Build and Test for verification.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User approved disabling it during Requirements Analysis for this static UI-only feature. |
| Property-Based Testing | Disabled | User approved focused example-based tests instead. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | File paths and route examples wrapped in code formatting. |
