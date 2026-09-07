# Unit of Work Plan

## Purpose

Decompose the student portfolio template refactor into manageable units of work for construction. This plan focuses on story grouping, dependencies, ownership boundaries, and technical sequencing.

## Recommended Decomposition Direction

Use multiple logical units within the single React/Vite application. The project remains one deployable static app, but the work is easier to design and implement if grouped into focused units:

1. Template Data and Shared Types
2. Component Refactor and Shared UI Utilities
3. GitHub Pages Deployment Configuration
4. Student Documentation
5. Lightweight Tests and Verification

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

How should construction units be grouped?

A) Multiple focused units: data/types, component refactor, deployment, documentation, tests
B) One single unit covering the whole portfolio template refactor
C) Two units: application code and documentation/deployment/testing
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should unit sequencing be handled?

A) Sequential: complete data/types first, then components, then deployment/docs/tests
B) Parallel-ready: document units as independently workable where possible, with dependency notes
C) Documentation-first: write student docs before code refactor
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How should user stories map to units?

A) Map each story to a primary unit and allow secondary supporting units where needed
B) Assign every story to exactly one unit only
C) Group stories only by student journey order, even if technical dependencies cross units
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should construction ownership be described?

A) Single maintainer executes all units in dependency order
B) Units are designed so different contributors could work on code, docs, deployment, and tests separately
C) Only describe technical dependencies; skip ownership guidance
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Execution Checklist

- [x] Read requirements, user stories, application design, and execution plan.
- [x] Confirm decomposition decisions from answered plan questions.
- [x] Generate `aidlc-docs/inception/application-design/unit-of-work.md` with unit definitions and responsibilities.
- [x] Generate `aidlc-docs/inception/application-design/unit-of-work-dependency.md` with dependency matrix.
- [x] Generate `aidlc-docs/inception/application-design/unit-of-work-story-map.md` mapping stories to units.
- [x] Validate unit boundaries and dependencies.
- [x] Ensure all stories are assigned to units.
- [x] Update this plan's completed checkboxes as generation work is completed.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present Units Generation completion checkpoint for review.

## Mandatory Artifacts

- [x] `aidlc-docs/inception/application-design/unit-of-work.md`
- [x] `aidlc-docs/inception/application-design/unit-of-work-dependency.md`
- [x] `aidlc-docs/inception/application-design/unit-of-work-story-map.md`

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
