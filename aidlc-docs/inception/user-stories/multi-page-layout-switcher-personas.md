# Personas - Multi-Page Layout Switcher

## Feature

Multi-Page Layout Switcher

## Persona Summary

| Persona             | Role                                                               | Primary Goal                                                                  |
| ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Visitor             | Recruiter, peer, instructor, or collaborator viewing the portfolio | Browse the portfolio in the layout that makes information easiest to review.  |
| Student Customizer  | Student adapting the template for their own portfolio              | Understand and keep a polished layout switcher while editing content safely.  |
| Template Maintainer | Instructor or template owner maintaining the baseline              | Keep the feature reliable, testable, accessible, and GitHub Pages compatible. |

## Persona 1: Visitor

### Profile

A visitor opens the portfolio to quickly understand the owner's identity, background, projects, and contact path. They may be reviewing the site on desktop or mobile and may prefer either scrolling through the whole story or jumping page-by-page.

### Goals

- Switch between single-page and multi-page browsing without confusion.
- Navigate to specific sections quickly.
- Use browser back and forward behavior naturally in multi-page mode.
- Keep the browsing experience responsive and visually polished.

### Pain Points

- Long single-page portfolios can be hard to scan.
- Multi-page sites can break on static hosting if routes are not compatible.
- Hidden or unclear navigation controls make exploration harder.

### Success Signals

- The visitor can find the layout switcher quickly.
- Navigation behavior matches the selected mode.
- Page URLs are shareable enough for section-level browsing.
- The site remains visually consistent in both modes.

## Persona 2: Student Customizer

### Profile

A student uses the portfolio template as a baseline for a class or personal portfolio. They edit `src/data/` files, replace assets, and use the README instructions to verify before publishing.

### Goals

- Keep the layout switcher while customizing personal content.
- Understand that sections can appear as a scroll page or as individual pages.
- Avoid breaking navigation or GitHub Pages deployment.
- Run tests to confirm the feature still works.

### Pain Points

- Routing concepts can be confusing for beginners.
- Path-based routes can cause GitHub Pages 404 issues.
- Complex implementations make the template harder to extend.

### Success Signals

- The feature works without new backend or deployment setup.
- Hash URLs make the multi-page mode safe for GitHub Pages.
- Tests catch common navigation and rendering mistakes.
- Documentation can explain the feature in student-friendly language.

## Persona 3: Template Maintainer

### Profile

The maintainer owns the class baseline and wants a feature that is useful, reliable, and simple enough for students to reason about.

### Goals

- Preserve the original single-page behavior.
- Add multi-page behavior without a large routing dependency.
- Keep tests fast and local.
- Make the feature accessible and maintainable.

### Pain Points

- Feature creep can turn a static template into a complex application.
- Multiple rendering modes can drift unless section IDs and navigation stay centralized.
- UI controls without tests can regress during student customization.

### Success Signals

- Layout mode logic is isolated and easy to inspect.
- Section mapping remains based on existing navigation and section IDs.
- The test suite verifies both layout modes.
- No secrets, backend, or path-based deployment fallback is introduced.

## Persona To Story Map

| Persona             | Primary Stories                |
| ------------------- | ------------------------------ |
| Visitor             | MLS-01, MLS-02, MLS-03, MLS-05 |
| Student Customizer  | MLS-01, MLS-04, MLS-06         |
| Template Maintainer | MLS-03, MLS-04, MLS-05, MLS-06 |

## Extension Rule Compliance

| Extension              | Status   | Rationale                                                                                            |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | User approved disabling it during Requirements Analysis for this static UI-only feature.             |
| Property-Based Testing | Disabled | User approved disabling it during Requirements Analysis; focused example-based tests are sufficient. |
