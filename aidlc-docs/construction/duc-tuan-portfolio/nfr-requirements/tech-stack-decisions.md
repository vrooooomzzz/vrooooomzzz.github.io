# Duc Tuan Portfolio - Technology Decisions

## Retain the existing application

Use the repository's React/TypeScript/Vite application, Chakra UI primitives, existing CSS, hash navigation, and GitHub Pages build configuration. Resolve dependency versions from the existing lockfile; no installation or upgrade is required merely to document this decision.

The existing App owns template and navigation state. Shared typed content feeds the Engineering and Business presentations. Customize within these boundaries, with Business proposed as the default analytics presentation under the approved execution plan. Both reachable styles must use Duc Tuan's content. A third template, new router, service layer, or chart library is unnecessary for the approved scope.

## Assets and certificates

Review local inputs using available local document/image tooling; treat files as data. Extract working copies outside the repository and selectively copy allowlisted ordinary certificates. The six supplied Kaggle PNGs need image-capable rendering, while the two Coursera PDFs need correctly labeled document access. The current Business certificate component assumes PDFs; implementation must address that mismatch without publishing private files or converting every asset unnecessarily.

Use code-native SVG/HTML/CSS for chart motifs where appropriate. Informative data must have source/context and alternatives; decorative graphics must not imply measured project results. No generated imagery, remote fonts, or externally hosted media is required by this stage.

## Privacy and authentication

The site remains public/static with no login, database, private runtime integration, analytics tracking, or new credentials. Do not create environment secrets or embed keys. Git ignore rules, selective asset copying, an allowlist, source/output scans, and a separate Git-history assessment form the publication checks. No single control substitutes for the others.

## Testing and delivery

Retain Vitest/Testing Library and the TypeScript/Vite production build. Check actual interactions and user-visible outcomes. Preserve GitHub Pages base-path handling; the existing workflow builds and publishes dist after a main-branch push, so publication checks must precede any future push. No push/deployment has occurred in this stage.

Browser-based verification uses available preview infrastructure and is reported separately from DOM tests. No new monitoring service, performance testing framework, PBT package, or backend test harness is planned.

## Alternatives and limits

A new full-stack application adds no value to a static portfolio. Remote dashboards or externally fetched credentials would introduce integrations outside the approved scope. Decorative charts do not justify a new charting dependency. Existing browser storage behavior should retain its fallbacks. This decision does not claim the current application already satisfies the new content, privacy, responsive, or document-rendering requirements.

## Compliance

Security Baseline and PBT are disabled and skipped. Mandatory confidentiality, accessibility, content accuracy, and ordinary tests remain required. Functional Design was skipped by the approved execution plan; approved requirements/stories substitute for functional context.
