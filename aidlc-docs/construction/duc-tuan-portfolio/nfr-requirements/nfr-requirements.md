# Duc Tuan Portfolio - Non-functional Requirements

## Scope and status

Single unit: `duc-tuan-portfolio`. The approved execution plan skips Functional Design because the work has no complex business logic or new schema; approved DT-01 through DT-11 and DT-US-01 through DT-US-08 provide the functional context instead. This assessment was explicitly approved by the user response "approve and continue". It defines checks for future implementation, not claims that the site currently passes.

## NFR-01: Public source and artifact privacy

**Basis**: DT-08, DT-US-08; mandatory original user instruction.

- Raw DOCX/ZIP inputs must remain ignored, untracked, and absent from production output. Temporary archive extraction stays outside the repository. Ignore rules are one control, not proof that built files or Git history are safe.
- Every new publishable certificate must have an explicit reviewed allowlist entry. Inspect its readable content, embedded links, and metadata. Copy only passed ordinary certificates into public source; exclude unknown/private records and raw presentation files.
- Certificate holder, issuer, title, and credential scope must match the evidence. Standard public verification details may be retained; identity numbers, account credentials, private transcripts, and score reports must not be published.
- Scan current source, public assets, imported assets, build output, and final changed-file candidates. Private source excerpts must not appear in audit entries, source comments, logs, or generated documentation.
- Check Git history separately for private inputs. Record any exposure without exposing contents and without rewriting history. Superseded assets must be removed from the current publishable source where unused; ordinary previously published owner material is distinguished from private credentials.
- Passing evidence: reviewed asset inventory, Git ignore/tracking checks, no prohibited artifact in publishable paths/output, and a documented history assessment. An inconclusive private-file review excludes the candidate from publication.

## NFR-02: Content integrity and missing data

**Basis**: DT-01 through DT-07; DT-US-01 through DT-US-06.

- Both reachable template styles, page metadata, and accessible names identify Duc Tuan. Previous-owner contact details, personal media, achievements, and journal content must not remain part of the replacement public artifact.
- Unsupported contact, résumé download, demo, and repository actions are omitted. No plausible-looking placeholders or invented recipients are allowed.
- Separate individual/team contributions, findings/recommendations, student project dates/competition placement, and individual course/full professional credentials. Omit unsupported rank claims; any included unverified score is explicitly attributed rather than implied verified.
- Informative charts have source/context and a text alternative; illustrative visuals cannot imply real measured outcomes or live data.
- Passing evidence: source comparison for public prose and project narratives, template rendering checks, and link/identity review without copying private inputs into the verification report.

## NFR-03: Accessible and responsive use

**Basis**: DT-07, DT-09; DT-US-06, DT-US-07.

- Use semantic landmarks and coherent heading order; every interactive control has a descriptive accessible name and visible focus.
- All navigation, project detail actions, and certificate access work by keyboard. Modal interactions, if used, support Escape, contained focus, and focus return. Simple links/details do not require a modal.
- Text meets WCAG AA contrast targets: at least 4.5:1 for ordinary text, 3:1 for large text. Essential control boundaries/focus indicators must remain distinguishable. Use relevant local contrast checks; do not claim a full accessibility certification.
- Check widths of 320, 768, and 1440 CSS pixels for page overflow and legibility. Check 200% zoom for readable content and operable navigation; individual document viewers may scroll internally.
- Optional animations respect reduced-motion preferences. Color is not the sole carrier of project/chart meaning.
- Certificate PNGs render as images and PDFs as suitable document links/previews with readable fallback access. Do not force PNGs into PDF-only preview controls.
- Passing evidence: automated semantic/control tests plus practical keyboard, viewport, zoom, and contrast review when preview tools are available. Explicitly report unavailable browser checks.

## NFR-04: Performance and scalability

**Basis**: DT-10, DT-11; static presentation scope.

- Remain a static application; no new backend, database, analytics service, live recommendation API, or third-party credentials.
- Do not download all full certificate PDFs or render all heavy document objects during initial page load. Use lightweight previews or deferred access. Optimize selected images and avoid unused media in production output.
- Reuse existing dependencies and avoid adding a charting framework solely for decorative visuals. Informative static visuals can be native SVG/HTML/CSS with alternatives.
- Record production bundle sizes and material regressions in the build summary. Do not invent load-time guarantees without controlled measurement.
- Server throughput/load tests, autoscaling policies, capacity planning, and an application-managed uptime SLA are N/A: static hosting remains GitHub Pages and no new server workload is introduced.
- Passing evidence: successful production build, recorded output sizes, inspection of document-loading behavior, and any observed performance limits.

## NFR-05: Reliability and static navigation

**Basis**: DT-07, DT-10; DT-US-07.

- Retain GitHub Pages base-path handling and hash-compatible navigation. Relevant deep links must work when entered directly and when revisited with browser history.
- Browser storage unavailability or obsolete saved template preferences must not prevent access to the portfolio. Preserve safe existing fallbacks or verify any changed behavior.
- Broken/unsupported document previews provide direct access to reviewed files without revealing internal paths or private inputs. Missing content does not leave a broken image, empty action, or wrong-owner fallback.
- Existing hosting provides static availability; no new failover, centralized logging, alerting, or visitor tracking service is required.
- Passing evidence: focused tests for routes/preferences and document access, plus documented build/base-path verification. Report live deployment status only if actual deployment is later performed.

## NFR-06: Maintainability and repeatable verification

**Basis**: DT-10, DT-11; DT-US-08.

- Keep React/TypeScript/Vite with the existing dependency lockfile and component boundaries. Keep typed public content separate from presentation; application code stays outside aidlc-docs.
- Update appropriate existing tests for actual user behavior and data boundaries; add focused coverage only where it protects meaningful navigation, certificate, missing-data, or privacy behavior.
- Run `npm test` and `npm run build` on the final implementation. Review the final diff and record results accurately. Do not treat Markdown checks as application test evidence.
- Produce required build/test instructions and a verification summary, with performance testing marked N/A where no controlled measurements or server workload apply. Preserve append-only audit history and immediately update plan/state checkboxes.
- No new dependency is selected by this stage. Reassess only if implementation evidence demonstrates a need and document the reason.

## Extension compliance

Security Baseline: disabled by requirements Q2 B; skip all SECURITY extension rules. PBT: disabled by Q3 C; skip all PBT extension rules. No enabled extension findings. Mandatory confidentiality is enforced through NFR-01 independently of extension selection.

## Assessment coverage

Scalability/performance: NFR-04. Availability/reliability: NFR-05. Security/data protection: NFR-01. Technology selection and maintainability: NFR-06 and tech-stack-decisions.md. Content reliability: NFR-02. Usability/accessibility: NFR-03. No unresolved requirement decision needs a new questionnaire; the approved functional scope and static hosting establish the boundaries. Numeric viewport/contrast checks are proposed verification criteria for this stage review, not completed measurements.
