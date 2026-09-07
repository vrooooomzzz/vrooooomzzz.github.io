# Frontend Components - Template Data And Shared Types

## Unit Role In Frontend

Unit 1 does not implement visual rendering, but it defines the data contracts that later frontend components consume. The frontend design depends on the data model being stable, typed, and easy for students to edit.

## Data Consumption Map

| Frontend Area | Data Source | Notes |
|---|---|---|
| `App` | `portfolio.navigation` | Uses enabled section IDs for ordering and active-section tracking. |
| `Navbar` | `portfolio.profile`, `portfolio.navigation` | Renders profile identity and enabled navigation links. |
| `Hero` | `portfolio.profile`, `portfolio.hero` | Renders first-screen identity, stats, actions, social links. |
| `About` | `portfolio.about` | Renders intro, paragraphs, and metrics. |
| `Education` | `portfolio.education` | Renders education cards with logos. |
| `Experience` | `portfolio.experience` | Renders experience timeline. |
| `Awards` | `portfolio.awards` | Optional section controlled by navigation config. |
| `Projects` | `portfolio.projects` | Renders project actions as typed external links. |
| `Gallery` | `portfolio.gallery` | Optional section controlled by navigation config. |
| `Videos` | `portfolio.videos` | Optional section controlled by navigation config. |
| `Skills` | `portfolio.skills`, `portfolio.certificates` | Renders skills and optional certificate gallery. |
| `Contact` | `portfolio.profile` | Uses email and social links. |

## Component State Expectations

Unit 1 data should not require complex state management. Later UI components may use local state for:

- Active section tracking.
- Mobile drawer open state.
- Gallery modal selected item.
- Certificate modal selected item.
- Contact form fields.

The data layer remains static and immutable at runtime.

## Interaction Flow Support

### Enabled Section Rendering

1. Component layer reads `portfolio.navigation`.
2. Component layer filters to enabled items.
3. Navbar renders enabled links.
4. App renders or includes only enabled optional sections according to section mapping.

### External Link Rendering

1. Component layer receives `ExternalLink`.
2. Shared action component renders `label`.
3. `href` is used as destination.
4. `ariaLabel` is applied for accessible naming.

### Asset Rendering

1. Data file imports asset.
2. Data entity stores the import string.
3. Component renders the asset as image, object, or iframe source depending on content type.
4. Build fails if the import cannot be resolved.

## Form Validation Rules

Unit 1 only defines profile email data. Contact form validation belongs to the component refactor unit, but it should rely on:

- Non-empty profile email.
- Mailto-compatible profile email.
- Typed contact utility input shape.

## API Integration Points

No backend APIs are required. All Unit 1 data is static and bundled at build time.

## Frontend Constraints For Later Units

- Components should not define student-editable content arrays inline.
- Components should not duplicate section IDs manually.
- Components should not assume optional arrays are non-empty.
- Components should skip disabled sections.
- Components should use `ExternalLink` fields for accessible external actions.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
