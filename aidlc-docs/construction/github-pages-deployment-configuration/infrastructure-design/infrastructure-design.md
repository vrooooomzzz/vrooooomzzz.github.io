# Infrastructure Design - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Purpose

Map the GitHub Pages deployment configuration design to concrete infrastructure services and repository files.

## Infrastructure Decision Summary

| Area | Decision | Rationale |
|---|---|---|
| Deployment Environment | GitHub Pages | Matches student-friendly static hosting requirement. |
| Build Compute | GitHub-hosted `ubuntu-latest` Actions runner | Requires no student-managed runner infrastructure. |
| Runtime Compute | None | The portfolio remains a static site. |
| Hosting Storage | GitHub Pages artifact from `./dist` | Existing workflow already uses official Pages artifact deployment. |
| CI/CD | GitHub Actions | Existing repository workflow and Pages integration. |
| Monitoring | GitHub Actions run history and Pages deployment status | Enough for this beginner template unit. |
| Secrets | None | Base path derives from public repository metadata. |
| Shared Infrastructure | None | Deployment infrastructure is repository-local. |

## Concrete Infrastructure Components

### GitHub Repository

Responsibilities:

- Stores application source code.
- Stores `.github/workflows/deploy.yml`.
- Provides `GITHUB_REPOSITORY` metadata in Actions.

Configuration impact:

- Repository name determines the GitHub Pages base path.
- Root Pages repositories use the `<owner>.github.io` naming convention.

### GitHub Actions Runner

Service:

- GitHub-hosted `ubuntu-latest`.

Responsibilities:

- Checks out source code.
- Sets up Node.js 20.
- Installs dependencies with `npm ci`.
- Derives `VITE_BASE_PATH`.
- Runs `npm run build`.

Configuration impact:

- No self-hosted runner is needed.
- No external CI/CD service is needed.

### Vite Build Configuration

File:

- `vite.config.ts`

Responsibilities:

- Reads `process.env.VITE_BASE_PATH`.
- Defaults to `/` when the environment variable is absent.
- Keeps existing React, Tailwind, and tsconfig path plugins.

Configuration impact:

- Local builds use `/`.
- GitHub Actions builds use the derived Pages path.

### GitHub Pages Artifact Upload

Service/action:

- `actions/upload-pages-artifact`

Responsibilities:

- Uploads `./dist`.
- Makes the static build output available to GitHub Pages.

Configuration impact:

- Artifact path remains `./dist`.
- No deployment branch is needed.

### GitHub Pages Deployment

Service/action:

- `actions/deploy-pages`

Responsibilities:

- Publishes the uploaded artifact.
- Exposes deployment URL in the `github-pages` environment.

Configuration impact:

- Existing Pages permissions remain sufficient.
- No additional hosting provider is introduced.

## Permissions

The workflow should preserve:

- `contents: read`
- `pages: write`
- `id-token: write`

These are the narrow permissions needed for GitHub Pages deployment through official actions.

## Infrastructure Non-Components

This unit intentionally does not include:

- AWS, Azure, or GCP resources.
- Backend servers.
- Databases.
- Object storage buckets outside GitHub Pages artifacts.
- Queues or messaging systems.
- API gateways or load balancers.
- CDN configuration beyond GitHub Pages.
- Repository secrets.
- Self-hosted runners.
- Shared infrastructure documentation.

## Verification Expectations

Infrastructure design is considered ready for code generation when:

- Local build remains possible without `VITE_BASE_PATH`.
- Workflow design includes an explicit base path derivation step.
- Workflow still uploads `./dist`.
- Workflow still deploys with official GitHub Pages actions.
- No shared infrastructure file is created for this unit.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
