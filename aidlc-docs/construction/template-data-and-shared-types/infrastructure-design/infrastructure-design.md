# Infrastructure Design - Template Data And Shared Types

## Unit Summary

Unit 1 is a static frontend data layer. It does not introduce runtime infrastructure such as servers, databases, queues, caches, API gateways, load balancers, or CMS services. Its infrastructure mapping is build-time and deployment-time only.

## Infrastructure Decisions

- **Deployment target**: GitHub Pages primary, while keeping data portable to other static hosts.
- **Runtime content service**: None. Portfolio content remains static TypeScript data.
- **CI/build validation**: Later CI should run type/build checks plus Unit 5 data tests.

## Infrastructure Components

### TypeScript Data Modules

- **Location**: `src/data/*.ts`, `src/types/portfolio.ts`
- **Infrastructure Role**: Build-time source modules bundled by Vite.
- **Responsibilities**:
  - Provide static portfolio content.
  - Import local assets.
  - Fail type checking when required data is malformed.

### Vite Build

- **Location**: `vite.config.ts`, `npm run build`
- **Infrastructure Role**: Static site bundler.
- **Responsibilities**:
  - Resolve TypeScript modules.
  - Resolve local asset imports.
  - Produce `dist/` static output.
  - Respect deployment base path configuration from later deployment unit.

### GitHub Actions

- **Location**: `.github/workflows/deploy.yml`
- **Infrastructure Role**: CI/deployment runner.
- **Responsibilities**:
  - Install dependencies.
  - Run build checks.
  - Eventually run Unit 5 tests.
  - Deploy `dist/` to GitHub Pages.

### GitHub Pages

- **Infrastructure Role**: Static hosting target.
- **Responsibilities**:
  - Serve built HTML, CSS, JS, images, and PDF assets.
  - Require no backend runtime.

## Excluded Infrastructure

Unit 1 explicitly excludes:

- Runtime CMS.
- Database.
- Serverless functions.
- API gateway.
- Object storage beyond GitHub Pages artifact hosting.
- Authentication and authorization services.
- Runtime secrets.
- Link checking service.
- Monitoring/alerting service.

## Build-Time Validation Flow

```text
Student edits TypeScript data
  -> TypeScript checks data shape
  -> Vite resolves local asset imports
  -> Unit 5 tests validate semantic data rules
  -> GitHub Actions builds static output
  -> GitHub Pages serves dist/
```

## Static Host Portability

Data modules should remain portable across static hosts because they:

- Use plain TypeScript exports.
- Store no GitHub-specific runtime assumptions.
- Avoid backend runtime dependencies.
- Let deployment configuration handle base paths separately.

## Risk Mitigations

| Risk | Mitigation |
|---|---|
| Missing asset breaks deployed site | Vite import resolution fails build before deploy. |
| Malformed content breaks section rendering | TypeScript types and Unit 5 tests validate required content. |
| GitHub Pages base path changes | Deployment unit handles `VITE_BASE_PATH`; Unit 1 data remains host-agnostic. |
| Student expects CMS editing | Documentation unit explains content lives in `src/data/*`. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
