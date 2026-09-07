# NFR Design Patterns - Template Data And Shared Types

## Unit Summary

Unit 1 uses static TypeScript data modules as the portfolio template's editable content layer. NFR design patterns focus on making those files beginner-readable, type-safe, accessible, build-reliable, and testable without adding backend or runtime complexity.

## Selected NFR Design Decisions

- **Type-safety pattern**: Explicit exported TypeScript types plus `satisfies` checks on data objects where useful.
- **Validation organization**: Mixed. Simple checks remain directly in tests; repeated link and section checks can use small pure validation helpers.
- **Asset import structure**: Mixed. Direct imports for one-off assets; asset index modules for gallery/certificates if useful.
- **Runtime defensive handling**: Minimal. TypeScript and tests guarantee required data; components handle optional arrays and disabled sections only.

## Pattern 1: Type-First Static Data Modules

### Intent

Keep student-edited content simple while catching structural mistakes at compile time.

### Design

- Define shared types in `src/types/portfolio.ts`.
- Export focused data modules from `src/data/*`.
- Use `satisfies` for exported data where it improves checking without widening literal values unnecessarily.

### Example Pattern

```ts
import type { Profile } from '../types/portfolio'

export const profile = {
  name: 'Nham Quoc Hung',
  role: 'Data Engineer',
  email: 'nhamhung.gttn@gmail.com',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/nhamhung',
      ariaLabel: 'Open Nham Quoc Hung GitHub profile',
    },
  ],
} satisfies Profile
```

### NFRs Satisfied

- Maintainability
- Type safety
- Beginner usability
- Build reliability

## Pattern 2: Focused Files Plus Aggregator

### Intent

Make files discoverable for students while giving app code one clear portfolio data entrypoint.

### Design

- Focused files hold content by section.
- `src/data/portfolio.ts` imports focused data and exports a complete `portfolio` object.
- Components may import either focused data or the aggregator based on readability.

### NFRs Satisfied

- Maintainability
- Low coupling
- Beginner readability

## Pattern 3: Enabled Section Configuration

### Intent

Let students hide optional sections without deleting component code.

### Design

- `navigation.ts` exports known section IDs and enabled flags.
- Core sections are enabled by default.
- Optional sections such as awards, gallery, and videos can be disabled.
- Later component unit filters disabled navigation and optional section rendering.

### NFRs Satisfied

- Usability
- Reliability
- Maintainability

## Pattern 4: Typed External Actions

### Intent

Make external links reusable and accessible across Hero, Projects, Videos, Contact, and certificates.

### Design

- Use a shared `ExternalLink` type.
- Require `label`, `href`, and `ariaLabel`.
- Keep live URL reachability out of tests.

### NFRs Satisfied

- Accessibility metadata
- Testability
- Maintainability

## Pattern 5: Asset Import Guardrails

### Intent

Catch missing local assets during build instead of after deployment.

### Design

- Use direct imports in focused data files for one-off assets.
- Use optional asset index modules for larger groups such as gallery photos or certificates.
- Store import-resolved strings in data entities.

### NFRs Satisfied

- Build reliability
- Static hosting compatibility
- Student usability

## Pattern 6: Semantic Data Validation Tests

### Intent

Catch content mistakes that TypeScript cannot fully express, while keeping tests readable.

### Design

- Simple assertions stay in test files.
- Repeated checks for link objects and section config may use small pure helpers.
- Tests validate shape and semantic requirements without external network calls.

### NFRs Satisfied

- Testability
- Reliability
- Accessibility metadata

## Pattern 7: Minimal Runtime Fallbacks

### Intent

Keep components simple by validating required data before runtime.

### Design

- Components assume required core data exists.
- Components handle optional arrays and disabled sections.
- Components do not invent missing labels or links.

### NFRs Satisfied

- Maintainability
- Performance
- Reliability

## Resilience, Scalability, And Performance Notes

- **Resilience**: Build-time/type/test failures are preferred over runtime fallbacks for missing required data.
- **Scalability**: Section arrays support reasonable student growth without code changes.
- **Performance**: Static imports and plain objects avoid runtime parsing or heavy transformations.
- **Security**: No secrets, backend calls, authentication, or authorization are introduced in this unit.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
