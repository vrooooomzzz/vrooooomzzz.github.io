# Component Methods - Journal Inline Posts

## Journal Component

### `renderWritingEntry(entry: WritingEntry, index: number): ReactNode`

- **Purpose**: Render a local or WordPress writing card.
- **Input**: Source-aware writing entry and display index.
- **Output**: Card UI with metadata, badges, summary, and action.

### `getWritingAction(entry: WritingEntry): ExternalLink | SectionActionLike`

- **Purpose**: Determine whether the card opens an in-site post page or external WordPress URL.
- **Input**: Source-aware writing entry.
- **Output**: Action metadata for the card CTA.

## JournalPostPage Component

### `JournalPostPage({ slug }: { slug: string }): JSX.Element`

- **Purpose**: Render the local post matching the active slug.
- **Input**: Stable local post slug.
- **Output**: Full reading page or not-found state.

### `renderPostContent(post: LocalJournalPost): ReactNode`

- **Purpose**: Render local Markdown-derived article content.
- **Input**: Local journal post.
- **Output**: Article body elements.

## Local Journal Content Registry

### `getLocalJournalPostBySlug(slug: string): LocalJournalPost | undefined`

- **Purpose**: Resolve local post data for a hash URL.
- **Input**: Post slug.
- **Output**: Matching local post or undefined.

### `getWritingEntries(): WritingEntry[]`

- **Purpose**: Return a unified list of local and WordPress writing entries.
- **Input**: None.
- **Output**: Source-aware writing entry array.

## App Routing Orchestrator

### `parseJournalPostHash(hash: string): string | undefined`

- **Purpose**: Extract a local journal post slug from the browser hash.
- **Input**: Current hash string.
- **Output**: Local post slug or undefined.

### `renderActiveContent(): ReactNode`

- **Purpose**: Decide whether to render normal section content or a local Journal post page.
- **Input**: Current layout state and hash state.
- **Output**: Section components or local post page.

## Tests

### `expectWritingEntryMetadata(entry: WritingEntry): void`

- **Purpose**: Validate required metadata fields for local and WordPress posts.
- **Input**: Writing entry.
- **Output**: Test assertions.

### `renderPortfolioAtHash(hash: string): RenderResult`

- **Purpose**: Render the app at a specific hash for local post routing tests.
- **Input**: Hash path.
- **Output**: Testing Library render result.
