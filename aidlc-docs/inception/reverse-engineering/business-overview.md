# Business Overview

## Business Context Diagram

```mermaid
flowchart TD
    Student["Student or Portfolio Owner"]
    Visitor["Recruiter, Mentor, Peer, or Collaborator"]
    Portfolio["Student Portfolio Website"]
    Content["Typed Portfolio Data and Journal Content"]
    Templates["Engineering, Neutral, and Business Templates"]
    External["GitHub, LinkedIn, WordPress, YouTube, and Email"]
    Pages["GitHub Pages"]

    Student --> Content
    Content --> Portfolio
    Templates --> Portfolio
    Student --> Pages
    Pages --> Portfolio
    Visitor --> Portfolio
    Portfolio --> External
```

### Text Alternative

Students maintain shared typed content, choose the initial presentation, and publish the static site to GitHub Pages. Visitors can choose and persist their preferred Engineering, Neutral, or Business presentation, open local journal posts, inspect portfolio evidence, and follow external links.

## Business Description

- **Business Description**: The application is a reusable student portfolio that separates personal content from presentation. The same profile, education, experience, projects, media, writing, skills, and contact data can be rendered through Engineering, Neutral, or Business.
- **Primary Template Goal**: Give students with different disciplines a credible starting point they can customize without duplicating content or needing a backend.
- **Business Transactions**:
  - A student edits typed files in `src/data/`, Markdown journal content, and local media assets.
  - A student chooses the first-visit presentation in `src/data/template.ts`.
  - A visitor switches among Engineering, Neutral, and Business from any responsive header and the browser remembers the choice.
  - A visitor browses all enabled sections in single-page mode or one section at a time in multi-page mode.
  - A visitor navigates through desktop or mobile controls and can switch color and layout modes.
  - A visitor opens an in-site journal post through a GitHub Pages-safe hash route.
  - A visitor follows external posts, social profiles, repositories, videos, and email actions.
  - A visitor downloads the portfolio owner's resume.
  - GitHub Actions builds and deploys the static application to GitHub Pages.

## Business Dictionary

- **Portfolio Owner**: The student or professional whose work and identity are presented.
- **Portfolio Visitor**: A recruiter, reviewer, mentor, peer, collaborator, or prospective client.
- **Portfolio Template**: A registered presentation strategy that maps every shared section ID to a React component.
- **Engineering Template**: The structured technical presentation using the baseline section components.
- **Neutral Template**: The balanced editorial presentation for multidisciplinary work and reflective writing.
- **Business Template**: The professional report presentation for outcomes, evidence, and decision-ready project summaries.
- **Portfolio Style Preference**: A valid visitor choice stored in the browser; it overrides the source default on later visits in that browser.
- **Layout Mode**: Either a continuous single-page experience or hash-routed multi-page section view.
- **Writing Entry**: A local in-site journal post or an external WordPress post shown in the Journal section.
- **Section**: A typed portfolio area such as Home, About, Projects, Gallery, Journal, or Contact.

## Component-Level Business Descriptions

### Application Shell
- **Purpose**: Resolve template, layout, navigation, and journal routes into the visible experience.
- **Responsibilities**: Own runtime template state and render the active shell and sections while preserving GitHub Pages compatibility.

### Template Registry
- **Purpose**: Let one portfolio dataset support multiple student-facing outlooks.
- **Responsibilities**: Register exactly three templates, resolve active IDs with an Engineering fallback, and guarantee a shell and component for every section.

### Content and Writing Data
- **Purpose**: Keep student-editable information separate from JSX presentation.
- **Responsibilities**: Export typed profile, career, project, media, journal, skill, certificate, and navigation records.

### Navigation and Layout
- **Purpose**: Let visitors move through the portfolio efficiently on desktop and mobile.
- **Responsibilities**: Handle active state, single/multi-page modes, hash links, portfolio-style selection, color-mode switching, and mobile navigation.

### Deployment Workflow
- **Purpose**: Publish student portfolios without application servers.
- **Responsibilities**: Derive the GitHub Pages base path, build `dist/`, and deploy the static artifact.
