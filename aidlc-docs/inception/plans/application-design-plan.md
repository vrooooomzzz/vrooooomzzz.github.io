# Application Design Plan

## Purpose

Design the high-level application structure for the student portfolio template refactor before implementation. This plan focuses on components, responsibilities, interfaces, service-like orchestration modules, and dependencies.

## Execution Checklist

- [x] Read requirements, user stories, reverse engineering artifacts, and execution plan.
- [x] Confirm design decisions from answered plan questions.
- [x] Generate `aidlc-docs/inception/application-design/components.md`.
- [x] Generate `aidlc-docs/inception/application-design/component-methods.md`.
- [x] Generate `aidlc-docs/inception/application-design/services.md`.
- [x] Generate `aidlc-docs/inception/application-design/component-dependency.md`.
- [x] Generate consolidated `aidlc-docs/inception/application-design/application-design.md`.
- [x] Validate design completeness and consistency.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present Application Design completion checkpoint for review.

## Recommended Design Direction

- Keep section components recognizable for students.
- Move editable content into typed `src/data/*` modules.
- Add shared type definitions in `src/types/*`.
- Add shared helpers in `src/utils/*`.
- Add only small reusable UI components where they reduce repeated section chrome or link/action patterns.
- Treat GitHub Pages configuration and tests as support modules rather than UI components.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

How should editable portfolio data be organized?

A) One central `src/data/portfolio.ts` file containing all portfolio content
B) Multiple focused files such as `profile.ts`, `navigation.ts`, `education.ts`, `projects.ts`, and `skills.ts`
C) A hybrid with one `portfolio.ts` aggregator that imports focused data files
X) Other (please describe after [Answer]: tag below)

[Answer]: C

### Question 2

How much reusable component extraction should Application Design assume?

A) Conservative: keep current section components and extract only small shared helpers/components where duplication is obvious
B) Moderate: extract shared section wrappers, card primitives, and external link/action components
C) Aggressive: redesign most sections around generic reusable components
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 3

How should deployment base path logic be designed?

A) GitHub Actions passes `VITE_BASE_PATH` derived from repository metadata; local fallback remains `/my-portfolio/`
B) GitHub Actions passes `VITE_BASE_PATH` derived from repository metadata; local fallback is `/`
C) Keep base path manually configured in `vite.config.ts` and document it only
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 4

How should tests be integrated at design level?

A) Use Vitest with React Testing Library for smoke rendering and data/config tests
B) Use Vitest only for data/config tests and skip component rendering tests
C) Use manual verification only
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Mandatory Artifacts

- [x] `aidlc-docs/inception/application-design/components.md`
- [x] `aidlc-docs/inception/application-design/component-methods.md`
- [x] `aidlc-docs/inception/application-design/services.md`
- [x] `aidlc-docs/inception/application-design/component-dependency.md`
- [x] `aidlc-docs/inception/application-design/application-design.md`

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
