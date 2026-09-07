# Personas - Journal Inline Posts

## Persona 1: Template Student Author

- **Role**: Student or early-career developer cloning the portfolio template.
- **Goal**: Keep technical notes and learning reflections directly in the portfolio without setting up WordPress, Medium, or another external blog.
- **Motivations**:
  - Wants a simple static workflow that fits GitHub Pages.
  - Wants writing to live next to projects, skills, and certificates.
  - Wants examples that are easy to copy and replace.
- **Needs**:
  - Clear Markdown-based authoring pattern.
  - Predictable metadata fields for title, date, category, summary, topics, and image.
  - Confidence that adding posts will not require a backend or runtime service.
- **Success Criteria**:
  - Can add a local journal post by editing repository files.
  - Can preview the post in the Journal list and open a readable in-site page.
  - Can understand which sample content is safe to replace.

## Persona 2: Portfolio Visitor Reader

- **Role**: Recruiter, peer, mentor, student, or collaborator visiting the portfolio.
- **Goal**: Read the owner's technical writing and reflections without unnecessary context switching.
- **Motivations**:
  - Wants to quickly understand the owner's learning process and communication style.
  - Wants to distinguish in-site articles from external WordPress links.
  - Wants stable links that work on GitHub Pages.
- **Needs**:
  - Unified Journal writing list with clear source badges.
  - In-site reading page for local posts.
  - Existing WordPress links to continue working as external articles.
- **Success Criteria**:
  - Can identify whether a card opens in-site or externally.
  - Can open and read a local post through a stable hash-compatible URL.
  - Can still access WordPress posts from the same Journal list.

## Persona 3: Portfolio Owner and Template Maintainer

- **Role**: Portfolio owner maintaining the site as both a personal portfolio and reusable student template.
- **Goal**: Add local Journal capability while preserving the existing portfolio quality, static deployment, and WordPress examples.
- **Motivations**:
  - Wants students to have a low-friction writing path.
  - Wants the current Journal's videos and WordPress posts to remain useful.
  - Wants the implementation to stay type-safe and easy to test.
- **Needs**:
  - Shared content model that can represent local and external posts.
  - GitHub Pages-compatible navigation.
  - Tests that prevent metadata and reading-page regressions.
- **Success Criteria**:
  - Local posts and WordPress posts coexist without duplicate UI patterns.
  - The static build remains deployable with no backend dependencies.
  - Future students can follow the structure without needing deep React knowledge.
