# Deployment Architecture - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Describe how the test suite fits into the portfolio's local and deployment workflow without adding new runtime services.

## Architecture Summary

The portfolio remains a static site built by Vite and deployed to GitHub Pages. Unit 5 adds local verification before build or deployment. The tests execute in Node.js with JSDOM and do not interact with the deployed site.

## Text Architecture

1. Student or instructor edits local portfolio files.
2. Student or instructor runs `npm run test`.
3. npm starts Vitest in one-shot mode.
4. Vitest loads the JSDOM environment and test setup.
5. Tests import local app, navigation, and portfolio data.
6. Test results print to the terminal.
7. Existing build and GitHub Pages deployment flow remains unchanged.

Optional future CI flow:

1. GitHub Actions checks out the repository.
2. GitHub Actions installs dependencies.
3. GitHub Actions runs `npm run test`.
4. GitHub Actions records logs in the workflow run.

## Deployment Boundary

| Boundary | Unit 5 Decision |
|---|---|
| Local development | Primary test execution target. |
| GitHub Actions | Optional future execution target using the same command. |
| GitHub Pages | Deployment target remains unchanged and is not queried by tests. |
| External websites | Not called by tests. |
| Google Sheets or private data services | Not used by tests. |

## Runtime Components

Unit 5 adds no runtime components to the deployed portfolio.

| Component | Deployed To GitHub Pages? | Notes |
|---|---|---|
| Test files | No | Used only during local or CI test execution. |
| Test setup file | No | Used only by Vitest. |
| Test dependencies | No | Dev dependencies only. |
| README update | Yes, as repository documentation | Visible in repository, not part of app runtime. |
| Package script | No runtime effect | Used by local and CI commands. |

## Existing Deployment Compatibility

The existing GitHub Pages configuration remains responsible for deployment.

Unit 5 must preserve:

- Existing Vite base path behavior.
- Existing build command behavior.
- Existing deploy workflow behavior.
- Existing static asset handling.

## No-New-Infrastructure Decisions

| Infrastructure Area | Decision |
|---|---|
| Cloud provider | No new provider selection. Existing GitHub Pages deployment remains. |
| Compute | No app runtime compute. Tests run in local or CI Node.js. |
| Storage | No database, object storage, or remote fixtures. |
| Network | No network calls during tests. |
| Messaging | No queues or event streams. |
| Monitoring | Terminal output and optional CI logs only. |
| Secrets | No secrets required. |

## Verification Placement

Recommended local command order after Unit 5 code generation:

1. `npm run test`
2. `npm run build`
3. `npm run lint`
4. `npm run preview`

The Build and Test stage will formalize the full verification instructions.

## Multi-Page Layout Conversion Button Placement

The multi-page layout conversion button is outside this deployment architecture. A later feature should decide whether it is:

- A runtime portfolio mode.
- A developer-only template tool.
- A generated configuration option.
- A separate route/page management system.

That decision should be made in a new AI-DLC workflow so testing and deployment impacts can be planned properly.

## Failure Modes

| Failure Mode | Expected Surface |
|---|---|
| Broken app import or provider setup | Vitest failure in local terminal or CI logs. |
| Invalid navigation config | Vitest failure pointing to navigation data. |
| Invalid portfolio data | Vitest failure pointing to affected data contract. |
| Missing test script | npm command failure before tests run. |
| Deployed site unavailable | Not detected by Unit 5 tests by design. |

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
