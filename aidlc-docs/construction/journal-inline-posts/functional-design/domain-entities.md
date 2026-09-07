# Domain Entities - Journal Inline Posts

## WritingEntry

Represents one card in the Journal writing list.

### Shared Fields

- `title`: Display title.
- `publishedDate`: Human-readable publication date.
- `category`: Primary category label.
- `summary`: Short preview text.
- `topics`: List of topic badges.
- `image`: Optional or required card image depending on source.
- `imageAlt`: Accessible image description.
- `source`: Discriminant indicating `local` or `wordpress`.

## LocalJournalPost

Represents a post hosted directly in the portfolio.

### Fields

- `source`: `local`.
- `slug`: Stable identifier used in hash URL.
- `title`: Display title.
- `publishedDate`: Human-readable date.
- `category`: Primary category.
- `summary`: Card preview text.
- `topics`: Topic badges.
- `image`: Optional card/header image.
- `imageAlt`: Accessible image description when image is present.
- `content`: Markdown-derived or statically bundled article content.

### Relationships

- Extends the shared writing entry shape.
- Resolved by `slug` for in-site reading pages.
- Rendered in Journal cards and `JournalPostPage`.

## WordPressWritingPost

Represents an existing external WordPress post.

### Fields

- `source`: `wordpress`.
- `href`: Original WordPress URL.
- `title`: Display title.
- `publishedDate`: Human-readable date.
- `category`: Primary category.
- `summary`: Card preview text.
- `topics`: Topic badges.
- `image`: WordPress featured image URL.
- `imageAlt`: Accessible image description.

### Relationships

- Extends the shared writing entry shape.
- Rendered in Journal cards.
- Opens externally and does not use local post routing.

## JournalPostRoute

Represents a GitHub Pages-compatible local post route.

### Fields

- `hashPrefix`: Stable hash prefix for Journal posts.
- `slug`: Local post identifier.

### Example Shape

- `#/journal/{slug}` or equivalent hash format selected during code generation.

## SourceBadge

Represents a visitor-facing source indicator.

### Fields

- `label`: Human-readable source text.
- `tone`: Visual treatment matching the design system.

### Source Labels

- Local posts: `IN_SITE` or equivalent.
- WordPress posts: `WORDPRESS` or equivalent.
