# Code Generation Plan - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Plan Role

This document is the single source of truth for Code Generation for Unit 3. Code generation must follow these steps in order, update checkboxes immediately after each completed step, and keep application/configuration code in the workspace root.

## Code Location

- **Workspace root**: `/Users/nhamhhung/my-portfolio`
- **Configuration files**: `vite.config.ts`, `.github/workflows/deploy.yml`
- **Documentation summaries**: `aidlc-docs/construction/github-pages-deployment-configuration/code/`
- **Do not place application/configuration code in**: `aidlc-docs/`

## Unit Context

Unit 3 removes the hardcoded Vite base path and makes the GitHub Pages workflow derive the correct base path for student forks.

### Primary Responsibilities

- Update `vite.config.ts` so `base` reads `process.env.VITE_BASE_PATH` and falls back to `/`.
- Update `.github/workflows/deploy.yml` so GitHub Actions derives `VITE_BASE_PATH`.
- Preserve support for repository Pages and `<owner>.github.io` root Pages.
- Preserve existing build, artifact upload, and deploy flow.
- Verify with `npm run build`, `npm run lint`, and static review of workflow logic.

### Out Of Scope For This Unit

- Rewriting README or deployment documentation.
- Adding Vitest or automated tests.
- Performing a live GitHub Pages deployment.
- Adding backend services, secrets, extra hosting providers, or shared infrastructure.
- Changing visible React UI or portfolio content.

## Story Traceability

| Story | Coverage In This Unit |
|---|---|
| US-12: Deploy to GitHub Pages with minimal manual setup | Primary. Configures automatic base path behavior for common Pages repository shapes. |
| US-01: Understand the template at first glance | Supporting. Creates predictable behavior that Unit 4 documentation can explain. |
| US-13: Troubleshoot common deployment failures | Supporting. Defines simpler base path behavior for later troubleshooting docs. |

## Dependencies And Interfaces

- **Depends on**: Unit 3 functional design, NFR requirements, NFR design, and infrastructure design.
- **Blocks**: Unit 4 Student Documentation and Unit 5 Lightweight Tests.
- **Primary configuration interface**: `VITE_BASE_PATH`.
- **GitHub metadata interface**: `GITHUB_REPOSITORY`.
- **Database entities**: None.
- **API layer**: None.
- **Repository layer**: None.
- **Runtime infrastructure**: GitHub Pages static hosting only.

## Readiness Checklist

- [x] Unit 3 functional design artifacts reviewed.
- [x] Unit 3 NFR requirements reviewed.
- [x] Unit 3 NFR design reviewed.
- [x] Unit 3 infrastructure design reviewed.
- [x] Unit story map reviewed.
- [x] Brownfield code structure reviewed.
- [x] Target paths confirmed outside `aidlc-docs/` for configuration code.
- [x] Content validation completed for this plan.

## Code Generation Steps

### Step 1: Project Structure Setup

- [x] Create `aidlc-docs/construction/github-pages-deployment-configuration/code/` for markdown summaries only.
- [x] Verify target configuration files already exist.
- [x] Verify no duplicate or suffixed replacement files are created.

### Step 2: Vite Base Path Configuration

- [x] Update `vite.config.ts` in place.
- [x] Replace hardcoded `base: '/my-portfolio/'` with `base: process.env.VITE_BASE_PATH ?? '/'`.
- [x] Preserve existing React SWC, Tailwind, and tsconfig paths plugins.
- [x] Keep local builds working without `VITE_BASE_PATH`.

### Step 3: GitHub Actions Base Path Derivation

- [x] Update `.github/workflows/deploy.yml` in place.
- [x] Add a named step before `Build` to derive `VITE_BASE_PATH`.
- [x] Parse `GITHUB_REPOSITORY` into owner and repository name.
- [x] Set `VITE_BASE_PATH=/` for repositories named `<owner>.github.io`.
- [x] Set `VITE_BASE_PATH=/<repository>/` for normal repositories.
- [x] Write `VITE_BASE_PATH` to `$GITHUB_ENV`.
- [x] Preserve push-to-`main` and `workflow_dispatch` triggers.
- [x] Preserve Pages permissions, setup, artifact upload, and deploy actions.

### Step 4: Verification

- [x] Run `npm run build`.
- [x] Run `npm run lint`.
- [x] Review workflow logic for `owner/my-portfolio` -> `/my-portfolio/`.
- [x] Review workflow logic for `owner/owner.github.io` -> `/`.
- [x] Confirm no duplicate modified/new configuration files were created.

### Step 5: Code Summary Documentation

- [x] Create `aidlc-docs/construction/github-pages-deployment-configuration/code/code-generation-summary.md`.
- [x] Summarize modified configuration files.
- [x] Document story coverage.
- [x] Note build and lint results.
- [x] Confirm deferred work for Unit 4 documentation and Unit 5 tests.

### Step 6: Final Plan And State Updates

- [x] Confirm all Code Generation Steps are marked complete.
- [x] Update `aidlc-docs/aidlc-state.md` to reflect Unit 3 Code Generation completion.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.
- [x] Present the standardized Code Generation completion checkpoint.

## Expected Modified Configuration Files

- `vite.config.ts`
- `.github/workflows/deploy.yml`

## Expected Created Documentation Files

- `aidlc-docs/construction/github-pages-deployment-configuration/code/code-generation-summary.md`

## Validation Notes

- This plan contains no Mermaid diagrams.
- This plan contains no ASCII diagrams.
- Markdown structure uses simple headings, tables, and checklists.
- Configuration code targets are outside `aidlc-docs/`.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
