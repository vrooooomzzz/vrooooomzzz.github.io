# NFR Requirements - Template Data And Shared Types

## Unit Summary

Unit 1 defines the typed, student-editable data layer for the portfolio template. It has no backend runtime, database, authentication, or uptime requirements. Its non-functional requirements focus on maintainability, testability, accessibility metadata, build reliability, and beginner usability.

## NFR Decisions

- **Maintainability standard**: Beginner-first. Prefer clear file names, explicit fields, minimal cleverness, and tolerable repetition when it helps students.
- **Validation strictness**: Strict tests for missing required core fields, duplicate section IDs, malformed links, and empty project actions.
- **Accessibility metadata**: Require `ariaLabel` on all external links and user-facing actions.
- **Compatibility target**: Slightly broader than the current stack where practical, while optimizing for React 19, TypeScript 5.9, Vite 7, and Chakra UI 3.

## Maintainability Requirements

### NFR-M1: Beginner-Readable Data Files

Data files must be named by content area and easy for students to find:

- `profile.ts`
- `navigation.ts`
- `about.ts`
- `education.ts`
- `experience.ts`
- `awards.ts`
- `projects.ts`
- `gallery.ts`
- `videos.ts`
- `skills.ts`
- `certificates.ts`
- `portfolio.ts`

**Acceptance Criteria**:

- A student can identify the likely file to edit from its filename.
- Data files use explicit object fields rather than dense transformations.
- Helper abstractions are used only when they remove obvious duplication without hiding meaning.

### NFR-M2: Stable Shared Types

Shared types must catch common student editing mistakes while keeping the data model understandable.

**Acceptance Criteria**:

- Core entities have named TypeScript types.
- Required fields are represented as required properties.
- Optional content is represented through optional arrays or enabled section flags, not by deleting component code.

### NFR-M3: Low Coupling To UI Components

Data modules must not import React components or Chakra UI components.

**Acceptance Criteria**:

- Data imports assets and types only.
- Components consume data, not the other way around.

## Testability Requirements

### NFR-T1: Strict Data Validation Tests

The test suite must validate:

- Required profile fields exist and are non-empty.
- Contact email is mailto-compatible enough for template use.
- Navigation section IDs are valid and unique.
- Required core sections exist.
- External links have non-empty `label`, `href`, and `ariaLabel`.
- Project entries have at least one action.
- Certificate metadata is complete when certificates are present.

### NFR-T2: No Network-Dependent Validation

Tests must not call external URLs to verify reachability.

**Reason**: The portfolio template should run tests reliably offline and in CI without network flakiness.

## Accessibility Metadata Requirements

### NFR-A11Y1: Explicit Accessible Labels

All external links and user-facing actions in data must include `ariaLabel`.

**Acceptance Criteria**:

- Social links include `ariaLabel`.
- Project actions include `ariaLabel`.
- Video watch links include `ariaLabel`.
- Certificate actions include `ariaLabel` where represented as links/actions.

### NFR-A11Y2: Data Should Support Icon-Only And Text Actions

The same `ExternalLink` shape should support icon-only and text-visible links.

**Reason**: The current UI uses both icon-only social links and text buttons.

## Build Reliability Requirements

### NFR-B1: Vite-Compatible Assets

Image, logo, and PDF references should be import-resolved strings so missing files are caught by the build.

**Acceptance Criteria**:

- Data modules use imported asset references for bundled assets.
- Documentation warns students against fragile absolute asset paths.

### NFR-B2: Static Hosting Compatibility

Data should remain static and bundle-friendly.

**Acceptance Criteria**:

- No runtime data fetching is introduced in Unit 1.
- No backend, database, secret, or CMS dependency is introduced.

## Usability Requirements

### NFR-U1: Student-Friendly Optionality

Students should be able to hide optional sections without editing app shell or component code.

**Acceptance Criteria**:

- Navigation items include `enabled`.
- Optional sections can be represented by empty arrays and disabled navigation entries.

### NFR-U2: Current Example Content Remains Useful

The current owner content remains as realistic example data.

**Acceptance Criteria**:

- Example data compiles.
- Example data demonstrates all major supported data shapes.

## Performance And Scalability Requirements

### NFR-P1: No Meaningful Runtime Performance Burden

The data layer is static and small. No special performance architecture is needed.

**Acceptance Criteria**:

- Data is imported statically.
- No runtime parsing or heavy transformations are required to render portfolio sections.

### NFR-S1: Portfolio Growth Tolerance

The data model should tolerate reasonable student growth, such as additional projects, experiences, skills, videos, and certificates.

**Acceptance Criteria**:

- Arrays support adding entries without changing component code.
- Stable item identity is available where list rendering needs keys.

## Availability And Reliability Requirements

### NFR-R1: Build-Time Failure Over Runtime Surprise

Missing required data should fail TypeScript or tests before deployment.

### NFR-R2: Static Deployment Reliability

Data should not depend on runtime availability of external APIs.

## Security And Compliance Requirements

Security extension rules are disabled. Unit 1 still avoids adding sensitive runtime concerns.

**Acceptance Criteria**:

- No secrets are stored in data files.
- Contact email and public profile links are treated as public portfolio content.
- No authentication or authorization is introduced.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
