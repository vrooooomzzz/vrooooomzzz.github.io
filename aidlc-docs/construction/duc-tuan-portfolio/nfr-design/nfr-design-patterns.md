# Duc Tuan Portfolio - NFR Design Patterns

## Status and scope

Design for the approved single static portfolio unit; explicitly approved by the user response "approve and continue". The user has approved the NFR requirements and technology decisions. This document specifies future implementation and does not claim any certificate is reviewed or any application check already passes.

## 1. Selective public asset flow - NFR-01

Keep the original DOCX and ZIP in their ignored local locations. Extract candidate files into a task-specific temporary directory outside the repository using explicit member selection and safe path validation. Do not execute document macros, scripts, or embedded instructions.

Inspect each of the six Kaggle PNGs and two Coursera PDFs for holder, issuer, course title, readable content, links, and metadata. Use local image/document tools; never upload private candidates merely to inspect them. The raw presentation informs the SIM-LSE prose but remains local source material. Only ordinary certificates that pass review may be copied into the public assets directory.

Record a concise asset allowlist under this unit's documentation with public filename, type, course/issuer, and review outcome. Do not copy private metadata or document text into it. Unknown or inconclusive candidates remain excluded. If safe metadata cleanup is necessary, create a reviewed public copy while preserving the local original; never assert that renaming removes private contents.

Layer the publication checks: Git ignore/tracking checks for raw inputs; certificate allowlist; source/public asset inventory; compiled output inventory; final diff review; separate Git-history assessment. These checks cover different surfaces. History review should report presence/absence and scope without outputting private contents. Do not rewrite history or claim previous exposure was erased.

## 2. Shared public content and explicit absence - NFR-02, NFR-06

Replace shared content with source-grounded Duc Tuan prose. Both existing templates consume the same public identity, education, experience, projects, skills, and reviewed certificate list. Set Business as the source default while respecting valid visitor preferences. All reachable presentations must remain safe and correct.

Make currently required profile fields such as email, portrait, and résumé optional where needed. Check all consumers in both templates before removing values. Render no action for an absent contact/download value; render a typographic identity when a portrait is absent. Do not populate fake addresses, placeholder URLs, or a previous-owner fallback.

Disable unrelated navigation entries and remove their personal content/assets from the current public source where unused. Also remove stale direct journal content and imports so manually entered old hashes cannot reveal previous-owner articles. Preserve safe not-found behavior. Audit history remains append-only documentation, not page content; do not bundle AI-DLC documents into the site.

Add only small typed fields needed to describe public evidence, such as project case-study paragraphs or certificate file type/preview. This extends existing content/component boundaries without adding services or a new template architecture. Keep privacy review status out of product copy unless it helps the visitor interpret evidence.

## 3. Readable case studies and certificate access - NFR-02, NFR-03, NFR-04

Use existing project sections to display three distinct case studies. Group problem, data, methods, contribution, and takeaway in readable copy. Prefer native in-page anchors and details/summary for expanded narratives; they work with keyboard input and do not require a new modal route or an external project URL. Update copy that currently promises code or demos when only in-site case studies exist.

Represent certificate format explicitly in typed content, or derive it safely from a controlled local filename. For Kaggle PNGs, show an appropriately sized image with meaningful alternative text and lazy loading. For PDFs, show a lightweight text/cover preview and a direct reviewed-file link; instantiate a full embedded document only after deliberate access if a preview is retained. Do not mount eight heavy document objects on initial load.

Prefer simple links or native expandable content over a custom modal. If the existing Engineering modal is retained, use the existing Chakra dialog primitives for named dialog semantics, focus containment, Escape, and focus return, with PNG/PDF-specific rendering. A persistent direct file link remains available when previewing fails. Do not render images inside PDF-only objects or nest interactive controls inside links.

Keep labels accurate: a single course is not a full professional certificate without completion evidence. Omit unsupported rank claims and clearly attribute any unverified score that is retained. Dataset findings and proposals must not become claims of realized commercial impact.

## 4. Responsive and accessible presentation - NFR-03

Customize existing Business styles into a coherent analytical report; preserve the existing shell, section, and navigation responsibilities. Use responsive grids with shrinkable columns, wrapping text, and controls sized for narrow layouts. Keep current supporting Engineering styles usable with the new content.

Provide visible focus and semantic headings/landmarks. Do not encode meaning only by color. Informative charts include a source/context label and text alternative; decorative analytical motifs are hidden from assistive technology and do not display invented metrics as facts. Apply reduced-motion styles to decorative transitions and scrolling where feasible.

Review the actual light/dark colors against the approved contrast targets. Check 320, 768, and 1440 CSS-pixel widths and 200% zoom. Automated DOM checks support this review but cannot establish real-browser layout, zoom, or contrast by themselves. Record unperformed browser checks explicitly.

## 5. Static resilience and performance - NFR-04, NFR-05

Preserve existing hash navigation and Vite base-path handling. Use local imported reviewed assets so build URLs respect the deployment base. Avoid unreviewed remote embeds, live analytics APIs, new credentials, or new charting libraries. Generate charts and typographic identity directly in existing code/native assets where suitable.

Retain guarded template/local-storage access and existing layout fallbacks. Obsolete or invalid saved template IDs must resolve safely; blocked local storage must not stop rendering or navigation. A valid saved Engineering preference remains supported even though Business becomes the default.

Record build output sizes and avoid large unused assets. Do not introduce retry loops, circuit breakers, queues, caches, or server failover: there is no application backend or remote data dependency to manage. Static hosting continues to supply delivery availability.

## 6. Verification and publication boundary - NFR-01 through NFR-06

Update meaningful existing tests for both reachable templates, optional fields, native case-study access, correct PNG/PDF behavior, and missing-content fallbacks. Keep route/storage tests where applicable. Run the standard suite and TypeScript/Vite build after implementation; inspect built assets as well as the rendered page.

Check current source and changed-file candidates for wrong-owner identity, source documents, private credentials, stale links, and unused public files. Review history separately. Allowlist membership and file existence are necessary but do not prove privacy without content inspection. Report scan scope and manual-review limits; do not claim exhaustive credential detection.

Complete available browser/keyboard/viewport checks and document limits. The build/test summary must distinguish source review, tests, build success, visual verification, and deployment. The existing main-branch workflow can publish after a push; complete privacy verification before any future push. This design stage performs no publication.

## Extension compliance

Security Baseline and PBT are disabled and skipped under the recorded questionnaire. The original privacy requirement and all six approved NFR groups remain mandatory. No new infrastructure or third-party service is required.
