# Business Rules - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Test Command Rules

### BR-TEST-01: Add One-Shot Test Command

`package.json` must include a simple `npm run test` command for local verification.

### BR-TEST-02: No Browser Automation

The test suite must not require Playwright, Cypress, Selenium, or a real browser.

### BR-TEST-03: No External Network Calls

Tests must not fetch live websites, GitHub Pages URLs, Google Sheets, YouTube, LinkedIn, GitHub, or any other external service.

## App Render Rules

### BR-APP-01: App Smoke Render

The test suite must render the app shell and fail if the app crashes during rendering.

### BR-APP-02: Provider-Aware Rendering

The app render test must include the required UI provider context so component rendering matches the real app structure.

### BR-APP-03: Stable Student-Visible Assertion

The smoke test should assert stable visible content such as the profile name, headline, or navigation labels rather than implementation details.

## Navigation Rules

### BR-NAV-01: Unique Section IDs

`sectionIds` must not contain duplicates.

### BR-NAV-02: Navigation IDs Must Be Known Sections

Every `navigation` item ID must exist in `sectionIds`.

### BR-NAV-03: Enabled Navigation Labels

Every enabled navigation item must have a non-empty label.

### BR-NAV-04: Expected Sections Remain Available

The expected portfolio sections must remain represented in `sectionIds` unless the app design is intentionally changed.

## Portfolio Data Rules

### BR-DATA-01: Required Profile Fields

The profile must include non-empty values for:

- `name`
- `role`
- `location`
- `email`
- `summary`

### BR-DATA-02: Profile Email Shape

The profile email must include `@`.

### BR-DATA-03: Social Links Must Be Valid Enough For Template Use

Each social link must include:

- Non-empty `label`
- Non-empty `href`
- Non-empty `ariaLabel`

Supported `href` prefixes:

- `https://`
- `http://`
- `mailto:`

### BR-DATA-04: Hero Actions Must Target Known Sections

Hero primary and secondary actions must point to section IDs that exist in `sectionIds`.

### BR-DATA-05: Visible Content Arrays Must Have Required Fields

Student-editable arrays should be checked for required display fields, including:

- Education entries.
- Experience entries.
- Award entries.
- Project entries.
- Gallery items.
- Video entries.
- Skill categories.
- Certificate entries.

### BR-DATA-06: Asset References Must Be Non-Empty

Image, logo, and certificate file references must be non-empty strings after Vite resolves imports.

### BR-DATA-07: Certificate Files Should Look Like PDFs

Certificate file references should include `.pdf` when practical to validate. If Vite transforms asset URLs in a way that changes the visible string, this rule may be implemented as a non-empty file reference check.

## Documentation Rules

### BR-DOC-01: README Includes Test Command After Tests Exist

After `npm run test` exists, `README.md` must include it in the verification guidance.

### BR-DOC-02: README Keeps Other Verification Commands

README verification guidance must still include:

- `npm run build`
- `npm run lint`
- `npm run preview`

### BR-DOC-03: No Test Documentation Before Script Exists

The test command should be documented only as part of this unit's code generation after the script is added.

## Failure Message Rules

### BR-FAIL-01: Failures Should Point To Student-Editable Files

Where practical, test names and assertion messages should guide students toward files such as:

- `src/data/profile.ts`
- `src/data/navigation.ts`
- `src/data/portfolio.ts`
- `src/assets/`

### BR-FAIL-02: Avoid Brittle Visual Assertions

Tests should not fail because of harmless visual copy, spacing, animation, or style changes.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
