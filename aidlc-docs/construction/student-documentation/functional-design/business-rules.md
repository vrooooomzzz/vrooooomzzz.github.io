# Business Rules - Student Documentation

## Unit

Unit 4: Student Documentation

## README Rules

### BR-README-01: Student-First Opening

`README.md` must start by explaining that this repository is a portfolio template students can customize, run locally, and deploy.

### BR-README-02: Remove Starter Noise

`README.md` must remove leftover Vite starter text that is not useful for this template.

### BR-README-03: Include Beginner Prerequisites

`README.md` must list beginner prerequisites:

- Git
- Node.js 20 or newer
- npm
- GitHub account

### BR-README-04: Include Local Setup Commands

`README.md` must show commands for cloning, installing dependencies, running the dev server, building, linting, and previewing.

### BR-README-05: Include Editable File Map

`README.md` must identify the primary editable data files under `src/data/`, shared types under `src/types/`, assets under `src/assets/`, and key reusable helpers.

### BR-README-06: Include Customization Guidance

`README.md` must explain how to update:

- Profile and hero content.
- Social links and contact email.
- Education, experience, awards, projects, gallery, videos, skills, and certificates.
- Section visibility/order.
- Images, logos, and PDF certificates.

## Deployment Guide Rules

### BR-DEPLOY-01: Explain GitHub Pages Source

`DEPLOYMENT.md` must tell students to use GitHub Actions as the Pages source.

### BR-DEPLOY-02: Explain Automatic Base Path Behavior

`DEPLOYMENT.md` must explain that the workflow derives `VITE_BASE_PATH` automatically:

- Normal repository: `/<repository>/`
- `<owner>.github.io` repository: `/`

### BR-DEPLOY-03: Avoid Outdated Manual Vite Base Instructions

`DEPLOYMENT.md` must not instruct students to manually edit `vite.config.ts` for common GitHub Pages deployments.

### BR-DEPLOY-04: Include Deployment Verification

`DEPLOYMENT.md` must explain how to verify:

- GitHub Actions run status.
- Pages settings.
- Published URL.
- Asset loading.

### BR-DEPLOY-05: Include Troubleshooting

`DEPLOYMENT.md` must cover common beginner issues:

- Install failures.
- Build failures.
- Wrong Pages source.
- 404 after deployment.
- Broken CSS/JS/image/PDF paths.
- Delayed Pages updates.
- Missing or renamed assets.

## Tone And Style Rules

### BR-TONE-01: Beginner Friendly

Use direct, plain language and short sections.

### BR-TONE-02: Concrete Commands

Prefer copyable commands and exact file paths.

### BR-TONE-03: Avoid Over-Explaining Framework Internals

Explain enough for students to customize safely, but do not turn README into a React/Vite textbook.

## Deferred Rules

- Test command documentation should be updated after Unit 5 adds tests.
- Final comprehensive build/test instructions are deferred to Build and Test.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
