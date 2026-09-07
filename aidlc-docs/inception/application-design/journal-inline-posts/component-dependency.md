# Component Dependencies - Journal Inline Posts

## Dependency Matrix

| Component | Depends On | Dependency Type | Notes |
|---|---|---|---|
| `Journal` | Writing content registry | Data | Reads unified local and WordPress writing entries. |
| `Journal` | Shared UI components | UI | Uses `ContentCard`, `ExternalAction`, and `SectionShell`. |
| `Journal` | Navigation helpers | Behavior | Uses local post hrefs for in-site entries. |
| `JournalPostPage` | Local journal registry | Data | Resolves post by slug. |
| `JournalPostPage` | Shared UI components | UI | Uses existing visual language for article view. |
| `App` | Hash parsing helper | Behavior | Determines when to render local post page. |
| `portfolio.ts` | Blog data and local journal posts | Data | Aggregates writing content for the app. |
| Tests | Portfolio data and App rendering | Verification | Validate metadata and route behavior. |

## Communication Patterns

- Data flows from static content modules into `portfolio.ts`.
- `Journal` renders source-aware writing entries and delegates card action behavior based on entry source.
- Local post cards point to hash-compatible in-site URLs.
- WordPress post cards keep their external URLs and open outside the portfolio.
- `App` detects local post hashes and renders `JournalPostPage` instead of the normal section list.

## Data Flow

1. Local Markdown post files and WordPress metadata are imported into static data modules.
2. Data modules normalize content into a `WritingEntry` union.
3. `Journal` renders cards from the unified writing entry list.
4. A local card click changes the hash to a local post path.
5. `App` parses the hash and renders `JournalPostPage`.
6. `JournalPostPage` resolves the slug and renders local article content.
7. External WordPress cards bypass local routing and open their original URLs.

## Coupling Notes

- Keep WordPress metadata and local Markdown content source-aware to avoid ambiguous behavior.
- Keep local post hash parsing isolated in helper functions so App remains readable.
- Keep Markdown rendering static and simple to preserve GitHub Pages compatibility.
