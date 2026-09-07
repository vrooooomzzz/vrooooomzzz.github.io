# Functional Design Plan - Component Refactor And Shared UI Utilities

## Unit

Unit 2: Component Refactor And Shared UI Utilities

## Purpose

Design how the existing React UI should consume the typed Unit 1 portfolio data, centralize repeated behavior, and improve maintainability without changing the visible portfolio experience.

## Execution Checklist

- [x] Read Unit 2 definition from `aidlc-docs/inception/application-design/unit-of-work.md`.
- [x] Read assigned Unit 2 stories from `aidlc-docs/inception/application-design/unit-of-work-story-map.md`.
- [x] Read application component design from `aidlc-docs/inception/application-design/components.md`.
- [x] Read component dependency design from `aidlc-docs/inception/application-design/component-dependency.md`.
- [x] Read Unit 1 generated types and portfolio data exports.
- [x] Validate plan content format before file creation.
- [x] Collect answers to functional design questions.
- [x] Analyze answers for ambiguity or contradictions.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/functional-design/business-logic-model.md`.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/functional-design/business-rules.md`.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/functional-design/domain-entities.md`.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/functional-design/frontend-components.md`.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present Functional Design completion checkpoint for review.

## Unit Scope

### In Scope

- Refactor `App`, `Navbar`, and section components to consume `src/data/portfolio.ts` or focused data exports.
- Replace duplicated section ID arrays and navigation lists with Unit 1 navigation data.
- Add shared scroll/navigation behavior.
- Add contact and media helpers where they reduce repeated logic.
- Add moderate shared UI components only where they preserve readability.
- Improve accessible labels for icon-only links, external actions, mobile menu controls, image modal actions, and certificate interactions.

### Out Of Scope

- Changing the visual theme or portfolio content intentionally.
- Adding tests, test dependencies, or `npm run test`.
- Changing GitHub Pages deployment configuration.
- Rewriting README or deployment documentation.
- Adding backend services, CMS, runtime data fetching, or databases.

## Story Traceability

| Story                             | Unit 2 Functional Design Focus                                                   |
| --------------------------------- | -------------------------------------------------------------------------------- |
| US-07                             | Desktop and mobile navigation consume shared config and scroll consistently.     |
| US-08                             | Project cards render typed external actions with accessible labels.              |
| US-09                             | Contact form uses configured profile email and shared mailto helper.             |
| US-14                             | Accessibility and responsive usability are preserved during refactor.            |
| US-15                             | Shared utilities and moderate reusable components reduce meaningful duplication. |
| US-03, US-04, US-05, US-06, US-16 | Unit 2 consumes Unit 1 data and prepares the app for later validation tests.     |

## Functional Design Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

How aggressive should the component refactor be?

A) Conservative: only replace inline data with imports and centralize repeated helpers
B) Moderate: replace inline data, add shared helpers, and add small shared UI components for repeated section/card/action patterns
C) Broad: reorganize many components around a larger shared component system
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 2

How should optional sections controlled by `navigation.enabled` behave in Unit 2?

A) Fully honor `enabled`: hide disabled sections from both navbar and page rendering
B) Honor `enabled` only in navbar for now; keep all sections rendered
C) Keep `enabled` as data only for later tests/docs; do not change rendering behavior yet
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How much shared UI abstraction should be introduced?

A) Minimal: utilities only, no new shared visual components
B) Moderate: add focused shared components such as `SectionShell`, `ContentCard`, and `ExternalAction` only where duplication is obvious
C) High: make most sections use shared layout/card primitives even if individual section code becomes more abstract
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 4

How should the existing repository-wide lint errors in Chakra helper files be handled during Unit 2?

A) Fix them in Unit 2 because they are shared UI helper issues and block clean `npm run lint`
B) Leave them for a later cleanup unit because they are unrelated to data-driven component behavior
C) Only fix them if they are touched while refactoring shared UI utilities
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Recommended Answers

My recommendation is:

- **Question 1**: B
- **Question 2**: A
- **Question 3**: B
- **Question 4**: A

This keeps the refactor meaningful but not over-engineered, makes the new `enabled` data useful immediately, and gives us a clean lint baseline before later test and documentation units depend on verification commands.

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
