# NFR Design Plan - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Plan Role

This document is the single source of truth for NFR Design for Unit 3. Complete the questions by filling the `[Answer]:` tags, then the answers will be used to generate the Unit 3 NFR design artifacts.

## Unit Context

Unit 3 needs NFR design patterns for a static GitHub Pages deployment flow:

- Vite should use `VITE_BASE_PATH` when present and `/` otherwise.
- GitHub Actions should derive `VITE_BASE_PATH` from `GITHUB_REPOSITORY`.
- Normal repositories should build with `/<repository>/`.
- `<owner>.github.io` repositories should build with `/`.
- The workflow should stay readable, secret-free, static, and beginner-friendly.

## NFR Design Focus

- Resilience pattern: deterministic fallback to `/`.
- Scalability pattern: no runtime infrastructure; static asset hosting scales through GitHub Pages.
- Performance pattern: no added build-time remote checks.
- Security pattern: no new secrets and preserve narrow Pages permissions.
- Logical components: Vite config, GitHub Actions derivation step, build step, Pages artifact upload, Pages deploy.

## Execution Checklist

- [x] Read Unit 3 NFR requirements.
- [x] Read Unit 3 tech stack decisions.
- [x] Identify applicable NFR design pattern categories.
- [x] Create this NFR design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/nfr-design/nfr-design-patterns.md`.
- [x] Generate `aidlc-docs/construction/github-pages-deployment-configuration/nfr-design/logical-components.md`.
- [x] Update this plan's checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag. If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

### Question 1

Which resilience pattern should the Vite base path use?

A) Deterministic environment-variable fallback: `VITE_BASE_PATH` when set, `/` otherwise
B) Hardcoded fallback to the current repository name
C) Fail the build if `VITE_BASE_PATH` is missing
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

Which GitHub Actions derivation pattern should be designed?

A) Inline shell step derives owner/repo, detects `<owner>.github.io`, writes `VITE_BASE_PATH` to `$GITHUB_ENV`
B) Separate script file computes base path and is called from the workflow
C) Repository variable must be configured manually and read by the workflow
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

Which security/operations pattern should this unit follow?

A) Secret-free static Pages deployment using existing narrow Pages permissions
B) Add repository secrets for deployment configuration
C) Add a separate deployment service in addition to GitHub Pages
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should verification be represented in the NFR design?

A) Design for local build/lint plus static workflow logic review; defer live deployment and automated tests
B) Require live Pages deployment before code generation
C) Skip workflow review and rely only on Vite build success
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Proposed Recommended Answers

For this template, the recommended answer set is:

- Question 1: A
- Question 2: A
- Question 3: A
- Question 4: A

This preserves static hosting, keeps behavior easy for students to understand, and avoids over-engineering a small deployment rule.

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
