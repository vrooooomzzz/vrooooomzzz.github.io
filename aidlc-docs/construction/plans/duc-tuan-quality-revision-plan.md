# Duc Tuan Portfolio - Quality Revision

## User direction

The current prototype is not accepted. Revise website structure, responsive behavior, and information organization using the user's reference project. The later instruction "resume and continue" continues this revision; it does not cancel the quality correction.

## Findings from current source

- BusinessShell keeps a 280px desktop contents rail and exposes both a style selector and a layout-mode switch in the header. These controls compete with the personal portfolio content and deserve comparison against the intended reference.
- The enabled navigation splits the content into seven sections: Overview, About, Selected work, Education, Experience, Beyond data, and Toolkit. The hierarchy needs review against the reference rather than treating every résumé category as an equally prominent chapter.
- The hero has fixed manual heading breaks and an identity illustration with its own caption/labels. Its role, density, and mobile stacking should be judged against the reference.
- Existing browser checks established no page overflow in selected widths and functioning controls. They did not establish the user's satisfaction with composition or information architecture. Earlier completion language is superseded by this revision request.

## Revision checklist

- [x] Record the quality rejection and continuation instructions.
- [x] Inspect current navigation, shell, hero, and existing workflow state.
- [x] Identify the missing reference location and create one targeted question.
- [x] Resolve the reference website/repository/local path - https://bao252512.github.io/.
- [x] Inspect its section hierarchy, navigation, content grouping, breakpoints, mobile behavior, and spacing - public Chrome inspection at 1440/768/390 and read-only inspection of its matching local source.
- [x] Record a concise comparison and amend the existing implementation plan for the concrete requested changes, reusing approved content/privacy requirements.
- [x] Implement the reference-informed revision and verify it visually at desktop/tablet/mobile sizes, including meaningful lower sections and interaction states.
- [x] Run relevant tests/build and present the revised result with accurate verification limits.

## Controls

No publication, history rewrite, or deletion of source inputs is authorized by the continuation. Both optional extensions remain disabled. Privacy and ordinary-certificate review remain mandatory. Build and Test completion review is deferred until the design revision is addressed; do not restart unrelated requirement or story approval loops.

## Reference comparison and authorized revision

The public reference was inspected in Chrome: full-width single-page flow, sticky horizontal header with four story-oriented links, an introduction beside an interactive conceptual visual, a compact personal context section, alternating immersive project rows, a process explorer, a combined timeline/education section, and personal/evidence sections with a deliberate footer. Desktop columns stack below tablet widths, type remains readable, controls wrap, and mobile navigation uses an expandable menu. No runtime portfolio-style selector or multi-page switch competes with content.

Implement those structural principles rather than copying Bao's private or personal content. Keep Duc Tuan's reviewed certificates and source-grounded claims. A warmer teal/paper visual language, music-feature explorer, recommendation workflow, and discount-band discussion make the reference pattern specific to Duc Tuan. His missing portrait/contact remain omitted.

The explicit user request authorizes this revision to the existing implementation scope. Do not repeat earlier requirement/story approval gates. The former two-style/multi-page public UI is superseded by one coherent public experience; legacy utilities may remain for isolated tests, but saved old preferences must not change the new landing experience.

### Revision 1: Public structure and identity

- [x] Replace the public App flow and existing BusinessShell with a single-page full-width composition, four destination links, accessible mobile menu, and footer. Keep old section hash compatibility and safe old-journal handling. Public theme/style/layout controls are removed; existing helper files need not be destructively removed.
- [x] Rework the hero and About section for larger personal introduction, compact context, music-inspired conceptual artwork, and readable native responsive layout.

### Revision 2: Content organization and visual depth

- [x] Rework the existing BusinessProjects into three alternating case-study rows with honest conceptual interactions (audio features, modeling workflow, discount bands), visible problem/method/takeaway summaries, and native details for deeper narrative.
- [x] Rework BusinessSkills into a keyboard-accessible process explorer and reviewed certificate contact sheet with an accessible evidence dialog or direct original-file fallback. Do not eagerly load PDFs.
- [x] Combine education and internship into BusinessExperience; use BusinessAwards for music/community context without inventing personal photos or claims. Put the personal ending and footer after the analytical content.

### Revision 3: Responsiveness and verification

- [x] Replace the overloaded Business stylesheet with a cohesive responsive system: full-width max container, fluid type, intentional spacing, tablet stacking, mobile wrapping, and reduced-motion behavior. Keep styles scoped to the new public site.
- [x] Update meaningful App/Business/accessibility tests for the new public interactions and retained privacy boundaries; run the complete suite and production build.
- [x] Inspect hero and lower sections in Chrome at 1440/1024/768/390/320 CSS pixels, keyboard menu/process/certificate controls, direct section links, loaded assets, and 200% reflow. Fix observed defects rather than merely recording no page overflow.
- [x] Update the implementation summary, state, audit, and checkboxes; present the revised result. No push/deployment/history rewrite.

## Final revision evidence

56 tests passed across 9 files. TypeScript/Vite build passed: JavaScript 234.09 kB / 73.88 kB gzip; CSS 29.92 kB / 6.50 kB gzip. Five viewport widths and lower-section screenshots were checked. Native keyboard/menu/tab/dialog/focus-return checks passed; six image certificate URLs returned HTTP 200 and on-demand PDF original links were verified. A root CSS zoom defect compressed the hero; container-width queries fixed it. Repeated root CSS zoom 2 reported scrollWidth 1440 at width 1440; effective 720px/high-DPI reflow reported scrollWidth 720. This is browser automation/simulation, not a full accessibility certification. No runtime exceptions were observed. Reviewed certificate hashes and private-input/output boundaries are intact. No publication or history rewrite. Awaiting visual acceptance of this revised result.

## Coursera preview correction

The user clarified that both Coursera certificate previews are incorrect. The current gallery uses synthetic text covers and the modal depends on a browser PDF object. Replace these with actual rendered page images from the already reviewed originals; retain the PDFs as original-file links. No new credential content is introduced.

- [x] Render and visually inspect page-one preview PNGs from both reviewed Coursera PDFs; record derivative hashes in the asset allowlist.
- [x] Add optional preview references and use the actual page images in gallery cards and modal; preserve original PDF links and focus behavior.
- [x] Update the focused evidence/asset tests, run the full suite/build, and inspect both previews on desktop/mobile.

Preview correction verification: 57 tests passed across 9 files; production build passed. Both thumbnail and expanded previews decoded at 2400 × 1854 in Chrome at 1440px and 390px; images use contain fitting, no PDF objects were mounted, both original PDF links returned HTTP 200, and no browser exception/page overflow was observed. Two derivative PNGs are allowlisted alongside eight original reviewed certificates.
