# Domain Entities - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Test Domain Entities

### Test Command

| Field | Description |
|---|---|
| Script | `npm run test` |
| Purpose | Runs the lightweight test suite once. |
| Primary User | Student and instructor |
| Expected Result | Passes when app render, navigation, and data contracts are healthy. |

### Test Suite

| Field | Description |
|---|---|
| Purpose | Group of lightweight automated checks. |
| Scope | App smoke render, navigation config, portfolio data, documentation command alignment. |
| Exclusions | Browser automation, external network, deployment verification, visual snapshots. |

### App Smoke Test

| Field | Description |
|---|---|
| Subject | `src/App.tsx` rendered with required providers |
| Purpose | Confirm the app shell renders without crashing. |
| Failure Meaning | A component import, provider setup, or render path is broken. |

### Navigation Config Test

| Field | Description |
|---|---|
| Subject | `src/data/navigation.ts` |
| Purpose | Confirm navigation IDs and labels stay consistent. |
| Failure Meaning | Navigation and section config drifted. |

### Portfolio Data Test

| Field | Description |
|---|---|
| Subject | `src/data/portfolio.ts` and underlying data modules |
| Purpose | Confirm required student-editable data is present and shaped correctly. |
| Failure Meaning | A student or maintainer removed or malformed required content. |

### External Link

| Field | Description |
|---|---|
| Source Type | `ExternalLink` |
| Required Fields | `label`, `href`, `ariaLabel` |
| Allowed Shapes | `https://`, `http://`, `mailto:` |

### Section ID

| Field | Description |
|---|---|
| Source Type | `SectionId` |
| Source File | `src/types/portfolio.ts` |
| Runtime Use | Navigation and section rendering |
| Test Rule | Must stay unique and aligned with enabled navigation. |

### Asset Reference

| Field | Description |
|---|---|
| Examples | Profile image, school logos, award logos, gallery images, certificate PDFs |
| Source | `src/assets/` imports or generated asset URLs |
| Test Rule | Must be a non-empty string. |

## Entity Relationships

| Relationship | Description |
|---|---|
| Test command runs test suite | `npm run test` is the student-facing verification entry point. |
| Test suite validates app shell | Smoke test renders app with providers. |
| Test suite validates navigation config | Navigation tests check section ID consistency. |
| Test suite validates portfolio data | Data tests check required fields and link shapes. |
| Portfolio data references assets | Asset-related tests check for non-empty resolved asset strings. |
| README documents test command | Student docs describe the verification workflow after tests exist. |

## Ownership

| Entity | Maintainer |
|---|---|
| Test command | Template maintainer |
| Smoke render test | Template maintainer |
| Navigation tests | Template maintainer |
| Portfolio data tests | Template maintainer |
| README test guidance | Template maintainer |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
