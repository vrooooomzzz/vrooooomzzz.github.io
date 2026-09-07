# User Stories - Multi-Page Layout Switcher

## Feature

Multi-Page Layout Switcher

## Story Approach

Stories use a hybrid journey-based and persona-based breakdown. Visitor journey stories come first, followed by student and maintainer support stories. Acceptance criteria use bullet lists with test implications.

## Story Summary

| Story | Priority | Primary Persona | Requirement Coverage |
|---|---|---|---|
| MLS-01 | Must | Visitor, Student Customizer | FR-MLS-01, FR-MLS-02 |
| MLS-02 | Must | Visitor | FR-MLS-03, FR-MLS-04 |
| MLS-03 | Must | Visitor, Template Maintainer | FR-MLS-04, NFR-MLS-01 |
| MLS-04 | Should | Student Customizer, Template Maintainer | FR-MLS-05, NFR-MLS-02, NFR-MLS-05 |
| MLS-05 | Should | Visitor, Template Maintainer | FR-MLS-06, NFR-MLS-03, NFR-MLS-04 |
| MLS-06 | Must | Student Customizer, Template Maintainer | FR-MLS-07 |

## MLS-01: Switch Between Layout Modes

**Priority**: Must

As a portfolio visitor or student customizer, I want a clear navbar control that switches between single-page and multi-page layouts so that I can choose the browsing style that fits my goal.

### Acceptance Criteria

- A layout switch control appears in the navbar on desktop.
- A layout switch control is available in the mobile navigation experience.
- The control clearly communicates the current layout mode or target mode.
- Activating the control toggles between single-page and multi-page modes.
- The control has an accessible name and stable test identifier.
- Switching modes does not remove or corrupt portfolio content.

### Test Implications

- Test that the switch control renders.
- Test that activating the control changes layout mode.
- Test that both layout modes still render portfolio content.

### INVEST Check

| Attribute | Check |
|---|---|
| Independent | Can be validated as the core switch interaction. |
| Negotiable | Button wording and visual style can evolve. |
| Valuable | Gives visitors and students direct control over layout. |
| Estimable | Touches known navbar and layout state surfaces. |
| Small | Focused on switching behavior only. |
| Testable | Verifiable with component tests. |

## MLS-02: Browse One Section Per Page

**Priority**: Must

As a visitor, I want multi-page mode to show one portfolio section at a time so that I can focus on the section I selected.

### Acceptance Criteria

- Multi-page mode displays one active section page at a time.
- The Home section is the default page when no valid page is selected.
- Each enabled section can be selected as a page.
- Unknown page values fall back safely to Home or the first enabled section.
- Existing section components are reused instead of duplicated.

### Test Implications

- Test that multi-page mode renders the selected section.
- Test that non-selected sections are not rendered as full pages in multi-page mode.
- Test fallback behavior for unknown page hashes where practical.

### INVEST Check

| Attribute | Check |
|---|---|
| Independent | Can be validated separately from persistence and styling. |
| Negotiable | Future grouping can adjust page definitions. |
| Valuable | Makes long portfolios easier to scan. |
| Estimable | Maps to current section IDs and section components. |
| Small | Focused on page rendering behavior. |
| Testable | Verifiable through render assertions. |

## MLS-03: Navigate With GitHub Pages-Safe Hash URLs

**Priority**: Must

As a visitor, I want multi-page navigation to use GitHub Pages-safe URLs so that I can open and share section pages without deployment errors.

### Acceptance Criteria

- Multi-page mode uses hash URLs such as `#/projects`.
- Navbar links navigate between page hashes in multi-page mode.
- Directly opening a supported hash page displays the matching section.
- Browser back and forward behavior follows hash changes where supported.
- No path-based route fallback or server configuration is required.

### Test Implications

- Test hash parsing and section selection.
- Test navbar behavior differs between single-page and multi-page modes.
- Test direct hash initialization where practical in JSDOM.

### INVEST Check

| Attribute | Check |
|---|---|
| Independent | Can be checked as URL/navigation behavior. |
| Negotiable | Hash format can be refined if requirements change. |
| Valuable | Protects GitHub Pages compatibility. |
| Estimable | Uses browser hash state rather than a routing service. |
| Small | Focused on navigation and URL behavior. |
| Testable | Verifiable with utility and component tests. |

## MLS-04: Remember The Selected Layout Mode

**Priority**: Should

As a returning visitor or student customizer, I want the portfolio to remember my selected layout mode so that refreshes keep the experience I chose.

### Acceptance Criteria

- The selected layout mode is saved in `localStorage`.
- The app restores a valid saved layout mode on load.
- Invalid saved values are ignored safely.
- If `localStorage` is unavailable, the app defaults safely without crashing.
- Only the layout mode value is stored.

### Test Implications

- Test default mode behavior.
- Test saved mode restoration.
- Test invalid storage value fallback.

### INVEST Check

| Attribute | Check |
|---|---|
| Independent | Can be tested through layout mode state utilities. |
| Negotiable | Persistence could be removed or made configurable later. |
| Valuable | Makes the feature feel stable across sessions. |
| Estimable | Uses simple browser storage. |
| Small | Focused on preference persistence. |
| Testable | Verifiable with localStorage mocks in Vitest. |

## MLS-05: Present Multi-Page Mode As A Polished Page Experience

**Priority**: Should

As a visitor, I want multi-page mode to feel focused and polished so that the portfolio looks intentional rather than like hidden sections.

### Acceptance Criteria

- Multi-page content has appropriate spacing below the fixed navbar.
- The active page feels visually focused while preserving the existing design language.
- Text and controls fit on mobile and desktop.
- The layout switcher and navbar do not overlap page content.
- Keyboard users can operate navigation and the layout switcher.

### Test Implications

- Test accessible control names and active navigation state where practical.
- Use manual visual review for spacing and responsive polish.
- Avoid brittle pixel-perfect tests.

### INVEST Check

| Attribute | Check |
|---|---|
| Independent | Can be refined without changing routing behavior. |
| Negotiable | Visual treatment can evolve during design. |
| Valuable | Improves perceived quality of the feature. |
| Estimable | Uses existing visual system and section components. |
| Small | Focused on presentation and accessibility. |
| Testable | Partly automated, partly manual visual review. |

## MLS-06: Verify Layout Modes With Lightweight Tests

**Priority**: Must

As a template maintainer, I want focused tests for the layout switcher so that future student edits do not break single-page or multi-page behavior.

### Acceptance Criteria

- Tests cover layout mode switch behavior.
- Tests cover single-page mode rendering multiple enabled sections.
- Tests cover multi-page mode rendering selected page behavior.
- Tests cover hash-based page behavior where practical.
- Tests avoid network calls, live deployment checks, and browser automation.
- Existing test, build, and lint commands continue to pass.

### Test Implications

- Extend existing Vitest and React Testing Library coverage.
- Keep failures close to layout mode, navigation, or section data contracts.
- Preserve current local-only verification strategy.

### INVEST Check

| Attribute | Check |
|---|---|
| Independent | Testing story can validate the completed feature. |
| Negotiable | Exact test file placement can be decided during design. |
| Valuable | Protects the template baseline. |
| Estimable | Builds on existing test stack. |
| Small | Focused on layout mode tests. |
| Testable | The story is itself verified by passing tests. |

## Persona Mapping

| Story | Visitor | Student Customizer | Template Maintainer |
|---|---|---|---|
| MLS-01 | Yes | Yes | No |
| MLS-02 | Yes | No | No |
| MLS-03 | Yes | No | Yes |
| MLS-04 | Yes | Yes | Yes |
| MLS-05 | Yes | No | Yes |
| MLS-06 | No | Yes | Yes |

## Requirements Traceability

| Requirement | Stories |
|---|---|
| FR-MLS-01 | MLS-01 |
| FR-MLS-02 | MLS-01, MLS-06 |
| FR-MLS-03 | MLS-02 |
| FR-MLS-04 | MLS-03 |
| FR-MLS-05 | MLS-04 |
| FR-MLS-06 | MLS-05 |
| FR-MLS-07 | MLS-06 |
| NFR-MLS-01 | MLS-03 |
| NFR-MLS-02 | MLS-02, MLS-04, MLS-06 |
| NFR-MLS-03 | MLS-01, MLS-05 |
| NFR-MLS-04 | MLS-05, MLS-06 |
| NFR-MLS-05 | MLS-04 |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User approved disabling it during Requirements Analysis for this static UI-only feature. |
| Property-Based Testing | Disabled | User approved disabling it during Requirements Analysis; focused example-based tests are sufficient. |
