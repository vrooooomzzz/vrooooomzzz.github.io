# Business Logic Model - Journal Inline Posts

## Core Workflow 1: Author Local Journal Content

1. Student creates or edits a local Markdown post file.
2. Student provides required metadata: title, date, category, summary, topics, and optional image metadata.
3. Static content registry imports or references the local post.
4. The post appears as a local writing entry in the Journal list after build.

## Core Workflow 2: Build Unified Writing List

1. Load local journal entries from the local content registry.
2. Load existing WordPress entries from curated metadata.
3. Normalize both sources into a `WritingEntry` union.
4. Sort or preserve configured order.
5. Render unified writing cards in Journal.

## Core Workflow 3: Open A Local Post

1. Visitor clicks a local writing card.
2. App navigates to the local post hash URL.
3. Hash parser extracts the post slug.
4. Local post lookup resolves the slug.
5. `JournalPostPage` renders the post metadata and content.
6. Visitor can return to the Journal section.

## Core Workflow 4: Open A WordPress Post

1. Visitor clicks a WordPress writing card.
2. Existing external link behavior opens the original WordPress URL.
3. No local post lookup or local reading page is involved.

## Error Workflow: Unknown Local Slug

1. Visitor opens a hash URL with an unknown local post slug.
2. Local post lookup returns no result.
3. Reading view displays a not-found state or redirects back to Journal.
4. App remains usable and does not break section navigation.

## Static Deployment Workflow

1. Local Markdown and metadata are bundled or resolved at build time.
2. `npm run build` emits static assets only.
3. GitHub Pages serves the built app without server-side routing.
4. Hash URLs allow post deep links without server rewrites.

## Data Transformations

### Local Post To Writing Entry

- Local post metadata becomes the Journal card fields.
- `slug` becomes the in-site post href target.
- `source` is set to `local`.

### WordPress Metadata To Writing Entry

- Existing WordPress metadata remains the Journal card fields.
- `href` remains the original WordPress URL.
- `source` is set to `wordpress`.
