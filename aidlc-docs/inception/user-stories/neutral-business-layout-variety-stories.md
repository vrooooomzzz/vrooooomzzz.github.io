# User Stories - Neutral and Business Layout Variety

> **Status: Neutral portrait and cross-platform setup story amendment implemented and verified on 2026-08-02.** The student-friendly refresh was implemented and verified on 2026-08-01. The original layouts and runtime selector were implemented and verified on 2026-07-23.

## NBV-US-01: Neutral Learning-Journal Expression

**As a** student portfolio author,

**I want** Neutral to present my shared content as a relaxed learning journal,

**so that** I can share my projects, reflections, and personality without sounding overly formal or maintaining separate content.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: NBV-01, NBV-03, NBV-04, NBV-07, NBV-08, NBV-16, NBV-17, NBV-19, NBV-20, NBV-21, NBV-NFR-09, NBV-NFR-10, NBV-NFR-11

### Acceptance Criteria

- [x] Neutral uses a full-width magazine masthead and no persistent desktop side rail.
- [x] The first viewport retains the accurate profile portrait, uses project-relevant supporting media, and introduces the student with approachable wording and actions.
- [x] The portrait is centered in a stable portrait frame, remains approximately 420px wide or less on desktop, scales down on smaller screens, and neither stretches nor dominates the first viewport.
- [x] About uses a stable editorial spread with readable columns rather than the Engineering content composition.
- [x] Projects use varied, repeatable journal modules rather than a uniform card grid.
- [x] Each project module uses its own accurate local cover and meaningful alternative text rather than an indexed personal gallery photo.
- [x] Gallery content reads as a compact visual archive in normal vertical flow.
- [x] Small screens receive a compact header and coherent single-column reading order.
- [x] Labels and supporting copy describe learning, projects, highlights, and personal progress in a warm tone suitable for university and internship use.
- [x] Light and dark modes retain readable contrast, visible focus, responsive image framing, and restrained supporting color.
- [x] All presentation content and project media come from shared data without changing Engineering.

## NBV-US-02: Business Student-Showcase Expression

**As a** student portfolio author,

**I want** Business to organize my work as a clear student project showcase,

**so that** visitors can scan what I made, what I used, and what I learned without the portfolio sounding executive or corporate.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: NBV-01, NBV-05, NBV-06, NBV-07, NBV-08, NBV-15, NBV-16, NBV-18, NBV-19, NBV-20, NBV-NFR-09, NBV-NFR-10

### Acceptance Criteria

- [x] Business uses a structured header and sticky desktop contents rail instead of the former executive-dashboard shell.
- [x] Header, rail, and chapter wording identify an organized student showcase rather than a professional record or consulting report.
- [x] Sections expose clear numbering and chapter context without duplicating navigation semantics.
- [x] About presents the student's story, skills being practiced, experience, and activities in approachable language.
- [x] Projects use their own accurate local covers and explain what was made, which tools were used, what was learned, and where visitors can explore further.
- [x] Every project `CASE` label has at least 16px inline viewport clearance on small screens and balanced spacing on desktop.
- [x] Tables, project rows, and dividers are used only where they improve scanning.
- [x] Small screens replace the contents rail with a compact header or menu while preserving content order.
- [x] Executive brief, consulting report, professional record, reviewed evidence, and recommended next review language no longer defines the presentation.
- [x] Light and dark modes remain restrained, readable, responsive, and isolated from Engineering.

## NBV-US-03: Predictable Visitor Navigation

**As a** portfolio visitor,  
**I want** both redesigned templates to retain familiar navigation and actions,  
**so that** I can explore the student's work comfortably on my device and with my preferred input method.

**Personas**: Portfolio Visitor  
**Requirements**: NBV-09, NBV-11, NBV-12, NBV-20, NBV-NFR-01, NBV-NFR-02, NBV-NFR-03, NBV-NFR-04, NBV-NFR-09, NBV-NFR-10

### Acceptance Criteria

- [x] Single-page and multi-page modes expose every shared section in the established order.
- [x] Direct section hashes and local journal routes remain loadable and navigable.
- [x] Portfolio style, color theme, layout, resume, project, certificate, social, journal, and contact actions remain available.
- [x] Keyboard navigation has visible focus and semantic labels; images retain meaningful alternatives.
- [x] Existing reduced-motion behavior is respected and no custom scrolling interaction is required.
- [x] Sticky navigation never obscures content and returns to normal flow where space is limited.
- [x] Supported viewport sizes show no overlapping controls, clipped text, or unintended horizontal overflow.
- [x] New project covers remain consistently framed and do not introduce layout shifts or overflow at supported viewport sizes.

## NBV-US-04: Shared Content and Regression Stability

**As a** student portfolio author,  
**I want** the added layout variety to preserve the template's shared maintenance model,  
**so that** choosing a presentation does not make the portfolio harder to update or less reliable.

**Personas**: Student Portfolio Author  
**Requirements**: NBV-01, NBV-02, NBV-07, NBV-08, NBV-10, NBV-13, NBV-16, NBV-19, NBV-20, NBV-22, NBV-23, NBV-NFR-05, NBV-NFR-06, NBV-NFR-07, NBV-NFR-08, NBV-NFR-09, NBV-NFR-10, NBV-NFR-12

### Acceptance Criteria

- [x] `engineering`, `neutral`, and `business` remain the only supported typed template IDs.
- [x] `src/data/template.ts` remains the typed initial default; a valid saved visitor choice overrides it and invalid values fall back to Engineering.
- [x] Each project stores one locally bundled image and meaningful alternative text with its shared project record.
- [x] Neutral and Business reuse that project-owned media instead of indexing unrelated personal gallery images.
- [x] Engineering remains visually and behaviorally unchanged apart from the already approved shared selector control.
- [x] Neutral and Business style refinements remain scoped and do not leak into one another or Engineering.
- [x] No new runtime dependency, custom scrolling system, backend, or deployment change is introduced.
- [x] Local project covers are responsive, meaningfully described, and sized to avoid unnecessary page-weight growth.
- [x] The root README separates prerequisite installation for Windows 10/11, current macOS, Ubuntu/Debian, Fedora, and Arch-based Linux, with concise WSL and ChromeOS Linux notes where useful.
- [x] The README leads beginners through official Git and Node.js 20-or-newer installers, identifies optional package-manager alternatives, verifies Git, Node.js, and npm versions, and avoids unsafe global npm or permission workarounds.
- [x] Students can follow either a Git clone path or a ZIP download path, with repository placeholders and working-directory changes explained before dependency installation.
- [x] The setup journey explains how to install dependencies; start, stop, and restart development; identify the local URL; edit content; run tests, lint, build, and preview; update the repository safely; and resolve common setup errors.
- [x] Registry, route, layout-mode, control, accessibility, responsive, and Engineering regression checks pass.
- [x] Tests, ESLint, TypeScript checks, and the production build pass.

## NBV-US-05: Select A Portfolio Presentation In Place

**As a** portfolio visitor,
**I want** to select Engineering, Neutral, or Business directly from the website,
**so that** I can compare presentation styles without losing my current place or preferences.

**Personas**: Portfolio Visitor, Student Portfolio Author
**Requirements**: NBV-01, NBV-10, NBV-11, NBV-12, NBV-13, NBV-14, NBV-20, NBV-NFR-02, NBV-NFR-03, NBV-NFR-05, NBV-NFR-06, NBV-NFR-07, NBV-NFR-08, NBV-NFR-10

### Acceptance Criteria

- [x] Every template's desktop and mobile header controls include one compact menu button labeled `Portfolio style`.
- [x] The menu exposes exactly Engineering, Neutral, and Business without a visible tick or check icon.
- [x] The active choice remains clear through selected-row styling, `aria-checked`, keyboard behavior, and visible focus.
- [x] Selecting a different choice immediately replaces the complete presentation without a full-page reload.
- [x] Switching preserves the current section or local journal route and the current single-page or multi-page layout mode.
- [x] A valid choice persists in browser local storage and is restored on reload; without one, `src/data/template.ts` supplies the default.
- [x] Invalid stored or configured values resolve to Engineering without breaking rendering.
- [x] The menu is keyboard operable, has visible focus, and does not overlap or clip responsive header controls.
- [x] Runtime switching adds no backend, deployment change, duplicated content, or selector-specific runtime dependency.

## INVEST Review

| Story | Independent | Negotiable | Valuable | Estimable | Small | Testable |
|---|---|---|---|---|---|---|
| NBV-US-01 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-02 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-03 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-04 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-05 | Yes | Yes | Yes | Yes | Yes | Yes |

Each story owns one observable outcome, stays within the approved component boundary, and has concrete acceptance criteria that can be verified independently.

## Requirements Traceability

| Requirement group | Covered by |
|---|---|
| NBV-01 through NBV-04 | NBV-US-01, NBV-US-04 |
| NBV-05 through NBV-08 | NBV-US-02, NBV-US-04 |
| NBV-09 | NBV-US-03, NBV-US-04 |
| NBV-10 through NBV-13 | NBV-US-03, NBV-US-04, NBV-US-05 |
| NBV-14 | NBV-US-05 |
| NBV-15 through NBV-19 | NBV-US-01, NBV-US-02, NBV-US-04 |
| NBV-20 | NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04, NBV-US-05 |
| NBV-21 | NBV-US-01 |
| NBV-22 through NBV-23 | NBV-US-04 |
| NBV-NFR-01 through NBV-NFR-04 | NBV-US-03, NBV-US-05 |
| NBV-NFR-05 through NBV-NFR-08 | NBV-US-04, NBV-US-05 |
| NBV-NFR-09 | NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04 |
| NBV-NFR-10 | NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04, NBV-US-05 |
| NBV-NFR-11 | NBV-US-01 |
| NBV-NFR-12 | NBV-US-04 |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, checklists, and tables |
| Requirement coverage | All approved functional and non-functional requirements mapped |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
