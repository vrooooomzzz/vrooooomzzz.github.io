# Functional Design Plan - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Plan the functional design for lightweight automated tests and verification guardrails for the student portfolio template.

## Unit Context

Unit 5 is the final implementation unit before Build and Test. It adds test coverage for the refactored template structure created by Units 1-4.

The unit should validate:

- The app can render without crashing.
- Navigation configuration is complete and internally consistent.
- Required portfolio data is present and shaped correctly.
- Important student-editable links and asset references are not obviously broken.
- A simple test command exists for local verification.

## Boundaries

In scope:

- Add lightweight test tooling.
- Add a simple `npm run test` script.
- Add app smoke render tests.
- Add navigation/config validation tests.
- Add required portfolio data tests.
- Update verification documentation after tests exist.

Out of scope:

- Browser automation.
- End-to-end deployment tests.
- External network calls.
- Snapshot-heavy testing.
- Property-based testing.
- Backend or API testing.

## Execution Checklist

- [x] Read Unit 5 definition from unit-of-work artifacts.
- [x] Read Unit 5 story mapping.
- [x] Read project requirements for lightweight tests.
- [x] Identify functional design questions.
- [x] Create this functional design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/functional-design/business-logic-model.md`.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/functional-design/business-rules.md`.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/functional-design/domain-entities.md`.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/functional-design/frontend-components.md`.
- [x] Update plan checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

### Question 1: Test Scope

What should the initial lightweight test scope include?

A. App smoke render, navigation integrity, required profile/data fields, and basic asset/link shape checks.  
B. Only app smoke render.  
C. Full end-to-end user flows in a real browser.  
X. Other.

[Answer]: A

Recommendation: A. This matches the approved Unit 5 purpose without adding browser automation.

### Question 2: Test Style

What testing style should guide the implementation?

A. Focused unit and component tests that validate behavior and data contracts with minimal mocking.  
B. Snapshot-first tests for most components.  
C. Manual checklist only, no automated tests.  
X. Other.

[Answer]: A

Recommendation: A. This provides useful guardrails while staying beginner-friendly.

### Question 3: Test Command

How should the test command be exposed?

A. Add `npm run test` for a one-shot test run suitable for local verification and CI-style checks.  
B. Add only a watch-mode command.  
C. Do not add a package script.  
X. Other.

[Answer]: A

Recommendation: A. Requirements call for a simple npm test command.

### Question 4: Documentation Updates

How should documentation mention tests after Unit 5 adds them?

A. Update README verification guidance to include `npm run test` after build/lint/preview context is clear.  
B. Only mention tests in AI-DLC docs, not student-facing docs.  
C. Defer all documentation updates to Build and Test.  
X. Other.

[Answer]: A

Recommendation: A. Student-facing verification should include the new command once it exists.

### Question 5: Failure Behavior

What should tests optimize for when a student breaks template data?

A. Clear failures for missing required fields, duplicate section IDs, disabled/missing navigation targets, and malformed URLs.  
B. Strict validation of every possible text field and visual detail.  
C. Only fail on TypeScript compiler errors.  
X. Other.

[Answer]: A

Recommendation: A. It catches likely student mistakes without making tests brittle.

## Proposed Answers

| Question | Proposed Answer |
| -------- | --------------- |
| 1        | A               |
| 2        | A               |
| 3        | A               |
| 4        | A               |
| 5        | A               |

## Content Validation

| Check                | Status                                                         |
| -------------------- | -------------------------------------------------------------- |
| Mermaid syntax       | N/A - no Mermaid diagrams included.                            |
| ASCII diagram syntax | N/A - no ASCII diagrams included.                              |
| Markdown tables      | Valid pipe table format used.                                  |
| Question format      | Each question includes A/B/C/X options and an `[Answer]:` tag. |
| Special characters   | File paths and commands are wrapped in backticks where needed. |

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
