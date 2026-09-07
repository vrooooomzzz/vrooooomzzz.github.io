# NFR Requirements Plan - Component Refactor And Shared UI Utilities

## Unit

Unit 2: Component Refactor And Shared UI Utilities

## Purpose

Identify non-functional requirements for refactoring the React UI onto the typed portfolio data layer while preserving visual behavior, improving maintainability, accessibility, and verification reliability.

## Execution Checklist

- [x] Read Unit 2 functional design artifacts.
- [x] Confirm approved functional decisions from the Unit 2 functional design plan.
- [x] Identify NFR categories relevant to a static React/Vite portfolio.
- [x] Validate plan content format before file creation.
- [x] Collect answers to NFR requirements questions.
- [x] Analyze answers for ambiguity or contradictions.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/nfr-requirements/nfr-requirements.md`.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/nfr-requirements/tech-stack-decisions.md`.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present NFR Requirements completion checkpoint for review.

## NFR Scope

### In Scope

- Maintainability of data-driven components.
- Accessibility for navigation, icon-only links, modals, and external actions.
- Runtime performance of the refactored static UI.
- Build and lint reliability.
- Responsive behavior preservation.
- Static hosting compatibility.
- Compatibility with the current React 19, TypeScript, Vite, Chakra UI, and React Icons stack.

### Out Of Scope

- Backend availability, database scaling, authentication, authorization, or runtime secrets.
- Full test suite design and dependency selection. Those belong to Unit 5.
- GitHub Pages deployment base path changes. Those belong to Unit 3.
- README and deployment documentation. Those belong to Unit 4.

## Functional Design Inputs

The approved Unit 2 functional design established:

- Moderate refactor depth.
- Full use of `navigation.enabled` for navbar and rendered sections.
- Moderate shared UI components such as `SectionShell`, `ContentCard`, and `ExternalAction`.
- Fix existing shared UI helper lint blockers in Unit 2.
- Preserve current visible content and visual tone.

## NFR Requirements Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

What should be the maintainability priority for the component refactor?

A) Beginner readability first, even if some section-specific repetition remains
B) Maximum reuse first, even if section code becomes more abstract
C) Smallest diff first, changing only the minimum code needed to consume data
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

What accessibility standard should Unit 2 target?

A) Practical accessibility improvements: meaningful labels, keyboard support, safe external links, and preserved semantic headings
B) Comprehensive WCAG audit-level changes across all components
C) Only fix accessibility issues directly caused by the data refactor
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How strict should verification be for Unit 2 before moving on?

A) `npm run build` and `npm run lint` should both pass
B) `npm run build` must pass; lint can still have known non-blocking issues
C) Manual review is enough because tests are planned later
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

What performance posture should guide the refactor?

A) Preserve current performance and avoid adding runtime-heavy abstractions
B) Optimize bundle size aggressively during Unit 2
C) Accept extra runtime abstraction if it makes future extensions easier
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 5

How should the current technology stack be handled?

A) Keep the existing React, TypeScript, Vite, Chakra UI, and React Icons stack unchanged
B) Introduce a small additional utility dependency if it simplifies the refactor
C) Reconsider UI framework choices during this refactor
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Recommended Answers

My recommendation is:

- **Question 1**: A
- **Question 2**: A
- **Question 3**: A
- **Question 4**: A
- **Question 5**: A

This keeps Unit 2 aligned with the student-template goal: readable components, useful accessibility improvements, clean verification commands, no new runtime dependencies, and no broad UI-framework churn.

## Content Validation Notes

- This plan contains no Mermaid diagrams.
- This plan contains no ASCII diagrams.
- Markdown uses simple headings, tables, and checkboxes.
- All questions use the required `[Answer]:` format and include `X) Other` as the last option.

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
