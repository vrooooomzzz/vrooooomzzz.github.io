# Code Generation Plan - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Define the exact implementation sequence for adding lightweight automated tests, the test command, and student-facing verification documentation.

This document is the single source of truth for Unit 5 Code Generation. Code generation must follow these steps in order, update checkboxes immediately after each completed step, and keep application code in the workspace root.

## Current Project Context

| Item | Current State |
|---|---|
| Workspace root | `/Users/nhamhhung/my-portfolio` |
| Project type | Brownfield React/Vite/TypeScript portfolio |
| Existing test script | None |
| Existing test dependencies | None |
| Current build script | `tsc -b && vite build` |
| Current lint script | `eslint .` |
| Current Vite config | `vite.config.ts` with React SWC, Tailwind, tsconfig paths, and GitHub Pages base path |
| Runtime infrastructure | Static GitHub Pages deployment; unchanged by this unit |

## Story Traceability

| Story | Coverage In This Unit |
|---|---|
| US-11: Verify the portfolio before publishing | Adds `npm run test` and README verification guidance. |
| US-16: Validate template data and app rendering with tests | Adds app smoke render, navigation config tests, and portfolio data tests. |
| US-01, US-02, US-03, US-04, US-05, US-06, US-07, US-08, US-09, US-12, US-13, US-14 | Supporting coverage through data, navigation, rendering, and verification guardrails. |

## Dependencies And Interfaces

| Dependency | Interface Used |
|---|---|
| Unit 1: Template Data And Shared Types | `src/types/portfolio.ts`, `src/data/portfolio.ts`, individual data modules. |
| Unit 2: Component Refactor And Shared UI Utilities | `src/App.tsx`, `src/components/ui/provider.tsx`, shared component rendering behavior. |
| Unit 3: GitHub Pages Deployment Configuration | Existing Vite base path behavior and deployment workflow must remain unchanged. |
| Unit 4: Student Documentation | README verification guidance should be updated after the test command exists. |

## Files To Modify

| Path | Purpose |
|---|---|
| `package.json` | Add `test` script and dev dependencies. |
| `package-lock.json` | Update dependency lockfile after installing test packages. |
| `vite.config.ts` | Add Vitest test configuration if compatible with existing Vite config. |
| `tsconfig.app.json` | Add Vitest/jest-dom test globals if needed for TypeScript compatibility. |
| `README.md` | Add `npm run test` to student verification commands. |

## Files To Create

| Path | Purpose |
|---|---|
| `src/test/setup.ts` | Register jest-dom matchers and minimal test setup. |
| `src/App.test.tsx` | App smoke render test using React Testing Library. |
| `src/data/navigation.test.ts` | Navigation ID, label, and section alignment tests. |
| `src/data/portfolio.test.ts` | Portfolio data contract tests. |
| `aidlc-docs/construction/lightweight-tests-and-verification/code/code-generation-summary.md` | Markdown summary of generated code. |

## Out Of Scope

- No browser automation.
- No live GitHub Pages checks.
- No external URL reachability checks.
- No Google Sheets integration.
- No backend, database, queue, or cloud service.
- No implementation of the deferred multi-page layout conversion button.

## Planning Checklist

- [x] Read Unit 5 functional design artifacts.
- [x] Read Unit 5 NFR requirements artifacts.
- [x] Read Unit 5 NFR design artifacts.
- [x] Read Unit 5 infrastructure design artifacts.
- [x] Read unit-of-work story mapping.
- [x] Inspect current `package.json`, `vite.config.ts`, `tsconfig.app.json`, and `src/` structure.
- [x] Define exact files to modify and create.
- [x] Create this code generation plan.
- [x] Log plan approval prompt in `aidlc-docs/audit.md`.
- [x] Receive explicit approval to execute this plan.

## Code Generation Steps

### Step 1: Install Test Tooling

- [x] Add the approved lightweight test dev dependencies:
  - `vitest`
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `jsdom`
- [x] Update `package-lock.json` through npm so dependency versions are locked.
- [x] Do not add Playwright, Cypress, Jest, browser-cloud tooling, or property-based testing packages.

### Step 2: Add Test Script

- [x] Add `test` script to `package.json`.
- [x] Expected script: `vitest run`.
- [x] Preserve existing `dev`, `build`, `lint`, and `preview` scripts.

### Step 3: Configure Vitest

- [x] Extend `vite.config.ts` with Vitest-compatible test configuration if TypeScript permits it cleanly.
- [x] Configure JSDOM environment.
- [x] Configure setup file path.
- [x] Preserve existing React SWC, Tailwind, tsconfig paths, and GitHub Pages base path behavior.
- [x] If extending `vite.config.ts` causes type issues, use the smallest compatible config adjustment rather than duplicating build configuration.

### Step 4: Add Test Setup

- [x] Create `src/test/setup.ts`.
- [x] Register jest-dom matchers.
- [x] Add only minimal shims if a real app render requires them.
- [x] Avoid broad component mocks.

### Step 5: Add App Smoke Render Test

- [x] Create `src/App.test.tsx`.
- [x] Render `App` with the same provider context used by runtime entry.
- [x] Assert stable content from local portfolio data appears.
- [x] Assert at least one enabled navigation label appears.
- [x] Avoid layout, animation, screenshot, and CSS implementation assertions.

### Step 6: Add Navigation Config Tests

- [x] Create `src/data/navigation.test.ts`.
- [x] Verify `sectionIds` values are unique.
- [x] Verify every navigation item ID exists in `sectionIds`.
- [x] Verify enabled navigation items have non-empty labels.
- [x] Verify expected template section IDs remain present.
- [x] Use failure messages that point toward `src/data/navigation.ts`.

### Step 7: Add Portfolio Data Tests

- [x] Create `src/data/portfolio.test.ts`.
- [x] Validate required profile fields are non-empty.
- [x] Validate hero actions target known sections or supported URL shapes.
- [x] Validate social links and project actions have labels, href values, and accessible labels where required.
- [x] Validate gallery image alt text.
- [x] Validate certificate display labels and file references.
- [x] Validate visible section arrays contain required display fields.
- [x] Do not fetch URLs or inspect deployed assets.

### Step 8: Update README Verification Guidance

- [x] Add `npm run test` to the verification command list.
- [x] Preserve `npm run build`, `npm run lint`, and `npm run preview` guidance.
- [x] Keep README guidance concise; full test sequencing remains for Build and Test stage.

### Step 9: Create Code Generation Summary

- [x] Create `aidlc-docs/construction/lightweight-tests-and-verification/code/code-generation-summary.md`.
- [x] Summarize modified files, created files, test scope, and excluded non-goals.
- [x] Confirm the deferred multi-page layout conversion button remains outside this unit.

### Step 10: Run Automated Verification

- [x] Run `npm run test`.
- [x] Run `npm run build`.
- [x] Run `npm run lint`.
- [x] Record results in the code generation summary.
- [x] If dependency installation requires network access, request approval through the execution environment before installing packages.

### Step 11: Final Progress Updates

- [x] Confirm all Code Generation Steps are marked complete.
- [x] Update `aidlc-docs/aidlc-state.md` to reflect Unit 5 Code Generation completion.
- [x] Log code generation completion and approval prompt in `aidlc-docs/audit.md`.
- [x] Present the standardized Code Generation completion checkpoint.

## Story Completion Tracking

| Story | Status | Completion Criteria |
|---|---|---|
| US-11 | [x] Complete | `npm run test` exists, README documents it, and verification command works. |
| US-16 | [x] Complete | App smoke, navigation config, and portfolio data tests exist and pass. |
| Supporting stories | [x] Complete | Tests protect template data, navigation, rendering, documentation, and deployment assumptions without external checks. |

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
