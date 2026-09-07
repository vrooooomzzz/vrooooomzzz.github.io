# Frontend Components - Lightweight Tests And Verification

## Unit

Unit 5: Lightweight Tests And Verification

## Runtime UI Impact

This unit should not change the user-facing portfolio UI. It adds test coverage around the existing UI and data configuration.

## Test-Facing Component Scope

### App Test Harness

Purpose:

- Render `App` in a test environment with the same required provider context used by `src/main.tsx`.

Expected structure:

- Test imports `App`.
- Test imports or recreates the provider wrapper from `src/components/ui/provider.tsx`.
- Test renders the app.
- Test asserts stable visible content is present.

### Navigation Verification

Purpose:

- Confirm navigation data can safely drive the app shell.

Expected checks:

- Enabled navigation labels are visible or data-valid.
- Navigation item IDs are unique.
- Navigation item IDs exist in `sectionIds`.
- App section mapping remains compatible with enabled section IDs.

### Portfolio Data Verification

Purpose:

- Confirm student-editable data remains usable by frontend components.

Expected checks:

- Profile and hero fields exist.
- Hero actions target valid sections.
- Project actions and social links have display labels, href values, and accessible labels.
- Gallery images have alt text.
- Certificate entries have display labels and file references.

## Component Interaction Flows

### Smoke Render Flow

1. Test starts JSDOM-like environment.
2. Test renders app with provider wrapper.
3. App loads navigation and portfolio data.
4. App renders enabled sections.
5. Test confirms stable visible content appears.

### Data Contract Flow

1. Test imports `portfolio`, `navigation`, and `sectionIds`.
2. Test validates required fields.
3. Test validates link and action targets.
4. Test reports failures close to the broken data surface.

## Form Validation Rules

Not applicable. This unit does not add forms.

## API Integration Points

Not applicable. Tests must not call external APIs or live websites.

## Automation-Friendly Notes

The tests should prefer stable, student-visible content and semantic queries. This unit does not require new `data-testid` attributes unless a future implementation finds a component that cannot be tested through accessible or visible content.

## Documentation Touchpoints

README verification guidance should be updated during code generation after the test command exists.

Expected verification command list:

- `npm run test`
- `npm run build`
- `npm run lint`
- `npm run preview`

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
