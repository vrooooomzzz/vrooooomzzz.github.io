# NFR Design Patterns - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Define the non-functional design patterns that will guide the lightweight automated test suite for the portfolio template.

## Approved Design Answers

| Question | Answer | Design Impact |
|---|---|---|
| Resilience pattern | A | Use deterministic local checks with no retries, network dependencies, or live deployment checks. |
| Scalability pattern | A | Organize tests by concern so the suite can grow without becoming difficult for students to understand. |
| Performance pattern | A | Keep tests small and run them with `vitest run` in JSDOM. |
| Security and privacy pattern | A | Avoid secrets, private services, `.env` dependencies, and live external calls. |
| Logical components | A | Include Vitest config, setup, App smoke test, navigation tests, portfolio data tests, and README verification update. |

## Resilience Pattern: Deterministic Local Verification

### Pattern

The test suite should fail only when local code, local configuration, or local portfolio data violates an expected contract.

### Design Rules

- Do not retry tests automatically.
- Do not call external websites.
- Do not check live GitHub Pages availability.
- Do not depend on current time, random data, or network status.
- Validate external links by string shape only.
- Prefer direct imports from `src/data/` and `src/App.tsx`.

### Rationale

Students need failures that point to editable project files rather than transient service conditions. A deterministic local suite also gives instructors repeatable class outcomes.

### Requirement Traceability

| Requirement | Coverage |
|---|---|
| NFR-TEST-REL-01 | Removes network, time, random, and deployment dependencies. |
| NFR-TEST-REL-02 | Validates local imports and component rendering only. |
| NFR-TEST-AVAIL-01 | Supports offline test execution after dependencies are installed. |

## Scalability Pattern: Concern-Oriented Test Organization

### Pattern

Group tests by the contract they protect rather than by every source file or visual section.

### Test Groups

| Group | Responsibility |
|---|---|
| App smoke render | Confirm the app renders with provider context and stable student-visible content. |
| Navigation config | Confirm navigation IDs, labels, and enabled section mappings stay consistent. |
| Portfolio data | Confirm student-editable profile, links, assets, actions, and section arrays remain valid. |
| Documentation and package scripts | Confirm `npm run test` exists and README mentions it after implementation. |

### Design Rules

- Add a new test group only when a new template-level contract appears.
- Keep helpers close to tests unless the same validation is reused in multiple files.
- Avoid a full test file per visual component at this stage.
- Avoid one monolithic test that hides the source of failures.

### Rationale

Concern-oriented tests are easier for students to scan. They also leave natural extension points for future class units, including optional Google Sheets-driven data loading.

### Requirement Traceability

| Requirement | Coverage |
|---|---|
| NFR-TEST-MAINT-01 | Keeps tests beginner-readable and locally understandable. |
| NFR-TEST-MAINT-02 | Focuses tests on stable template contracts. |
| NFR-TEST-USE-01 | Makes failure categories point toward likely broken files. |

## Performance Pattern: Fast JSDOM Test Runs

### Pattern

Use a one-shot Vitest run in JSDOM without browser startup, remote checks, or snapshot-heavy assertions.

### Design Rules

- Use `vitest run` for the default `npm run test` command.
- Use JSDOM for React rendering.
- Avoid Playwright, Cypress, or other browser automation in this unit.
- Avoid image diffing and layout assertions.
- Avoid large snapshots.
- Prefer a small number of meaningful assertions over broad exhaustive checks.

### Rationale

Fast feedback makes students more likely to run tests before publishing. It also keeps GitHub Pages deployment and local verification as separate mental models.

### Requirement Traceability

| Requirement | Coverage |
|---|---|
| NFR-TEST-PERF-01 | Keeps one-shot local feedback fast. |
| NFR-TEST-PERF-02 | Avoids high-overhead tools and services. |
| NFR-TEST-STACK-01 | Uses Vite-compatible Vitest and JSDOM. |

## Security And Privacy Pattern: Public Template Boundary

### Pattern

Tests should use only public local project files and must not require credentials or private data.

### Design Rules

- Do not read private `.env` values.
- Do not require Google Sheets access.
- Do not store deployment credentials.
- Do not call analytics, monitoring, or external APIs.
- Do not test private or instructor-only services.
- Validate URLs and file references as strings rather than fetching them.

### Rationale

This portfolio is intended as a public baseline template for students. The test suite should be safe to run in local environments, forks, and public GitHub Actions contexts without secret setup.

### Requirement Traceability

| Requirement | Coverage |
|---|---|
| NFR-TEST-SEC-01 | Avoids secrets, private services, and credentials. |
| NFR-TEST-AVAIL-01 | Prevents remote availability from affecting test results. |

## Usability Pattern: Failure Messages Near Editable Files

### Pattern

Test names and assertion messages should guide students toward likely broken template files.

### Design Rules

- Mention likely source files in test names when useful.
- Use assertion messages for data contract failures that would otherwise be vague.
- Prefer entity-level validation messages such as project title, social link label, or navigation ID.
- Avoid implementation-detail failures that point students toward framework internals.

### Rationale

The suite is part of a teaching workflow. A helpful failure message can turn a failed test into a guided debugging exercise rather than a dead end.

### Requirement Traceability

| Requirement | Coverage |
|---|---|
| NFR-TEST-USE-01 | Gives clear failure direction. |
| NFR-TEST-MAINT-01 | Keeps tests readable for students and instructors. |

## Documentation Pattern: Command Alignment

### Pattern

Student documentation should describe the automated test command only after the command exists.

### Design Rules

- Add `npm run test` to README during Unit 5 code generation.
- Keep README command guidance short.
- Preserve existing `npm run build`, `npm run lint`, and `npm run preview` references.
- Leave comprehensive command sequencing for the Build and Test stage.

### Rationale

Documentation should match available scripts. The previous student documentation unit intentionally deferred the test command until this unit adds it.

### Requirement Traceability

| Requirement | Coverage |
|---|---|
| NFR-TEST-DOC-01 | Adds README verification guidance after the test script exists. |
| NFR-TEST-DOC-02 | Defers full build and test instructions to the later Build and Test stage. |

## Explicit Non-Patterns

| Non-Pattern | Reason Excluded |
|---|---|
| Live deployment testing | Belongs outside lightweight local verification and can fail for reasons unrelated to student edits. |
| Link reachability testing | Adds network flakiness and external rate/availability risk. |
| End-to-end browser automation | Heavier than the approved Unit 5 scope. |
| Snapshot-heavy visual regression | Brittle for portfolio customization and not beginner-friendly. |
| Property-based testing | Disabled during Requirements Analysis. |
| Secret-backed integration tests | Violates the public template boundary. |

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
