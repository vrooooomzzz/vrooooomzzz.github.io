# Requirements - Journal Section

## Intent

Add a portfolio Journal section that references the owner's WordPress blog, "Learn IT together", and combines selected technical writings with educational videos as evidence of teaching, communication, and learning depth.

## Source

- Blog home: `https://nhamhung.wordpress.com/`
- RSS feed used for post metadata: `https://nhamhung.wordpress.com/feed/`

## Functional Requirements

| ID | Requirement |
|---|---|
| BLOG-FR-01 | The portfolio shall include a `Journal` navigation item and a `journal` section. |
| BLOG-FR-02 | The journal section shall show selected writing entries with title, date, category, summary, topics, and feed image. |
| BLOG-FR-03 | Each writing entry shall link to the original WordPress post in a new tab. |
| BLOG-FR-04 | The section shall include a call-to-action link to visit the full WordPress blog. |
| BLOG-FR-05 | The section shall work in both single-page and multi-page layout modes. |
| BLOG-FR-06 | The implementation shall keep post metadata local so GitHub Pages does not depend on WordPress at runtime. |
| BLOG-FR-07 | The section shall include educational video entries alongside blog writing entries. |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| BLOG-NFR-01 | The section shall use the existing portfolio design system and shared card/action components. |
| BLOG-NFR-02 | The section shall preserve TypeScript type safety through shared portfolio data types. |
| BLOG-NFR-03 | The section shall not add runtime dependencies. |
| BLOG-NFR-04 | The section shall preserve existing build, lint, and test behavior. |

## Assumptions

- The selected posts are manually curated from the public WordPress RSS feed.
- Runtime WordPress API integration is out of scope for this change.
- The section should be placed after `Gallery` and before `Skills` to connect educational media with written learning artifacts.
