# Business Rules - Journal Inline Posts

## Content Source Rules

| ID | Rule |
|---|---|
| JIP-BR-01 | Every writing entry must have an explicit source discriminant. |
| JIP-BR-02 | Local entries must have a stable `slug`. |
| JIP-BR-03 | WordPress entries must have an external `href`. |
| JIP-BR-04 | Local entries must not require a backend, database, authentication, or runtime content API. |
| JIP-BR-05 | WordPress entries must remain locally curated metadata and must not fetch WordPress at runtime. |

## Metadata Rules

| ID | Rule |
|---|---|
| JIP-BR-06 | All writing entries must include title, publication date, category, summary, and at least one topic. |
| JIP-BR-07 | Images must include alt text when rendered. |
| JIP-BR-08 | Local post slugs must be unique. |
| JIP-BR-09 | Unknown local post slugs must fail gracefully. |

## Display Rules

| ID | Rule |
|---|---|
| JIP-BR-10 | Local and WordPress posts must render in one Journal writing list. |
| JIP-BR-11 | Local and WordPress cards must show source badges. |
| JIP-BR-12 | Local card actions must navigate to in-site reading pages. |
| JIP-BR-13 | WordPress card actions must open the original WordPress URL. |
| JIP-BR-14 | Existing educational videos must remain visible in Journal. |

## Navigation Rules

| ID | Rule |
|---|---|
| JIP-BR-15 | Local post URLs must be compatible with GitHub Pages static hosting. |
| JIP-BR-16 | Direct navigation to a valid local post hash must render that post. |
| JIP-BR-17 | The local post reading view must provide a path back to Journal. |
| JIP-BR-18 | Local post routing must not break existing single-page or multi-page section navigation. |

## Validation Rules

| ID | Rule |
|---|---|
| JIP-BR-19 | Tests must validate required metadata for local and WordPress posts. |
| JIP-BR-20 | Tests must validate local post rendering and WordPress external link preservation. |
| JIP-BR-21 | Build verification must confirm the site remains statically deployable. |
