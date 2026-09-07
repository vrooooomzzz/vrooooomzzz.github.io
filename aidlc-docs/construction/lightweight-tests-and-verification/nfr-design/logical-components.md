# Logical Components - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Define the logical testing components that should be implemented during Unit 5 code generation.

## Component Overview

| Logical Component | Responsibility | Primary Files Expected In Code Generation |
|---|---|---|
| Test runner configuration | Configure Vitest for React, TypeScript, and JSDOM. | `vite.config.ts` or dedicated Vitest config if needed. |
| Test setup | Load jest-dom matchers and shared test setup. | `src/test/setup.ts` or equivalent. |
| App smoke test | Render the portfolio with provider context and verify stable visible content. | `src/App.test.tsx` or `src/__tests__/App.test.tsx`. |
| Navigation config tests | Validate navigation IDs, labels, uniqueness, and section alignment. | `src/data/navigation.test.ts` or equivalent. |
| Portfolio data tests | Validate profile, hero actions, section arrays, links, and asset-like fields. | `src/data/portfolio.test.ts` or equivalent. |
| Package script verification | Ensure `npm run test` is available. | `package.json`. |
| README verification update | Document `npm run test` with existing build, lint, and preview commands. | `README.md`. |

## Test Runner Configuration

### Responsibilities

- Run tests through Vitest.
- Use JSDOM as the browser-like DOM environment.
- Support TypeScript and TSX tests.
- Connect the test setup file.
- Preserve existing Vite build behavior for the app and GitHub Pages base path.

### Design Notes

- Prefer extending the existing Vite configuration instead of introducing a separate config file unless TypeScript type constraints make a separate test config clearer.
- Keep the default test command one-shot: `vitest run`.
- Do not add watch mode as the primary student command.

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-STACK-01 | Uses Vite-compatible Vitest configuration. |
| NFR-TEST-STACK-02 | Supports TypeScript and TSX tests. |
| NFR-TEST-PERF-01 | Keeps the command fast and one-shot. |

## Test Setup

### Responsibilities

- Register jest-dom matchers for readable DOM assertions.
- Avoid global mocks unless required by a component dependency.
- Keep setup minimal and easy to explain.

### Design Notes

- If browser APIs need shims, add only the smallest stable shim needed for App rendering.
- Avoid broad mocks of portfolio components because the smoke test should catch real render failures.

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-MAINT-01 | Keeps test setup beginner-readable. |
| NFR-TEST-REL-01 | Avoids hidden global behavior that could create unstable results. |

## App Smoke Test

### Responsibilities

- Render `App` with the same provider context used by runtime entry.
- Assert that stable student-visible content appears.
- Fail if imports, provider setup, data usage, or major component composition breaks.

### Stable Assertion Candidates

Use stable content derived from local portfolio data rather than hardcoded decorative text where possible.

Potential assertions:

- Profile display name appears.
- Hero role or summary content appears.
- At least one enabled navigation label appears.

### Avoid

- Exact layout assertions.
- Animation timing assertions.
- Screenshot or visual snapshot checks.
- Assertions tied to class names or CSS implementation details.

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-REL-02 | Uses local imports and provider context. |
| NFR-TEST-MAINT-02 | Checks stable rendering contracts. |
| NFR-TEST-USE-01 | Catches app-level failures students can reproduce locally. |

## Navigation Config Tests

### Responsibilities

- Verify `sectionIds` has unique values.
- Verify navigation item IDs are valid section IDs.
- Verify enabled navigation items have non-empty labels.
- Verify expected template section IDs remain present.

### Suggested Failure Direction

Failure messages should point students toward `src/data/navigation.ts` and, when relevant, the section mapping in `src/App.tsx`.

### Avoid

- Fetching anchors in a browser.
- Testing scroll behavior.
- Testing exact header layout.

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-MAINT-02 | Protects stable navigation contracts. |
| NFR-TEST-USE-01 | Gives clear direction for navigation edits. |

## Portfolio Data Tests

### Responsibilities

- Validate required profile fields are non-empty.
- Validate hero actions target known sections or valid URLs according to the data contract.
- Validate social links and project actions have labels, href values, and accessible labels where required.
- Validate gallery images have alt text.
- Validate certificate entries have display labels and file references.
- Validate section arrays contain required display fields.

### URL And Asset Validation Boundary

Use shape validation only:

- Internal section targets should map to known `SectionId` values.
- External URLs should start with a supported public URL scheme.
- Asset-like references should be non-empty strings or valid imported asset values.

Do not fetch URLs or inspect image files.

### Suggested Failure Direction

Failure messages should name the entity type and likely data file, such as:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/certificates.ts`
- `src/data/gallery.ts`
- `src/data/portfolio.ts`

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-REL-02 | Validates local data contracts only. |
| NFR-TEST-MAINT-02 | Protects fields that matter to the template. |
| NFR-TEST-SEC-01 | Avoids private service checks and secret access. |

## Package Script Verification

### Responsibilities

- Add a `test` script to `package.json`.
- Keep the script simple and predictable.
- Ensure the command aligns with README guidance.

### Expected Script

The expected script shape is `vitest run`.

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-USE-02 | Provides one obvious test command. |
| NFR-TEST-DOC-01 | Enables README to document a real command. |

## README Verification Update

### Responsibilities

- Add `npm run test` to the student verification command list after the test script exists.
- Preserve existing commands for build, lint, and preview.
- Keep detailed sequencing for the Build and Test stage.

### NFR Coverage

| Requirement | Coverage |
|---|---|
| NFR-TEST-DOC-01 | Documents the test command. |
| NFR-TEST-DOC-02 | Keeps full build and test instructions deferred. |

## Logical Flow

1. Student edits local portfolio data or components.
2. Student runs `npm run test`.
3. Vitest loads setup and JSDOM.
4. App smoke test renders the local app.
5. Navigation tests validate local navigation contracts.
6. Portfolio data tests validate local student-editable data.
7. Failures identify the likely broken contract or editable file.

## Implementation Guardrails For Code Generation

- Keep tests close to the source contracts they protect.
- Prefer explicit assertions over clever helper abstractions.
- Use readable test names with source-area hints.
- Add dependencies only for the approved test stack.
- Do not introduce E2E tooling.
- Do not add network checks.
- Do not move runtime portfolio data into test-only files.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable; no ASCII diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Code fences | Not applicable; no fenced code blocks included. |
| Special characters | Inline code and markdown punctuation checked for readability. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
