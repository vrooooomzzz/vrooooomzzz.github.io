# Code Generation Plan - Business Youthful Color Refresh

> **Status: All eighteen steps implemented and verified; awaiting Code Generation review.** This document is the single source of truth for the Business palette, two-theme boundary, and review refinements.

## Unit Context

- **Unit**: Business theme color system.
- **Workspace root**: `/Users/nhamhhung/nhamhung.github.io`.
- **Project type**: Brownfield React 19, TypeScript, CSS, Vite, and Vitest static application.
- **Primary responsibility**: Apply the supplied palettes to Business, preserve its layout and behavior, maintain the complete Engineering/Business theme set, and implement the approved screenshot-review refinements.
- **Application files in scope**: Business CSS, Business contact/journal/skills presentation components, template contracts/registry/options, selection persistence, selector icon mapping, maintained tests, and the complete retired-theme directory removal.
- **Documentation files in scope**: This plan, the code-generation summary, state, and append-only audit trail.
- **Other existing modifications**: Preserve all pre-existing user and workflow changes, including the current `README.md` modification.

## Requirements Traceability

No User Stories stage was needed. The unit directly implements these approved requirements:

| Plan coverage          | Requirements                                                         |
| ---------------------- | -------------------------------------------------------------------- |
| Palette system         | BYC-01 through BYC-05 and BYC-13                                     |
| Preservation           | BYC-06 through BYC-10                                                |
| Screenshot refinement  | BYC-11, BYC-12, BYC-14 through BYC-23, BYC-25, and BYC-26            |
| Beginner documentation | BYC-24 and BYC-27                                                    |
| Quality                | BYC-NFR-01 through BYC-NFR-05 and all twenty-six acceptance criteria |

## Dependencies and Contracts

- Business React components consume the stylesheet's existing custom-property names and selectors; those contracts remain unchanged.
- The theme accessibility test reads hexadecimal root tokens from the Business dark and light selector blocks; required tokens remain hexadecimal.
- No database entity, API, service, route, state contract, dependency, asset, or deployment artifact changes.
- Engineering remains outside the presentation write scope.
- The visible selector and runtime registry expose Engineering and Business only.

## Planned Palette Mapping

### Source Palette

| Palette role | Exact color | Planned responsibility                                                   |
| ------------ | ----------- | ------------------------------------------------------------------------ |
| Deep blue    | `#3368A0`   | Primary light-mode accent, actions, structure, and palette anchor        |
| Sky blue     | `#66A3BF`   | Dark-mode accent, borders, glows, interactive highlights, and soft depth |
| Pale mint    | `#C8DFDB`   | Supporting surfaces, dark-mode text, and light-mode secondary foundation |
| Warm cream   | `#F2EFE7`   | Light canvas, dark-mode primary text, and calm reading surfaces          |

### Accessible Derived Values

- Use derived deep blues such as `#10283F`, `#153652`, `#1F4A70`, and `#285681` only where the four source colors cannot provide sufficient dark-mode depth, text hierarchy, hover distinction, or contrast.
- Use source-color RGB channels for translucencies so borders, controls, focus rings, overlays, and glows remain visibly related to the supplied palette.
- Keep representative pairs at or above 4.5:1: cream on deep blue is 5.04:1, sky blue on the planned dark canvas is 5.41:1, and pale mint on the planned dark canvas is 10.76:1.

## Part 1 - Planning Checklist

- [x] Load approved requirements, execution plan, reverse-engineering context, and current state.
- [x] Inspect the complete Business stylesheet, accessibility safeguards, workspace root, and working-tree status.
- [x] Confirm the existing CSS-variable contract supports a color-only implementation.
- [x] Calculate representative foreground/background contrast for the planned palette mapping.
- [x] Define exact application paths, requirements traceability, step sequence, rollback, and verification.
- [x] Validate Markdown tables, code spans, checkboxes, paths, and content structure.
- [x] Obtain explicit approval for all six implementation steps.
- [x] Obtain explicit approval for the Step 9 screenshot-review amendment on 2026-08-26.
- [x] Obtain explicit approval for the Step 10 numbering and project-image amendment on 2026-08-26.
- [x] Obtain explicit approval for the amended Step 11 image-position and navigation-padding work on 2026-08-27.
- [x] Obtain explicit approval for the Step 12 contact-alignment and profile-size amendment on 2026-08-27.
- [x] Obtain explicit approval for the Step 13 optical-centering and portrait-frame correction on 2026-08-27.
- [x] Obtain explicit approval for the Step 14 portrait-length and contact-highlight amendment on 2026-08-27.
- [x] Obtain explicit approval for the amended, concise Steps 15 and 16 beginner-documentation and semantic contact-color work on 2026-08-31.
- [x] Obtain explicit approval for the Step 17 primary-action contact-card color amendment on 2026-08-31.
- [x] Obtain explicit approval for the amended Step 18 template-first student onboarding README work on 2026-08-31.

## Part 2 - Implementation Steps

### Step 1 - Add Focused Palette Regression Assertions

- [x] Extend `src/themeAccessibility.test.ts` with focused Business assertions that require all four supplied source colors.
- [x] Assert that the known legacy warm Business token colors are absent from the active stylesheet.
- [x] Preserve the existing contrast, theme-isolation, pointer-event, and reduced-motion safeguards.
- [x] Run the focused test and confirm the new assertions detect the current legacy palette before the CSS update.
- **Traceability**: BYC-01, BYC-02, BYC-07, BYC-NFR-01, BYC-NFR-03; acceptance criteria 1, 2, 4, and 7.

### Step 2 - Replace the Dark Business Color System

- [x] Update only color custom properties in `.portfolio-template-business`.
- [x] Use derived deep-blue canvas and surface values with cream primary text, pale-mint supporting text, sky-blue accents, and palette-derived controls, borders, focus, overlays, and media shells.
- [x] Keep every property name, selector, layout declaration, type rule, spacing rule, responsive rule, and interaction rule unchanged.
- **Traceability**: BYC-01, BYC-02, BYC-04, BYC-05, BYC-06, BYC-NFR-01, BYC-NFR-02.

### Step 3 - Replace the Light Business Color System

- [x] Update only color custom properties in `.light .portfolio-template-business`.
- [x] Use cream and pale mint for canvas and surfaces, deep blue and accessible derived blue for text/actions, and sky-blue translucencies for supporting depth.
- [x] Keep hexadecimal critical tokens compatible with the existing contrast parser.
- **Traceability**: BYC-01, BYC-02, BYC-03, BYC-05, BYC-06, BYC-NFR-01.

### Step 4 - Remove Remaining Direct Legacy Colors

- [x] Replace any active direct warm color declaration within `business.css` that is not controlled by the root variables.
- [x] Preserve semantically neutral media/logo white only where necessary; do not treat it as part of the Business palette.
- [x] Confirm no Business selector, owned overlay, or state leaks palette styles into Engineering.
- [x] Confirm no JSX, TSX, data, route, asset, dependency, layout, or other theme file changed.
- **Traceability**: BYC-01, BYC-02, BYC-06 through BYC-08, BYC-NFR-03 through BYC-NFR-05.

### Step 5 - Verify and Format the Implementation

- [x] Run the focused Business template and theme-accessibility tests.
- [x] Run a stale-color scan for the complete known legacy Business palette.
- [x] Run Prettier on modified application and workflow files and execute `git diff --check`.
- [x] Inspect the scoped diff to confirm that only approved color and test declarations changed in application code.
- [x] Defer the complete Vitest suite, ESLint, production build, and final reproducible instructions to Build and Test after Code Generation approval.
- **Traceability**: All acceptance criteria.

### Step 6 - Record Code Generation Results

- [x] Create `aidlc-docs/construction/business-youthful-color-refresh/code/code-generation-summary.md` with modified-file, palette, contrast, isolation, and focused-test evidence.
- [x] Mark each completed plan checkbox immediately after its corresponding work finishes.
- [x] Update `aidlc-docs/aidlc-state.md` and append the exact interaction and result to `aidlc-docs/audit.md`.
- [x] Verify that no duplicate application file was created.
- **Traceability**: Workflow documentation and all acceptance criteria.

## Rollback

Restore the prior Business root color declarations and the display-accent text reference, then remove only the focused background/text palette-identity assertions added for this change. No schema, content, dependency, build configuration, or deployment rollback is required.

### Step 7 - Apply the Approved Text Palette Review Change

- [x] Extend the focused safeguard to require `#524646`, `#A8A492`, `#FCF2E5`, and `#EC5B38` in Business text roles.
- [x] Confirm the new safeguard fails before the text-token update.
- [x] Map dark-mode primary and secondary text to cream and muted taupe, with accessible derived orange for small accent text and exact orange for display accents.
- [x] Map light-mode primary text to dark taupe, supporting text to an accessible muted-taupe derivative, accent text to an accessible dark-orange derivative, and action text to cream.
- [x] Preserve the approved blue/mint background system and every layout, component, content, interaction, and cross-theme boundary.
- [x] Run focused Business/accessibility tests, both palette scans, Prettier, scoped diff inspection, and `git diff --check`.
- [x] Update the code-generation summary, state, audit, and review gate with the amended evidence.
- **Traceability**: BYC-06 through BYC-09, BYC-NFR-01 through BYC-NFR-05, and acceptance criteria 2 through 8.

### Step 8 - Remove the Retired Theme Completely

- [x] Delete the complete retired-theme source directory and its dedicated test without creating replacements.
- [x] Reduce template IDs, registry entries, option metadata, selector icons, and persistence validation to Engineering and Business only.
- [x] Make the obsolete saved theme value invalid so existing browsers fall back to Engineering.
- [x] Remove retired-theme imports, fixtures, parameterized cases, presentation assertions, accessibility reads, and journal-page coverage from maintained tests.
- [x] Update `README.md` and active workflow documentation for the exact two-theme architecture.
- [x] Delete dedicated historical workflow artifacts and remove the retired name from every remaining non-audit documentation file.
- [x] Preserve `aidlc-docs/audit.md` unchanged except for append-only entries documenting this request and its outcome.
- [x] Run source and non-audit documentation stale-reference scans, focused tests, the complete Vitest suite, ESLint, TypeScript/Vite build, Prettier, and `git diff --check`.
- [x] Update the code-generation summary, state, audit, and review gate with deletion and verification evidence.
- **Traceability**: BYC-06 through BYC-10, BYC-NFR-03 through BYC-NFR-05, and acceptance criteria 7 through 9.

### Step 9 - Refine Contact Readability, Card Labels, and Dark Text

- [x] Add focused Business regression assertions for a bordered email treatment, absent video and certificate sequence labels, and brighter dark supporting text.
- [x] Reduce `.business-contact-email` to a smaller responsive font size; give it a fit-content, max-width-constrained border box with responsive padding and safe wrapping so the complete address remains visible.
- [x] Remove only the decorative `Film NN` label from `BusinessJournal.tsx` and `CNN` label from `BusinessSkills.tsx`; keep other numbering systems, array order, content, links, accessible labels, and stable test identifiers unchanged.
- [x] Replace the dark Business `--text-300` muted taupe with a palette-derived near-cream value while keeping light-mode text tokens unchanged and preserving visual hierarchy through size, weight, and existing accent roles.
- [x] Run focused Business/accessibility tests, the complete Vitest suite, ESLint, TypeScript/Vite build, Prettier, contrast verification, and `git diff --check`.
- [x] Update the code-generation summary, plan checkboxes, state, and append-only audit immediately after the amendment is implemented.
- **Traceability**: BYC-11 through BYC-13, BYC-NFR-01 through BYC-NFR-05, and acceptance criteria 10 through 12.

### Step 10 - Remove All Decorative Numbering and Wire Supplied Project Images

- [x] Add focused regression assertions that reject Business chapter/showcase/case labels, navigation counters, standalone sequence indexes, and prefixed award/outcome codes while preserving meaningful dates, years, metric values, and stable test identifiers.
- [x] Remove decorative numbering from `BusinessHero.tsx`, `BusinessShell.tsx`, `BusinessSectionHeading.tsx`, `BusinessAbout.tsx`, `BusinessEducation.tsx`, `BusinessExperience.tsx`, `BusinessAwards.tsx`, `BusinessProjects.tsx`, `BusinessGallery.tsx`, `BusinessJournal.tsx`, `BusinessSkills.tsx`, and `BusinessDetailList.tsx`.
- [x] Simplify affected Chakra grid definitions and `business.css` grid columns/classes so no empty counter column or orphaned counter style remains; keep content order, responsive behavior, links, headings, and semantic list structure unchanged.
- [x] Update `src/data/projects.ts` to import `coursework_and_certificates.png`, `program_analyzer.png`, and `java_resume_application.png`, and revise each `imageAlt` to match the supplied screenshot or diagram.
- [x] Validate the three supplied PNG assets and their project mapping; do not generate, transform, or overwrite the user-provided image files.
- [x] Run focused Business/data tests, the complete Vitest suite, ESLint, TypeScript/Vite production build, Prettier, decorative-number/source scans, asset-resolution checks, scoped diff inspection, and `git diff --check`.
- [x] Update the requirements status, code-generation summary, plan checkboxes, state, and append-only audit immediately after the amendment is implemented.
- **Traceability**: BYC-14, BYC-15, BYC-06, BYC-NFR-03 through BYC-NFR-05, and acceptance criteria 13 and 14.

### Step 11 - Left-Align Project Images and Pad Left Navigation

- [x] Add focused regression assertions that `.business-case-image` uses `object-position: left center` while retaining `object-fit: cover`, and that every Business navigation link receives consistent horizontal padding.
- [x] Add only the scoped left-center object-position rule for Business project images; keep source assets, aspect ratios, frame dimensions, project data, alternative text, and responsive visibility unchanged.
- [x] Replace the Business navigation link's conditional zero-padding rule with consistent `px={3}` spacing for both left-rail and mobile links so active-state text never touches the border or shifts.
- [x] Record and compare SHA-256 hashes for all three PNG files before and after the CSS change to prove that no image was cropped, transformed, or overwritten.
- [x] Run focused Business/accessibility tests, the complete Vitest suite, ESLint, TypeScript/Vite production build, Prettier, scoped diff inspection, asset-integrity checks, and `git diff --check`.
- [x] Update the requirements status, code-generation summary, plan checkboxes, state, and append-only audit immediately after the amendment is implemented.
- **Traceability**: BYC-16, BYC-17, BYC-06, BYC-NFR-03 through BYC-NFR-05, and acceptance criteria 15 and 16.

### Step 12 - Center Contact Email and Reduce Profile Record

- [x] Add focused regression assertions requiring the bordered contact email to use `align-self: center` and the Business profile record to use responsive centered sizing.
- [x] Replace only the contact email's `align-self: flex-start` declaration with `align-self: center`; retain its width, maximum width, border, padding, font size, wrapping, address, link behavior, and the alignment of all neighboring content.
- [x] Add scoped `.business-subject-record` declarations for `width: 100%`, `max-width: 24rem`, and `justify-self: center`; retain the portrait's aspect ratio, cover crop, source asset, metadata rows, and responsive readability.
- [x] Record and compare the profile JPEG's SHA-256 hash before and after implementation to prove the source portrait remains unchanged.
- [x] Run focused Business/accessibility tests, the complete Vitest suite, ESLint, TypeScript/Vite production build, Prettier, responsive-rule inspection, asset-integrity checks, and `git diff --check`.
- [x] Update the requirements status, code-generation summary, plan checkboxes, state, and append-only audit immediately after the amendment is implemented.
- **Traceability**: BYC-18, BYC-19, BYC-06, BYC-NFR-03 through BYC-NFR-05, and acceptance criteria 17 and 18.

### Step 13 - Correct Contact Optical Centering and Portrait Scale

- [x] Add focused regression assertions requiring centered alignment for the complete Direct Contact card and social row, plus a `20rem` profile-record cap and `4 / 3` portrait frame.
- [x] Add `align-items: center` and `text-align: center` to `.business-contact-card`, and `justify-content: center` to `.business-contact-socials`, while preserving spacing, wrapping, content order, and link behavior.
- [x] Reduce `.business-subject-record` from `24rem` to `20rem` and change the Business portrait's displayed aspect ratio from `4 / 4.4` to `4 / 3`; retain `width: 100%`, centered grid alignment, cover behavior, source asset, and metadata.
- [x] Record and compare the profile JPEG's SHA-256 hash before and after implementation to prove that only its presentation changes.
- [x] Run focused Business/accessibility tests, the complete Vitest suite, ESLint, TypeScript/Vite production build, Prettier, scoped responsive-rule inspection, asset-integrity checks, and `git diff --check`.
- [x] Update the requirements status, code-generation summary, plan checkboxes, state, and append-only audit immediately after the correction is implemented.
- **Traceability**: BYC-20, BYC-21, BYC-06, BYC-NFR-03 through BYC-NFR-05, and acceptance criteria 19 and 20.

### Step 14 - Lengthen Portrait and Highlight Contact Actions

- [x] Add focused regression assertions requiring the `4 / 3.5` portrait frame and highlighted background, border, padding, and hover declarations for both the email and social links.
- [x] Change only the Business portrait's displayed aspect ratio from `4 / 3` to `4 / 3.5`; retain the `20rem` record cap, centered alignment, cover behavior, source asset, alternative text, and metadata.
- [x] Add `var(--control-bg-soft)` backgrounds to the existing email box and each social link, style social links as individually padded bordered controls, and add `var(--control-hover-bg)` hover feedback while retaining wrapping, destinations, accessible names, and focus styles.
- [x] Record and compare the profile JPEG's SHA-256 hash before and after implementation to prove that only its presentation changes.
- [x] Run focused Business/accessibility tests, the complete Vitest suite, ESLint, TypeScript/Vite production build, Prettier, scoped style inspection, asset-integrity checks, and `git diff --check`.
- [x] Update the requirements status, code-generation summary, plan checkboxes, state, and append-only audit immediately after the amendment is implemented.
- **Traceability**: BYC-22, BYC-23, BYC-06, BYC-NFR-01 through BYC-NFR-05, and acceptance criteria 21 and 22.

### Step 15 - Rewrite README for a First-Time Contributor

- [x] Add a regression test requiring the README to document Git identity setup, VS Code folder and terminal steps, `npm ci`, local preview and verification, safe staging, first commit and push, GitHub authentication, Actions monitoring, Pages setup, and beginner troubleshooting.
- [x] Rewrite `README.md` in a concise linear first-use order, using one simple explanation plus the command or click sequence in each section, while preserving the accurate customization file map, exact Engineering/Business style boundary, asset guidance, current package scripts, and link to `DEPLOYMENT.md`.
- [x] Include copyable `git config --global user.name` and `git config --global user.email` commands, verification commands, GitHub no-reply email guidance, and the distinction between global and repository-local identity.
- [x] Explain VS Code's Open Folder and integrated terminal flow, how to recognize the repository root, how npm and `node_modules` work, how to stop the dev server, and why users must not commit secrets, `.env` files, `node_modules`, or generated `dist` output.
- [x] Provide a cautious first-commit sequence using `git status`, selective staging or reviewed `git add .`, `git diff --staged`, `git commit`, `git branch -M main`, and `git push -u origin main`, followed by Actions and Pages verification and recovery guidance for common failures.
- [x] Validate every documented path, command, script, GitHub Actions name, Pages setting, Markdown structure, and cross-reference against the current repository.
- **Traceability**: BYC-24, BYC-NFR-04, BYC-NFR-05, and acceptance criterion 23.

### Step 16 - Normalize Direct Contact Colors Across Modes

- [x] Add focused regression assertions requiring the contact card to use `var(--surface-800)` and `var(--text-100)`, retain shared border/control tokens, remove its local color overrides and hard-coded `color: white`, and meet representative text contrast.
- [x] Apply the existing semantic Business surface and text tokens to `.business-contact-card`, remove its local control-color overrides, and keep email/social borders and interactions on the shared `--line-500`, `--control-bg-soft`, and `--control-hover-bg` tokens.
- [x] Preserve layout, centered content, email/social sizing, wrapping, hover/focus behavior, form styling, responsive behavior, and Engineering isolation.
- [x] Run focused documentation and Business accessibility tests, the complete Vitest suite, ESLint, TypeScript/Vite production build, Prettier, stale-reference scans, contrast verification, scoped diff inspection, and `git diff --check`.
- [x] Refresh the code-generation summary, Build and Test instructions and measurements, requirements status, plan checkboxes, state, and append-only audit with the combined amendment evidence.
- **Traceability**: BYC-25, BYC-02, BYC-09, BYC-NFR-01 through BYC-NFR-05, and acceptance criterion 24.

### Step 17 - Match Light Contact and Restore Dark Contrast

- [x] Update the focused Business accessibility safeguard so light mode requires the same `var(--primary-bg)` and `var(--primary-text)` pair as the blue Send message button while dark mode requires `var(--surface-800)` and `var(--text-100)`.
- [x] Add light-only contact-card overrides for the primary action pair while restoring the base dark card to the existing deep surface and near-white text tokens.
- [x] Use accessible `var(--accent-500)` email/social highlights in dark mode and retain `var(--primary-hover-bg)` highlights in light mode, with existing borders and visible border-based hover feedback.
- [x] Verify representative dark and light card/control contrast at 4.5:1 or better while preserving layout, content, wrapping, focus behavior, responsive behavior, and Engineering isolation.
- [x] Run focused tests, the complete Vitest suite, ESLint, TypeScript/Vite build, Prettier, scoped diff inspection, stale-reference scan, and `git diff --check`.
- [x] Refresh the summary, Build and Test evidence, requirements status, state, plan checkboxes, and append-only audit before returning to the Code Generation review gate.
- **Traceability**: BYC-26, BYC-02, BYC-09, BYC-NFR-01 through BYC-NFR-05, and acceptance criterion 25.

### Step 18 - Rebuild README Around the Student Deployment Journey

- [x] Extend the README regression safeguard to require the requested GitHub account, Use this template, exact `<username>.github.io`, collaborator invitation, GitHub Actions Pages, Visit site, repository About website, local tool verification, Git identity, clone, install, preview, customization, safe commit/push, workflow monitoring, and updated-site verification path.
- [x] Rewrite the numbered README flow in the user's fourteen-step order, grouping only closely related clicks or commands and keeping one simple explanation with the exact action in each section.
- [x] Use **Use this template → Create a new repository** as the primary setup, require the public lowercase `<username>.github.io` name for a GitHub Free root user site, document **Settings → Collaborators → Add people** for trusted instructor support, and describe the student's clone remote as `origin` rather than `upstream`.
- [x] Document initial deployment through **Settings → Pages → Source: GitHub Actions**, the included **Deploy to GitHub Pages** workflow and manual Run workflow fallback, **Visit site**, and adding `https://<username>.github.io` through the repository About gear's Website field.
- [x] Explain that accepted personal-repository collaborators can pull and push code, advise students to invite only trusted supporters, include the removal path, and preserve concise local setup, customization map, asset guidance, validation commands, authentication and secret safety, troubleshooting, and `DEPLOYMENT.md`; use `npm install` for the requested beginner flow while explaining that Actions uses locked `npm ci`.
- [x] Validate every command, path, UI label, workflow name, URL pattern, Markdown structure, and official GitHub reference; run focused and complete tests, ESLint, build, Prettier, stale-reference scan, scoped diff inspection, and `git diff --check`.
- **Traceability**: BYC-27, BYC-24, BYC-NFR-04, BYC-NFR-05, and acceptance criterion 26.

## Completion Gate

Part 2 is complete only when all eighteen steps are checked, verification is green, the README and summary are current, and the generated application-code diff is ready for explicit review before Build and Test.

## Extension Compliance

| Extension              | Status   | Rationale                                                    |
| ---------------------- | -------- | ------------------------------------------------------------ |
| Security Baseline      | Disabled | Opted out; the change adds no security boundary.             |
| Property-Based Testing | Disabled | Opted out because no algorithmic or stateful logic is added. |

## Content Validation

| Check              | Result                                                               |
| ------------------ | -------------------------------------------------------------------- |
| Mermaid diagrams   | Not used.                                                            |
| ASCII diagrams     | Not used.                                                            |
| Markdown structure | Headings, tables, code spans, lists, and checkboxes are well formed. |
| Executability      | All implementation actions have explicit targets and validations.    |
