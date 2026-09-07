# Business Rules - Template Data And Shared Types

## Required Data Rules

### Rule 1: Core Profile Is Required

The portfolio must define:

- Owner display name.
- Short role/title.
- Location.
- Contact email.
- Hero headline.
- Hero summary.
- Profile image.
- At least one social or contact link.

**Reason**: The site cannot serve as a useful portfolio template without a visible identity and contact path.

### Rule 2: Navigation IDs Must Be Known And Unique

Every navigation item must:

- Use a valid `SectionId`.
- Have a non-empty label.
- Have a boolean `enabled` field.
- Be unique by `id`.

**Reason**: Navigation config is the source of truth for section order and active-section behavior.

### Rule 3: Core Sections Stay Required

These sections should remain enabled by default:

- `home`
- `about`
- `education`
- `experience`
- `projects`
- `skills`
- `contact`

**Reason**: These sections form the baseline student portfolio journey.

### Rule 4: Optional Sections Can Be Disabled

These sections may be disabled with `enabled: false`:

- `awards`
- `gallery`
- `videos`
- certificate display within `skills`

**Reason**: Many students may not have awards, a gallery, videos, or certificates yet.

## Content Rules

### Rule 5: Arrays Must Use Stable Item Identity

Repeated data entries must have stable keys where useful, such as:

- `id`
- `title`
- `institution`
- `company`

**Reason**: Later React components need stable rendering keys.

### Rule 6: User-Facing External Actions Use Typed Link Objects

External actions must include:

- `label`
- `href`
- `ariaLabel`

**Reason**: This supports reusable action rendering and accessible labels.

### Rule 7: Project Entries Require At Least One Action

Each project must include at least one external action, such as repository, demo, article, or video.

**Reason**: Projects should provide evidence or a destination for visitors.

### Rule 8: Contact Email Must Be Valid Enough For Mailto

The contact email must be a non-empty string containing `@`.

**Reason**: The contact form builds a mailto URL and needs a usable recipient.

## Asset Rules

### Rule 9: Imported Assets Are Preferred

Images, logos, and PDFs should be imported in data files or supporting asset modules rather than referenced with fragile absolute paths.

**Reason**: Vite can validate and bundle imports reliably.

### Rule 10: Certificate Metadata Must Match A File

Certificate entries must include:

- `title`
- `issuer`
- `kind`
- `file`

**Reason**: Certificate UI and tests need enough metadata to render previews and links.

## Validation Rules

### Rule 11: TypeScript Is The First Guardrail

The shared types should catch missing required fields, invalid section IDs, and malformed link objects.

### Rule 12: Tests Are The Second Guardrail

Lightweight tests should validate:

- Required profile fields.
- Unique enabled section IDs.
- Required core sections exist.
- Project actions have labels and hrefs.
- Certificate metadata has required fields when certificates are present.

### Rule 13: Empty Optional Arrays Are Allowed

Optional arrays such as awards, gallery, videos, and certificates may be empty if their section is disabled or their component handles the absence gracefully.

## Error Handling Rules

### Rule 14: Missing Required Data Is A Development Error

Missing required core data should fail TypeScript or tests before deployment.

### Rule 15: Disabled Optional Sections Should Not Render Navigation Links

If `enabled: false`, later units should skip the section in navigation and section rendering.

### Rule 16: Broken External Links Are Not Fully Validated

Tests should validate link shape, not live network reachability.

**Reason**: Tests must avoid external network calls.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
