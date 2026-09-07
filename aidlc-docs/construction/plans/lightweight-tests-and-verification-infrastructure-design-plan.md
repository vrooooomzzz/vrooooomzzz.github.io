# Infrastructure Design Plan - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Plan how the logical test components map to actual execution environments and infrastructure boundaries.

## Approved Design Inputs

| Input                      | Approved Direction                                         |
| -------------------------- | ---------------------------------------------------------- |
| Test runner                | Vitest.                                                    |
| Component test environment | JSDOM.                                                     |
| Test execution             | One-shot `npm run test`.                                   |
| Network behavior           | No external network calls or live deployment checks.       |
| Deployment target          | Existing static GitHub Pages deployment remains unchanged. |
| Runtime infrastructure     | No backend, database, queue, cache, or server runtime.     |

## Scope Note: Multi-Page Layout Conversion Button

The request for a button that automatically converts the current single landing page into a stunning multi-page layout is valuable, but it is outside Unit 5. It changes user-facing application behavior, routing/navigation design, UI controls, and likely template configuration. Recommended handling is to complete the current testing unit, then start a separate AI-DLC change for a "single-page to multi-page portfolio layout" feature.

## Infrastructure Assessment

| Category                  | Unit 5 Assessment                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Deployment Environment    | Tests run locally and can later run in GitHub Actions using Node.js.                                                          |
| Compute Infrastructure    | No runtime compute; local developer machine or CI runner only.                                                                |
| Storage Infrastructure    | No database or external storage. Tests read local source files and imports.                                                   |
| Messaging Infrastructure  | No queues, events, or async messaging.                                                                                        |
| Networking Infrastructure | No network infrastructure. Tests avoid fetches and live URL checks.                                                           |
| Monitoring Infrastructure | Test output and CI logs only. No observability service.                                                                       |
| Shared Infrastructure     | Existing package scripts, lockfile, Vite config, and GitHub Actions deployment workflow remain shared project infrastructure. |

## Execution Checklist

- [x] Read approved functional design artifacts.
- [x] Read approved NFR requirements artifacts.
- [x] Read approved NFR design artifacts.
- [x] Identify infrastructure categories applicable to Unit 5.
- [x] Create this infrastructure design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/infrastructure-design/infrastructure-design.md`.
- [x] Generate `aidlc-docs/construction/lightweight-tests-and-verification/infrastructure-design/deployment-architecture.md`.
- [x] Update this plan after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Questions

### Question 1: Deployment Environment

Where should Unit 5 tests be designed to run?

A. Local developer machines and optional GitHub Actions runners, using the existing Node/Vite project setup.  
B. A new cloud-hosted testing service.  
C. The live GitHub Pages site after deployment.  
X. Other: describe the preferred deployment environment.

[Answer]: A

Recommendation: A. This matches the approved local-first, no-live-deployment testing strategy.

### Question 2: Compute Infrastructure

What compute infrastructure should be introduced for the test suite?

A. No new compute infrastructure; tests run in Node on local machines or CI runners.  
B. Add a serverless function to run tests remotely.  
C. Add a dedicated testing VM or container service.  
X. Other: describe the preferred compute approach.

[Answer]: A

Recommendation: A. The project is a static portfolio template and the tests do not need runtime compute.

### Question 3: Storage Infrastructure

What storage infrastructure should Unit 5 use?

A. No database or external storage; tests read local source files and imported data.  
B. Add a lightweight local database for test fixtures.  
C. Store test data in a remote spreadsheet or object store.  
X. Other: describe the preferred storage approach.

[Answer]: A

Recommendation: A. This keeps tests deterministic and avoids private service setup.

### Question 4: Messaging Infrastructure

Should Unit 5 introduce messaging, queues, or event-driven infrastructure?

A. No messaging infrastructure.  
B. Add a queue for async test execution.  
C. Add an event bus for test result processing.  
X. Other: describe the preferred messaging approach.

[Answer]: A

Recommendation: A. There is no async backend workflow in this static portfolio template.

### Question 5: Networking Infrastructure

What networking infrastructure should support Unit 5?

A. No new networking infrastructure; tests must not fetch external URLs or rely on deployed site availability.  
B. Add link reachability checks against public sites.  
C. Add a preview deployment network check.  
X. Other: describe the preferred networking approach.

[Answer]: A

Recommendation: A. This preserves deterministic local test behavior.

### Question 6: Monitoring Infrastructure

What monitoring or observability should Unit 5 use?

A. Use local test output and optional CI logs only.  
B. Add a hosted monitoring dashboard for test results.  
C. Add external alerting for failed portfolio tests.  
X. Other: describe the preferred monitoring approach.

[Answer]: A

Recommendation: A. The lightweight suite should stay simple for students and instructors.

### Question 7: Shared Infrastructure

How should shared project infrastructure be handled?

A. Reuse existing package scripts, lockfile, Vite config, and GitHub Actions workflow without adding shared cloud resources.  
B. Create shared instructor-managed infrastructure for all student portfolios.  
C. Require each student to provision their own test infrastructure.  
X. Other: describe the preferred shared infrastructure strategy.

[Answer]: A

Recommendation: A. This keeps the baseline portfolio template easy to fork and maintain.

### Question 8: New Multi-Page Layout Conversion Button

How should the new request for a button that converts the single landing page into a multi-page layout be handled?

A. Defer it to a separate AI-DLC change after Unit 5 and Build and Test, because it is a new user-facing feature.  
B. Pause Unit 5 and re-scope the current AI-DLC workflow around the multi-page layout feature now.  
C. Add it directly to Unit 5 code generation alongside the test suite.  
X. Other: describe the preferred scope decision.

[Answer]: A

Recommendation: A. This avoids mixing a significant UI/routing feature into a testing infrastructure unit.

## Proposed Answers

| Question   | Proposed Answer |
| ---------- | --------------- |
| Question 1 | A               |
| Question 2 | A               |
| Question 3 | A               |
| Question 4 | A               |
| Question 5 | A               |
| Question 6 | A               |
| Question 7 | A               |
| Question 8 | A               |

## Content Validation

| Check              | Result                                                        |
| ------------------ | ------------------------------------------------------------- |
| Mermaid diagrams   | Not applicable; no Mermaid diagrams included.                 |
| ASCII diagrams     | Not applicable; no ASCII diagrams included.                   |
| Markdown tables    | Valid simple pipe tables.                                     |
| Code fences        | Not applicable; no fenced code blocks included.               |
| Special characters | Inline code and markdown punctuation checked for readability. |

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
