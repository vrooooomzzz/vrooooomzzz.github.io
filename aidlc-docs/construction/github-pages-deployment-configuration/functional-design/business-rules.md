# Business Rules - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Base Path Rules

### BR-01: Environment Variable Override

If `VITE_BASE_PATH` is provided, `vite.config.ts` must use it as the Vite `base` value.

### BR-02: Local Default

If `VITE_BASE_PATH` is not provided, `vite.config.ts` must default to `/`.

### BR-03: Repository Pages Path

For ordinary GitHub repositories, GitHub Actions must build with `VITE_BASE_PATH=/<repository-name>/`.

### BR-04: Root Pages Path

For repositories named `<owner>.github.io`, GitHub Actions must build with `VITE_BASE_PATH=/`.

### BR-05: Preserve Existing Deployment Triggers

The deployment workflow must continue to support:

- Automatic deployment on pushes to `main`.
- Manual deployment through `workflow_dispatch`.

### BR-06: Preserve Static Hosting

The workflow must continue to produce and upload the `dist/` folder as a GitHub Pages artifact.

### BR-07: No Manual Repository Name Edits For Common Cases

Students should not need to edit `vite.config.ts` or `.github/workflows/deploy.yml` for common repository Pages and root Pages deployments.

## Validation Rules

### VR-01: Local Build Validation

Running `npm run build` locally without `VITE_BASE_PATH` must succeed and use `/`.

### VR-02: Repository Pages Validation

The workflow must expose the derived base path to the build step before running `npm run build`.

### VR-03: Artifact Validation

The workflow must continue to upload `./dist` to GitHub Pages after a successful build.

### VR-04: Compatibility Validation

The implementation must preserve the existing Node.js setup, dependency install, build, configure Pages, upload artifact, and deploy Pages flow.

## Error And Edge Case Rules

| Scenario | Expected Behavior |
|---|---|
| Student runs local build only | Build uses `/` and succeeds. |
| Repository name changes | Workflow derives the new repository name automatically. |
| Repository is `<owner>.github.io` | Workflow uses `/` instead of `/<repo>/`. |
| Manual workflow run | Same derivation rules apply as push deployments. |

## Deferred Rules

- Student-facing troubleshooting wording is deferred to Unit 4.
- Automated tests for config behavior are deferred to Unit 5.
- Final combined build and test instructions are deferred to Build and Test.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
