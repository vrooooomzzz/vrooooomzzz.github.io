# Requirement Questions - Student-Friendly Template Refresh

> **Status: Approved on 2026-07-29.** The user approved the recommended A/A/A/A decisions. This remains one focused amendment to the active Neutral and Business workflow; it does not add a template, route, dependency, or new content-maintenance system.

## Confirmed Changes

- Remove the visible checkmark from the `Portfolio style` menu while retaining the selected row background and semantic checked state.
- Add responsive horizontal spacing around the Business `CASE 01` column so it does not sit against the viewport edge.
- Stop reusing unrelated personal gallery photos as project images.
- Keep Engineering unchanged.

## Recommended Decisions

### Q1. How should the two template identities change?

- **A. Student journal and student showcase (Recommended)** - Keep the `Neutral` and `Business` menu names for compatibility, but present Neutral as a relaxed learning journal and Business as an organized student project showcase.
- **B. Rename both styles** - Rename Neutral to `Journal` and Business to `Showcase` in the selector and navigation.
- **C. Copy-only change** - Keep the current visual themes and change only the formal wording.

**[Answer]: A**

### Q2. What images should replace the unrelated gallery photos?

- **A. Three custom project covers (Recommended)** - Create one local editorial illustration for Coursework and Certificates, Program Analyzer, and Java Resume Application; store each image with its project data and reuse it in Neutral and Business.
- **B. Repository screenshots** - Use screenshots from each GitHub repository where a useful interface or README image exists.
- **C. Logo-only presentation** - Remove project photography and use the existing project logos without larger images.

**[Answer]: A**

### Q3. What should happen to Neutral's profile imagery?

- **A. Keep the accurate portrait (Recommended)** - Keep the profile portrait as the main image, but replace the unrelated school-gallery thumbnail and project photos with learning-focused project artwork.
- **B. Use a casual study image** - Replace the main portrait with a new generated student-at-work scene.
- **C. Reduce imagery** - Keep only the portrait and remove the smaller supporting image.

**[Answer]: A**

### Q4. How playful should the new tone be?

- **A. Warm and light (Recommended)** - Friendly labels, softer supporting colors, and approachable wording while remaining clean enough for university and internship applications.
- **B. Scrapbook-like** - Brighter colors, informal stickers, and stronger decorative treatment.
- **C. Mostly academic** - Softer wording but a formal university-application tone.

**[Answer]: A**

## Proposed Requirements

1. The selector must show no tick/check icon; the active option remains distinguishable through background, `aria-checked`, and keyboard behavior.
2. Business case numbering must have at least 16px inline clearance on mobile and comfortable desktop spacing without widening or breaking the case grid.
3. `ProjectEntry` must own an accurate local image and alternative text; Neutral and Business must render that project image instead of indexing into `gallery`.
4. Three locally bundled project covers must clearly represent coursework and certificates, C++ program analysis, and a Java resume application.
5. Neutral must read as a friendly learning journal through student-oriented labels and copy while retaining its magazine layout.
6. Business must read as an organized student showcase through student-oriented labels and copy while retaining its report layout.
7. Neutral's profile portrait remains accurate; its unrelated school-gallery supporting image is replaced or removed.
8. Theme refinements must remain restrained, readable in light and dark modes, responsive, and isolated from Engineering.
9. Routes, journal posts, layout modes, actions, shared content, runtime selection, persistence, and static deployment must remain unchanged.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, choices, answer tags, and numbered requirements |
| Application/document boundary | Application code remains outside `aidlc-docs/` |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Existing workflow decision; no new data or service boundary is proposed. |
| Property-Based Testing | Disabled | Existing workflow decision; deterministic UI and data tests remain appropriate. |
