# NFR Requirements Plan - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Plan Role

This document is the single source of truth for NFR Requirements for Unit 3. Complete the questions by filling the `[Answer]:` tags, then the answers will be used to generate the Unit 3 NFR requirements artifacts.

## Unit Context

Unit 3 changes deployment configuration for a static React/Vite portfolio template. The functional design defines:

- `VITE_BASE_PATH` as the Vite base path override.
- `/` as the local default base path.
- `/<repository-name>/` for normal GitHub Pages repositories.
- `/` for `<owner>.github.io` root Pages repositories.
- Preservation of push-to-`main` and manual deployment workflow triggers.

## NFR Assessment Focus

- Deployment reliability for student forks.
- Maintainability of GitHub Actions workflow logic.
- Local development simplicity.
- Build reproducibility.
- Verification approach without adding tests in this unit.
- No additional backend, secrets, services, or runtime infrastructure.

## Execution Checklist

- [x] Read Unit 3 functional design artifacts.
- [x] Read current `vite.config.ts`.
- [x] Read current `.github/workflows/deploy.yml`.
- [x] Identify deployment-specific NFR concerns.
- [x] Create this NFR requirements plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/nfr-requirements/nfr-requirements.md`.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/nfr-requirements/tech-stack-decisions.md`.
- [x] Update this plan's checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag. If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

What reliability level should the deployment workflow target for student forks?

A) Simple and robust for common GitHub Pages cases, with clear failure modes deferred to documentation
B) Highly defensive workflow with many edge-case branches and custom validation steps
C) Minimal changes only; accept that some students may need manual edits
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should maintainability be prioritized for the workflow base path derivation?

A) Keep derivation inline and readable in the GitHub Actions YAML
B) Move derivation into a separate shell script file
C) Avoid derivation and document manual edits instead
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

What verification should this unit require before completion?

A) `npm run build`, `npm run lint`, and a workflow logic review for normal repo and `<owner>.github.io` cases
B) Only `npm run build`
C) Full GitHub Pages deployment test against a live repository before proceeding
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

Should this unit introduce any new runtime services, secrets, or paid infrastructure?

A) No; keep the template static and secret-free
B) Add repository secrets to control deployment behavior
C) Add an external deployment platform alongside GitHub Pages
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Proposed Recommended Answers

For this template, the recommended answer set is:

- Question 1: A
- Question 2: A
- Question 3: A
- Question 4: A

This keeps the deployment experience beginner-friendly, avoids extra files/secrets, and verifies the behavior that matters before Unit 4 documentation and Unit 5 tests.

## Content Validation

- This plan contains no Mermaid diagrams.
- This plan contains no ASCII diagrams.
- Markdown uses simple headings, lists, and checkboxes.
- All questions include `[Answer]:` tags and `X) Other` options.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
