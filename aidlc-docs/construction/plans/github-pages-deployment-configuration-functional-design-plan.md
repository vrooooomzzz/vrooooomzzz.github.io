# Functional Design Plan - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Plan Role

This document is the single source of truth for Functional Design for Unit 3. Complete the questions by filling the `[Answer]:` tags, then the answers will be used to generate the Unit 3 functional design artifacts.

## Unit Context

Unit 3 makes GitHub Pages deployment easier for student forks of this Vite portfolio template. The current project has:

- `vite.config.ts` with a hardcoded `base: '/my-portfolio/'`.
- `.github/workflows/deploy.yml` that runs `npm run build` without passing a base path.
- Requirements that prefer automatic derivation from GitHub repository metadata where possible.
- A requirement to preserve support for both repository Pages and `username.github.io` root Pages.

## Scope

### In Scope

- Define the functional behavior for Vite base path selection.
- Define the functional behavior for GitHub Actions base path derivation.
- Define validation expectations for local development, repository Pages, and user or organization Pages.
- Prepare design artifacts for later code generation.

### Out Of Scope

- Rewriting README or deployment documentation. That belongs to Unit 4.
- Adding tests. That belongs to Unit 5.
- Changing the visual portfolio UI.
- Adding backend services, secrets, databases, or external deployment platforms.

## Execution Checklist

- [x] Read Unit 3 definition from `aidlc-docs/inception/application-design/unit-of-work.md`.
- [x] Read Unit 3 dependencies from `aidlc-docs/inception/application-design/unit-of-work-dependency.md`.
- [x] Read Unit 3 story mapping from `aidlc-docs/inception/application-design/unit-of-work-story-map.md`.
- [x] Inspect current `vite.config.ts`.
- [x] Inspect current `.github/workflows/deploy.yml`.
- [x] Inspect requirements for GitHub Pages base path behavior.
- [x] Create this functional design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/functional-design/business-logic-model.md`.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/functional-design/business-rules.md`.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/functional-design/domain-entities.md`.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/functional-design/frontend-components.md`.
- [x] Update this plan's checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag. If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

How should the template decide the Vite base path for GitHub Pages?

A) Use `VITE_BASE_PATH` when provided, otherwise default to `/` for local development
B) Keep a hardcoded repository path in `vite.config.ts`
C) Require every student to manually edit `vite.config.ts` before deploying
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should GitHub Actions derive the Pages base path for student forks?

A) Automatically set `/repo-name/` for normal repositories and `/` for repositories named `<owner>.github.io`
B) Always set `/repo-name/`, including `<owner>.github.io` repositories
C) Do not derive it; require students to set `VITE_BASE_PATH` manually in repository variables
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

Which deployment workflow triggers should Unit 3 preserve?

A) Keep automatic deployment on pushes to `main` and keep manual `workflow_dispatch`
B) Manual deployment only through `workflow_dispatch`
C) Deploy on both `main` and all pull requests
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

What should count as successful functional behavior for this unit?

A) Local `npm run build` uses `/`, Actions passes the derived base path, and the workflow still uploads `dist/`
B) Only GitHub Actions behavior matters; local build base path can remain repository-specific
C) Only local build behavior matters; students can manually adjust GitHub Actions later
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Proposed Recommended Answers

For this template, the recommended answer set is:

- Question 1: A
- Question 2: A
- Question 3: A
- Question 4: A

This keeps local development simple, supports ordinary project Pages, supports `username.github.io` root Pages, and avoids requiring students to edit deployment configuration for common forks.

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
