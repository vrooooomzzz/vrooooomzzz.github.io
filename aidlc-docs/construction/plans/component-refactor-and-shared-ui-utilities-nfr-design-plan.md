# NFR Design Plan - Component Refactor And Shared UI Utilities

## Unit

Unit 2: Component Refactor And Shared UI Utilities

## Purpose

Translate the approved Unit 2 NFR requirements into concrete frontend design patterns and logical components for the upcoming implementation.

## Execution Checklist

- [x] Read Unit 2 NFR requirements.
- [x] Read Unit 2 tech stack decisions.
- [x] Identify applicable NFR design categories for a static React/Vite app.
- [x] Validate plan content format before file creation.
- [x] Collect answers to NFR design questions.
- [x] Analyze answers for ambiguity or contradictions.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/nfr-design/nfr-design-patterns.md`.
- [x] Generate `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/nfr-design/logical-components.md`.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present NFR Design completion checkpoint for review.

## NFR Design Scope

### Applicable Categories

- **Resilience patterns**: Disabled-section handling, missing DOM target handling, and mailto URL construction without backend dependency.
- **Scalability patterns**: Static array rendering that tolerates additional student content without component edits.
- **Performance patterns**: Avoid heavy runtime abstractions and keep render transformations simple.
- **Security patterns**: Safe external link attributes and no secret/backend handling.
- **Logical components**: Data-driven app shell, shared utilities, shared UI components, and lint-compliant Chakra helper organization.

### Not Applicable Categories

- Server failover, retries, queues, caches, circuit breakers, load balancers, and disaster recovery are not applicable because Unit 2 is a static frontend refactor with no backend runtime.

## NFR Design Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

How should implementation handle an enabled navigation item with no matching section component?

A) Fail fast during development with an explicit console warning and skip rendering that missing section
B) Render a fallback placeholder section so the missing mapping is visible in the UI
C) Assume mappings are complete and rely only on TypeScript/code review
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should shared UI helper lint issues be fixed?

A) Prefer file splitting: move non-component exports such as toaster singletons/helpers into separate files where needed
B) Prefer targeted ESLint disable comments in generated Chakra helper files
C) Leave helper files unchanged and relax the lint requirement
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How should section data be transformed before rendering?

A) Keep transformations local and simple inside components or tiny utilities
B) Build larger view-model adapters for every section before rendering
C) Precompute one full UI view model in the portfolio aggregator
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should external link security be applied?

A) Centralize safe external-link defaults in `ExternalAction` and use data-provided labels
B) Keep link security attributes manually inside each component
C) Only apply safe attributes to project links, not social/video/certificate links
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Recommended Answers

My recommendation is:

- **Question 1**: A
- **Question 2**: A
- **Question 3**: A
- **Question 4**: A

This keeps implementation robust without showing accidental fallback UI to portfolio visitors, keeps lint fixes aligned with React Fast Refresh rules, avoids overbuilt view-model layers, and centralizes external-link safety.

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
