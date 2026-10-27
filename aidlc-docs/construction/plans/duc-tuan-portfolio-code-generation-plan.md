# Duc Tuan Portfolio - Code Generation Plan

## Status and authority

Part 1 explicitly approved by user response "approve"; all nine Part 2 steps complete. Generated-code review is pending. This plan is the single source of truth for the generation sequence. Application workspace: `/Users/nhamhhung/vrooooomzzz.github.io`; application edits go under its existing src/public/scripts/config structure, never under aidlc-docs. Documentation remains under aidlc-docs.

The requirements, eight stories, execution plan, NFR Requirements, and NFR Design are explicitly approved. Functional Design, Application Design, Units Generation, and Infrastructure Design were deliberately skipped. Existing architecture/source and the approved stories provide unit context. No missing design prerequisite remains.

## Unit context and contracts

- **Unit**: duc-tuan-portfolio; one static React/TypeScript/Vite application.
- **Stories**: DT-US-01 through DT-US-08; all approved requirements DT-01 through DT-11 and NFR-01 through NFR-06 apply.
- **Dependencies**: existing React, Chakra, CSS, template registry, shared typed content, guarded storage/layout utilities, and Vite/GitHub Pages delivery. No new service or dependency is planned.
- **Interfaces**: retain App-owned template/layout/hash navigation and the existing section contract; preserve Engineering and Business as reachable styles. Make missing profile fields optional, add public case-study text and controlled certificate format/preview fields as needed, and adjust every consumer.
- **Database entities, API/repository layers, migrations**: N/A; there is no backend or persistence schema.
- **Private source inputs**: local DOCX/ZIP remain ignored and untracked. Raw presentation is background evidence only. Extract candidate files into temporary storage outside this repository. Never publish private record contents or upload candidates to external tools for inspection.
- **Sites skill scope**: apply presentation-led design guidance in this existing local GitHub Pages project. No separate Sites registration, repository synchronization, or Sites deployment is planned.

## Visual and content direction

Use Business as the default analytics presentation. Retain its existing shell and navigation ownership, but give it a recognizable analytical identity: a dark ink/navy surface, warm paper panels, teal/cyan accents, restrained grid lines, strong headings, and small monospace data labels. Rebalance colors for readable light and dark modes rather than preserving the previous owner's palette. Use an NDT typographic identity and native SVG analytical artwork, with a music-feature motif for Spotify and a business-analysis motif for SIM-LSE. Graphics must distinguish illustration from evidence; do not fabricate measured metrics or live charts.

The narrative moves from a clear student introduction to background, three case studies, experience/community, and skills/certificates. Every section adds concrete source-grounded content. Missing portrait/contact/social/download details are omitted, with no dummy actions. Engineering continues to render the same Duc Tuan content correctly. Both styles must remain usable on small screens and with keyboard input.

## Part 1 checklist

- [x] Load current state, relevant source/reverse-engineering context, approved requirements/stories, NFR artifacts, and code-generation rules.
- [x] Identify unit scope, dependencies, interfaces, code location, and frontend-only applicability.
- [x] Define numbered generation steps with paths, story mapping, verification, and documentation.
- [x] Validate Markdown and plan content before writing; update state/index and append the approval prompt to the audit.
- [x] Obtain explicit approval of this complete generation plan and sequence - user response "approve".

## Part 2 execution checklist

### Step 1: Review inputs and establish the publication allowlist

**Stories**: DT-US-06, DT-US-08.

- [x] Check current Git status, raw source ignore/tracking behavior, and relevant history without exposing private contents. Preserve unrelated user changes and local inputs.
- [x] Inspect the résumé and supplied presentation locally for source-grounded prose. Inspect all six Kaggle PNGs and two Coursera PDFs for holder/course/issuer, readable content, links, and metadata. Use temporary working copies and available local image/document tooling; uncertain/private candidates stay excluded.
- [x] Copy only reviewed normal certificates to `src/assets/certificates/duc-tuan/`, with simple public filenames. Create `aidlc-docs/construction/duc-tuan-portfolio/code/public-asset-review.md` listing approved/excluded file decisions and history-review scope without private excerpts. Preserve .gitignore source exclusions; extend only if necessary for working-file safety.

### Step 2: Replace shared public data and optional-field contracts

**Stories**: DT-US-01 through DT-US-06, DT-US-08.

- [x] Modify `src/types/portfolio.ts` for optional missing email/portrait/résumé, typed case-study content, and a controlled PNG/PDF certificate distinction or lightweight preview reference. Avoid introducing a new API/schema layer.
- [x] Replace `src/data/profile.ts`, `about.ts`, `education.ts`, `experience.ts`, `awards.ts`, `projects.ts`, `skills.ts`, `certificates.ts`, and `sectionContent.ts` with accurate Duc Tuan content. Use the three approved project narratives, expected graduation wording, internship contribution language, and individual course labels matching reviewed evidence. Omit unsupported rankings and score claims unless their limited evidence status is explicit; prefer omission when unnecessary.
- [x] Update `src/data/navigation.ts`, `template.ts`, and `portfolio.ts`: Business default, relevant section order, and no unsupported contact/gallery/journal actions. Clear unrelated `src/data/gallery.ts`, `videos.ts`, `blog.ts`, and `journalPosts.ts`; remove the previous owner's article at `src/content/journal/first-local-journal.md` once imports are removed. Preserve safe unknown-journal behavior.

### Step 3: Implement the analytics visual identity in existing shells and heroes

**Stories**: DT-US-01, DT-US-07.

- [x] Modify `src/templates/business/BusinessShell.tsx`, `BusinessHero.tsx`, `BusinessAbout.tsx`, and `business.css`, plus `src/App.css` and `src/index.css` where shared accessibility/color behavior requires it. Replace hardcoded old-owner initials and portfolio descriptions; build the typographic student identity and analytics composition.
- [x] Create code-native artwork at `src/assets/analytics/identity.svg`, `spotify-features.svg`, `kkbox-patterns.svg`, and `discount-analysis.svg`. Validate SVG XML before writing; clearly label illustrative charts, and include text alternatives when informative. Use no external image generation or chart dependency.
- [x] Adjust `src/components/Hero.tsx` and `Navbar.tsx` for optional portrait/résumé/email, Duc Tuan branding, supported section actions, and accessible focus. Modify `src/templates/options.ts` descriptions and chapter labels in `src/templates/business/index.ts` only where needed for the new analytics presentation; retain existing template IDs and registry contracts.

### Step 4: Render education, experience, and three readable case studies

**Stories**: DT-US-02 through DT-US-05, DT-US-07.

- [x] Modify `src/templates/business/BusinessProjects.tsx` and `src/components/Projects.tsx` to present problem, data, method, contribution, and takeaway, with native in-site anchors/details for deeper reading and no promise of unavailable code or demos.
- [x] Adjust existing `BusinessEducation.tsx`, `BusinessExperience.tsx`, `BusinessAwards.tsx`, and corresponding `src/components/Education.tsx`, `Experience.tsx`, `Awards.tsx`, and `About.tsx` where new content, absent logos, or accessible structure require it. Preserve team attribution and distinguish recommendations from realized business outcomes.
- [x] Keep project illustrations descriptive and source claims traceable without publishing the original résumé, raw presentation, client data, or private records. Use stable test IDs on interactive details/actions.

### Step 5: Implement certificate access and safe absent-content behavior

**Stories**: DT-US-06, DT-US-07, DT-US-08.

- [x] Modify `src/templates/business/BusinessSkills.tsx` and `src/components/Skills.tsx` for reviewed image/PDF assets. Use lazy images and lightweight PDF access; do not eagerly instantiate all full PDFs. Prefer direct links/native expanders; if a dialog is retained, use existing accessible dialog primitives with named controls, Escape, focus containment/return, and a direct-file fallback.
- [x] Update `src/templates/business/BusinessContact.tsx`, `src/components/Contact.tsx`, and both shells/heroes so absent email/résumé/social fields create no broken or placeholder actions. Guard form submission when no recipient exists. Contact may remain disabled until supported details exist.
- [x] Adjust `src/components/shared/SectionShell.tsx` and relevant Business section/next-section controls so navigation does not point to disabled sections. Modify `src/App.tsx` or existing layout/scroll helpers only if evidence from the updated section configuration requires it; retain App ownership and safe old-hash behavior.
- [x] Remove stale author/site links from `src/components/Journal.tsx` and `src/templates/business/BusinessJournal.tsx` where needed, even when their data/sections are empty. No manually entered old article URL may reveal prior-owner content.

### Step 6: Update public metadata, remove superseded assets, and document maintenance

**Stories**: DT-US-01, DT-US-08.

- [x] Update `index.html` title, description, favicon reference, and suitable social metadata without inventing a deployed URL. Create `public/ndt.svg` and remove the unused `public/vite.svg` starter favicon. Remove unused starter `src/assets/react.svg` if unreferenced.
- [x] Review imports and current public asset inventory. Remove unused previous-owner files under `src/assets/certificates/`, `documents/`, `projects/`, personal photographs, and education/organization logos after replacing their consumers. Preserve raw ignored Duc Tuan inputs and unrelated user files; take local temporary backups where useful. Do not rewrite Git history.
- [x] Update `README.md` and `DEPLOYMENT.md` for this portfolio and safe maintenance, including the certificate allowlist and the existing push-triggered GitHub Pages behavior. Keep `.github/workflows/deploy.yml` and `vite.config.ts` unchanged unless a specific new base-path/build failure justifies a minimal repair.
- [x] Refresh affected existing reverse-engineering documents under `aidlc-docs/inception/reverse-engineering/` to reflect current two-template/static content boundaries and the local-only source flow; retain audit history.

### Step 7: Update meaningful tests and complete implementation checks

**Stories**: DT-US-01 through DT-US-08.

- [x] Update `src/App.test.tsx`, `src/test/data/portfolio.test.ts`, `src/test/data/navigation.test.ts`, `src/templates/business/businessTemplate.test.tsx`, `src/templates/journalPostPages.test.tsx`, and `src/themeAccessibility.test.ts` where changed expectations require it. Preserve relevant existing template/layout/storage tests; adapt only to actual behavior changes.
- [x] Add focused coverage within these existing suites for both-template Duc Tuan identity, missing-contact/download behavior, three case-study access paths, reviewed certificate format/fallback behavior, and safe obsolete hashes. Avoid tests that merely duplicate static implementation values or imply visual verification through DOM assertions.
- [x] Run the appropriate focused tests, `npm test`, `npm run build`, and `git diff --check`; fix relevant failures. Inspect build output sizes and public asset inventory. Run a temporary `VITE_BASE_PATH` build if needed to verify project-subpath compatibility, leaving the final output at the intended default.

### Step 8: Verify privacy and available browser behavior

**Stories**: DT-US-06 through DT-US-08.

- [x] Compare copied/public assets against the reviewed allowlist; check source/public/output and changed-file candidates for raw input files, private records, stale owner links, unsupported actions, and accidental secrets. Distinguish historical audit/source references from public application content. Record findings without exposing private contents and report any history risk separately.
- [x] Use available local preview tooling according to the Sites skill's local-preview guidance. Check 320/768/1440 CSS-pixel widths, 200% zoom, keyboard focus/navigation, reduced motion, light/dark contrast, case-study expansion, and certificate access where tools support them. Do not claim checks that cannot be run; document limitations and resolve observed failures.
- [x] Keep all changes local through this implementation review. No GitHub push, history rewrite, or deployment is part of this plan's generation steps. The subsequent Build and Test stage remains a separate required review gate.

### Step 9: Complete the implementation handoff and tracking

**Stories**: DT-US-01 through DT-US-08.

- [x] Create `aidlc-docs/construction/duc-tuan-portfolio/code/code-generation-summary.md` documenting modified/created/removed boundaries, checks actually run, public asset review, and remaining verification limits. Mark each implemented story in this plan when its outcome is complete; do not mark unresolved verification as passed.
- [x] Update this plan's completed checkboxes immediately after each step/substep, update `aidlc-docs/aidlc-state.md` and the active index, and append all interactions/decisions to `aidlc-docs/audit.md` without overwriting history.
- [x] Present the standardized Code Generation completion options: Request Changes or Continue to Next Stage (Build and Test). Wait for explicit generated-code approval before the next stage.

## Story implementation tracking - implemented

- [x] DT-US-01: Duc Tuan identity and analytical interests.
- [x] DT-US-02: Education, experience, and community contribution.
- [x] DT-US-03: Spotify case study.
- [x] DT-US-04: KKBox case study.
- [x] DT-US-05: SIM-LSE case study.
- [x] DT-US-06: Skills and reviewed certificates.
- [x] DT-US-07: Accessible navigation across screen sizes.
- [x] DT-US-08: Safe public portfolio maintenance and verification.

## Execution rules and scope limits

Modify existing files in place; no duplicate modified/new variants. Check source and imports before deleting assets. If a named file is already correctly reusable, record the inspected no-change result instead of making a token edit. Prefer existing dependencies; install only if existing dependencies are unavailable, using the lockfile. There is no greenfield setup, business-logic/API/repository generation, database migration, backend testing, custom infrastructure, or separate deployment artifact to invent. Build and Test will generate all required instruction/summary artifacts after generated-code approval.

Exact color values, typographic scale, and layout spacing can be refined during implementation to meet the approved visual direction and accessibility targets. Native graphic/content revisions stay within the existing component boundaries. Material scope or service/dependency changes require documenting the need before proceeding.

## Extension compliance

Security Baseline and PBT are disabled and skipped per the recorded answers. The original confidentiality instruction, all approved functional/NFR requirements, and meaningful standard tests remain mandatory. No enabled extension findings block planning. The privacy review has not yet been performed and cannot be claimed complete from this plan.

## Question 1: Implementation plan approval

Approve all nine implementation steps and their sequence for the Duc Tuan portfolio?

A) Continue to Next Stage - approve this complete plan and begin Code Generation Part 2 implementation.
B) Request Changes - describe changes after [Answer]:.
C) Other (please describe after [Answer]:).

[Answer]: A

## User-requested quality revision

The initial result was rejected. The reference-informed amendment in [duc-tuan-quality-revision-plan.md](duc-tuan-quality-revision-plan.md) is the current implementation sequence. User explicitly supplied https://bao252512.github.io/ after requesting revised structure, responsiveness, and information organization. This supersedes the prior public sidebar/two-style/multi-page presentation while preserving all privacy/content constraints.
