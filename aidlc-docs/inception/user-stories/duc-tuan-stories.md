# Duc Tuan Portfolio - User Stories

Status: generated stories explicitly approved by the user response "approve and continue". These acceptance criteria describe required future behavior, not completed implementation.

## Method and bounded split

The planned combined navigation/maintenance story was split into DT-US-07 and DT-US-08. They have distinct personas and can be independently verified; this follows the approved INVEST split rule. There are eight stories and two personas, with no new product scope.

## DT-US-01: Recognize Duc Tuan and his analytical interests

**Persona**: P1

**Requirements**: DT-01, DT-02

As an evidence-seeking reader, I want a clear introduction to Duc Tuan and his analytical interests, so that I understand whose work I am reviewing.

**Acceptance criteria**:

1. Given the landing page, when I read its introduction, then I see Nguyen Duc Tuan or Nguyễn Đức Tuấn identified as a mathematics student focused on data analytics in Hanoi.
2. Given the public site, when I inspect the title, navigation branding, footer, and accessible names, then they identify Duc Tuan without presenting the previous owner as the subject.
3. Given no authorized portrait, when I view the introduction, then it uses a typographic identity rather than the previous owner's photograph.
4. Given analytics-themed graphics, when I read their labels or alternatives, then informative values have source/context and illustrative graphics do not imply measured performance or live data.

## DT-US-02: Assess education, experience, and community contribution

**Persona**: P1

**Requirements**: DT-03, DT-04

As an evidence-seeking reader, I want a concise account of Duc Tuan's education and contributions, so that I can assess his foundation and experience.

**Acceptance criteria**:

1. Given education content, when I review it, then it describes the mathematics specialization and marks future graduation as expected, with unfinished placeholders omitted.
2. Given the FOXAi internship entry, when I read its responsibilities, then it accurately describes assisting BI, exploratory analysis, basic SQL reconciliation in UAT, and reporting support without inventing client outcomes.
3. Given community and music entries, when I review them, then membership, participation, and awards are distinguished and belong to Duc Tuan.
4. Given the public background section, when I inspect its evidence and links, then it contains no private academic record attachments or factory-client data.

## DT-US-03: Understand the Spotify recommendation project

**Persona**: P1

**Requirements**: DT-05

As an evidence-seeking reader, I want to understand the Spotify recommendation approach, so that I can assess Duc Tuan's modeling choices.

**Acceptance criteria**:

1. Given the Spotify case study, when I open it, then it states the recommendation problem, audio-feature dataset context, methods, contribution, and takeaway.
2. Given the methodology, when I read the comparison, then KNN, feature weighting, PCA, and the evaluation approach are described consistently with the résumé without invented benchmark results.
3. Given explanation and application details, when I read them, then they distinguish the reported project functionality from a live application embedded in this portfolio.
4. Given no supplied demo or repository URL, when I use the project action, then it leads to the in-site case study rather than an invented external destination.

## DT-US-04: Understand the KKBox modeling work

**Persona**: P1

**Requirements**: DT-05

As an evidence-seeking reader, I want to understand the KKBox project and its evidence limits, so that I can judge the analytical work accurately.

**Acceptance criteria**:

1. Given the KKBox case study, when I read it, then it explains repeat-listening prediction, interaction data, behavioral features, LightGBM, contribution, and takeaway.
2. Given résumé-reported performance or rank, when the case study is prepared without corroborating evidence, then unsupported competitive ranking claims are omitted and any included score is explicitly attributed as reported rather than independently verified.
3. Given historical competition context, when dates are presented, then student project timing is not represented as a verified new competition placement.
4. Given the project card, when I follow its action, then I can read its case study without an unavailable demo or repository link.

## DT-US-05: Understand SIM-LSE business findings

**Persona**: P1

**Requirements**: DT-05

As an evidence-seeking reader, I want to understand the SIM-LSE analysis and recommendations, so that I can assess how Duc Tuan communicates business insights.

**Acceptance criteria**:

1. Given the case study, when I read it, then it states the sales/profit question, Tableau-based approach, dataset context, contribution, and takeaway.
2. Given discount-related findings, when the site describes them, then they are scoped to the analyzed dataset rather than asserted as general causal laws.
3. Given proposed actions, when I read them, then they are labeled recommendations rather than realized business improvements.
4. Given team work, when I review attribution, then the supplied team contribution is acknowledged without claiming sole authorship or automatically offering the raw presentation as a download.

## DT-US-06: Inspect skills and reviewed course certificates

**Persona**: P1

**Requirements**: DT-06, DT-08, DT-09

As an evidence-seeking reader, I want relevant skills and readable course certificates, so that I can assess the learning behind Duc Tuan's projects.

**Acceptance criteria**:

1. Given the skills section, when I review it, then tools and methods are grouped using supported content without invented proficiency percentages.
2. Given a published certificate, when I inspect its card and document, then holder, issuer, and course title agree with the individually reviewed asset and it appears on the publication allowlist.
3. Given an individual Google course certificate, when I read its label, then it is not described as the complete professional credential without supporting completion evidence.
4. Given a certificate preview, when I open and close it with available keyboard controls, then it remains usable and provides a fallback link to the reviewed document.
5. Given a candidate asset that has not passed privacy review, when the public certificates are rendered or bundled, then that asset is absent.

## DT-US-07: Navigate comfortably on desktop and mobile

**Persona**: P1

**Requirements**: DT-07, DT-09, DT-10

As an evidence-seeking reader, I want accessible navigation across screen sizes, so that I can explore the portfolio using my preferred device and input method.

**Acceptance criteria**:

1. Given desktop and narrow mobile viewports, when I navigate to introduction, background, projects, experience, and skills/certificates, then each destination is reachable without horizontal page overflow.
2. Given keyboard input, when I traverse navigation and case-study controls, then names and focus are clear, headings/landmarks are meaningful, and I can operate controls without a pointer.
3. Given informative graphics or reduced-motion preferences, when I explore the page, then text alternatives communicate the information and optional motion respects the preference.
4. Given missing Duc Tuan contact or download details, when I review the available actions, then unsupported actions are omitted and no previous-owner recipient or placeholder contact action appears.
5. Given a supported static navigation URL, when I load or revisit it on GitHub Pages, then its destination remains usable without a backend.

## DT-US-08: Maintain a safe and accurate public portfolio

**Persona**: P2

**Requirements**: DT-08, DT-10, DT-11

As the portfolio owner or trusted maintainer, I want a verifiable publication boundary, so that I can update the site without exposing private credentials.

**Acceptance criteria**:

1. Given the raw résumé, ZIP, and any private records, when I prepare a public change, then those inputs remain outside publishable tracked files and build output; temporary extraction does not add them to public assets.
2. Given candidate certificate assets, when I approve them for public use, then their content, embedded links, and metadata have been checked and the allowlist records the decision without copying private information.
3. Given the replacement portfolio, when I review current source, public assets, and build output, then superseded owner content and private credentials are absent from the new public artifact; any historical exposure is separately reported without silently rewriting history.
4. Given the final implementation, when I run standard tests, the production build, navigation/certificate checks, and publication scans, then results and any preview limits are documented accurately before publication.
5. Given the final diff, when it is reviewed, then application code remains outside aidlc-docs, no runtime secret or backend is required, and private source contents are absent from public documentation and logs.

## Requirement coverage

| Requirement | Stories |
| --- | --- |
| DT-01, DT-02 | DT-US-01 |
| DT-03, DT-04 | DT-US-02 |
| DT-05 | DT-US-03, DT-US-04, DT-US-05 |
| DT-06 | DT-US-06 |
| DT-07 | DT-US-07 |
| DT-08 | DT-US-06, DT-US-08 |
| DT-09 | DT-US-06, DT-US-07 |
| DT-10 | DT-US-07, DT-US-08 |
| DT-11 | DT-US-08 |

## INVEST review

- Independent: separate reader outcomes; navigation and maintenance are split. Shared content and certificate evidence are explicit dependencies, not a mandatory story execution sequence.
- Negotiable: stories define observable outcomes without locking implementation or layout mechanisms.
- Valuable: each story supports understanding, evaluation, usability, or safe maintenance.
- Estimable: all refer to bounded approved content and static delivery constraints.
- Small: each concerns one reviewable outcome or case study; DT-US-08 covers the single public-change review workflow.
- Testable: each story has three to five observable Given/When/Then acceptance criteria.

## Evidence dependencies and compliance

Use the local résumé and supplied presentation to inform accurate prose; review each course certificate before publication. Unavailable public links stay omitted. Story generation does not complete certificate review, fact verification, or implementation tests. All DT-01 through DT-11 requirements are mapped. No private source excerpts were needed in these artifacts.

Security Baseline and Property-Based Testing remain disabled and skipped. The user's privacy requirement, source accuracy, accessibility, and standard testing remain mandatory. No enabled extension findings block this stage.
