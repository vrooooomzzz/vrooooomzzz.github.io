# Infrastructure Design - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Map the lightweight test suite to concrete execution environments and infrastructure boundaries.

## Infrastructure Summary

Unit 5 does not introduce new runtime infrastructure. The portfolio remains a static React/Vite site deployed to GitHub Pages. Tests run through Node.js on a developer machine and may later run on GitHub Actions runners using the same package scripts.

## Approved Infrastructure Answers

| Question | Answer | Infrastructure Decision |
|---|---|---|
| Deployment environment | A | Run tests locally and optionally in GitHub Actions. |
| Compute infrastructure | A | No new compute; use local Node.js or CI runner execution. |
| Storage infrastructure | A | No database or external storage; tests read local source files and imports. |
| Messaging infrastructure | A | No queues, events, or async messaging. |
| Networking infrastructure | A | No network checks or deployed-site dependencies. |
| Monitoring infrastructure | A | Use local test output and optional CI logs only. |
| Shared infrastructure | A | Reuse existing package scripts, lockfile, Vite config, and deployment workflow. |
| Multi-page conversion button | A | Defer as a separate AI-DLC feature request after the current testing unit. |

## Service Mapping

| Logical Component | Infrastructure Mapping | Notes |
|---|---|---|
| Test runner configuration | Local project config in Vite/Vitest context | No hosted test service required. |
| Test setup | Local source file loaded by Vitest | Runs inside the Node/JSDOM test process. |
| App smoke test | Local Node.js process with JSDOM | Does not deploy or open a real browser. |
| Navigation config tests | Local TypeScript imports | Validates local `src/data/navigation.ts`. |
| Portfolio data tests | Local TypeScript imports | Validates local portfolio data aggregate and related data files. |
| Package script verification | `package.json` | Adds a student-facing `npm run test` command during code generation. |
| README verification update | `README.md` | Documents the command once the script exists. |

## Deployment Environment

### Selected Environment

The primary execution environment is a local student or instructor development machine with Node.js and npm installed.

Optional future execution environment:

- GitHub Actions runner, using the same repository checkout and npm commands.

### Not Selected

| Environment | Reason |
|---|---|
| Live GitHub Pages site | Unit 5 tests are local contract checks, not live deployment checks. |
| Hosted test service | Adds setup overhead without improving this lightweight scope. |
| Browser automation cloud | Outside the approved no-E2E scope. |

## Compute Infrastructure

### Selected Compute

Tests run in the Node.js process started by `npm run test`.

Expected command shape:

- `npm run test`
- Package script maps to `vitest run`

### Sizing

No sizing is needed. The suite is expected to be small and suitable for a normal student laptop or standard CI runner.

### Scaling

No scaling infrastructure is needed. If the suite grows later, scaling should happen by organizing test files and keeping tests focused, not by adding remote compute.

## Storage Infrastructure

### Selected Storage

No database, object storage, or external test fixture storage is used.

Tests read:

- Local source files through normal TypeScript imports.
- Local package metadata from `package.json` if needed.
- README content only if code generation adds a documentation-alignment test.

### Data Lifecycle

There is no persisted test data lifecycle. Test output is ephemeral in the terminal or CI logs.

## Messaging Infrastructure

No messaging infrastructure is used.

Excluded:

- Queues.
- Event buses.
- Async job processors.
- Webhooks.

Rationale: the portfolio is static and the Unit 5 test suite has no asynchronous backend workflow.

## Networking Infrastructure

No networking infrastructure is used for Unit 5 tests.

Rules:

- Do not fetch external URLs.
- Do not check link reachability.
- Do not ping GitHub Pages.
- Do not call Google Sheets or private APIs.
- Validate URL strings and section targets locally only.

## Monitoring Infrastructure

### Selected Monitoring

Use standard test output:

- Local terminal output from Vitest.
- Optional GitHub Actions logs if tests are later wired into CI.

### Not Selected

| Monitoring Option | Reason |
|---|---|
| Hosted dashboard | Adds service setup and credentials not needed for a student template. |
| External alerting | Too heavy for local portfolio validation. |
| Analytics integration | Unrelated to test correctness and introduces privacy concerns. |

## Shared Infrastructure

The test suite reuses existing project infrastructure:

- npm package scripts.
- npm lockfile.
- Vite configuration.
- TypeScript configuration.
- Existing GitHub Pages deployment workflow.

No shared instructor-managed cloud resources are required.

## Multi-Page Layout Conversion Button Scope

The requested button for converting a single landing page into a multi-page layout is deferred. It should be handled as a separate feature because it likely requires:

- Routing or page-mode architecture.
- Navigation behavior changes.
- New UI controls.
- New template state or configuration.
- Updated documentation.
- New tests specific to multi-page behavior.

This infrastructure design does not implement or plan runtime infrastructure for that feature.

## Risks And Mitigations

| Risk | Mitigation |
|---|---|
| Test setup becomes too complex for students | Keep configuration minimal and close to Vite/Vitest defaults. |
| Tests accidentally depend on external services | Enforce no-network design in test implementation. |
| README documents a missing command | Update README only during code generation after adding the package script. |
| Future CI behavior differs from local behavior | Use the same npm command locally and in CI if CI is added later. |

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
