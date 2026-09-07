# Functional Design Plan - Template Data And Shared Types

## Unit

Unit 1: Template Data And Shared Types

## Purpose

Design the domain model, validation rules, and data flow for the student-editable portfolio content layer.

## Execution Checklist

- [x] Read unit definition, story map, application design, and requirements.
- [x] Confirm functional design decisions from answered questions.
- [x] Generate `aidlc-docs/construction/template-data-and-shared-types/functional-design/business-logic-model.md`.
- [x] Generate `aidlc-docs/construction/template-data-and-shared-types/functional-design/business-rules.md`.
- [x] Generate `aidlc-docs/construction/template-data-and-shared-types/functional-design/domain-entities.md`.
- [x] Generate `aidlc-docs/construction/template-data-and-shared-types/functional-design/frontend-components.md`.
- [x] Validate design completeness against Unit 1 stories.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Present Functional Design completion checkpoint for review.

## Functional Scope

This unit defines the editable content model for:

- Profile identity and links.
- Navigation and section ordering.
- About, education, experience, awards, projects, gallery, videos, skills, and certificates.
- Asset-backed content that must remain Vite-compatible.
- Aggregated `portfolio` data consumed by later component and test units.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

How strict should required portfolio data fields be?

A) Strict: require all current sections and key fields so the template remains complete by default
B) Flexible: allow most sections and fields to be optional so students can remove sections easily
C) Mixed: require core identity/navigation fields, but allow optional arrays for sections like awards, gallery, videos, and certificates
X) Other (please describe after [Answer]: tag below)

[Answer]: C

### Question 2

How should optional sections be represented in the data model?

A) Keep every section in navigation and render empty states when arrays are empty
B) Allow sections to be hidden with an `enabled` flag in navigation/section config
C) Students should remove sections manually from code if they do not need them
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 3

How should asset references be validated for students?

A) Compile-time only: rely on TypeScript and Vite imports to catch missing assets
B) Compile-time plus lightweight tests for required example assets and certificate metadata
C) Documentation only: explain asset replacement and rely on manual checks
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 4

How should external links be modeled?

A) Simple string URLs on each data object
B) Typed link objects with label, href, and accessible label where applicable
C) Mixed: string URLs for simple social links, typed objects for actions/buttons
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Mandatory Artifacts

- [x] `aidlc-docs/construction/template-data-and-shared-types/functional-design/business-logic-model.md`
- [x] `aidlc-docs/construction/template-data-and-shared-types/functional-design/business-rules.md`
- [x] `aidlc-docs/construction/template-data-and-shared-types/functional-design/domain-entities.md`
- [x] `aidlc-docs/construction/template-data-and-shared-types/functional-design/frontend-components.md`

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
