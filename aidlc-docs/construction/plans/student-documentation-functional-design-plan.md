# Functional Design Plan - Student Documentation

## Unit

Unit 4: Student Documentation

## Plan Role

This document is the single source of truth for Functional Design for Unit 4. Complete the questions by filling the `[Answer]:` tags, then the answers will be used to generate the Unit 4 functional design artifacts.

## Unit Context

Unit 4 rewrites student-facing documentation after the data/type refactor, component refactor, and GitHub Pages deployment configuration.

The current documentation still has:

- A README that mixes useful setup content with Vite starter text.
- Deployment instructions that still tell students to manually edit `vite.config.ts`.
- A project structure section that does not include `src/data`, `src/types`, `src/utils`, or `src/components/shared`.
- Limited guidance on which files students should edit first.

## Scope

### In Scope

- Design beginner-friendly README structure.
- Design deployment guide structure.
- Define documentation rules for editable data files, assets, certificates, links, contact email, and section navigation.
- Define GitHub Pages explanation for normal repositories and `<owner>.github.io` repositories.
- Define verification and troubleshooting guidance.

### Out Of Scope

- Adding automated tests. That belongs to Unit 5.
- Changing application source code. Unit 4 is documentation only.
- Performing live GitHub Pages deployment.
- Adding backend services, custom domains implementation, analytics, or CMS integration.

## Execution Checklist

- [x] Read Unit 4 definition from `aidlc-docs/inception/application-design/unit-of-work.md`.
- [x] Read Unit 4 story coverage from `aidlc-docs/inception/application-design/unit-of-work-story-map.md`.
- [x] Inspect current `README.md`.
- [x] Inspect current `DEPLOYMENT.md`.
- [x] Inspect prior Unit 1, Unit 2, and Unit 3 outputs at a summary level.
- [x] Create this functional design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/student-documentation/functional-design/business-logic-model.md`.
- [x] Generate `aidlc-docs/construction/student-documentation/functional-design/business-rules.md`.
- [x] Generate `aidlc-docs/construction/student-documentation/functional-design/domain-entities.md`.
- [x] Generate `aidlc-docs/construction/student-documentation/functional-design/frontend-components.md`.
- [x] Update this plan's checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag. If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

Who should the documentation primarily target?

A) Students who are new to React/Vite and GitHub Pages
B) Experienced frontend developers who only need a quick reference
C) Instructors maintaining the template for a class
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should README and DEPLOYMENT content be split?

A) README covers quick start, customization, file map, and basic verification; DEPLOYMENT covers GitHub Pages details and troubleshooting
B) README contains everything; DEPLOYMENT is removed or minimal
C) README is short; DEPLOYMENT contains setup, customization, and deployment
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How detailed should customization guidance be?

A) Detailed file-by-file guidance for `src/data`, assets, certificates, links, section visibility, and contact email
B) Short overview only, trusting students to explore the code
C) Minimal examples only for profile and projects
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should GitHub Pages deployment be explained?

A) Explain both normal repository Pages and `<owner>.github.io` root Pages, including automatic base path behavior
B) Explain only normal repository Pages
C) Explain only manual deployment
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 5

How much troubleshooting guidance should be included?

A) Include common beginner issues: failed install, build errors, missing assets, wrong Pages source, 404s, broken asset paths, and delayed Pages updates
B) Include only deployment failures
C) Include only links to external docs
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Proposed Recommended Answers

For this template, the recommended answer set is:

- Question 1: A
- Question 2: A
- Question 3: A
- Question 4: A
- Question 5: A

This matches the original goal: make the project a baseline portfolio template that students can set up, customize, verify, and deploy confidently.

## Content Validation

- This plan contains no Mermaid diagrams.
- This plan contains no ASCII diagrams.
- Markdown uses simple headings, lists, and checkboxes.
- All questions include `[Answer]:` tags and `X) Other` options.

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
