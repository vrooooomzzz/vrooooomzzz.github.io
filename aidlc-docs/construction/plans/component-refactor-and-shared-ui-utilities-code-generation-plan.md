# Code Generation Plan - Component Refactor And Shared UI Utilities

## Unit

Unit 2: Component Refactor And Shared UI Utilities

## Plan Role

This document is the single source of truth for Code Generation for Unit 2. Code generation must follow these steps in order, update checkboxes immediately after each completed step, and keep application code in the workspace root.

## Code Location

- **Workspace root**: `/Users/nhamhhung/my-portfolio`
- **Application code**: `src/`
- **Documentation summaries**: `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/code/`
- **Do not place application code in**: `aidlc-docs/`

## Unit Context

Unit 2 connects the typed Unit 1 portfolio data layer to the visible React UI. It refactors existing components in place, adds small shared utilities and UI helpers, fixes shared UI lint blockers, and preserves the current visual portfolio experience.

### Primary Responsibilities

- Refactor `App`, `Navbar`, and section components to consume `src/data/portfolio.ts` or focused re-exports.
- Make `navigation.enabled` control both navbar links and rendered sections.
- Add shared utilities for scroll/navigation, contact mailto, media URLs, and animation delay classes.
- Add moderate shared UI components only where they improve readability.
- Improve accessible labels for links, controls, and interactive cards.
- Fix existing shared UI helper lint errors.
- Verify with `npm run build` and `npm run lint`.

### Out Of Scope For This Unit

- Adding Vitest, React Testing Library, or `npm run test`.
- Changing GitHub Pages deployment workflow or Vite base path.
- Rewriting README or deployment documentation.
- Changing portfolio content intentionally.
- Adding backend services, CMS integration, databases, APIs, runtime fetching, or secrets.

## Story Traceability

| Story | Coverage In This Unit |
|---|---|
| US-07: Navigate the portfolio on desktop and mobile | Primary. Shared navigation data, scroll utility, active section tracking, and mobile drawer behavior. |
| US-08: View projects and external proof links | Primary. Project actions render from typed data through a shared accessible external action pattern. |
| US-09: Contact the portfolio owner | Primary. Contact form uses configured profile email and shared mailto builder. |
| US-14: Preserve accessibility and responsive usability | Primary. Meaningful labels, keyboard behavior, and existing responsive layouts are preserved. |
| US-15: Maintain simple reusable code structure | Primary. Small utilities/shared components reduce meaningful duplication without over-abstracting sections. |
| US-03, US-04, US-05, US-06, US-16 | Supporting. Unit 2 consumes Unit 1 data and prepares surfaces for later validation tests. |

## Dependencies And Interfaces

- **Depends on**: Unit 1 generated data and shared types.
- **Blocks**: Unit 4 Student Documentation and Unit 5 Lightweight Tests.
- **Primary data interface**: `src/data/portfolio.ts`.
- **Shared type interface**: `src/types/portfolio.ts`.
- **Database entities**: None.
- **API layer**: None.
- **Repository layer**: None.
- **Runtime infrastructure**: None.

## Readiness Checklist

- [x] Unit 2 functional design artifacts reviewed.
- [x] Unit 2 NFR requirements reviewed.
- [x] Unit 2 NFR design reviewed.
- [x] Unit 2 infrastructure design reviewed.
- [x] Unit story map reviewed.
- [x] Brownfield code structure reviewed.
- [x] Target paths confirmed outside `aidlc-docs/` for application code.
- [x] Content validation completed for this plan.

## Code Generation Steps

### Step 1: Project Structure Setup

- [x] Create `src/utils/` if it does not already exist.
- [x] Create `src/components/shared/` if it does not already exist.
- [x] Create `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/code/` for markdown summaries only.
- [x] Verify no duplicate or suffixed replacement files are created.

### Step 2: Shared Utility Generation

- [x] Create `src/utils/scroll.ts`.
- [x] Create `src/utils/contact.ts`.
- [x] Create `src/utils/media.ts`.
- [x] Create `src/utils/animation.ts`.
- [x] Implement enabled navigation helpers, section scrolling, mailto URL generation, YouTube URL helpers, and reveal delay helper.
- [x] Keep utilities UI-free where designed.

### Step 3: Shared UI Component Generation

- [x] Create `src/components/shared/SectionShell.tsx`.
- [x] Create `src/components/shared/ContentCard.tsx`.
- [x] Create `src/components/shared/ExternalAction.tsx`.
- [x] Add `data-testid` attributes to interactive elements introduced by these components.
- [x] Preserve current visual tone and avoid nested decorative card layouts.

### Step 4: Chakra Helper Lint Fixes

- [x] Fix `src/components/ui/color-mode.tsx` lint errors without changing color mode behavior.
- [x] Fix `src/components/ui/toaster.tsx` lint errors without changing toaster behavior.
- [x] Prefer file splitting for non-component exports where React Fast Refresh lint requires it.

### Step 5: App Shell And Navigation Refactor

- [x] Refactor `src/App.tsx` to use Unit 1 navigation data.
- [x] Render only enabled sections from a typed section registry.
- [x] Use shared active-section/scroll behavior where readable.
- [x] Refactor `src/components/Navbar.tsx` to render enabled navigation items from shared data.
- [x] Preserve desktop and mobile navigation behavior.
- [x] Add stable `data-testid` values for navigation controls and links where practical.

### Step 6: Hero And About Refactor

- [x] Refactor `src/components/Hero.tsx` to consume `profile` and `hero` data.
- [x] Render social links from `profile.socialLinks` with accessible labels.
- [x] Render hero CTAs from data and shared scroll behavior.
- [x] Refactor `src/components/About.tsx` to consume `about` data.
- [x] Preserve current hero and about layouts.

### Step 7: Resume-Style Sections Refactor

- [x] Refactor `src/components/Education.tsx` to consume `education` data.
- [x] Refactor `src/components/Experience.tsx` to consume `experience` data.
- [x] Refactor `src/components/Awards.tsx` to consume `awards` data.
- [x] Remove local student-editable arrays from these components.
- [x] Preserve current card and timeline layouts.

### Step 8: Evidence Sections Refactor

- [x] Refactor `src/components/Projects.tsx` to consume `projects` data and `project.actions`.
- [x] Refactor `src/components/Gallery.tsx` to consume `gallery` data.
- [x] Refactor `src/components/Videos.tsx` to consume `videos` data and media URL helpers.
- [x] Use shared `ExternalAction` for project and video actions where useful.
- [x] Preserve gallery modal behavior and video embeds.

### Step 9: Skills And Contact Refactor

- [x] Refactor `src/components/Skills.tsx` to consume `skills` and `certificates` data.
- [x] Remove component-level certificate glob/metadata construction.
- [x] Preserve PDF preview and certificate modal behavior.
- [x] Refactor `src/components/Contact.tsx` to consume `profile.email` and `profile.socialLinks`.
- [x] Use `buildMailtoUrl` for contact form submission.
- [x] Preserve contact form behavior.

### Step 10: Verification

- [x] Run `npm run build`.
- [x] Run `npm run lint`.
- [x] Fix Unit 2 type, build, and lint errors.
- [x] Confirm no duplicate modified/new component files were created.

### Step 11: Code Summary Documentation

- [x] Create `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/code/code-generation-summary.md`.
- [x] Summarize modified and created application files.
- [x] Document story coverage.
- [x] Note build and lint results.
- [x] Confirm deferred work for Units 3, 4, and 5.

### Step 12: Final Plan And State Updates

- [x] Confirm all Code Generation Steps are marked complete.
- [x] Update `aidlc-docs/aidlc-state.md` to reflect Unit 2 Code Generation completion.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.
- [x] Present the standardized Code Generation completion checkpoint.

## Expected Modified Application Files

- `src/App.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Education.tsx`
- `src/components/Experience.tsx`
- `src/components/Awards.tsx`
- `src/components/Projects.tsx`
- `src/components/Gallery.tsx`
- `src/components/Videos.tsx`
- `src/components/Skills.tsx`
- `src/components/Contact.tsx`
- `src/components/ui/color-mode.tsx`
- `src/components/ui/toaster.tsx`

## Expected Created Application Files

- `src/utils/scroll.ts`
- `src/utils/contact.ts`
- `src/utils/media.ts`
- `src/utils/animation.ts`
- `src/components/shared/SectionShell.tsx`
- `src/components/shared/ContentCard.tsx`
- `src/components/shared/ExternalAction.tsx`
- Additional small Chakra helper split files only if needed for lint compliance.

## Expected Created Documentation Files

- `aidlc-docs/construction/component-refactor-and-shared-ui-utilities/code/code-generation-summary.md`

## Validation Notes

- This plan contains no Mermaid diagrams.
- This plan contains no ASCII diagrams.
- Markdown structure uses simple headings, tables, and checklists.
- Application code targets are outside `aidlc-docs/`.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
