# NFR Design Patterns - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Define the documentation design patterns that satisfy the approved non-functional requirements for `README.md` and `DEPLOYMENT.md`.

## Approved Design Answers

| Question | Answer | Design Impact |
|---|---|---|
| Resilience pattern | A | Use symptom-based troubleshooting with likely cause, fix, and verification steps. |
| Scalability pattern | A | Keep two root Markdown files with stable headings. |
| Performance and scannability pattern | A | Put quick-start and common customization paths near the top; move advanced deployment details to `DEPLOYMENT.md`. |
| Security and privacy pattern | A | Include light notes about public-facing contact details and no required secrets. |
| Logical documentation components | A | Define README and DEPLOYMENT sections as explicit documentation components. |

## Pattern 1: Beginner-First Progressive Disclosure

### Intent

Give students the fastest path from opening the repository to running the portfolio locally, while still providing enough detail for safe customization and deployment.

### Application

`README.md` should present information in this order:

1. What the template is.
2. What students can customize.
3. Prerequisites.
4. Quick start commands.
5. Editable file map.
6. Customization guidance.
7. Verification commands.
8. Deployment handoff.

### Design Rules

- Keep first-run commands close to the top.
- Keep framework explanations short.
- Use exact file paths for customization tasks.
- Move advanced GitHub Pages detail to `DEPLOYMENT.md`.

### Satisfies

- NFR-USDOC-01
- NFR-USDOC-02
- NFR-PFDOC-01

## Pattern 2: Source-Of-Truth File Map

### Intent

Help students edit data and assets before editing React components.

### Application

`README.md` should include a customization map that points students to:

- `src/data/profile.ts`
- `src/data/about.ts`
- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/awards.ts`
- `src/data/projects.ts`
- `src/data/gallery.ts`
- `src/data/videos.ts`
- `src/data/skills.ts`
- `src/data/certificates.ts`
- `src/data/navigation.ts`
- `src/types/portfolio.ts`
- `src/assets/`
- `src/components/shared/`

### Design Rules

- Describe the student-facing purpose of each path.
- Treat `src/data/` as the primary customization surface.
- Describe shared components as advanced extension points, not first-edit files.
- Include asset replacement guidance for images, logos, and certificate PDFs.

### Satisfies

- NFR-USDOC-02
- NFR-MTDOC-02

## Pattern 3: Command Accuracy Contract

### Intent

Prevent documentation drift by only documenting commands that exist in the current project.

### Application

`README.md` should include these commands:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

### Design Rules

- Do not document a test command until Unit 5 adds one.
- Keep command explanations short and outcome-focused.
- Use `npm` consistently because the workflow uses `npm ci`.

### Satisfies

- NFR-ACDOC-01
- NFR-RLDOC-02

## Pattern 4: Automatic Deployment Behavior Explanation

### Intent

Explain GitHub Pages deployment behavior without asking students to manually edit `vite.config.ts` for normal repository setups.

### Application

`DEPLOYMENT.md` should explain:

- GitHub Pages source must be GitHub Actions.
- Deployment runs from pushes to `main`.
- `vite.config.ts` uses `VITE_BASE_PATH` with a `/` fallback.
- The workflow derives `VITE_BASE_PATH` automatically.
- `<owner>.github.io` repositories publish at `/`.
- Other repositories publish at `/<repository>/`.

### Design Rules

- Do not include outdated manual base path edit instructions as the standard path.
- Mention manual changes only as advanced troubleshooting if a future custom deployment requires it.
- Verify deployment through GitHub Actions and repository Pages settings.

### Satisfies

- NFR-ACDOC-02
- NFR-RLDOC-01
- NFR-RLDOC-02

## Pattern 5: Symptom-Based Troubleshooting

### Intent

Help beginners recover from common setup and deployment failures without needing to diagnose the whole stack.

### Application

`DEPLOYMENT.md` should group troubleshooting by visible symptom.

Recommended format:

| Symptom | Likely Cause | Fix | Verify |
|---|---|---|---|
| Site shows 404 | Pages source or URL timing issue | Check Pages source and wait for deployment | Open Pages URL after Actions succeeds |
| CSS or images missing | Wrong base path or broken asset import | Confirm workflow base path and asset imports | Reload deployed site |

### Design Rules

- Keep each troubleshooting row concrete.
- Prefer checks students can perform in GitHub UI or terminal.
- Include asset-specific problems for images and PDF certificates.

### Satisfies

- NFR-RLDOC-01
- NFR-PFDOC-01

## Pattern 6: Static-Only Safety Boundary

### Intent

Keep the template approachable and avoid adding operational risk.

### Application

`README.md` and `DEPLOYMENT.md` should state or imply that this is a static portfolio site.

### Design Rules

- Do not introduce API keys, `.env` secrets, backend deployment, analytics, monitoring, or paid services.
- Include a light note that students should use public-facing contact details.
- Avoid collecting visitor data.

### Satisfies

- NFR-AVDOC-01
- NFR-SECDOC-01
- NFR-SECDOC-02

## Pattern 7: Root Markdown Maintainability

### Intent

Keep student documentation easy to find and maintain without new tooling.

### Application

Use only:

- `README.md`
- `DEPLOYMENT.md`

### Design Rules

- Keep headings stable.
- Add new sections only when the template gains new capabilities.
- Avoid a separate docs site or generated documentation system.

### Satisfies

- NFR-MTDOC-01
- NFR-MTDOC-02

## Content Validation

| Check | Status |
|---|---|
| Mermaid syntax | N/A - no Mermaid diagrams included. |
| ASCII diagram syntax | N/A - no ASCII diagrams included. |
| Markdown tables | Valid pipe table format used. |
| Special characters | File paths and placeholders are wrapped in backticks where needed. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
