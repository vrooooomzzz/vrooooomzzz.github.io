# Code Generation Plan - Template Data And Shared Types

## Unit

Unit 1: Template Data And Shared Types

## Plan Role

This document is the single source of truth for Code Generation for Unit 1. Code generation must follow these steps in order, update checkboxes immediately after each completed step, and keep application code in the workspace root.

## Code Location

- **Workspace root**: `/Users/nhamhhung/my-portfolio`
- **Application code**: `src/`, `package.json`, project config files, and other root-level application files
- **Documentation summaries**: `aidlc-docs/construction/template-data-and-shared-types/code/`
- **Do not place application code in**: `aidlc-docs/`

## Unit Context

Unit 1 creates the typed student-editable content layer for the portfolio template. It does not refactor visual section components yet; later units will make UI components consume the new data layer.

### Primary Responsibilities

- Define shared portfolio data types in `src/types/portfolio.ts`.
- Create focused student-editable data files under `src/data/`.
- Create a `src/data/portfolio.ts` aggregator.
- Preserve the current portfolio owner content as realistic example data.
- Keep image, logo, gallery, and certificate assets Vite-compatible through imports.
- Provide a code summary for maintainers under the Unit 1 construction docs.

### Out Of Scope For This Unit

- Refactoring React components to consume the new data.
- Adding Vitest or React Testing Library.
- Updating GitHub Pages deployment configuration.
- Rewriting README or deployment documentation.
- Adding a runtime CMS, backend, database, API, or secret-based service.

## Story Traceability

| Story | Coverage In This Unit |
|---|---|
| US-02: Identify editable content files | Primary. Creates clearly named `src/data/*` files. |
| US-03: Edit profile and social identity safely | Primary. Moves profile identity, email, location, hero highlights, and social links into typed data. |
| US-04: Edit resume-style section content safely | Primary. Moves education, experience, awards, projects, skills, videos, and gallery content into typed arrays. |
| US-05: Replace visual and certificate assets | Primary. Uses import-resolved image, logo, gallery, and certificate asset references. |
| US-06: Keep section navigation consistent | Primary. Creates shared section IDs and navigation config with `enabled` flags. |
| US-01, US-07, US-08, US-09, US-15, US-16 | Supporting. Provides data contracts that later documentation, UI, and test units will consume. |

## Dependencies And Interfaces

- **Depends on**: No prior implementation units.
- **Blocks**: Unit 2 Component Refactor, Unit 4 Student Documentation, Unit 5 Lightweight Tests.
- **Primary interface**: `src/data/portfolio.ts` exporting a complete `portfolio` object.
- **Focused interfaces**: Named exports from files such as `src/data/profile.ts`, `src/data/projects.ts`, and `src/data/navigation.ts`.
- **Shared types**: `src/types/portfolio.ts`.
- **Database entities**: None.
- **API layer**: None.
- **Repository layer**: None.
- **Runtime infrastructure**: None.

## Readiness Checklist

- [x] Unit functional design artifacts reviewed.
- [x] Unit NFR requirements reviewed.
- [x] Unit NFR design reviewed.
- [x] Unit infrastructure design reviewed.
- [x] Unit story map reviewed.
- [x] Brownfield code structure reviewed.
- [x] Target paths confirmed outside `aidlc-docs/` for application code.
- [x] Content validation completed for this plan.

## Code Generation Steps

### Step 1: Project Structure Setup

- [x] Create `src/types/` if it does not already exist.
- [x] Create `src/data/` if it does not already exist.
- [x] Create `aidlc-docs/construction/template-data-and-shared-types/code/` for markdown summaries only.
- [x] Verify no duplicate or suffixed replacement files are created.

### Step 2: Shared Portfolio Types

- [x] Create `src/types/portfolio.ts`.
- [x] Define `SectionId`, `NavigationItem`, `ExternalLink`, `SectionAction`, `Metric`, and all section entry types.
- [x] Define `Profile`, `HeroSection`, `AboutSection`, `EducationEntry`, `ExperienceEntry`, `AwardEntry`, `ProjectEntry`, `GalleryItem`, `VideoEntry`, `SkillCategory`, `CertificateEntry`, and `Portfolio`.
- [x] Keep types framework-agnostic: no React or Chakra UI imports.

### Step 3: Profile And Hero Data

- [x] Create `src/data/profile.ts`.
- [x] Move current owner identity, role, location, email, profile image, summary, and social links into typed data.
- [x] Include hero copy, stats, call-to-action section targets, and stack highlights.
- [x] Import the current profile image through Vite asset import.

### Step 4: Navigation Data

- [x] Create `src/data/navigation.ts`.
- [x] Define all known section IDs in page order.
- [x] Add labels and `enabled` flags for each section.
- [x] Keep section IDs aligned with existing root section IDs: `home`, `about`, `education`, `experience`, `awards`, `projects`, `gallery`, `videos`, `skills`, and `contact`.

### Step 5: Resume-Style Section Data

- [x] Create `src/data/about.ts`.
- [x] Create `src/data/education.ts`.
- [x] Create `src/data/experience.ts`.
- [x] Create `src/data/awards.ts`.
- [x] Preserve current about, education, experience, and awards content as example data.
- [x] Import current institution and organization logos through Vite asset imports.

### Step 6: Portfolio Evidence Data

- [x] Create `src/data/projects.ts`.
- [x] Create `src/data/gallery.ts`.
- [x] Create `src/data/videos.ts`.
- [x] Preserve current project, gallery, and video content as example data.
- [x] Store project and video actions as typed external links with `label`, `href`, and `ariaLabel`.
- [x] Import current gallery images through Vite asset imports.

### Step 7: Skills And Certificates Data

- [x] Create `src/data/skills.ts`.
- [x] Create `src/data/certificates.ts`.
- [x] Preserve current skills and certificate metadata as example data.
- [x] Reference certificate PDFs with Vite-compatible imports.
- [x] Include complete certificate metadata needed by later rendering and validation.

### Step 8: Portfolio Aggregator

- [x] Create `src/data/portfolio.ts`.
- [x] Import all focused data modules.
- [x] Export a complete `portfolio` object that satisfies the `Portfolio` type.
- [x] Re-export focused data where useful for later component refactoring.

### Step 9: Type And Build Verification

- [x] Run an available local verification command that checks TypeScript compilation, preferably `npm run build`.
- [x] If build cannot run because of environment or dependency issues, document the blocker in the code summary. (Not applicable; build completed successfully.)
- [x] Fix Unit 1 type errors introduced by the generated data layer. (No Unit 1 type errors remained.)

### Step 10: Code Summary Documentation

- [x] Create `aidlc-docs/construction/template-data-and-shared-types/code/code-generation-summary.md`.
- [x] Summarize created application files and their purpose.
- [x] Document which stories were implemented by Unit 1.
- [x] Note verification command results or blockers.
- [x] Confirm deferred work for Units 2 through 5.

### Step 11: Final Plan And State Updates

- [x] Confirm all Code Generation Steps are marked complete.
- [x] Update `aidlc-docs/aidlc-state.md` to reflect Unit 1 Code Generation completion.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.
- [x] Present the standardized Code Generation completion checkpoint.

## Expected Created Application Files

- `src/types/portfolio.ts`
- `src/data/profile.ts`
- `src/data/navigation.ts`
- `src/data/about.ts`
- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/awards.ts`
- `src/data/projects.ts`
- `src/data/gallery.ts`
- `src/data/videos.ts`
- `src/data/skills.ts`
- `src/data/certificates.ts`
- `src/data/portfolio.ts`

## Expected Created Documentation Files

- `aidlc-docs/construction/template-data-and-shared-types/code/code-generation-summary.md`

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
