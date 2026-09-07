# Infrastructure Design Plan - Template Data And Shared Types

## Unit

Unit 1: Template Data And Shared Types

## Purpose

Map the Unit 1 data layer and asset strategy to actual deployment/build infrastructure decisions.

## Execution Checklist

- [x] Read Unit 1 functional design, NFR requirements, and NFR design.
- [x] Confirm infrastructure decisions from answered questions.
- [x] Generate `aidlc-docs/construction/template-data-and-shared-types/infrastructure-design/infrastructure-design.md`.
- [x] Generate `aidlc-docs/construction/template-data-and-shared-types/infrastructure-design/deployment-architecture.md`.
- [x] Validate infrastructure design coverage for static hosting, build-time asset validation, and CI verification.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present Infrastructure Design completion checkpoint for review.

## Infrastructure Scope

Unit 1 does not introduce server compute, database storage, messaging, load balancers, API gateways, queues, or cloud-managed backend services. Its infrastructure mapping is:

- TypeScript data modules bundled by Vite.
- Local assets validated by Vite build.
- GitHub Actions later running type/build/test checks.
- GitHub Pages serving the built static output.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

What deployment target should Unit 1 data design assume?

A) GitHub Pages only, matching the project goal
B) GitHub Pages primary, but keep data portable to other static hosts
C) Multiple deployment targets including server hosting
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 2

Should Unit 1 introduce any runtime content service or CMS?

A) No, keep all content as static TypeScript data
B) Not now, but design the data so a CMS could replace it later
C) Yes, plan for a runtime content source now
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How should CI/build validation treat Unit 1 data?

A) Build only: TypeScript and Vite build catch issues
B) Build plus tests: CI should eventually run type/build checks and Unit 5 data tests
C) Manual only: students run checks locally before deploy
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Mandatory Artifacts

- [x] `aidlc-docs/construction/template-data-and-shared-types/infrastructure-design/infrastructure-design.md`
- [x] `aidlc-docs/construction/template-data-and-shared-types/infrastructure-design/deployment-architecture.md`

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
