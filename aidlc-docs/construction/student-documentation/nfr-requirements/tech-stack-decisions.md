# Tech Stack Decisions - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Record technology and tooling decisions for the student documentation unit.

## Decision Summary

| Decision Area | Selected Approach |
|---|---|
| Documentation format | Plain Markdown |
| Primary files | `README.md` and `DEPLOYMENT.md` |
| Documentation location | Repository root |
| Documentation tooling | No new tooling |
| Deployment platform documented | GitHub Pages |
| Deployment automation documented | Existing GitHub Actions workflow |
| Runtime stack documented | React, TypeScript, Vite, Chakra UI, Tailwind CSS |
| Verification commands | Existing npm scripts from `package.json` |

## Decision: Keep Student Docs In Root Markdown Files

The project will continue using root-level Markdown files for student-facing instructions.

Selected files:

- `README.md`
- `DEPLOYMENT.md`

Rationale:

- GitHub displays `README.md` automatically on the repository homepage.
- Students can find deployment instructions without learning a documentation site structure.
- Instructors can edit plain Markdown without build tooling.
- This is sufficient for a portfolio template baseline.

Alternatives considered:

| Alternative | Reason Not Selected |
|---|---|
| Documentation site generator | Adds dependencies and a separate documentation build workflow. |
| Many files under `docs/` | More organized for large systems, but harder for beginners to navigate for this template. |
| Generated documentation from comments | Does not fit student setup, customization, and deployment guidance. |

## Decision: Do Not Add Documentation Tooling

No new documentation framework, linter, generator, or publishing service will be introduced in this unit.

Rationale:

- The unit goal is to make the existing template easier to understand.
- Additional tooling would create setup burden for students.
- Root Markdown files are enough for the current documentation scope.

## Decision: Document Existing npm Scripts Only

Documentation will reference scripts that currently exist in `package.json`.

Accepted scripts:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

Installation command:

- `npm install`

Deferred scripts:

- Test scripts will be documented after Unit 5 adds test coverage.

## Decision: Document Existing GitHub Pages Workflow

Deployment documentation will describe the existing GitHub Actions workflow instead of asking students to manually configure Vite base paths.

Relevant files:

- `.github/workflows/deploy.yml`
- `vite.config.ts`

Current behavior:

- `vite.config.ts` reads `process.env.VITE_BASE_PATH` and falls back to `/`.
- The deployment workflow derives `VITE_BASE_PATH` from the repository name.
- Repositories named `<owner>.github.io` deploy at `/`.
- Other repositories deploy at `/<repository>/`.

Rationale:

- This matches the implemented deployment configuration.
- It avoids manual edits that students may forget when renaming or forking repositories.
- It supports both user/organization Pages and project Pages.

## Decision: Keep Operations Scope Static-Only

Documentation will describe static GitHub Pages hosting only.

Excluded from this unit:

- Backend deployment.
- Contact form services.
- Analytics setup.
- Secret management.
- Monitoring services.
- Paid hosting providers.

Rationale:

- The portfolio is currently a static front-end app.
- Static-only guidance reduces student setup risk.
- Additional services can be documented later if the template adds them.

## Decision: Use Current File Structure As The Source Of Truth

The documentation should describe the existing maintainable content structure introduced by earlier units.

Important paths:

- `src/data/profile.ts`
- `src/data/about.ts`
- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/awards.ts`
- `src/data/projects.ts`
- `src/data/gallery.ts`
- `src/data/videos.ts`
- `src/data/skills.ts`
- `src/data/certificates.ts`
- `src/data/navigation.ts`
- `src/types/portfolio.ts`
- `src/assets/`
- `src/components/shared/`

Rationale:

- Students should edit data files before editing components.
- Shared types help students understand required fields.
- Shared UI components are useful for advanced extension, but not required for first customization.

## Technology Constraints

| Constraint | Requirement |
|---|---|
| Node version | Document Node.js 20 or newer. |
| Package manager | Use npm because the project includes npm scripts and GitHub Actions uses `npm ci`. |
| Deployment branch | Document deployment from the `main` branch. |
| GitHub Pages source | Document GitHub Actions as the Pages source. |
| Tests | Do not document test commands until Unit 5. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
