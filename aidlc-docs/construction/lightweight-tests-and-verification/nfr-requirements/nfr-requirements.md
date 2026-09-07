# NFR Requirements - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Define the non-functional requirements for the lightweight test suite that will protect app rendering, navigation configuration, portfolio data, and student verification documentation.

## Approved Planning Answers

| Question | Answer | Impact |
|---|---|---|
| Test tooling | A | Use Vitest with React Testing Library, jest-dom matchers, and JSDOM. |
| Performance target | A | Keep tests small and deterministic so one-shot runs usually complete in a few seconds. |
| Reliability and isolation | A | No external network calls, live deployment checks, real browser automation, or time-dependent assertions. |
| Failure message quality | A | Test names and assertions should point to likely student-editable files. |
| Documentation and maintenance | A | Update README with `npm run test`; keep detailed instructions for Build and Test. |

## Performance Requirements

### NFR-TEST-PERF-01: Fast Local Feedback

The one-shot test command should be fast enough for students to run before publishing changes.

Acceptance criteria:

- Test scope remains limited to smoke rendering, data/config validation, and documentation command alignment.
- Tests do not require browser startup.
- Tests do not wait on network calls.
- Tests avoid large snapshot comparisons.

### NFR-TEST-PERF-02: Minimal Setup Overhead

The test toolchain should add only the packages needed for React component and data validation tests.

Acceptance criteria:

- Avoid adding end-to-end testing frameworks.
- Avoid adding test tools that require separate service startup.
- Keep package scripts simple.

## Reliability Requirements

### NFR-TEST-REL-01: Deterministic Test Runs

Tests must produce consistent results across local machines and CI-style environments when the same code is used.

Acceptance criteria:

- No external network calls.
- No live GitHub Pages URL checks.
- No time-dependent assertions.
- No random data generation.
- No dependency on browser-specific APIs outside the configured test environment.

### NFR-TEST-REL-02: Isolated Unit And Component Checks

Tests should validate local app behavior and data contracts without depending on external services.

Acceptance criteria:

- Tests import local data and components.
- App render tests use a local test DOM environment.
- External links are validated by shape only, not by fetching them.

## Maintainability Requirements

### NFR-TEST-MAINT-01: Beginner-Readable Tests

Tests should be easy for students and instructors to read.

Acceptance criteria:

- Test names describe the behavior or data contract being verified.
- Helpers are small and local to tests unless reuse is meaningful.
- Avoid complex mocking patterns.
- Avoid implementation-detail assertions where visible content or data contracts are enough.

### NFR-TEST-MAINT-02: Stable Test Boundaries

Tests should focus on contracts that matter to the template.

Acceptance criteria:

- Navigation tests validate ID uniqueness and section alignment.
- Portfolio data tests validate required fields and link shapes.
- App smoke test validates that the app renders with provider context.
- Tests avoid brittle visual style, animation, or exact layout assertions.

## Usability Requirements

### NFR-TEST-USE-01: Clear Failure Direction

Failures should help students locate likely broken files.

Acceptance criteria:

- Test descriptions mention likely source areas such as `src/data/profile.ts`, `src/data/navigation.ts`, or `src/assets/`.
- Assertion messages are added where a default assertion would be unclear.
- Data validation failures identify the affected entity type where practical.

### NFR-TEST-USE-02: Simple Verification Command

Students should have one obvious command for automated tests.

Acceptance criteria:

- `package.json` includes `npm run test`.
- README includes `npm run test` after the script exists.
- README continues to include build, lint, and preview commands.

## Security And Privacy Requirements

### NFR-TEST-SEC-01: No Secrets Or Private Services

The test suite must not require secrets, private services, or private user data.

Acceptance criteria:

- No API keys.
- No `.env` secrets.
- No private Google Sheets access.
- No deployment credentials.
- No analytics or monitoring credentials.

## Availability Requirements

### NFR-TEST-AVAIL-01: Offline-Friendly Local Tests

Once dependencies are installed, tests should run without internet access.

Acceptance criteria:

- Tests do not fetch remote resources.
- Tests do not rely on deployed site availability.
- Tests do not call external APIs.

## Tech Stack Requirements

### NFR-TEST-STACK-01: Vite-Compatible Test Stack

The test stack should integrate naturally with the existing React, TypeScript, and Vite project.

Required tools:

- Vitest.
- React Testing Library.
- jest-dom matchers.
- JSDOM test environment.

### NFR-TEST-STACK-02: TypeScript Compatibility

Test files should work with the current TypeScript and Vite configuration.

Acceptance criteria:

- Tests use TypeScript.
- Test setup supports `.tsx` component tests.
- Type declarations support test globals or explicit imports.

## Documentation Requirements

### NFR-TEST-DOC-01: README Verification Update

README must include the test command after Unit 5 code generation.

Acceptance criteria:

- `npm run test` appears in the verification command list.
- Existing verification commands remain documented.
- README does not over-explain the test framework.

### NFR-TEST-DOC-02: Build And Test Documentation Deferred

Detailed test execution instructions should be finalized in the Build and Test stage.

Acceptance criteria:

- Unit 5 may update README for student quick verification.
- Comprehensive build and test instructions are generated under `aidlc-docs/construction/build-and-test/` later.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
