# Frontend Components - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Runtime UI Impact

This unit does not add, remove, or modify visible React components. The portfolio UI should remain unchanged.

## Configuration Components

Although there are no runtime UI components, this unit has two configuration surfaces that affect how the frontend is built and hosted.

### Vite Configuration

| File | Responsibility |
|---|---|
| `vite.config.ts` | Selects the Vite `base` value from `VITE_BASE_PATH` or `/`. |

#### Expected Behavior

- Local development and local builds work with `/` by default.
- GitHub Actions can override the base path without editing source code.
- Existing React, Tailwind, Chakra UI, and tsconfig path plugins remain configured.

### GitHub Pages Workflow

| File | Responsibility |
|---|---|
| `.github/workflows/deploy.yml` | Derives `VITE_BASE_PATH`, builds the app, uploads `dist/`, and deploys to Pages. |

#### Expected Behavior

- Pushes to `main` still deploy automatically.
- Manual deployment through `workflow_dispatch` still works.
- Normal repositories build with `/<repository-name>/`.
- `<owner>.github.io` repositories build with `/`.
- The workflow still uses GitHub Pages official configure, artifact upload, and deploy actions.

## User Interaction Impact

| User | Impact |
|---|---|
| Student running locally | No visible behavior change; local commands become less repository-specific. |
| Student deploying repository Pages | No need to manually edit `vite.config.ts` for the repository name. |
| Student deploying root Pages | No need to fight a stale subpath value. |
| Portfolio visitor | No visible change if deployment is configured correctly. |

## Accessibility Impact

No runtime accessibility behavior changes are expected because this unit does not modify visible UI components.

## Deferred Documentation

Detailed student instructions for these configuration surfaces are deferred to Unit 4 Student Documentation.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
