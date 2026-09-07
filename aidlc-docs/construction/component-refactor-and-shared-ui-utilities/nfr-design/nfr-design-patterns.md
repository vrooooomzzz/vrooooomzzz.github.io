# NFR Design Patterns - Component Refactor And Shared UI Utilities

## Unit Summary

Unit 2 applies non-functional design patterns to a static React/Vite portfolio refactor. The patterns keep components beginner-readable, preserve current responsiveness and performance, centralize repeated behavior, improve practical accessibility, and make build/lint verification reliable.

## Selected NFR Design Decisions

- **Missing section mapping**: Warn during development and skip rendering the missing section.
- **Lint fixes**: Prefer file splitting for non-component exports such as toaster singletons and helper values.
- **Data transformations**: Keep transformations local and simple inside components or tiny utilities.
- **External link security**: Centralize safe external-link defaults in `ExternalAction`.

## Pattern 1: Data-Driven Section Rendering

### Intent

Render visible sections from one enabled navigation source of truth.

### Design

- Read navigation data from Unit 1.
- Filter to enabled navigation items.
- Derive enabled section IDs from enabled navigation items.
- Render section components in the enabled navigation order.
- Pass the same enabled navigation data to `Navbar`.

### NFRs Satisfied

- Maintainability
- Responsive usability
- Reliability
- Static hosting compatibility

### Implementation Guidance

- Use typed `SectionId` values for mappings.
- Keep the section registry close to `App` or in a small `sections` module.
- Avoid hardcoded duplicate section ID arrays in components.

## Pattern 2: Missing Mapping Development Warning

### Intent

Prevent broken configuration from silently failing during development without exposing accidental placeholder UI to visitors.

### Design

- If an enabled section ID does not have a matching component, log an explicit warning in development.
- Skip rendering the missing section.
- Keep production visitor experience free from accidental fallback debug content.

### NFRs Satisfied

- Reliability
- Maintainability
- User experience preservation

### Implementation Guidance

- Guard warnings with development environment checks where practical.
- Later Unit 5 tests should validate that every enabled section has a component mapping.

## Pattern 3: Local Simple Transformations

### Intent

Keep the refactor understandable for students and maintainers.

### Design

- Map typed arrays directly inside section components.
- Use tiny utilities only for repeated behavior such as scroll, mailto, media URLs, and animation classes.
- Do not create a large view-model adapter layer.
- Do not precompute a full UI-specific view model inside `src/data/portfolio.ts`.

### NFRs Satisfied

- Beginner readability
- Performance preservation
- Low coupling

### Implementation Guidance

- Data files stay content-oriented.
- Components stay layout-oriented.
- Utilities stay behavior-oriented.

## Pattern 4: Focused Shared UI Primitives

### Intent

Reduce meaningful duplication without hiding each section's purpose.

### Design

- Add `SectionShell` for repeated section root, container, heading, intro, and next arrow behavior where useful.
- Add `ContentCard` for repeated card chrome only where it simplifies component code.
- Add `ExternalAction` for external links/buttons and accessibility behavior.

### NFRs Satisfied

- Maintainability
- Accessibility
- Responsive usability

### Implementation Guidance

- Prefer section-local JSX when shared components would make the section harder to read.
- Preserve current spacing, class names, visual tone, and Chakra UI primitives.
- Do not introduce nested decorative card layouts.

## Pattern 5: Centralized External Link Safety

### Intent

Make external actions consistently accessible and safe.

### Design

- `ExternalAction` accepts `href`, `label`, `ariaLabel`, and a small variant set.
- External links use `target="_blank"` and `rel="noopener noreferrer"` by default where appropriate.
- Icon-only variants apply data-provided accessible labels.

### NFRs Satisfied

- Practical accessibility
- Static-site security posture
- Maintainability

### Implementation Guidance

- Use Unit 1 `ExternalLink` fields directly.
- Avoid making components manually repeat external-link attributes.

## Pattern 6: Local Browser Utility Modules

### Intent

Centralize repeated browser behavior without adding dependencies.

### Design

- `src/utils/scroll.ts` owns smooth section scrolling and enabled navigation helpers.
- `src/utils/contact.ts` owns `buildMailtoUrl`.
- `src/utils/media.ts` owns YouTube embed/watch URL helpers.
- `src/utils/animation.ts` owns repeated reveal delay class logic.

### NFRs Satisfied

- Maintainability
- Performance preservation
- Static hosting compatibility

### Implementation Guidance

- Utilities should avoid importing React components.
- Contact/media utilities should not perform network calls.
- Keep helpers small enough that students can understand them quickly.

## Pattern 7: Lint-Compliant Helper Organization

### Intent

Make `npm run lint` a reliable verification gate.

### Design

- Fix empty interface lint errors with type aliases or direct inherited prop types.
- Move non-component exports such as `toaster` into separate files where needed.
- Prefer file organization that satisfies React Fast Refresh over broad ESLint disable comments.

### NFRs Satisfied

- Verification reliability
- Maintainability
- Tooling compatibility

### Implementation Guidance

- Keep current color mode and toaster behavior.
- Do not relax lint requirements in this unit.

## Pattern 8: Static Rendering Preservation

### Intent

Preserve current performance and GitHub Pages compatibility.

### Design

- Keep all content statically imported.
- Do not add runtime fetching, CMS integration, backend calls, or global state management.
- Keep modal and form state local.
- Keep smooth scrolling browser-native.

### NFRs Satisfied

- Performance
- Availability
- Static hosting compatibility
- Reliability

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
