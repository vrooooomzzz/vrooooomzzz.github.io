# NFR Requirements Plan - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Plan non-functional requirements and tech stack decisions for the lightweight test suite before generating NFR artifacts.

## Unit Context

Unit 5 adds automated verification to a static React/Vite portfolio template. The tests should be useful for students and instructors without adding operational complexity.

The approved functional design calls for:

- App smoke render tests.
- Navigation integrity tests.
- Portfolio data validation tests.
- A one-shot `npm run test` command.
- README verification updates after the command exists.
- No browser automation or external network calls.

## NFR Focus Areas

| Area            | Requirement Intent                                                           |
| --------------- | ---------------------------------------------------------------------------- |
| Performance     | Tests should run quickly enough for students to use before publishing.       |
| Reliability     | Tests should be deterministic, isolated, and free from network dependencies. |
| Maintainability | Tests should be easy to understand, extend, and debug.                       |
| Usability       | Failure messages should guide students toward likely broken data files.      |
| Tech Stack      | Use tooling that fits Vite, React, TypeScript, and local development.        |
| Security        | Tests should not require secrets or access private services.                 |

## Execution Checklist

- [x] Read Unit 5 functional design artifacts.
- [x] Identify testing-specific NFR concerns.
- [x] Review current package scripts and stack constraints.
- [x] Create this NFR requirements plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/nfr-requirements/nfr-requirements.md`.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/nfr-requirements/tech-stack-decisions.md`.
- [x] Update plan checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

### Question 1: Test Tooling

Which test tooling should Unit 5 use?

A. Vitest with React Testing Library, jest-dom matchers, and JSDOM.  
B. Jest with Babel configuration.  
C. Playwright browser tests.  
X. Other.

[Answer]: A

Recommendation: A. This fits Vite/React/TypeScript and keeps the setup lightweight.

### Question 2: Performance Target

What performance target should guide the test suite?

A. Keep tests small and deterministic so the one-shot local test run usually completes in a few seconds.  
B. Prioritize exhaustive coverage even if tests become slow.  
C. Performance is not a concern for this unit.  
X. Other.

[Answer]: A

Recommendation: A. Students are more likely to use fast checks consistently.

### Question 3: Reliability And Isolation

What reliability constraints should tests follow?

A. No external network calls, no live deployment checks, no real browser automation, and no time-dependent assertions.  
B. Allow live URL checks against GitHub Pages.  
C. Allow tests to fetch external resources if they are read-only.  
X. Other.

[Answer]: A

Recommendation: A. Deterministic tests are much easier for students and instructors to trust.

### Question 4: Failure Message Quality

How helpful should failures be for student data mistakes?

A. Test names and assertion messages should point to likely files such as `src/data/profile.ts`, `src/data/navigation.ts`, or `src/assets/`.  
B. Default assertion errors are enough.  
C. Only TypeScript compiler errors need to be readable.  
X. Other.

[Answer]: A

Recommendation: A. The test suite is partly a teaching tool, so failures should guide repair.

### Question 5: Documentation And Maintenance

How should testing guidance be maintained?

A. Update README with `npm run test` and keep detailed build/test instructions for the final Build and Test stage.  
B. Put all test documentation only in README.  
C. Avoid student-facing test documentation.  
X. Other.

[Answer]: A

Recommendation: A. README gets the student command; Build and Test gets comprehensive verification docs.

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
