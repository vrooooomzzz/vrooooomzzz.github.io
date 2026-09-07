# Business Logic Model - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Purpose

Define how the portfolio template decides its public asset base path for local development, repository GitHub Pages deployments, and user or organization GitHub Pages root deployments.

## Business Goal

Students should be able to fork or use the portfolio template with minimal deployment edits. The app should build locally with a root path and deploy from GitHub Actions with the correct GitHub Pages path derived from repository metadata.

## Functional Flow

### Local Build Flow

1. Student runs `npm run build` locally.
2. `vite.config.ts` checks for `VITE_BASE_PATH`.
3. If `VITE_BASE_PATH` is not provided, Vite uses `/`.
4. The build writes a static `dist/` folder that works for local preview and non-subpath hosting.

### Repository Pages Flow

1. Student pushes to `main` or manually runs the workflow.
2. GitHub Actions reads `GITHUB_REPOSITORY`, which has the form `owner/repository`.
3. The workflow derives the repository name from the metadata.
4. If the repository is a normal project repository, the workflow sets `VITE_BASE_PATH` to `/<repository>/`.
5. The workflow runs `npm run build`.
6. Vite uses the provided `VITE_BASE_PATH`.
7. GitHub Pages deploys the generated `dist/` artifact.

### User Or Organization Pages Flow

1. Student uses a repository named `<owner>.github.io`.
2. GitHub Actions compares the repository name with `<owner>.github.io`.
3. The workflow sets `VITE_BASE_PATH` to `/`.
4. Vite builds assets for root hosting.
5. GitHub Pages deploys the generated `dist/` artifact.

## Inputs

| Input | Source | Purpose |
|---|---|---|
| `VITE_BASE_PATH` | Environment variable | Overrides Vite base path when provided. |
| `GITHUB_REPOSITORY` | GitHub Actions runtime | Provides `owner/repository` metadata. |
| Push to `main` | GitHub event | Triggers automatic deployment. |
| `workflow_dispatch` | GitHub event | Allows manual deployment. |

## Outputs

| Output | Destination | Purpose |
|---|---|---|
| Vite `base` value | Vite config | Controls generated asset URLs. |
| `dist/` folder | GitHub Pages artifact upload | Static deployment artifact. |
| GitHub Pages deployment | GitHub Pages | Published portfolio site. |

## Decision Model

| Condition | Base Path |
|---|---|
| `VITE_BASE_PATH` is provided | Use `VITE_BASE_PATH`. |
| Local build with no `VITE_BASE_PATH` | Use `/`. |
| GitHub Actions normal repository | Use `/<repository>/`. |
| GitHub Actions `<owner>.github.io` repository | Use `/`. |

## Story Coverage

| Story | Coverage |
|---|---|
| US-12: Deploy to GitHub Pages with minimal manual setup | Primary behavior for automated base path derivation and Pages deployment. |
| US-01: Understand the template at first glance | Supports later documentation by making deployment behavior predictable. |
| US-13: Troubleshoot common deployment failures | Supports later troubleshooting by defining expected base path outcomes. |

## Non-Goals

- This unit does not create student-facing deployment documentation.
- This unit does not add automated tests.
- This unit does not change portfolio content or UI layout.
- This unit does not introduce secrets, backend services, or non-GitHub deployment platforms.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
