# Tech Stack Decisions - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Decision Summary

| Area | Decision | Rationale |
|---|---|---|
| Build Tool | Keep Vite | Existing app already uses Vite and only needs base path configuration. |
| Frontend Framework | Keep React | No runtime UI change is required for deployment configuration. |
| Package Manager | Keep npm | Existing scripts and workflow use npm. |
| Node Version | Keep Node.js 20 in GitHub Actions | Matches existing workflow and modern Vite support. |
| Hosting | Keep GitHub Pages | Matches project goal and student deployment target. |
| Base Path Config | Use `VITE_BASE_PATH` with `/` fallback | Supports local development and Actions-derived deployment paths. |
| Workflow Logic | Inline derivation in `.github/workflows/deploy.yml` | Easier for students to inspect than a separate script. |
| Secrets | Add none | Static Pages deployment does not require custom secrets. |
| Extra Services | Add none | Maintains low operational complexity. |

## Vite Configuration Decision

`vite.config.ts` should select its base path from:

1. `process.env.VITE_BASE_PATH`, when provided.
2. `/`, when the variable is absent.

This removes the current hardcoded repository path and makes local development default to a root base path.

## GitHub Actions Decision

`.github/workflows/deploy.yml` should derive the base path from GitHub repository metadata before running `npm run build`.

Expected derivation:

| Repository Shape | Derived Base Path |
|---|---|
| `owner/repository` | `/repository/` |
| `owner/owner.github.io` | `/` |

The workflow should pass the derived value to the build step as `VITE_BASE_PATH`.

## Verification Decision

This unit should be verified with:

- `npm run build`
- `npm run lint`
- Static review of workflow derivation behavior

Live GitHub Pages deployment verification is not required during this unit because it would depend on external repository settings. The student-facing deployment verification steps are deferred to Unit 4 and final Build and Test.

## Rejected Alternatives

| Alternative | Reason Rejected |
|---|---|
| Keep hardcoded `base: '/my-portfolio/'` | Breaks or confuses student forks and root Pages repositories. |
| Require students to manually edit `vite.config.ts` | Adds avoidable beginner friction. |
| Add repository secrets for base path | Unnecessary for public repository metadata and static hosting. |
| Move derivation to a separate script | More files and more indirection for a small rule. |
| Add live deployment test requirement | Too dependent on external GitHub Pages settings for this construction unit. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
