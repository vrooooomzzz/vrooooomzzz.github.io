# Duc Tuan Data Analytics Portfolio - Requirements

## Intent and decisions

- Request: customize this repository for Nguyen Duc Tuan using his local résumé and newly added ZIP; use a data analytics theme and publish only ordinary certificates, keeping private credentials off GitHub.
- Type: brownfield enhancement affecting the full public portfolio.
- Scope: existing React/TypeScript/Vite website and its content, assets, metadata, tests, and documentation; retain GitHub Pages compatibility.
- Complexity: moderate; standard requirements depth.
- Recorded answers: Q1 A (replace the current portfolio), Q2 B (Security Baseline disabled), Q3 C (Property-Based Testing disabled).
- User response authorizing continuation after the answered questionnaire: "approve and continue".
- Status: requirements explicitly approved by the user response "approve and continue". Subsequent stage approvals remain required.

## Intended audience and goal

Admissions reviewers, prospective internship mentors, and collaborators should understand Duc Tuan's mathematical foundation, analytical approach, project work, and communication skills. Visitors should quickly find evidence of what he studied, what he contributed, and how he turns analysis into recommendations.

## Functional requirements

### DT-01: Duc Tuan identity throughout

Replace the current owner's displayed identity with Nguyen Duc Tuan / Nguyễn Đức Tuấn, a mathematics student focused on data analytics in Hanoi. Update the title, page description, navigation branding, footer, accessible names, and any relevant social metadata. Do not invent a job title or imply that a student has the previous owner's career history.

### DT-02: Custom analytics visual direction

Create a coherent analytics-themed design with clear editorial hierarchy, a restrained chart or grid vocabulary, and readable project narratives. The portfolio should feel specific to Duc Tuan's interests in music recommendation and business analytics. Use an original typographic identity when no authorized portrait is supplied. Displayed data and charts must identify their source and meaning; decorative graphics must not imply measured performance or live data. Present illustrations as illustrative when their values are not source-backed.

### DT-03: Source-grounded biography and education

Write concise English content based on the résumé: mathematics specialization at HUS High School for Gifted Students, interest in applied mathematics and human-centered data science, and relevant technical coursework. Treat the stated graduation date as expected. Omit unfinished placeholders. Private academic records may inform appropriate prose but must never be attached or reproduced as public evidence. Prefer educational context over publishing raw test or grade records.

### DT-04: Experience and community

Describe the FOXAi analytics internship with accurate contribution language: assisting BI work, exploratory analysis, basic SQL reconciliation in UAT, and reporting/dashboard support. Do not publish factory-client records or invent operational impact. Include English Club content work and the music activity where they strengthen the personal narrative; distinguish participation, membership, and awards accurately.

### DT-05: Selected project case studies

Present three substantive projects with problem, data, method, contribution, and takeaway:

1. Spotify content-based recommendation: audio features, Python, KNN, weighting/PCA comparisons, interactive explanations, and the evaluation approach described by the résumé. Do not invent benchmark scores or a working demo URL.
2. KKBox music recommendation: collaborative filtering context, behavioral features, LightGBM, and repeat-listening prediction. Treat résumé-reported scores/rankings as unverified; omit competitive rank claims unless supported by reliable evidence. Do not silently convert historical competition data into a verified 2026 placement.
3. SIM-LSE sales/profit analysis: Tableau-supported investigation of discounting, business recommendations, and team attribution from the supplied presentation. Present recommendations as proposals and findings within the analyzed dataset, not realized commercial outcomes or general causal laws. Attribute the team contribution without asserting sole authorship.

No unavailable repository, report, or demo link should appear as a working action. Use in-site case-study navigation instead. The raw presentation remains source material unless separately reviewed and approved for public inclusion.

### DT-06: Skills and ordinary certificates

Group tools and methods around Python, SQL, Pandas, scikit-learn, Excel, Tableau, analytical reporting, recommendation systems, and model interpretation, where supported by the inputs. Do not invent proficiency percentages.

Inspect each of the six Kaggle PNGs and two Coursera PDFs before choosing public assets. Confirm holder, issuer, course title, readability, and absence of private material. Publish ordinary course certificates only when they pass review. Public certificate verification URLs or IDs may be retained when they are standard public verification details; private identity numbers, account access details, transcripts, and score reports must be excluded. Do not label an individual course certificate as the complete Google professional credential without evidence of completion.

### DT-07: Navigation and contact behavior

Provide clear section navigation for introduction, background/education, selected projects, experience, and skills/certificates. Preserve or simplify existing static navigation as determined by the approved design. Support keyboard operation and mobile navigation. Include only supplied, verified Duc Tuan contact/profile URLs; omit unavailable email, telephone, social, and résumé download actions. Do not reuse the previous owner's contact form recipient, links, personal photographs, journal posts, or unrelated achievements. Do not use placeholder contact actions that appear functional.

## Non-functional requirements

### DT-08: Privacy boundary across repository and output

- Keep the raw DOCX and ZIP excluded from Git and production assets; Git ignore rules are already installed as a discovery safeguard.
- Extract working copies into temporary local storage; selectively copy only reviewed publishable assets into the project.
- Review file contents, embedded links, and metadata before publishing certificates or derived visuals.
- Keep private record excerpts out of source code, public workflow documentation, console output, build output, and committed files. Public portfolio prose may summarize appropriate facts from those sources.
- Check imported assets and all public/static assets as well as rendered content. Hiding a link does not remove the underlying file from a public repository.
- Review tracked files and Git history for private inputs. If sensitive material is already committed, report its presence without exposing contents; history rewriting needs separate explicit authorization. Do not claim ignore rules erase history.
- Remove superseded owner assets from the current public source/output when they are no longer needed, while preserving local source inputs and the append-only historical audit.
- Do not commit credentials, tokens, environment secrets, identity documents, or private academic records. The original user privacy constraint remains mandatory despite disabling the optional Security Baseline extension.

### DT-09: Accessibility and responsive presentation

Use semantic landmarks, a sensible heading order, descriptive link/button names, visible keyboard focus, readable contrast, reduced-motion support where animation is used, and alternatives for informative graphics. Avoid horizontal overflow on narrow viewports. Certificate previews must support clear close/back behavior and useful fallback links for reviewed assets.

### DT-10: Static delivery and maintainability

Retain a static browser application compatible with the existing Vite/GitHub Pages deployment. No backend, account system, runtime secrets, paid APIs, or fabricated live dashboards are needed. Prefer existing dependencies and typed content structures. Keep application code outside aidlc-docs. Update obsolete public metadata and deployment-facing descriptions. Document the certificate allowlist and private-input handling without including private contents.

### DT-11: Verification

Run meaningful tests for the final implementation, a TypeScript/production build, navigation and case-study interactions, certificate preview behavior where present, and privacy checks across tracked source and built output. Check responsive layout and keyboard behavior using available preview infrastructure; report any verification limits accurately. All exposed certificate links must resolve to reviewed assets. Scan for previous-owner content in public-facing source and output, treating required historical audit entries separately. Review the final diff before any publication; no push or deployment has yet occurred.

## Acceptance criteria

- [x] The public portfolio consistently identifies Duc Tuan and contains no visible previous-owner identity or unsupported contact actions.
- [x] The analytics theme is coherent on desktop and mobile, with accessible navigation and readable content.
- [x] Three source-grounded project narratives clearly distinguish datasets, methods, team contributions, findings, and proposals.
- [x] No unsupported leaderboard ranking, fabricated performance metric, live-data claim, or realized business outcome is presented.
- [x] Every published certificate is individually reviewed and correctly labeled; the publication allowlist is documented.
- [x] Private inputs and credentials are absent from the publishable tracked files and build; any historical exposure is reported separately.
- [x] Standard tests and production build pass; practical verification limits are documented.

## Extension compliance

Security Baseline: disabled by Q2 B; all extension SECURITY rules skipped, not claimed compliant. Property-Based Testing: disabled by Q3 C; PBT rules skipped. Neither optional extension changes the mandatory privacy, accessibility, accuracy, or standard test requirements above. No enabled extension findings block this requirements package.

## Subsequent workflow

User Stories is recommended because this change introduces a new public experience with multiple reader goals and needs acceptance criteria. After explicit requirements approval, create and obtain approval for the story plan, then follow the remaining AI-DLC stages at a depth appropriate to a static portfolio. This requirements document does not waive later approval gates.

## User-directed reference amendment

The later quality revision explicitly references https://bao252512.github.io/ for structure, responsiveness, and information organization. Its coherent full-width single-page narrative supersedes earlier public style/layout selection and two-reachable-template assumptions. Private-file handling, eight reviewed certificates, accurate Duc Tuan content, and the three project stories remain mandatory. The public App now uses native React rendering; legacy helpers remain source compatibility code. This amendment is implemented and awaiting user visual acceptance, not publication.
