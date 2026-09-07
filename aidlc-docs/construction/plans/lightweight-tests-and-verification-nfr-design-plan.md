# NFR Design Plan - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Plan the non-functional design patterns and logical testing components for the lightweight verification suite.

## Approved NFR Requirements Input

| Area            | Approved Direction                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| Test tooling    | Vitest with React Testing Library, jest-dom, and JSDOM.                                                   |
| Performance     | Fast one-shot tests that students can run before publishing.                                              |
| Reliability     | Deterministic local tests with no network, live deployment, browser automation, or time-based assertions. |
| Failure quality | Test names and assertions should point students toward likely broken files.                               |
| Documentation   | Add `npm run test` to README after the script exists; keep full instructions for Build and Test.          |

## NFR Design Focus Areas

| Category             | Design Focus                                                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Resilience Patterns  | Use deterministic local checks with clear failure boundaries instead of retries or live-service recovery.                         |
| Scalability Patterns | Organize a small suite by test concern so future template features can add targeted tests.                                        |
| Performance Patterns | Use `vitest run` in JSDOM and avoid snapshots, browser startup, remote calls, and broad visual assertions.                        |
| Security Patterns    | Avoid secrets, private services, `.env` dependencies, and external reachability checks.                                           |
| Logical Components   | Define test runner config, setup file, app smoke test, navigation data test, portfolio data test, and README verification update. |

## Execution Checklist

- [x] Read approved NFR requirements.
- [x] Read approved tech stack decisions.
- [x] Identify applicable NFR design categories.
- [x] Create this NFR design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/nfr-design/nfr-design-patterns.md`.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/nfr-design/logical-components.md`.
- [x] Update this plan after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Questions

### Question 1: Resilience Pattern

How should the test suite handle failures and unreliable external conditions?

A. Deterministic local checks only, with no retries, network dependencies, or live deployments; failures point to broken local contracts.  
B. Retry flaky tests automatically to reduce visible failures.  
C. Use live deployment checks so failures include production availability issues.  
X. Other: describe the preferred approach.

[Answer]: A

Recommendation: A. This best matches the approved requirement for reliable classroom-friendly local tests.

### Question 2: Scalability Pattern

How should the suite be organized so it can grow as students customize the template?

A. Organize tests by concern: app smoke, navigation config, portfolio data, and docs/package script checks.  
B. Keep one large all-in-one test file.  
C. Create a full per-component test suite for every portfolio section immediately.  
X. Other: describe the preferred structure.

[Answer]: A

Recommendation: A. This keeps the first test suite small while giving students obvious places to add future checks.

### Question 3: Performance Pattern

What performance design should guide the automated tests?

A. Keep tests small and run with `vitest run` in JSDOM; avoid snapshots, browser startup, and remote calls.  
B. Optimize for maximum coverage even if the suite becomes slower.  
C. Use real browser tests for stronger runtime confidence.  
X. Other: describe the preferred performance approach.

[Answer]: A

Recommendation: A. This gives fast feedback and avoids the maintenance cost of heavier test infrastructure.

### Question 4: Security And Privacy Pattern

What security and privacy boundary should the test suite enforce?

A. No secrets, no `.env`, no private Google Sheets, and no live external service calls; validate only local strings and static data shapes.  
B. Add optional checks for private services when students configure them.  
C. Add link reachability checks against external sites.  
X. Other: describe the preferred boundary.

[Answer]: A

Recommendation: A. This keeps tests safe for a public student template and compatible with offline local runs.

### Question 5: Logical Components

Which logical components should be included in the NFR design?

A. Vitest config, test setup, App smoke test, navigation config tests, portfolio data tests, and README verification update.  
B. Only define an App smoke test.  
C. Define an end-to-end browser testing architecture.  
X. Other: describe the preferred component set.

[Answer]: A

Recommendation: A. This covers the highest-value local contracts without expanding into end-to-end testing.

## Proposed Answers

| Question   | Proposed Answer |
| ---------- | --------------- |
| Question 1 | A               |
| Question 2 | A               |
| Question 3 | A               |
| Question 4 | A               |
| Question 5 | A               |

## Content Validation

| Check              | Result                                                        |
| ------------------ | ------------------------------------------------------------- |
| Mermaid diagrams   | Not applicable; no Mermaid diagrams included.                 |
| ASCII diagrams     | Not applicable; no ASCII diagrams included.                   |
| Markdown tables    | Valid simple pipe tables.                                     |
| Code fences        | Not applicable; no fenced code blocks included.               |
| Special characters | Inline code and markdown punctuation checked for readability. |

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
