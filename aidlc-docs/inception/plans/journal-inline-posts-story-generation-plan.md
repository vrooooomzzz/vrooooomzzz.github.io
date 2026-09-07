# Story Generation Plan - Journal Inline Posts

## Purpose

Generate focused user stories and personas for the Journal inline posts enhancement using the approved requirements in `aidlc-docs/inception/requirements/journal-inline-posts-requirements.md`.

## Selected Story Approach

**Hybrid user journey + persona-based approach**

- Use persona-based organization to keep student/template author needs distinct from visitor reading needs.
- Use user journey sequencing to cover authoring, discovery, reading, and external WordPress coexistence.
- Keep stories small and testable, with acceptance criteria mapped to requirements IDs.

## Story Breakdown Options Considered

| Approach | Fit | Decision |
|---|---|---|
| User Journey-Based | Strong for authoring and reading flows. | Use as sequencing method. |
| Feature-Based | Useful for metadata, cards, and reading pages. | Use only as supporting structure. |
| Persona-Based | Strong because template students and visitors have different needs. | Use as primary grouping. |
| Domain-Based | Less useful for a small frontend feature. | Skip. |
| Epic-Based | Too heavy for this scoped enhancement. | Skip. |

## Clarification Status

No additional story-planning questions are required. The approved requirements already resolve the key story-shaping decisions:

- Static local posts, not live visitor authoring.
- Markdown content format.
- Unified writing list with source badges.
- GitHub Pages-compatible hash reading pages.
- Equal priority for students and visitors.
- No backend, database, authentication, or runtime content API.

## Execution Checklist

### Step 1: Load Approved Context

- [x] Read `journal-inline-posts-requirements.md`.
- [x] Read `journal-inline-posts-requirement-questions.md`.
- [x] Read current Journal requirements for WordPress/video behavior.

### Step 2: Generate Personas

- [x] Create `aidlc-docs/inception/user-stories/journal-inline-posts-personas.md`.
- [x] Include a template student persona.
- [x] Include a portfolio visitor persona.
- [x] Include the portfolio owner/template maintainer persona if useful for maintainability.

### Step 3: Generate User Stories

- [x] Create `aidlc-docs/inception/user-stories/journal-inline-posts-stories.md`.
- [x] Organize stories by persona and user journey.
- [x] Include stories for local Markdown authoring, unified Journal display, source badge recognition, in-site reading, and WordPress coexistence.
- [x] Map stories to requirements IDs.

### Step 4: Validate Story Quality

- [x] Ensure each story follows the "As a / I want / so that" format.
- [x] Ensure each story has acceptance criteria.
- [x] Ensure stories satisfy INVEST criteria.
- [x] Ensure stories cover all approved functional requirements.
- [x] Ensure NFRs are represented in relevant acceptance criteria.

### Step 5: Update Workflow Tracking

- [x] Mark completed plan steps as `[x]`.
- [x] Update `aidlc-docs/aidlc-state.md` for User Stories progress.
- [x] Log story generation completion in `aidlc-docs/audit.md`.

## Mandatory Artifacts

- [x] `aidlc-docs/inception/user-stories/journal-inline-posts-personas.md`
- [x] `aidlc-docs/inception/user-stories/journal-inline-posts-stories.md`

## Approval Gate

This plan must be explicitly approved before story generation starts.
