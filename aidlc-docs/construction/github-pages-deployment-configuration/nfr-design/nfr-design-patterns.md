# NFR Design Patterns - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Purpose

Define the non-functional design patterns that will be used to implement reliable, maintainable, secret-free GitHub Pages deployment for the Vite portfolio template.

## Pattern Summary

| NFR Area | Design Pattern | Purpose |
|---|---|---|
| Resilience | Deterministic fallback configuration | Use `VITE_BASE_PATH` when provided and `/` otherwise. |
| Availability | Manual retry trigger | Preserve `workflow_dispatch` for failed or retried deployments. |
| Maintainability | Inline readable derivation | Keep base path derivation inside the workflow YAML. |
| Performance | No remote validation on build path | Avoid slow external checks during build. |
| Security | Secret-free static deployment | Avoid custom secrets and extra runtime services. |
| Verification | Static workflow review plus build/lint | Verify behavior without requiring live deployment. |

## Resilience Patterns

### Pattern: Deterministic Base Path Fallback

`vite.config.ts` should use a deterministic base path selection rule:

1. If `VITE_BASE_PATH` exists, use it.
2. Otherwise, use `/`.

This prevents local builds from depending on a repository-specific hardcoded path and avoids failing builds when students have not configured deployment yet.

### Pattern: Repository Shape Detection

The workflow should detect whether the repository is:

- A normal project repository.
- A root Pages repository named `<owner>.github.io`.

Normal repositories receive `/<repository>/`. Root Pages repositories receive `/`.

## Scalability Patterns

### Pattern: Static Hosting Delegation

No runtime scaling components are introduced. GitHub Pages serves the static build output, and the application remains a static site with no backend, queue, database, cache, or server process.

### Pattern: Build-Time Configuration Only

Base path behavior is resolved during build. There is no runtime discovery or client-side path correction.

## Performance Patterns

### Pattern: Preserve Existing Build Path

The deployment workflow should keep the existing fast path:

- Checkout repository.
- Set up Node.js 20.
- Install dependencies with `npm ci`.
- Build with `npm run build`.
- Upload `dist/`.

No new network checks, live deployment probes, or extra package installs should be added in this unit.

## Security Patterns

### Pattern: No Custom Secrets

The workflow should not require repository secrets. It should rely only on GitHub-provided runtime metadata and official Pages deployment permissions.

### Pattern: Narrow Existing Permissions

The workflow should preserve the existing Pages permissions:

- `contents: read`
- `pages: write`
- `id-token: write`

## Maintainability Patterns

### Pattern: Inline Derivation With Named Step

The workflow should include a clearly named step that derives `VITE_BASE_PATH` and writes it to `$GITHUB_ENV`.

The derivation should be compact enough for students to read directly in `.github/workflows/deploy.yml`.

### Pattern: Minimal Vite Configuration

`vite.config.ts` should avoid repository-specific values. The only base path logic should be reading `process.env.VITE_BASE_PATH` with `/` fallback.

## Verification Patterns

### Pattern: Local Command Verification

Code generation for this unit should verify:

- `npm run build`
- `npm run lint`

### Pattern: Static Workflow Logic Review

Review the derivation behavior for:

- `owner/my-portfolio` -> `/my-portfolio/`
- `owner/owner.github.io` -> `/`

Live GitHub Pages deployment and automated tests are deferred to later stages.

## Rejected Patterns

| Rejected Pattern | Reason |
|---|---|
| Fail build when `VITE_BASE_PATH` is absent | Makes local development worse for students. |
| Hardcode current repository name | Breaks forks and root Pages repositories. |
| Separate derivation script | Adds indirection for a small rule. |
| Custom repository secret | Unnecessary and harder for beginners. |
| Live deployment gate | Depends on external GitHub Pages settings and is too heavy for this unit. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
