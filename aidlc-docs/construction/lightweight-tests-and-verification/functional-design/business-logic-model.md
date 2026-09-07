# Business Logic Model - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Purpose

Define the verification logic that protects the portfolio template from common student editing mistakes while keeping the test suite small and beginner-friendly.

## Business Goal

Students should be able to run one command, `npm run test`, and receive clear feedback when the app cannot render or when the editable portfolio data becomes inconsistent.

## Approved Planning Answers

| Question | Answer | Impact |
|---|---|---|
| Test scope | A | Include app smoke render, navigation integrity, required portfolio data fields, and basic asset/link shape checks. |
| Test style | A | Use focused unit and component tests with minimal mocking. |
| Test command | A | Add one-shot `npm run test`. |
| Documentation updates | A | Update README verification guidance after the command exists. |
| Failure behavior | A | Optimize for clear failures on common student mistakes without brittle visual checks. |

## Verification Workflows

### App Smoke Render Workflow

1. Test harness renders the app with required providers.
2. The test verifies that core student-visible content appears.
3. The test fails if the app crashes during render.

Primary value:

- Catches broken imports, provider setup failures, component crashes, and major data shape errors.

### Navigation Integrity Workflow

1. Load `sectionIds` and `navigation`.
2. Verify each navigation item has a unique section ID.
3. Verify every navigation item ID is part of `sectionIds`.
4. Verify every enabled navigation item has a non-empty label.
5. Verify expected section IDs remain available for the app shell.

Primary value:

- Catches duplicate IDs, missing labels, and drift between navigation config and rendered sections.

### Portfolio Data Validation Workflow

1. Load the `portfolio` aggregate from `src/data/portfolio.ts`.
2. Verify required profile fields are non-empty.
3. Verify hero actions point to known sections.
4. Verify section arrays that power visible template areas have valid required fields.
5. Verify external links use supported URL shapes.
6. Verify asset-like fields are non-empty strings.

Primary value:

- Catches likely student mistakes while editing data files.

### Documentation Verification Workflow

1. After test tooling is added, update README verification commands.
2. Ensure README includes `npm run test`.
3. Keep build, lint, and preview commands documented.

Primary value:

- Keeps student instructions aligned with available package scripts.

## Data Inputs

| Input | Source | Used By |
|---|---|---|
| App component | `src/App.tsx` | Smoke render test |
| Provider component | `src/components/ui/provider.tsx` | Smoke render test |
| Portfolio aggregate | `src/data/portfolio.ts` | Data validation tests |
| Navigation config | `src/data/navigation.ts` | Navigation tests |
| Profile and hero data | `src/data/profile.ts` | Required data tests |
| Shared types | `src/types/portfolio.ts` | Compile-time validation |
| Package scripts | `package.json` | Test command and documentation verification |

## Data Outputs

| Output | Description |
|---|---|
| Passing test run | Confirms app render, navigation, and key data contracts are healthy. |
| Test failure message | Points the student toward the broken data or rendering contract. |
| README verification update | Documents the new `npm run test` command for students. |

## Story Coverage

| Story | Coverage |
|---|---|
| US-11: Verify the portfolio before publishing | Primary story. Adds automated verification command and tests. |
| US-16: Validate template data and app rendering with tests | Primary story. Tests app rendering and key data/config contracts. |
| US-01 through US-10, US-12 through US-14 | Supporting coverage. Tests protect the template surfaces created by earlier units. |

## Non-Goals

- No browser automation.
- No external network calls.
- No deployment tests.
- No snapshot-heavy visual testing.
- No property-based testing.
- No backend or API tests.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
