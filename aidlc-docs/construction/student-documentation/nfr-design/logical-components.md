# Logical Components - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Define the logical documentation components that will be implemented in the student-facing root Markdown files.

## Component Overview

| Component | File | Responsibility |
|---|---|---|
| Template Introduction | `README.md` | Explain that this repository is a student portfolio baseline. |
| Quick Start | `README.md` | Help students install dependencies and run locally. |
| Customization Map | `README.md` | Map portfolio sections to editable files. |
| Asset Replacement Guide | `README.md` | Explain image, logo, and certificate PDF replacement. |
| Verification Checklist | `README.md` | Show build, lint, and preview commands before publishing. |
| Deployment Handoff | `README.md` | Point students to `DEPLOYMENT.md` for GitHub Pages setup. |
| Deployment Setup | `DEPLOYMENT.md` | Explain GitHub Pages settings and workflow trigger. |
| Base Path Explanation | `DEPLOYMENT.md` | Explain automatic `VITE_BASE_PATH` behavior. |
| Deployment Verification | `DEPLOYMENT.md` | Explain Actions and Pages status checks. |
| Troubleshooting Matrix | `DEPLOYMENT.md` | Provide symptom-based recovery guidance. |
| Static Scope Boundary | Both | Avoid backend, analytics, secrets, and paid tooling. |

## README Components

### Component: Template Introduction

Purpose:

- Establish the repository as a portfolio template students can customize and deploy.
- Replace generic starter text with project-specific guidance.

Inputs:

- Project stack.
- Portfolio section list.
- Student audience.

Outputs:

- Clear opening paragraph.
- Short feature summary focused on the template.

Quality rules:

- Must be beginner-friendly.
- Must not include generic Vite starter content.

### Component: Quick Start

Purpose:

- Help a student clone, install, and run the project locally.

Inputs:

- Repository URL placeholder.
- Node.js 20 requirement.
- npm scripts from `package.json`.

Outputs:

- Prerequisites list.
- Clone, install, and dev server commands.

Quality rules:

- Must use `npm install`, not undocumented package managers.
- Must include Git, Node.js 20 or newer, npm, and GitHub account prerequisites.

### Component: Customization Map

Purpose:

- Help students find the correct files to edit.

Inputs:

- Data files in `src/data/`.
- Shared types in `src/types/portfolio.ts`.
- Shared helpers and components.

Outputs:

- File-by-file table or list.
- Short explanations of each editable area.

Quality rules:

- Must position `src/data/` as the primary edit surface.
- Must mention `src/data/navigation.ts` for section order or visibility.
- Must mention `src/types/portfolio.ts` as reference for data shape.

### Component: Asset Replacement Guide

Purpose:

- Help students replace images, logos, and certificates without breaking imports.

Inputs:

- `src/assets/`
- `src/data/certificates.ts`
- Other data files that import assets.

Outputs:

- Replacement steps.
- Reminder to update imports if filenames change.

Quality rules:

- Must mention PDF certificates separately from images.
- Must recommend running build after asset replacement.

### Component: Verification Checklist

Purpose:

- Encourage students to verify locally before deployment.

Inputs:

- Existing npm scripts.

Outputs:

- `npm run build`
- `npm run lint`
- `npm run preview`

Quality rules:

- Must not include tests until Unit 5 adds them.
- Must keep the checklist short and copyable.

## DEPLOYMENT Components

### Component: Deployment Setup

Purpose:

- Guide students through GitHub Pages setup.

Inputs:

- GitHub repository Settings.
- Pages source option.
- `main` branch workflow trigger.

Outputs:

- Step-by-step GitHub Pages setup.
- Clear instruction to select GitHub Actions as source.

Quality rules:

- Must avoid branch-based Pages source guidance for this project.
- Must explain where to monitor workflow progress.

### Component: Base Path Explanation

Purpose:

- Explain why the site works for both project Pages and `<owner>.github.io` Pages.

Inputs:

- `vite.config.ts`
- `.github/workflows/deploy.yml`
- GitHub repository naming conventions.

Outputs:

- Root Pages behavior: `<owner>.github.io` uses `/`.
- Project Pages behavior: other repositories use `/<repository>/`.
- Explanation that workflow derives this automatically.

Quality rules:

- Must not instruct students to manually edit `vite.config.ts` for normal deployment.
- Must use `<owner>.github.io` as the root Pages example.

### Component: Deployment Verification

Purpose:

- Help students confirm the published site is healthy.

Inputs:

- GitHub Actions run status.
- GitHub Pages settings.
- Published Pages URL.

Outputs:

- Verification steps after push.
- Checks for CSS, JavaScript, images, and PDFs.

Quality rules:

- Must mention deployment can take a few minutes after Actions succeeds.
- Must include asset loading checks.

### Component: Troubleshooting Matrix

Purpose:

- Help students recover from common deployment failures.

Inputs:

- Approved reliability requirements.
- Current GitHub Pages workflow behavior.

Outputs:

- Symptom, likely cause, fix, and verification guidance.

Quality rules:

- Must cover wrong Pages source.
- Must cover install or build failures.
- Must cover 404 after deployment.
- Must cover missing CSS, JavaScript, images, or PDFs.
- Must cover missing or renamed assets.

## Shared Components

### Component: Static Scope Boundary

Purpose:

- Keep the student template static-only and low-risk.

Applied in:

- `README.md`
- `DEPLOYMENT.md`

Outputs:

- No required secrets.
- No backend setup.
- No analytics setup.
- Light note about using public-facing contact information.

Quality rules:

- Must avoid security-heavy language that distracts from beginner setup.
- Must avoid introducing new operational responsibilities.

## Implementation Traceability

| NFR Requirement | Logical Component |
|---|---|
| NFR-USDOC-01 | Template Introduction, Quick Start |
| NFR-USDOC-02 | Customization Map, Asset Replacement Guide |
| NFR-ACDOC-01 | Quick Start, Verification Checklist |
| NFR-ACDOC-02 | Deployment Setup, Base Path Explanation |
| NFR-ACDOC-03 | Template Introduction |
| NFR-MTDOC-01 | All root Markdown components |
| NFR-MTDOC-02 | Customization Map, Deployment Setup, Troubleshooting Matrix |
| NFR-RLDOC-01 | Troubleshooting Matrix |
| NFR-RLDOC-02 | Verification Checklist, Deployment Verification |
| NFR-PFDOC-01 | Quick Start, Deployment Handoff, Troubleshooting Matrix |
| NFR-AVDOC-01 | Static Scope Boundary |
| NFR-SECDOC-01 | Static Scope Boundary |
| NFR-SECDOC-02 | Static Scope Boundary |

## Content Validation

| Check | Status |
|---|---|
| Mermaid syntax | N/A - no Mermaid diagrams included. |
| ASCII diagram syntax | N/A - no ASCII diagrams included. |
| Markdown tables | Valid pipe table format used. |
| Special characters | File paths and placeholders are wrapped in backticks where needed. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
