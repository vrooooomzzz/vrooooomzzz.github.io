# NFR Requirements - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Define the non-functional requirements for updating `README.md` and `DEPLOYMENT.md` so the portfolio can serve as a maintainable baseline template for students.

## Approved Planning Answers

| Question | Answer | Impact |
|---|---|---|
| Primary documentation quality target | A | Use beginner-friendly, step-by-step documentation with concrete commands and exact file paths. |
| Accuracy and verification approach | A | Match the current codebase and defer test command documentation until Unit 5 adds tests. |
| Maintainability approach | A | Keep documentation in plain Markdown using `README.md` and `DEPLOYMENT.md`. |
| Deployment reliability | A | Explain automatic base path behavior and common GitHub Pages failures. |
| Security and operations scope | A | Document static GitHub Pages only; do not add backend, analytics, secrets, or paid tooling. |

## Usability Requirements

### NFR-USDOC-01: Beginner-First Reading Experience

`README.md` and `DEPLOYMENT.md` must use plain language, short sections, and copyable commands so students new to React, Vite, and GitHub Pages can follow them without instructor intervention.

Acceptance criteria:

- `README.md` opens with the project purpose as a student portfolio template.
- Setup instructions are ordered from prerequisites to clone, install, run, verify, and deploy.
- Commands are shown in fenced `bash` blocks.
- Framework explanations are limited to what students need to customize and deploy safely.

### NFR-USDOC-02: Exact Editable File Guidance

`README.md` must identify the files students are most likely to customize.

Acceptance criteria:

- Data files under `src/data/` are mapped to the portfolio sections they control.
- Shared portfolio types under `src/types/portfolio.ts` are described as reference material for data shape.
- Asset replacement guidance mentions `src/assets/`.
- Certificate PDF replacement guidance mentions both the asset file and the matching data import.
- Section visibility or ordering guidance points to `src/data/navigation.ts`.

## Accuracy Requirements

### NFR-ACDOC-01: Commands Match Current Scripts

Documentation must only advertise commands that exist in `package.json` during this unit.

Accepted commands for Unit 4:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

Deferred command:

- Test command documentation is deferred until Unit 5 adds test coverage.

### NFR-ACDOC-02: Deployment Instructions Match Current Workflow

`DEPLOYMENT.md` must match the current GitHub Actions and Vite configuration.

Acceptance criteria:

- GitHub Pages source is documented as GitHub Actions.
- `vite.config.ts` is described as using `VITE_BASE_PATH` with a `/` fallback.
- The workflow behavior is documented as automatic base path derivation.
- Common instructions must not tell students to manually edit `vite.config.ts` for normal GitHub Pages deployment.

### NFR-ACDOC-03: Remove Obsolete Starter Content

`README.md` must remove leftover Vite starter guidance that does not help students use this portfolio template.

Acceptance criteria:

- Remove generic Vite plugin comparison text.
- Remove React Compiler starter notes.
- Remove generic ESLint expansion guidance unless it directly supports this template.

## Maintainability Requirements

### NFR-MTDOC-01: Plain Markdown Documentation

Student-facing documentation must remain in plain Markdown files at the repository root.

Required files:

- `README.md`
- `DEPLOYMENT.md`

Rationale:

- Students can find root-level Markdown files easily on GitHub.
- Instructors can update guidance without adding documentation tooling.
- The project stays lightweight as a portfolio starter.

### NFR-MTDOC-02: Stable Structure For Future Updates

Documentation sections should use stable headings that future maintainers can update independently.

Recommended README sections:

- What this template is
- What students can customize
- Prerequisites
- Quick start
- Project structure
- Customization guide
- Asset and certificate replacement
- Verify before publishing
- Deploy to GitHub Pages
- Troubleshooting

Recommended DEPLOYMENT sections:

- Deployment overview
- Repository types
- Enable GitHub Pages
- Automatic base path behavior
- Deploy from `main`
- Verify deployment
- Troubleshooting
- Optional custom domain

## Reliability Requirements

### NFR-RLDOC-01: GitHub Pages Failure Prevention

`DEPLOYMENT.md` must include troubleshooting for common beginner deployment failures.

Required topics:

- GitHub Pages source is not set to GitHub Actions.
- Workflow build fails during install, lint, or build.
- Site returns 404 shortly after deployment.
- CSS, JavaScript, images, or PDFs do not load.
- Assets were renamed but imports were not updated.
- GitHub Pages update appears delayed.

### NFR-RLDOC-02: Verification Before Publishing

Documentation must direct students to verify locally before relying on deployment.

Acceptance criteria:

- `README.md` includes `npm run build`.
- `README.md` includes `npm run lint`.
- `README.md` includes `npm run preview`.
- `DEPLOYMENT.md` explains how to check the Actions tab and Pages settings after deployment.

## Performance Requirements

### NFR-PFDOC-01: Documentation Must Stay Scannable

Documentation should be comprehensive enough for students, but not so long that basic setup becomes hard to find.

Acceptance criteria:

- Quick start commands appear near the top of `README.md`.
- Advanced or less common deployment topics stay in `DEPLOYMENT.md`.
- Troubleshooting is grouped by symptom.

## Availability Requirements

### NFR-AVDOC-01: Static Hosting Assumption

Documentation must describe the site as a static front-end application hosted through GitHub Pages.

Acceptance criteria:

- No uptime or failover claims are introduced.
- No server runtime, database, or backend operational procedures are added.
- GitHub Pages availability is treated as an external hosting platform concern.

## Security And Privacy Requirements

### NFR-SECDOC-01: No Secrets Required

The student documentation must not ask students to create or commit secrets for the baseline template.

Acceptance criteria:

- No API key setup is introduced.
- No `.env` secret setup is introduced.
- No backend contact form provider is introduced.
- No analytics or tracking service is introduced.

### NFR-SECDOC-02: Student Content Safety Notes

Documentation should lightly remind students to avoid publishing private personal information.

Acceptance criteria:

- Contact customization guidance should mention using a public-facing email or contact method.
- Guidance should avoid collecting sensitive data from visitors.

## Scope Constraints

This unit does not:

- Add tests.
- Add a docs site generator.
- Add backend services.
- Add analytics.
- Perform live deployment.
- Change React components.

## Validation Requirements

Before Unit 4 code generation is considered complete:

- `README.md` should be reviewed against this NFR document.
- `DEPLOYMENT.md` should be reviewed against this NFR document.
- Existing commands referenced in documentation should be checked against `package.json`.
- GitHub Pages deployment behavior should be checked against `.github/workflows/deploy.yml` and `vite.config.ts`.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
