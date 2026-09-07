# Services - Journal Inline Posts

## Content Registry Service

- **Type**: Static frontend module.
- **Purpose**: Normalize local Markdown posts and WordPress metadata into one source-aware writing model.
- **Responsibilities**:
  - Maintain local post registry.
  - Maintain WordPress post metadata.
  - Produce a unified writing list.
  - Provide slug lookup for local posts.
- **Runtime Characteristics**:
  - Build-time/static only.
  - No network calls.
  - No backend dependency.

## Journal Navigation Service

- **Type**: Frontend utility functions.
- **Purpose**: Keep local post URLs compatible with GitHub Pages hash navigation.
- **Responsibilities**:
  - Build local post hrefs.
  - Parse local post hashes.
  - Return visitors from a post page to the Journal section.
- **Runtime Characteristics**:
  - Browser-only hash parsing.
  - No external dependencies required.

## Rendering Orchestration

- **Type**: App/component orchestration.
- **Purpose**: Decide whether the portfolio renders normal sections or a local post page.
- **Responsibilities**:
  - Preserve existing single-page and multi-page layout behavior.
  - Render a local Journal post page when the hash identifies a local post.
  - Avoid disrupting WordPress external post behavior.

## Test Orchestration

- **Type**: Vitest and Testing Library test support.
- **Purpose**: Validate content model and routing behavior.
- **Responsibilities**:
  - Assert metadata completeness.
  - Assert local and external source distinction.
  - Assert direct hash rendering for local posts.
  - Assert static build compatibility through existing build command.
