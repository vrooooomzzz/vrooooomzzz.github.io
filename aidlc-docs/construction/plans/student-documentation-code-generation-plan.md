# Code Generation Plan - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Define the exact generation sequence for rewriting the student-facing documentation. This plan is the single source of truth for Unit 4 Code Generation.

## Generation Approach

This is a brownfield documentation unit. Existing root Markdown files will be modified in place:

- `README.md`
- `DEPLOYMENT.md`

No React runtime code, data files, styles, workflow files, tests, backend services, or infrastructure resources will be changed by this unit.

## Workspace And Code Location

| Item | Value |
|---|---|
| Workspace root | `/Users/nhamhhung/my-portfolio` |
| Project type | Brownfield single-page portfolio website |
| Application documentation targets | `README.md`, `DEPLOYMENT.md` |
| AI-DLC summary target | `aidlc-docs/construction/student-documentation/code/code-generation-summary.md` |
| Application code rule | Root documentation files are modified in the workspace root. |
| AI-DLC docs rule | Markdown summaries are written under `aidlc-docs/`. |

## Unit Dependencies

| Dependency | Status | Impact |
|---|---|---|
| Unit 1: Template Data And Shared Types | Complete | Provides `src/data/*` and `src/types/portfolio.ts` references for customization docs. |
| Unit 2: Component Refactor And Shared UI Utilities | Complete | Provides `src/components/shared/` references for advanced extension docs. |
| Unit 3: GitHub Pages Deployment Configuration | Complete | Provides automatic `VITE_BASE_PATH` behavior for deployment docs. |
| Unit 5: Lightweight Tests And Verification | Pending | Test command documentation is deferred until tests exist. |

## Story Traceability

| Story | Unit 4 Responsibility |
|---|---|
| US-01: Understand the template at first glance | Rewrite README opening and overview for student template use. |
| US-10: Run the project locally | Include prerequisites, install, dev server, build, lint, and preview commands. |
| US-13: Troubleshoot common deployment failures | Add symptom-based GitHub Pages troubleshooting in `DEPLOYMENT.md`. |
| US-02: Identify editable content files | Add README customization map for `src/data/*`, `src/types/portfolio.ts`, assets, and shared helpers. |
| US-05: Replace visual and certificate assets | Add image, logo, and PDF certificate replacement guidance. |
| US-11: Verify the portfolio before publishing | Add local verification checklist with existing npm scripts. |
| US-12: Deploy to GitHub Pages with minimal manual setup | Explain GitHub Actions Pages source and automatic base path behavior. |

## Interfaces And Contracts

| Contract | Requirement |
|---|---|
| npm scripts | Documentation may reference only `dev`, `build`, `lint`, and `preview`. |
| Deployment workflow | Documentation must match `.github/workflows/deploy.yml`. |
| Vite base path | Documentation must explain `VITE_BASE_PATH` from `vite.config.ts`. |
| Data customization | Documentation must point students to `src/data/` as the first edit surface. |
| Asset customization | Documentation must explain committed assets under `src/assets/`. |
| Testing | Documentation must not claim a test command exists before Unit 5. |

## Planned Generation Steps

### Step 1: Rewrite `README.md`

- [x] Replace starter-oriented README content with a student-first portfolio template guide.
- [x] Add a clear template purpose section.
- [x] Add beginner prerequisites: Git, Node.js 20 or newer, npm, and GitHub account.
- [x] Add quick start commands: clone, install, run dev server.
- [x] Add local verification commands: build, lint, preview.
- [x] Add editable file map for `src/data/`, `src/types/portfolio.ts`, `src/assets/`, and `src/components/shared/`.
- [x] Add customization guidance for profile, social links, sections, assets, certificates, and navigation.
- [x] Add deployment handoff to `DEPLOYMENT.md`.
- [x] Add light public-contact/privacy note.
- [x] Remove leftover Vite starter content and outdated manual base path instructions.

### Step 2: Rewrite `DEPLOYMENT.md`

- [x] Replace outdated manual Vite base path setup with current GitHub Actions behavior.
- [x] Explain GitHub Pages source must be GitHub Actions.
- [x] Explain root Pages repository pattern: `<owner>.github.io`.
- [x] Explain project Pages repository pattern: `<owner>.github.io/<repository>`.
- [x] Explain automatic `VITE_BASE_PATH` derivation.
- [x] Explain push-to-`main` and manual workflow dispatch.
- [x] Add deployment verification steps using Actions, Pages settings, published URL, and asset loading.
- [x] Add symptom-based troubleshooting for install failures, build failures, wrong Pages source, 404s, broken assets, and delayed updates.
- [x] Keep custom domain guidance optional and brief.
- [x] Avoid alternate hosting providers, server setup, database setup, analytics, monitoring, and secret setup.

### Step 3: Create Code Generation Summary

- [x] Create `aidlc-docs/construction/student-documentation/code/code-generation-summary.md`.
- [x] Summarize modified files.
- [x] Map generated documentation changes to Unit 4 stories.
- [x] Record validation notes and deferred test documentation.

### Step 4: Documentation Validation

- [x] Verify `README.md` references only existing npm scripts from `package.json`.
- [x] Verify `DEPLOYMENT.md` matches `vite.config.ts` base path behavior.
- [x] Verify `DEPLOYMENT.md` matches `.github/workflows/deploy.yml`.
- [x] Verify no required manual `vite.config.ts` edit remains for normal GitHub Pages deployment.
- [x] Verify no test command is documented before Unit 5.
- [x] Verify no backend, database, analytics, secrets, or paid tooling setup is introduced.

### Step 5: Update AI-DLC Progress

- [x] Mark this plan's generation steps complete as they are finished.
- [x] Update `aidlc-docs/aidlc-state.md` for Unit 4 Code Generation completion.
- [x] Append audit entries for generation completion and the review prompt.

## Non-Goals

- Do not change application runtime behavior.
- Do not change `.github/workflows/deploy.yml`.
- Do not change `vite.config.ts`.
- Do not add tests in this unit.
- Do not add a docs site generator.
- Do not add backend, database, analytics, monitoring, or secrets.

## Content Validation

| Check | Status |
|---|---|
| Mermaid syntax | N/A - no Mermaid diagrams planned. |
| ASCII diagram syntax | N/A - no ASCII diagrams planned. |
| Markdown tables | Planned tables will use valid pipe table format. |
| Code blocks | Planned commands will use fenced `bash` blocks. |
| Special characters | File paths and placeholders will be wrapped in backticks where needed. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
