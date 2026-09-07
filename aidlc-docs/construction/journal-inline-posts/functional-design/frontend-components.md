# Frontend Components - Journal Inline Posts

## Journal

### Purpose

Render the existing video feed and the unified writing list.

### State

- No local component state required for writing cards.
- Receives static writing entries from data exports.

### Interactions

- Local post card action navigates to a hash-compatible in-site post URL.
- WordPress post card action opens the external WordPress URL.
- Visit Blog CTA remains available for the external blog.

### Rendering Rules

- Display video feed first as currently implemented.
- Display writing cards in a responsive grid.
- Render category and source badges.
- Render topics as existing badge style.

## WritingCard

### Purpose

Render a source-aware writing entry.

### Props

- `entry: WritingEntry`
- `index: number`

### Behavior

- For local entries, render a local post CTA.
- For WordPress entries, render an external CTA.
- Always show source badge.
- Preserve image, title, date, category, summary, and topic presentation.

## JournalPostPage

### Purpose

Render a full local post inside the portfolio.

### Props

- `slug: string`

### Behavior

- Lookup local post by slug.
- Render full article for valid slug.
- Render not-found state for invalid slug.
- Provide back-to-Journal navigation.

### Layout

- Use existing surface, badge, heading, and text styles.
- Keep article width readable.
- Ensure mobile and desktop responsiveness.

## App Routing Integration

### Purpose

Detect local Journal post hashes and render `JournalPostPage`.

### Behavior

- If hash matches local Journal post pattern, render local post page.
- If hash matches regular section pattern, preserve current section navigation.
- If no local post hash is active, render normal section flow.

## Accessibility Expectations

- Writing actions must have stable accessible labels.
- Images must have alt text.
- Back-to-Journal action must be keyboard accessible.
- Source badges must be readable and not rely only on color.

## Test Expectations

- App renders at least one local post card.
- App renders WordPress cards with external links.
- Direct local post hash renders the reading page.
- Invalid local post hash renders a graceful fallback.
