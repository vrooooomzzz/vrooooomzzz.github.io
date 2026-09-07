# Requirements - Multi-Page Layout Switcher

## Feature

Multi-Page Layout Switcher

## User Request

Add a button that switches the portfolio from a single landing page layout to a multi-page layout.

## Intent Analysis

| Attribute | Assessment |
|---|---|
| Request type | New user-facing feature |
| Project type | Brownfield React/Vite static portfolio |
| Scope estimate | Multiple components |
| Complexity estimate | Moderate |
| Primary users | Portfolio visitors and students using the template |
| Recommended next stage | User Stories |

## Current System Context

The current portfolio is a static React/Vite application that renders all enabled sections on one scrolling page. `src/App.tsx` orchestrates section rendering, `src/components/Navbar.tsx` handles section navigation, `src/data/navigation.ts` defines enabled sections, and GitHub Pages hosts the built static app.

The project already includes lightweight Vitest coverage for app rendering, navigation configuration, and portfolio data contracts.

## Approved Requirement Answers

| Topic | Answer | Requirement Impact |
|---|---|---|
| Primary user experience | C | Serve both visitors and students. |
| Multi-page structure | C | Start with section-per-page behavior and leave room for future configurable grouping. |
| Routing compatibility | A | Use hash-based routing/state for GitHub Pages compatibility. |
| Button placement | A | Place the switcher in the navbar for desktop and mobile. |
| Button behavior | A | Toggle modes and preserve the active/current section where practical. |
| Persistence | A | Store the selected layout mode in `localStorage`. |
| Visual design | A | Preserve existing visual language while making each page feel more focused. |
| Multi-page navigation | A | Navbar items navigate between section pages in multi-page mode. |
| Testing | A | Add focused Vitest tests for mode state, switch behavior, and rendering differences. |
| Security extension | B | Security extension remains disabled for this UI-only static feature. |
| Property-based testing extension | C | PBT extension remains disabled; example-based tests are sufficient. |

## Functional Requirements

### FR-MLS-01: Layout Mode Switch Button

The app must provide a visible control that switches between single-page and multi-page layout modes.

Acceptance criteria:

- The control is available in the navbar on desktop.
- The control is available from the mobile navigation experience.
- The control has a clear accessible label.
- The control uses stable `data-testid` values for automated tests.
- The current single-page layout remains available.

### FR-MLS-02: Single-Page Mode

Single-page mode must preserve the current portfolio behavior.

Acceptance criteria:

- All enabled sections render in one scrolling page.
- Navigation items smooth-scroll to sections.
- Active section tracking continues to work.
- Existing section IDs remain stable.
- Existing GitHub Pages deployment behavior remains unchanged.

### FR-MLS-03: Multi-Page Mode

Multi-page mode must render one active section page at a time.

Acceptance criteria:

- Each enabled section can be displayed as an individual page.
- Initial page defaults to Home when no page hash is present.
- The active page is derived from a valid enabled section ID.
- Unknown page hashes fall back to Home or the first enabled section.
- The implementation should allow future grouping configuration without requiring a full rewrite.

### FR-MLS-04: Hash-Based Page Navigation

Multi-page mode must use hash-based navigation for GitHub Pages compatibility.

Acceptance criteria:

- Multi-page navigation uses URLs such as `#/projects`.
- No path-based React Router deployment fallback is required.
- Directly loading a hash URL opens the matching section page.
- Browser back and forward navigation works with hash changes.
- Single-page mode may continue using section anchors or current smooth-scroll behavior.

### FR-MLS-05: Mode Persistence

The selected layout mode must persist in the same browser.

Acceptance criteria:

- The app stores the selected mode in `localStorage`.
- Refreshing the page restores the selected mode.
- If `localStorage` is unavailable, the app still works and defaults safely.
- No backend storage or secrets are required.

### FR-MLS-06: Focused Multi-Page Presentation

Multi-page mode should make individual sections feel page-like while preserving the current design language.

Acceptance criteria:

- The active page has appropriate top spacing below the fixed navbar.
- The active page is visually framed or focused without introducing a full theme redesign.
- Existing section components are reused where practical.
- Text and controls remain responsive on mobile and desktop.
- No page content should overlap the navbar or layout switcher.

### FR-MLS-07: Tests

The feature must add focused automated tests.

Acceptance criteria:

- Tests verify the layout mode switch behavior.
- Tests verify single-page mode renders multiple enabled sections.
- Tests verify multi-page mode renders the selected page behavior.
- Tests verify hash-based navigation behavior where practical in JSDOM.
- Tests avoid browser automation, network calls, and live deployment checks.

## Non-Functional Requirements

### NFR-MLS-01: GitHub Pages Compatibility

The feature must work on GitHub Pages without extra server configuration.

Acceptance criteria:

- Use hash-based state/routing for page URLs.
- Do not require 404 fallback files.
- Do not add backend runtime infrastructure.

### NFR-MLS-02: Maintainability

The feature should be understandable for students extending the template.

Acceptance criteria:

- Layout mode logic should be isolated in a small hook or utility where practical.
- Section/page mapping should reuse existing navigation and section IDs.
- Avoid duplicating section component definitions across multiple files.
- Avoid adding a large routing framework unless design later proves it necessary.

### NFR-MLS-03: Accessibility

The switcher and navigation behavior must be accessible.

Acceptance criteria:

- The switch control has an accessible name.
- The active page/navigation item exposes clear state where practical.
- Keyboard users can operate the switcher and navigation.
- Multi-page mode does not trap focus.

### NFR-MLS-04: Performance

The feature must keep the portfolio lightweight.

Acceptance criteria:

- Avoid adding heavyweight routing or animation dependencies.
- Reuse existing section components.
- Keep tests local and fast.

### NFR-MLS-05: Privacy And Security

The feature must not introduce sensitive data handling.

Acceptance criteria:

- No secrets.
- No backend.
- No analytics requirement.
- `localStorage` stores only the layout mode value.

## Out Of Scope

- Path-based routing such as `/projects`.
- React Router unless later design explicitly requires it.
- Backend storage or user accounts.
- External content management.
- Google Sheets integration.
- Automatic AI-generated redesign of page content.
- Browser end-to-end testing.

## Initial Implementation Surfaces

| Surface | Expected Role |
|---|---|
| `src/App.tsx` | Switch rendering between single-page and multi-page modes. |
| `src/components/Navbar.tsx` | Add layout mode control and adjust navigation behavior by mode. |
| `src/data/navigation.ts` | Continue serving as the section/page source of truth. |
| `src/utils/scroll.ts` | Preserve smooth-scroll behavior for single-page mode. |
| New layout mode hook or utility | Manage mode persistence and hash-based page state. |
| Existing tests | Extend coverage for mode and rendering behavior. |

## Traceability

| Requirement | Source |
|---|---|
| FR-MLS-01 | Questions 1, 4, 5 |
| FR-MLS-02 | Existing single-page behavior |
| FR-MLS-03 | Question 2 |
| FR-MLS-04 | Question 3 |
| FR-MLS-05 | Question 6 |
| FR-MLS-06 | Question 7 |
| FR-MLS-07 | Question 9 |
| NFR-MLS-01 | Question 3, GitHub Pages deployment context |
| NFR-MLS-02 | Template maintainability goal |
| NFR-MLS-03 | Navbar control and navigation behavior |
| NFR-MLS-04 | Static portfolio performance expectations |
| NFR-MLS-05 | Question 10 |

## Extension Configuration

| Extension | Enabled | Rationale |
|---|---|---|
| Security Baseline | No | User approved disabling it for this static UI-only feature. |
| Property-Based Testing | No | User approved disabling it; focused example-based Vitest tests are sufficient. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable; no ASCII diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Code fences | Not applicable; no fenced code blocks included. |
| Special characters | Inline code and markdown punctuation checked for readability. |
