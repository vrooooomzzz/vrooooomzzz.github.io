# NFR Requirements - Multi-Page Layout Switcher

## Purpose

Define the non-functional requirements for the Multi-Page Layout Switcher unit.

## Approved NFR Decisions

| Question | Approved Answer | Requirement Impact |
|---|---|---|
| Routing and tech stack | A | Use native hash handling with a small custom hook; do not add a routing dependency. |
| Performance budget | A | Add no new runtime package; keep current build behavior. |
| Accessibility level | A | Provide practical WCAG-aligned behavior for controls, navigation, and focus. |
| Reliability and browser API failures | A | Gracefully recover from invalid hashes and storage failures. |
| Security and privacy | A | Store only layout mode; no secrets, analytics, backend, or personal data. |
| Test requirements | A | Add focused Vitest and React Testing Library tests. |
| Student maintainability | A | Keep logic isolated in one small hook or utility with clear names. |

## GitHub Pages Compatibility

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-GP-01 | Multi-page mode must work on static GitHub Pages hosting. | Uses `#/sectionId` hashes, not path routes such as `/projects`. |
| NFR-MLS-GP-02 | The feature must not require GitHub Pages deployment changes. | No 404 fallback file, server rewrite, or workflow change is required. |
| NFR-MLS-GP-03 | Shared or directly loaded page hashes must resolve client-side. | A valid hash such as `#/projects` renders the matching enabled section. |

## Performance

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-PERF-01 | The feature must not add a new runtime dependency. | No routing package or animation package is introduced for this unit. |
| NFR-MLS-PERF-02 | The feature must preserve lightweight static app behavior. | Layout mode logic is implemented as small app code and helper functions. |
| NFR-MLS-PERF-03 | Rendering should avoid duplicating section component trees unnecessarily. | Single-page mode renders all enabled sections; multi-page mode renders only one active section. |

## Accessibility And Usability

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-A11Y-01 | Layout switch controls must be keyboard operable. | Desktop and mobile switch controls are reachable and activatable with keyboard interaction. |
| NFR-MLS-A11Y-02 | Layout switch controls must have accessible names. | Controls have clear labels such as switching to multi-page or single-page mode. |
| NFR-MLS-A11Y-03 | Navigation must expose active state where practical. | Active navigation links use an appropriate state such as `aria-current`. |
| NFR-MLS-A11Y-04 | Multi-page mode must not trap focus. | Visitors can continue navigating the header, links, and page content normally. |
| NFR-MLS-A11Y-05 | Visual layout must avoid overlap with the fixed navbar. | Multi-page content has sufficient top spacing and responsive constraints. |

## Reliability

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-REL-01 | Invalid hashes must recover safely. | Unknown, malformed, or disabled hashes fall back to `home` or the first enabled section. |
| NFR-MLS-REL-02 | localStorage read failures must not crash the app. | App defaults safely and continues rendering. |
| NFR-MLS-REL-03 | localStorage write failures must not crash the app. | Selected mode remains active in memory for the current session. |
| NFR-MLS-REL-04 | Browser back and forward must work in multi-page mode where supported by hash changes. | Hash change handling updates the active page section. |

## Maintainability

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-MAINT-01 | Layout behavior must be isolated from presentation components. | Hash, storage, and mode logic live in a small hook or utility, not inside section components. |
| NFR-MLS-MAINT-02 | Section/page definitions must stay centralized. | Existing navigation data and `SectionId` values remain the source of truth. |
| NFR-MLS-MAINT-03 | Section components should stay mode-agnostic. | No per-section page variants are required for this feature. |
| NFR-MLS-MAINT-04 | Code should be understandable for students. | Names and files should make the layout state flow easy to inspect. |

## Security And Privacy

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-SEC-01 | The feature must not introduce secrets or backend data handling. | No environment secrets, API calls, authentication, or server storage are added. |
| NFR-MLS-SEC-02 | localStorage must store only the layout mode value. | No personal data, analytics ID, or content data is persisted. |
| NFR-MLS-SEC-03 | The feature must not add analytics. | Mode selection is not tracked externally. |

## Testability

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-MLS-TEST-01 | Layout switching must be covered by local tests. | Tests verify switch control behavior and mode changes. |
| NFR-MLS-TEST-02 | Rendering differences must be covered by local tests. | Tests verify single-page mode renders multiple sections and multi-page mode renders one selected section. |
| NFR-MLS-TEST-03 | Hash and storage fallbacks must be covered where practical. | Tests verify valid hashes, invalid hashes, valid stored mode, and invalid stored mode. |
| NFR-MLS-TEST-04 | Tests must stay local and fast. | Vitest and React Testing Library are used; no browser e2e, network calls, or live deployment checks are required. |

## Scalability And Availability

This feature has no backend scale or availability requirement. The static GitHub Pages deployment remains the availability boundary. The feature should scale with normal static asset delivery because all behavior runs in the visitor's browser.

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
| Special characters | Hash examples and code identifiers wrapped in code formatting. |
