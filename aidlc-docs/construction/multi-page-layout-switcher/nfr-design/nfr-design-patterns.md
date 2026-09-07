# NFR Design Patterns - Multi-Page Layout Switcher

## Purpose

Define concrete patterns that satisfy the approved non-functional requirements for the Multi-Page Layout Switcher.

## Approved Design Pattern Decisions

| Question | Approved Answer | Pattern Impact |
|---|---|---|
| Resilience pattern | A | Use pure helpers with safe fallback wrappers for browser APIs. |
| Logical component boundary | A | Use one `usePortfolioLayout` hook plus small helpers. |
| Performance pattern | A | Reuse section map and render only the active section in multi-page mode. |
| Accessibility pattern | A | Use named controls, active state, keyboard operation, and stable test IDs. |
| Testing pattern | A | Mix pure helper tests with component behavior tests. |
| Security/privacy pattern | A | Use a narrow storage key and only accept `single` or `multi`. |

## Resilience Patterns

### Safe Browser API Boundary

Browser APIs that can fail or contain invalid state should be isolated behind helper functions.

| Concern | Pattern |
|---|---|
| localStorage read | Catch exceptions and return `null`. |
| localStorage write | Catch exceptions and keep current in-memory state. |
| Stored mode validation | Accept only `single` and `multi`. |
| Hash parsing | Parse only `#/sectionId` for multi-page mode. |
| Unknown section | Resolve to `home` or first enabled section. |

### Fallback Resolution Pattern

Use a single fallback resolver for section selection:

1. If candidate section is enabled, use it.
2. Else if `home` is enabled, use `home`.
3. Else use the first enabled section.
4. If no enabled section exists, avoid crashing and let existing app safeguards handle empty rendering.

## Performance Patterns

### No New Runtime Dependency

The feature should use React, current utilities, and browser APIs already available in the app. No routing library or animation package is introduced.

### Minimal Rendering Pattern

| Mode | Rendering Pattern |
|---|---|
| Single-page | Render all enabled sections in order. |
| Multi-page | Render only the active enabled section. |

This avoids rendering all sections and hiding inactive sections with CSS.

### Stable Section Map Pattern

The existing `sectionComponents` map remains the render source. Multi-page mode selects one key from the same map instead of introducing separate page components.

## Accessibility Patterns

### Switch Control Pattern

The layout switcher should:

- Have a clear accessible name.
- Make the current mode or target mode understandable.
- Be keyboard reachable and activatable.
- Have stable `data-testid` values for tests.
- Appear in desktop and mobile navigation contexts.

### Active Navigation Pattern

Navigation links should continue to expose active state where practical:

- Single-page mode active state comes from scroll tracking.
- Multi-page mode active state comes from the resolved hash page.
- Existing active visual treatment should be reused.

### Focus Safety Pattern

Multi-page rendering should not create focus traps. The layout switch changes rendered content, but it should not prevent keyboard users from returning to navigation or tabbing through page content.

## Maintainability Patterns

### Small Hook Boundary

Use one hook or equivalent controller to own layout orchestration:

- mode state
- active page state
- hash change listener
- storage reads and writes
- mode-aware navigation callback
- mode-aware href builder

### Pure Helper Boundary

Use pure helper functions for logic that should be easy to test:

- mode validation
- storage read/write wrappers
- hash generation
- hash parsing
- section fallback resolution

### Presentation Delegation Pattern

`Navbar` should receive props and callbacks. It should not read localStorage, parse hashes, or decide fallback rules.

## Security And Privacy Patterns

### Narrow Storage Pattern

Use one narrow storage key for the layout mode preference. Store only a valid layout mode string.

### No Tracking Pattern

Do not add analytics, identifiers, backend calls, or personal-data persistence for this feature.

## Testing Patterns

### Helper Test Pattern

Pure helper tests should cover:

- valid and invalid layout mode values
- valid and invalid page hashes
- fallback section resolution
- storage read/write failures where practical

### Component Behavior Test Pattern

Component tests should cover:

- switch control renders
- switching modes changes rendering behavior
- single-page mode renders multiple sections
- multi-page mode renders one active section
- navigation hrefs change by layout mode
- invalid hash fallback behavior

## Traceability To NFRs

| NFR | Pattern Coverage |
|---|---|
| GitHub Pages compatibility | Native hash routing and no path routes. |
| Performance | No new dependency and active-section rendering in multi-page mode. |
| Accessibility | Named controls, active state, keyboard operation, no focus trap. |
| Reliability | Safe browser API boundary and fallback resolution. |
| Maintainability | Small hook boundary and pure helper boundary. |
| Security/privacy | Narrow storage and no tracking patterns. |
| Testability | Helper and component behavior test patterns. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | Code identifiers and hash examples wrapped in code formatting. |
