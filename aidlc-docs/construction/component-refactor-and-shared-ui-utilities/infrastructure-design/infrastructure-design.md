# Infrastructure Design - Component Refactor And Shared UI Utilities

## Unit Summary

Unit 2 is a static frontend refactor. It introduces React/TypeScript modules, local utilities, and shared UI components, but it does not introduce runtime infrastructure, backend compute, databases, queues, caches, object storage services, API gateways, load balancers, monitoring services, CMS integration, authentication, authorization, or runtime secrets.

## Infrastructure Decisions

- **Runtime service dependency**: None. Unit 2 remains static frontend-only code.
- **Verification mapping**: Use local and CI-compatible static checks: `npm run build` and `npm run lint`.
- **Deployment workflow ownership**: No GitHub Pages workflow or Vite base-path changes in Unit 2. Those remain assigned to Unit 3.

## Infrastructure Component Mapping

| Logical Component | Infrastructure Mapping | Notes |
|---|---|---|
| Data-driven app shell | Vite-built React/TypeScript module | Compiled into the static bundle. |
| Section registry | Vite-built React/TypeScript module | No runtime service dependency. |
| Shared UI components | Vite-built React/TypeScript modules | Bundled with the app. |
| Scroll/contact/media/animation utilities | Vite-built TypeScript modules | Browser-only helpers; no network services. |
| Chakra helper split files | Vite-built TypeScript/React modules | Used to satisfy lint and Fast Refresh rules. |
| Static assets | Existing Vite asset pipeline | Images and PDFs continue to resolve at build time. |
| Verification commands | Local shell and CI-compatible npm scripts | `npm run build` and `npm run lint` verify implementation quality. |

## Excluded Infrastructure

Unit 2 explicitly excludes:

- Runtime CMS.
- Backend API.
- Serverless functions.
- Database or object storage service.
- Queue or messaging service.
- Cache service.
- API gateway or load balancer.
- Authentication or authorization provider.
- Runtime secret management.
- Deployment workflow changes.
- Vite base-path changes.
- Monitoring or alerting service.

## Build-Time Flow

1. Source code imports portfolio data, utilities, and shared UI components.
2. TypeScript checks section IDs, component props, and utility interfaces.
3. Vite resolves static imports and produces the frontend bundle.
4. ESLint validates code style, React Fast Refresh compatibility, and TypeScript lint rules.
5. Existing deployment pipeline remains responsible for publishing the built `dist/` output.

## Static Hosting Compatibility

Unit 2 preserves static hosting because it:

- Uses static imports and browser-local behavior only.
- Leaves content in TypeScript data modules.
- Keeps contact behavior mailto-based.
- Does not add runtime fetches or server dependencies.
- Leaves deployment base-path ownership to Unit 3.

## Risk Mitigations

| Risk | Mitigation |
|---|---|
| Component refactor accidentally adds runtime dependency | Infrastructure design forbids backend, CMS, runtime API, and new service dependencies. |
| Disabled sections break rendered page | Implementation uses enabled navigation selection and development warnings for missing mappings. |
| Lint stays unreliable | Unit 2 verification requires `npm run lint` to pass and includes Chakra helper lint fixes. |
| Deployment behavior changes too early | Unit 2 does not edit GitHub Pages workflow or Vite base-path behavior. |
| Asset resolution regresses | Vite build remains the asset-resolution verification point. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
