# Infrastructure Design - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Document the infrastructure model that the student-facing README and deployment guide must explain. This unit does not add infrastructure; it documents the existing static GitHub Pages deployment path.

## Approved Infrastructure Answers

| Question | Answer | Infrastructure Decision |
|---|---|---|
| Deployment environment | A | Document existing GitHub Pages deployment through GitHub Actions only. |
| Compute infrastructure | A | Explain GitHub Actions build compute and GitHub Pages static hosting. |
| Storage infrastructure | A | Explain Pages artifact storage; no database or persistent app storage. |
| Networking and base path | A | Explain HTTPS Pages URLs, project Pages, root Pages, and automatic base path derivation. |
| Monitoring and operations | A | Use GitHub Actions status, Pages settings, and deployed-site checks only. |

## Infrastructure Scope

### In Scope

- GitHub repository.
- GitHub Actions workflow.
- GitHub Pages source setting.
- Static build artifact from `dist`.
- Automatic `VITE_BASE_PATH` environment variable.
- HTTPS GitHub Pages URL.
- Local verification commands documented for students.

### Out Of Scope

- Dedicated application server.
- Containers.
- Serverless functions.
- Database.
- Queue or messaging service.
- API gateway.
- Load balancer.
- External CDN configuration.
- Analytics.
- Third-party uptime monitoring.
- Secrets or private environment variables.
- Paid hosting providers.

## Service Mapping

| Logical Need | Infrastructure Choice | Current File Or Setting |
|---|---|---|
| Source hosting | GitHub repository | Repository root |
| Build automation | GitHub Actions | `.github/workflows/deploy.yml` |
| Build compute | Temporary GitHub-hosted runner | `runs-on: ubuntu-latest` |
| Dependency installation | npm cache and `npm ci` | `.github/workflows/deploy.yml` |
| Static build output | Vite `dist` folder | `npm run build` |
| Base path configuration | `VITE_BASE_PATH` environment variable | `vite.config.ts` and workflow derivation step |
| Artifact upload | GitHub Pages artifact | `actions/upload-pages-artifact@v3` |
| Static hosting | GitHub Pages | `actions/deploy-pages@v4` |
| Deployment verification | GitHub Actions and Pages UI | GitHub repository Actions and Settings Pages |

## Deployment Environment

The deployment environment is GitHub Pages through GitHub Actions.

Documentation requirements:

- Tell students to use GitHub Actions as the GitHub Pages source.
- Explain that pushes to `main` trigger deployment.
- Explain that the workflow can also be run manually from the Actions tab.
- Avoid documenting alternative hosting providers as part of the baseline path.

## Compute Infrastructure

The project has build-time compute only.

Build-time compute:

- GitHub Actions starts a temporary `ubuntu-latest` runner.
- The runner checks out code, installs dependencies, derives the Pages base path, builds the project, and uploads `dist`.

Runtime compute:

- None.
- GitHub Pages serves static files.
- There is no Node.js server after deployment.

Documentation requirements:

- Explain that students do not need to configure a server.
- Explain that the portfolio is a static front-end site after build.

## Storage Infrastructure

The project has static artifact storage only.

Storage behavior:

- Vite writes production files to `dist`.
- GitHub Actions uploads `dist` as a Pages artifact.
- GitHub Pages serves the uploaded artifact.

No app storage exists:

- No database.
- No file upload storage.
- No user-generated content storage.
- No persistent server-side session storage.

Documentation requirements:

- Avoid database setup instructions.
- Avoid object storage setup instructions.
- Explain that assets are committed in the repository under `src/assets/` before build.

## Networking Infrastructure

GitHub Pages provides HTTPS hosting for the static site.

URL patterns:

- Root Pages repository: `https://<owner>.github.io/`
- Project Pages repository: `https://<owner>.github.io/<repository>/`

Base path behavior:

- `vite.config.ts` uses `process.env.VITE_BASE_PATH ?? '/'`.
- The workflow sets `VITE_BASE_PATH=/` for `<owner>.github.io` repositories.
- The workflow sets `VITE_BASE_PATH=/<repository>/` for other repositories.

Documentation requirements:

- Explain `<owner>.github.io` as the root Pages use case.
- Explain normal project repositories as the `/<repository>/` use case.
- Do not tell students to manually edit `vite.config.ts` for normal GitHub Pages deployment.

## Monitoring And Operations

Operations guidance stays within GitHub's built-in status surfaces.

Student checks:

- GitHub Actions run succeeds.
- GitHub Pages source is set to GitHub Actions.
- Pages settings show the published URL.
- Deployed site loads HTML, CSS, JavaScript, images, and PDF certificates.

No external monitoring:

- No uptime service.
- No alerting service.
- No log aggregation service.
- No production incident process.

Documentation requirements:

- Use simple verification steps.
- Explain that Pages updates can take a few minutes after a successful workflow.

## Shared Infrastructure

The repository workflow is shared by every student who uses the template.

Shared assumptions:

- Students fork or clone the repository.
- Students push to `main`.
- Students enable GitHub Pages with GitHub Actions.
- The same workflow derives the correct base path for the repository name.

Documentation requirements:

- Keep workflow explanations generic enough for any owner/repository name.
- Use placeholders like `<owner>` and `<repository>` where helpful.

## Infrastructure Validation Criteria

The Unit 4 documentation implementation should be checked against these criteria:

- `README.md` links students to `DEPLOYMENT.md` for GitHub Pages setup.
- `DEPLOYMENT.md` explains GitHub Actions as the Pages source.
- `DEPLOYMENT.md` explains the two URL patterns.
- `DEPLOYMENT.md` explains automatic base path derivation.
- `DEPLOYMENT.md` avoids required manual edits to `vite.config.ts`.
- Troubleshooting includes Actions status, Pages settings, 404s, and broken assets.

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
