# Business Logic Model - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Define how the project documentation should guide students from first clone to customization, verification, and GitHub Pages deployment.

## Business Goal

Students should be able to understand the portfolio template quickly, identify the files they should edit, make safe content changes, verify the site locally, and deploy it to GitHub Pages without needing to understand every React component.

## Documentation Flow

### First-Read Flow

1. Student opens `README.md`.
2. Student learns what the template is and what they can customize.
3. Student checks prerequisites.
4. Student installs dependencies and starts the dev server.
5. Student follows a short file map to find editable content.
6. Student runs build/lint before publishing.
7. Student follows a link to `DEPLOYMENT.md` for GitHub Pages details.

### Customization Flow

1. Student edits `src/data/profile.ts` for identity, contact email, hero text, and social links.
2. Student edits focused files under `src/data/` for each portfolio section.
3. Student replaces assets under `src/assets/`.
4. Student updates certificate imports and metadata in `src/data/certificates.ts` when replacing PDFs.
5. Student toggles or reorders sections through `src/data/navigation.ts` when needed.
6. Student verifies changes with local dev server, build, and lint.

### Deployment Flow

1. Student pushes the repository to GitHub.
2. Student opens repository Settings and enables Pages with GitHub Actions.
3. Student confirms the workflow runs on `main`.
4. Student understands normal repository Pages and `<owner>.github.io` root Pages.
5. Student verifies the deployed site URL.
6. Student uses troubleshooting guidance if build, asset paths, or Pages settings fail.

## Documentation Outputs

| Output | Responsibility |
|---|---|
| `README.md` | Quick start, customization map, local verification, and links to deployment details. |
| `DEPLOYMENT.md` | GitHub Pages setup, base path explanation, workflow behavior, verification, and troubleshooting. |

## Story Coverage

| Story | Coverage |
|---|---|
| US-01: Understand the template at first glance | Primary README goal. |
| US-10: Run the project locally | README setup and local commands. |
| US-13: Troubleshoot common deployment failures | DEPLOYMENT troubleshooting guide. |
| US-02: Identify editable content files | README customization map. |
| US-05: Replace visual and certificate assets | README asset and certificate replacement guidance. |
| US-11: Verify the portfolio before publishing | README and DEPLOYMENT verification sections. |
| US-12: Deploy to GitHub Pages with minimal manual setup | DEPLOYMENT guide explains Unit 3 workflow behavior. |

## Non-Goals

- This unit does not add tests.
- This unit does not change application code.
- This unit does not perform a live deployment.
- This unit does not add backend, analytics, CMS, or custom domain implementation.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
