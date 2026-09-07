# Services

This static frontend does not need backend services. For Application Design, "services" are lightweight frontend orchestration modules and support utilities.

## Portfolio Data Service

- **Module**: `src/data/portfolio.ts`
- **Purpose**: Aggregate focused data modules into one portfolio data object.
- **Responsibilities**:
  - Export a complete typed portfolio object.
  - Keep section data discoverable for students.
  - Provide the single source of truth for app/section content.
- **Interactions**:
  - Consumed by `App`, `Navbar`, section components, and tests.

## Navigation Service

- **Module**: `src/data/navigation.ts` and `src/utils/scroll.ts`
- **Purpose**: Centralize section IDs, labels, order, and scroll behavior.
- **Responsibilities**:
  - Define navigation items and section order.
  - Smooth-scroll to section IDs.
  - Support active-section tracking.
- **Interactions**:
  - Consumed by `App`, `Navbar`, `SectionShell`, and navigation tests.

## Contact Service

- **Module**: `src/utils/contact.ts`
- **Purpose**: Convert contact form input into an encoded mailto URL.
- **Responsibilities**:
  - Encode subject and body.
  - Use configured owner email.
  - Keep contact behavior static-hosting friendly.
- **Interactions**:
  - Consumed by `Contact`.

## Media Service

- **Module**: `src/utils/media.ts`
- **Purpose**: Build media URLs and support asset metadata.
- **Responsibilities**:
  - Build YouTube embed/watch URLs.
  - Keep certificate and gallery data Vite-compatible through imports.
- **Interactions**:
  - Consumed by `Videos`, `Skills`, and data tests.

## Deployment Configuration Service

- **Modules**: `vite.config.ts`, `.github/workflows/deploy.yml`
- **Purpose**: Configure the Vite base path for local development and GitHub Pages deployment.
- **Responsibilities**:
  - Use `/` as local fallback.
  - Pass repository-derived `VITE_BASE_PATH` during GitHub Actions deployment.
  - Keep deployment instructions aligned with actual workflow behavior.
- **Interactions**:
  - Used by Vite build and GitHub Actions.

## Test Service

- **Modules**: `vitest.config.ts` or Vite test config, `src/test/*` or `src/**/*.test.tsx`
- **Purpose**: Provide lightweight template verification.
- **Responsibilities**:
  - Smoke render the app.
  - Validate navigation section IDs.
  - Validate required profile/template data.
  - Avoid external network calls and browser automation.
- **Interactions**:
  - Uses React Testing Library, Vitest, and static data modules.

## Documentation Service

- **Modules**: `README.md`, `DEPLOYMENT.md`
- **Purpose**: Guide students through setup, customization, local verification, deployment, and troubleshooting.
- **Responsibilities**:
  - Explain prerequisites and commands.
  - Explain the data files students edit.
  - Explain asset replacement.
  - Explain GitHub Pages settings and workflow behavior.
  - Explain common deployment failures.
- **Interactions**:
  - Aligns with data modules, build scripts, and GitHub Actions workflow.

## Orchestration Pattern

1. Data modules define template content.
2. The app shell renders section components from shared section/navigation config.
3. Section components render data through Chakra UI and shared UI helpers.
4. Utilities handle repeated browser behavior and URL generation.
5. Tests validate data/config/app smoke behavior.
6. Documentation teaches students how to use the same structure.
7. GitHub Actions injects deployment base path and publishes `dist/`.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
