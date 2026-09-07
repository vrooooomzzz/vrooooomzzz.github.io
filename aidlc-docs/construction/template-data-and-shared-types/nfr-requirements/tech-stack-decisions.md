# Tech Stack Decisions - Template Data And Shared Types

## Decision Summary

Unit 1 will use the existing frontend stack and add no runtime framework or service dependency. The data layer will be implemented with TypeScript modules, Vite-compatible asset imports, and later verified with Vitest-based tests.

## Existing Stack To Preserve

| Technology | Decision | Rationale |
|---|---|---|
| React 19 | Preserve | Existing UI framework; data layer should support React rendering without embedding React-specific elements. |
| TypeScript 5.9 | Preserve and use strongly | Shared types are the primary guardrail for student edits. |
| Vite 7 | Preserve | Handles static asset imports and production bundling. |
| Chakra UI 3 | Preserve for components | Data layer should not depend on Chakra objects. |
| GitHub Pages | Preserve | Static data model fits static hosting. |

## Data Layer Technology Decisions

### Decision 1: TypeScript Data Modules

- **Choice**: Use `.ts` files for all portfolio data.
- **Rationale**: TypeScript catches missing required fields and invalid section IDs while keeping data easy to edit.
- **Rejected Alternatives**:
  - JSON files: simpler-looking, but weaker asset imports and type checking.
  - YAML/Markdown content files: useful for CMS-like workflows, but adds parsing complexity not needed for this template.

### Decision 2: Focused Files Plus Aggregator

- **Choice**: Keep focused files and export an aggregate `portfolio` object.
- **Rationale**: Students can edit obvious files, while components can import one cohesive object where useful.

### Decision 3: Explicit Link Objects

- **Choice**: Use typed link objects with `label`, `href`, and `ariaLabel`.
- **Rationale**: Supports accessible UI patterns and reusable external action components.

### Decision 4: Asset Imports Remain In TypeScript

- **Choice**: Import bundled assets in TypeScript data files or supporting asset modules.
- **Rationale**: Vite validates missing asset files at build time.

### Decision 5: Strict Validation Tests Later

- **Choice**: Later Unit 5 should add Vitest tests for required fields, navigation uniqueness, link shape, project actions, and certificate metadata.
- **Rationale**: TypeScript catches shape problems; tests catch semantic content requirements.

## Compatibility Guidance

The model should avoid unnecessary coupling to React or Chakra UI:

- Do not store JSX in data files.
- Do not store Chakra prop objects in data files.
- Store plain strings, arrays, asset URLs, section IDs, and link objects.
- Let components decide rendering details.

This keeps the data model optimized for the current stack but readable enough to migrate later if needed.

## Runtime And Infrastructure Decisions

- No backend service.
- No database.
- No CMS.
- No runtime fetching for Unit 1.
- No secrets.
- No analytics dependency.

## Testing Tool Decision

| Tool | Decision | Rationale |
|---|---|---|
| Vitest | Use in later test unit | Native fit for Vite/TypeScript projects. |
| React Testing Library | Use in later test unit | Needed for app smoke render. |
| Browser automation | Do not use for Unit 1 validation | Too heavy for lightweight template tests. |
| Network link checker | Do not use | Would add flaky external dependency. |

## NFR Traceability

| NFR Concern | Tech Decision |
|---|---|
| Maintainability | Focused TypeScript data files, explicit fields |
| Testability | Vitest semantic data checks later |
| Accessibility metadata | Required `ariaLabel` in link/action objects |
| Build reliability | Vite asset imports |
| Beginner usability | Clear file names and low abstraction |
| Static hosting | Plain build-time data modules |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
