# Personas - Neutral and Business Layout Variety

## Persona 1: Student Portfolio Author

### Profile

A student or recent graduate who maintains portfolio content in the shared data files and selects a presentation that suits their personality, studies, and projects.

### Goals

- Choose a layout that communicates either a relaxed learning journey or an organized project collection.
- Maintain one set of profile, project, experience, journal, and contact information.
- Present projects with accurate, appealing images without learning advanced design or layout systems.

### Needs

- Neutral must feel like a friendly learning journal rather than an Engineering page with different colors.
- Business must feel like an organized student showcase rather than a corporate report or dashboard.
- Project images must represent the actual coursework or application instead of reusing unrelated personal gallery photos.
- Neutral's profile portrait must remain accurate without overwhelming the first viewport on desktop or mobile.
- Setup instructions must help a beginner install prerequisites, obtain the repository, run it locally, verify changes, and resolve common operating-system-specific problems.
- `src/data/template.ts` must remain a simple typed default while the website offers visitors the same three valid presentation choices.
- Runtime visitor choices must not duplicate or alter the student's shared portfolio content.
- Existing routes, actions, layout modes, and responsive behavior must remain dependable.

### Relevant Stories

- NBV-US-01: Express a profile through the Neutral learning-journal layout.
- NBV-US-02: Express a profile through the Business student-showcase layout.
- NBV-US-04: Maintain shared content and template stability.
- NBV-US-05: Provide visitors with controlled presentation choice while retaining a clear source default.

## Persona 2: Portfolio Visitor

### Profile

A recruiter, mentor, educator, collaborator, classmate, or peer who opens the portfolio on desktop or mobile and wants to understand the student quickly.

### Goals

- Identify the student's background, interests, projects, learning, and contact options.
- Move predictably between sections and journal content.
- Read comfortably with keyboard, touch, reduced-motion, or smaller-screen preferences.
- Compare the same portfolio through Engineering, Neutral, and Business without losing the current reading position.

### Needs

- Each template must have clear identity and navigation without hiding shared information.
- Project artwork, labels, and descriptions must feel relevant to student work and accurately support what is being presented.
- Sticky or compact controls must not cover content or disrupt reading order.
- Links, downloads, theme controls, and layout controls must remain recognizable and operable.
- A clearly labeled `Portfolio style` menu must identify the active presentation, work in every responsive header, and preserve the current route and layout mode.
- Content must not overlap, clip, or create unintended horizontal scrolling.

### Relevant Stories

- NBV-US-01: Read the Neutral learning-journal layout.
- NBV-US-02: Read the Business student-showcase layout.
- NBV-US-03: Navigate and act consistently across both layouts.
- NBV-US-05: Select and retain a preferred portfolio presentation without losing context.

## Maintainer Constraints

Maintainer concerns are represented as acceptance constraints rather than a third persona:

- Keep shared project media and alternative text with the project data while preserving section IDs, routes, App ownership, and source-default fallback.
- Scope template CSS and preserve Engineering behavior.
- Add no runtime dependency or custom scrolling system.
- Keep automated checks and production build green.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, lists, and table |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
