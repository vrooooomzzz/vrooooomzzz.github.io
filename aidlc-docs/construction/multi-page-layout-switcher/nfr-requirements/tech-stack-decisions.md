# Tech Stack Decisions - Multi-Page Layout Switcher

## Decision Summary

| Area | Decision | Rationale |
|---|---|---|
| Routing | Native browser hash handling | Satisfies GitHub Pages compatibility without new dependencies. |
| State management | React hook and local component state | Feature scope is local to the portfolio shell. |
| Persistence | Browser localStorage | Stores only the layout mode preference. |
| Rendering | Existing React section components | Preserves template structure and avoids duplicate page components. |
| Testing | Vitest and React Testing Library | Matches existing project test strategy. |
| Deployment | Existing Vite build and GitHub Pages workflow | No deployment change required. |

## Routing Decision

**Decision**: Use native hash handling with a small custom hook or utility.

**Accepted because**:

- GitHub Pages supports hash URLs without server rewrites.
- The feature needs simple section-level navigation, not a full application router.
- A custom hook is easier for students to inspect and customize.
- No new runtime dependency is required.

**Rejected alternatives**:

- React Router hash routing: useful for larger apps, but unnecessary for this feature.
- Path-based routing: would require GitHub Pages fallback handling and increase deployment complexity.

## State Management Decision

**Decision**: Use React state in a dedicated `usePortfolioLayout` hook or similarly small utility.

**Accepted because**:

- Layout mode and active page state are local UI concerns.
- Existing app architecture already keeps section orchestration in `App`.
- A small hook keeps storage/hash behavior out of `Navbar` and section components.

**Rejected alternatives**:

- Global state library: too heavy for this isolated feature.
- Inline all logic in `App`: fewer files, but harder for students to test and understand.

## Persistence Decision

**Decision**: Use localStorage for a single layout mode value.

**Accepted because**:

- The preference is browser-local and non-sensitive.
- No backend or account model is needed.
- Existing functional design requires safe fallback if storage is unavailable.

**Constraints**:

- Store only `single` or `multi`.
- Ignore invalid stored values.
- Catch read/write failures.

## UI Component Decision

**Decision**: Extend `Navbar` through props and callbacks while keeping routing logic in the app-level layout hook.

**Accepted because**:

- `Navbar` remains primarily presentational.
- Desktop and mobile controls can share the same mode state.
- Tests can focus on visible behavior and callbacks.

**Constraints**:

- Preserve existing visual language.
- Provide clear accessible labels.
- Use stable test IDs for switch controls.

## Testing Decision

**Decision**: Use focused Vitest and React Testing Library coverage.

**Accepted because**:

- Existing project already uses this local test stack.
- JSDOM can cover hash, storage, and component rendering behavior well enough for this unit.
- Browser e2e tests and deployment checks are out of scope.

**Expected test targets**:

- Layout helper functions.
- `usePortfolioLayout` behavior if testable directly or through components.
- `App` rendering differences by mode.
- `Navbar` switcher and navigation href behavior.

## Deployment Decision

**Decision**: Keep the existing Vite and GitHub Pages deployment setup unchanged.

**Accepted because**:

- Hash-based routing works on static hosting.
- No server fallback is needed.
- The project already has GitHub Pages deployment documentation and workflow.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | Hash examples, file names, and code identifiers wrapped in code formatting. |
