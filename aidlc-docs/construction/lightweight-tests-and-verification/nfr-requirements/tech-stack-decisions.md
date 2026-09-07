# Tech Stack Decisions - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Record technology and tooling decisions for the lightweight test suite.

## Decision Summary

| Decision Area | Selected Approach |
|---|---|
| Test runner | Vitest |
| Component testing | React Testing Library |
| DOM environment | JSDOM |
| DOM matchers | jest-dom |
| Test command | `npm run test` |
| Test style | Focused unit/component/data contract tests |
| Browser automation | Excluded |
| Network calls | Excluded |
| Property-based testing | Excluded |

## Decision: Use Vitest

Vitest is selected as the test runner.

Rationale:

- Fits Vite projects naturally.
- Supports TypeScript and TSX tests.
- Provides a simple one-shot test command.
- Avoids extra Jest/Babel configuration.
- Keeps the student mental model close to the existing Vite stack.

Alternatives considered:

| Alternative | Reason Not Selected |
|---|---|
| Jest | More configuration overhead for a Vite/React/TypeScript project. |
| Playwright | Better for end-to-end browser tests, but outside this unit's lightweight scope. |
| Manual-only checklist | Does not satisfy the requirement for automated guardrails. |

## Decision: Use React Testing Library

React Testing Library is selected for app smoke rendering and component-facing checks.

Rationale:

- Encourages user-facing assertions.
- Works well with React.
- Avoids testing implementation details.
- Supports simple smoke render tests.

## Decision: Use JSDOM

JSDOM is selected as the test DOM environment.

Rationale:

- Allows React components to render in tests without launching a real browser.
- Keeps tests faster than browser automation.
- Fits the no-network, no-end-to-end scope.

## Decision: Use jest-dom Matchers

jest-dom matchers are selected for readable DOM assertions.

Rationale:

- Improves assertion readability.
- Helps tests communicate student-visible behavior.
- Commonly used with React Testing Library.

## Decision: Add One-Shot Test Script

`package.json` should include:

- `test`: one-shot test run.

Expected command shape:

```json
"test": "vitest run"
```

Rationale:

- Simple for students.
- Suitable for local verification.
- Suitable for final Build and Test instructions.

## Decision: Keep Tests Local And Deterministic

The suite must not call external services.

Excluded:

- Live GitHub Pages checks.
- Link availability checks.
- YouTube, GitHub, LinkedIn, or Google network calls.
- Google Sheets integration checks.
- Browser automation.
- Deployment verification.

Rationale:

- Students need reliable local feedback.
- Instructors need repeatable class outcomes.
- Network and deployment checks are better handled manually or in future advanced units.

## Decision: Update README After Script Exists

README should include `npm run test` after Unit 5 code generation adds the script.

Rationale:

- Keeps student docs accurate.
- Avoids documenting a command before it exists.
- Completes the deferred documentation rule from Unit 4.

## Expected Dev Dependencies

The code generation stage should add the minimal dev dependencies needed for the chosen stack.

Expected packages:

- `vitest`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event` if interaction testing is needed
- `jsdom`

Final package selection should be confirmed during code generation against the exact tests implemented.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
