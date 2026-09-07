# Deployment Architecture - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Describe the deployment architecture that `DEPLOYMENT.md` should explain to students.

## Architecture Summary

This project deploys as a static site on GitHub Pages.

The deployment path is:

1. Student pushes code to the `main` branch.
2. GitHub Actions starts the deployment workflow.
3. The workflow installs dependencies with `npm ci`.
4. The workflow derives `VITE_BASE_PATH` from the repository name.
5. The workflow runs `npm run build`.
6. Vite writes static files to `dist`.
7. GitHub Actions uploads `dist` as a Pages artifact.
8. GitHub Pages publishes the artifact.
9. Student verifies the Pages URL and asset loading.

## Deployment Components

| Component | Responsibility |
|---|---|
| GitHub repository | Stores source code, Markdown documentation, assets, and workflow configuration. |
| `main` branch | Default deployment branch for automatic workflow runs. |
| GitHub Actions | Builds the static site and deploys it to Pages. |
| Node.js 20 runner | Provides the build environment. |
| npm | Installs dependencies and runs build scripts. |
| Vite | Produces static production assets in `dist`. |
| GitHub Pages artifact | Stores the built `dist` output for deployment. |
| GitHub Pages | Serves the static portfolio over HTTPS. |

## Workflow Configuration

Workflow file:

- `.github/workflows/deploy.yml`

Workflow triggers:

- Push to `main`.
- Manual run through `workflow_dispatch`.

Build job:

- Checks out the repository.
- Sets up Node.js 20.
- Runs `npm ci`.
- Derives `VITE_BASE_PATH`.
- Runs `npm run build`.
- Configures Pages.
- Uploads `dist`.

Deploy job:

- Deploys the uploaded Pages artifact.
- Publishes the final GitHub Pages URL.

## Base Path Architecture

The base path is derived during the GitHub Actions build.

### Root Pages Repository

Repository pattern:

- `<owner>.github.io`

Published URL:

- `https://<owner>.github.io/`

Workflow base path:

- `VITE_BASE_PATH=/`

### Project Pages Repository

Repository pattern:

- Any repository not named `<owner>.github.io`

Published URL:

- `https://<owner>.github.io/<repository>/`

Workflow base path:

- `VITE_BASE_PATH=/<repository>/`

## Runtime Architecture

The deployed application has no server runtime.

Runtime characteristics:

- Static HTML, CSS, JavaScript, images, and PDFs.
- Browser executes the React app.
- GitHub Pages serves static assets.
- No backend API is required.
- No database is required.
- No private environment variables are required.

## Student Verification Flow

After deployment, students should verify:

1. The GitHub Actions workflow completed successfully.
2. Repository Settings > Pages shows GitHub Actions as the source.
3. Repository Settings > Pages shows the published URL.
4. The published URL opens without a 404.
5. CSS and JavaScript load correctly.
6. Images and certificate PDFs load correctly.
7. Navigation links still work on the deployed site.

## Failure Recovery Flow

Troubleshooting should guide students through these recovery checks:

| Symptom | Infrastructure Area | Recovery Direction |
|---|---|---|
| Workflow failed during install | Build environment | Check Node.js version and dependency installation output. |
| Workflow failed during build | Build process | Run `npm run build` locally and fix reported errors. |
| Site shows 404 | Pages settings or publishing delay | Check Pages source, published URL, and wait a few minutes after deployment. |
| CSS or JavaScript missing | Base path | Check workflow base path derivation and repository name. |
| Images or PDFs missing | Static assets | Check asset filenames, imports, and committed files. |
| Old version still appears | Pages propagation or browser cache | Wait briefly, refresh, or clear browser cache. |

## Architecture Constraints

| Constraint | Decision |
|---|---|
| Hosting | GitHub Pages only for baseline documentation. |
| Build environment | GitHub Actions `ubuntu-latest` with Node.js 20. |
| Runtime compute | None. |
| Persistent storage | None beyond static Pages artifact. |
| Secrets | None required. |
| Monitoring | GitHub Actions status and manual deployed-site checks. |
| Custom domains | Optional note only, not required baseline setup. |

## Documentation Implementation Notes

`DEPLOYMENT.md` should:

- Use the architecture summary as the conceptual model.
- Explain base path behavior before troubleshooting broken CSS or assets.
- Keep custom domain guidance optional and brief.
- Avoid cloud-provider or server setup instructions.

`README.md` should:

- Link to `DEPLOYMENT.md` rather than duplicating all deployment details.
- Include local build and preview commands before the deployment handoff.

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
