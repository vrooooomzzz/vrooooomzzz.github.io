# Duc Tuan Portfolio - Reference-informed Revision

## Current result

The initial design was rejected and is superseded by this revision. The user specified [Bao's portfolio](https://bao252512.github.io/) as the reference for structure, responsiveness, and information organization. It was inspected publicly in Chrome at desktop/tablet/mobile sizes and through read-only access to its matching local application source.

The revised public site uses a full-width narrative with four content-focused header links, compact mobile navigation, a larger personal introduction, music-inspired conceptual artwork, alternating project investigations, a process explorer, a certificate contact sheet, a combined internship/education journey, and a music/community ending with a deliberate footer. The sidebar and public style/layout selectors are removed. Duc Tuan's prose and evidence remain independent of Bao's personal content.

## Implemented behavior

- Three source-grounded studies: Spotify audio-feature recommendation, KKBox repeat-listening modeling, and the SIM-LSE discount analysis with team attribution. Native details expose deeper narratives. Audio concepts, modeling stages, and dataset-scoped discount bands have interactive explanations rather than invented live predictions.
- Ask/Explore/Model/Explain tabs support arrow keys and Home/End with roving focus and a named panel.
- Eight reviewed certificates form an image/document contact sheet. A native named dialog supports keyboard focus, Escape, focus return, scroll-lock cleanup, and original-file access. The two Coursera PDFs have locally rendered page images for both thumbnails and dialog previews; original PDFs remain available through direct links.
- HUS mathematics education sits alongside the FOXAi internship journey. The personal ending covers fingerstyle guitar and HSGS English Club contribution, without invented photographs or contact data.
- One coherent public experience ignores stale style/layout preferences. Existing #/section URLs normalize to anchors; unavailable old journal content remains inaccessible.
- Native HTML/CSS/SVG public rendering removes the Chakra provider from the production path. Compatibility helpers remain in source; dependency inputs and lockfile are unchanged.

## Verification

The final verification is recorded in the active revision plan and audit. Standard tests, TypeScript/Vite production build, certificate hashes, runtime-source/output scans, real Chrome keyboard/dialog interactions, and representative screenshots were checked. All five viewport widths (320/390/768/1024/1440) had no page overflow or broken loaded images. Hero, project, process, certificates, journey, and personal sections were visually inspected at desktop and mobile sizes.

The enlarged-layout check found an actual compressed hero illustration under root CSS zoom. Container-width queries corrected the stacking behavior; the repeated 200% CSS zoom and effective half-width reflow checks showed no page overflow. This is CSS zoom/viewport simulation, not a full screen-reader or browser accessibility certification. Safari and Firefox were not tested.

Browser checks confirmed mobile menu Escape/focus return, process keyboard selection, native case-study expansion, certificate image loading and named focus-contained dialog, Escape return to the certificate trigger, Coursera image preview and original PDF access, motion pause, and compatible old section deep links. No runtime exceptions were observed. Automated contrast checks cover actual primary/supporting text and background palette pairs.

## Performance and publication boundary

The revised production JavaScript is approximately 234 kB / 74 kB gzipped, down from the initial implementation's approximately 952 kB / 287 kB gzipped. Production CSS is approximately 30 kB / 7 kB gzipped. Final exact build output is recorded in the audit. No large-JavaScript-chunk warning remains. Full certificate originals are retained for readability; images load lazily and PDF documents are not eagerly embedded. No controlled network-load timing claim is made.

Private raw source documents remain excluded. The [public asset review](public-asset-review.md) records the eight approved certificates and hashes. A repeated source/output check found no raw DOCX/ZIP/presentation, previous-owner public identity, or high-confidence key pattern in the scanned runtime content. Scans supplement local document review and do not prove exhaustive secret detection.

Existing Git history still contains the previous owner's résumé and university document. Current-tree removal does not erase historical objects; no history rewrite, commit, push, or deployment occurred. This historical exposure remains a separate publication consideration. New Duc Tuan raw inputs remain ignored locally. Nothing has been published.

## Workflow and extension status

This revision completes the authorized Code Generation quality amendment and awaits visual review. The required Build and Test documentation stage remains separate. Security Baseline and PBT are disabled and skipped; original confidentiality, source accuracy, accessibility, and ordinary test requirements remain mandatory.

## Coursera preview correction

Replaced synthetic covers and browser-dependent PDF embeds with actual locally rendered first-page PNGs for the two Coursera certificates. Source PDFs are unchanged and remain available through original-file links. Both derivatives were visually reviewed and added to the public asset allowlist. All 57 tests and the production build pass; both previews were checked at desktop/mobile sizes, decoded successfully, and retained original PDF links returning HTTP 200. Production JavaScript: 234.29 kB / 73.95 kB gzip. Each lossless 2400 × 1854 preview is approximately 1.4 MB and is lazy-loaded in the gallery. No publication or private source exposure.
