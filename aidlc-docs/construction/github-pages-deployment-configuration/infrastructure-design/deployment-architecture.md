# Deployment Architecture - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Architecture Summary

The deployment architecture uses GitHub Actions to build the Vite static app and GitHub Pages to host the generated `dist/` artifact. The deployment path is derived during the workflow from GitHub repository metadata.

## Deployment Flow

1. A push to `main` or manual `workflow_dispatch` starts the workflow.
2. GitHub Actions checks out the repository.
3. GitHub Actions sets up Node.js 20.
4. Dependencies are installed with `npm ci`.
5. The workflow derives `VITE_BASE_PATH`:
   - `/<repository>/` for normal repositories.
   - `/` for `<owner>.github.io` repositories.
6. `npm run build` creates `dist/`.
7. GitHub Pages is configured.
8. `./dist` is uploaded as a Pages artifact.
9. GitHub Pages deploys the artifact.

## Runtime Architecture

At runtime, there is no server-side application infrastructure. Visitors receive static files hosted by GitHub Pages.

| Runtime Concern | Infrastructure |
|---|---|
| HTML, CSS, JavaScript | GitHub Pages static hosting |
| Images and PDFs | Bundled static assets served by GitHub Pages |
| Contact form behavior | Client-side `mailto:` link |
| Data/content | Static TypeScript data bundled into the app |
| Backend APIs | None |
| Secrets | None |

## Base Path Architecture

### Local Development And Local Build

| Context | `VITE_BASE_PATH` | Vite Base |
|---|---|---|
| Local dev/build | Not set | `/` |

### Repository Pages

| Repository | Pages URL | Vite Base |
|---|---|---|
| `owner/my-portfolio` | `https://owner.github.io/my-portfolio/` | `/my-portfolio/` |

### Root Pages

| Repository | Pages URL | Vite Base |
|---|---|---|
| `owner/owner.github.io` | `https://owner.github.io/` | `/` |

## Environment Boundaries

| Environment | Responsibility |
|---|---|
| Local machine | Run dev server, lint, and local build with `/` fallback. |
| GitHub Actions | Derive base path and build deployable artifact. |
| GitHub Pages | Host the final static site. |

## Failure Modes And Ownership

| Failure Mode | Likely Owner | Expected Follow-Up |
|---|---|---|
| Dependency install fails | Student/template maintainer | Check lockfile and Node/npm compatibility. |
| Build fails | Student/template maintainer | Check TypeScript, Vite, and content edits. |
| Wrong asset paths after deployment | Deployment configuration | Check derived `VITE_BASE_PATH`. |
| Pages deploy action fails | GitHub Pages configuration | Check repository Pages settings and Actions permissions. |

## Monitoring And Operations

Operational visibility is intentionally lightweight:

- GitHub Actions run logs show build and deployment status.
- GitHub Pages environment shows deployment URL and status.
- Student-facing troubleshooting instructions are deferred to Unit 4.

## Shared Infrastructure Decision

No `aidlc-docs/construction/shared-infrastructure.md` artifact is created for this unit. The infrastructure is repository-local and does not define shared services used by multiple units.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
