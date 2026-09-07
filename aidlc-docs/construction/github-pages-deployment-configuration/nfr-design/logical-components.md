# Logical Components - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Purpose

Define the logical deployment components that will implement the Unit 3 NFR design patterns.

## Component Summary

| Logical Component | Physical Location | Responsibility |
|---|---|---|
| Vite Base Path Selector | `vite.config.ts` | Select `base` from `VITE_BASE_PATH` or `/`. |
| GitHub Repository Metadata | GitHub Actions runtime | Provide `GITHUB_REPOSITORY` as `owner/repository`. |
| Base Path Derivation Step | `.github/workflows/deploy.yml` | Derive `VITE_BASE_PATH` and write it to `$GITHUB_ENV`. |
| Build Step | `.github/workflows/deploy.yml` | Run `npm run build` with derived environment. |
| Pages Artifact Upload | `.github/workflows/deploy.yml` | Upload `./dist` for GitHub Pages deployment. |
| Pages Deploy Step | `.github/workflows/deploy.yml` | Publish the uploaded artifact to GitHub Pages. |

## Component Details

### Vite Base Path Selector

Responsibilities:

- Read `process.env.VITE_BASE_PATH`.
- Use `/` when no environment override exists.
- Keep all existing plugins unchanged.

Design constraints:

- No hardcoded repository path.
- No runtime browser logic.
- No dependency on GitHub Actions for local builds.

### GitHub Repository Metadata

Responsibilities:

- Provide repository owner and repository name through GitHub runtime variables.
- Support derivation for forks without manual edits.

Design constraints:

- Use GitHub-provided metadata only.
- Do not require repository secrets or variables.

### Base Path Derivation Step

Responsibilities:

- Parse `GITHUB_REPOSITORY`.
- Detect whether repository name is `<owner>.github.io`.
- Set `VITE_BASE_PATH=/` for root Pages repositories.
- Set `VITE_BASE_PATH=/<repository>/` for normal repositories.
- Write the result to `$GITHUB_ENV`.

Design constraints:

- Stay inline in workflow YAML.
- Be readable enough for student troubleshooting.
- Avoid external scripts and dependencies.

### Build Step

Responsibilities:

- Run `npm run build`.
- Inherit `VITE_BASE_PATH` from `$GITHUB_ENV`.
- Produce `dist/`.

Design constraints:

- Preserve existing build command.
- Do not add live deployment checks.
- Do not add unrelated optimization or test commands in this unit.

### Pages Artifact Upload

Responsibilities:

- Upload the generated `./dist` directory.
- Continue using the official GitHub Pages artifact action.

Design constraints:

- Preserve existing artifact path.
- Keep deployment target GitHub Pages.

### Pages Deploy Step

Responsibilities:

- Deploy the uploaded artifact.
- Preserve GitHub Pages environment output URL.

Design constraints:

- Use existing official deploy action.
- Preserve existing permissions.

## Logical Flow

1. Workflow starts from push to `main` or manual dispatch.
2. Repository metadata is available as `GITHUB_REPOSITORY`.
3. Base Path Derivation Step writes `VITE_BASE_PATH` to `$GITHUB_ENV`.
4. Build Step runs Vite through `npm run build`.
5. Vite Base Path Selector reads `VITE_BASE_PATH`.
6. Build Step produces `dist/`.
7. Pages Artifact Upload uploads `dist/`.
8. Pages Deploy Step publishes the site.

## Verification Points

| Component | Verification |
|---|---|
| Vite Base Path Selector | Local build succeeds with no `VITE_BASE_PATH`. |
| Base Path Derivation Step | Static review confirms normal repo and root Pages repo behavior. |
| Build Step | `npm run build` succeeds. |
| Pages Artifact Upload | Workflow still points to `./dist`. |
| Pages Deploy Step | Workflow still uses official GitHub Pages deploy action. |

## Non-Components

The following are intentionally not part of this design:

- Backend server.
- Database.
- Cache.
- Queue.
- CDN configuration beyond GitHub Pages.
- Repository secrets.
- Separate deployment script.
- Runtime path detection in React components.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
