# NFR Requirements - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Purpose

Define non-functional requirements for the portfolio template's GitHub Pages deployment configuration. The focus is deployment reliability, maintainability, static-hosting simplicity, and verification without introducing unnecessary infrastructure.

## Availability And Reliability

### NFR-AV-01: Common GitHub Pages Cases Must Work Without Manual Config Edits

The deployment configuration should work for the two common GitHub Pages repository shapes:

- Normal repository Pages: `https://<owner>.github.io/<repository>/`
- User or organization root Pages: `https://<owner>.github.io/`

### NFR-AV-02: Workflow Failures Should Stay Understandable

The workflow should remain simple enough that failures can be explained in Unit 4 documentation. The workflow should not contain many custom branches that make student troubleshooting harder.

### NFR-AV-03: Manual Deployment Must Remain Available

The workflow should keep `workflow_dispatch` so students can retry deployment from the GitHub Actions UI without pushing an empty commit.

## Performance

### NFR-PERF-01: Local Build Must Stay Fast Enough For Student Iteration

The deployment configuration should not add slow external calls, remote validation steps, or live deployment checks to local builds.

### NFR-PERF-02: GitHub Actions Build Should Preserve Existing Build Shape

The workflow should continue using the existing install and build path:

- `npm ci`
- `npm run build`
- upload `./dist`

## Maintainability

### NFR-MAINT-01: Base Path Logic Must Be Readable In The Workflow

Repository base path derivation should stay inline in `.github/workflows/deploy.yml` so students and maintainers can inspect it without jumping to extra scripts.

### NFR-MAINT-02: Vite Configuration Must Stay Minimal

`vite.config.ts` should use `VITE_BASE_PATH` when present and default to `/`. It should not hardcode a specific repository name.

### NFR-MAINT-03: Documentation Should Explain The Behavior Later

Detailed instructions and troubleshooting are deferred to Unit 4, but the NFR expectation is that the behavior remains simple enough to document in beginner-friendly language.

## Security And Operational Simplicity

### NFR-SEC-01: No Runtime Secrets

This unit must not require repository secrets, API keys, backend services, or paid infrastructure.

### NFR-SEC-02: Static Hosting Model Must Be Preserved

The project must remain a static frontend application deployed through GitHub Pages.

### NFR-SEC-03: Existing GitHub Pages Permissions Must Remain Narrow

The workflow should continue using only the permissions needed for GitHub Pages deployment:

- `contents: read`
- `pages: write`
- `id-token: write`

## Verification

### NFR-VER-01: Local Commands

The unit should be verified with:

- `npm run build`
- `npm run lint`

### NFR-VER-02: Workflow Logic Review

The workflow derivation logic should be reviewed for:

- Normal repository: `owner/my-portfolio` -> `/my-portfolio/`
- Root Pages repository: `owner/owner.github.io` -> `/`

### NFR-VER-03: Live Deployment Test Not Required In This Unit

A live GitHub Pages deployment test is not required before proceeding. Final deployment verification guidance is deferred to Unit 4 and final Build and Test instructions.

## `<owner>.github.io` Use Case

GitHub Pages has a special repository naming convention. If a user or organization creates a repository named exactly `<owner>.github.io`, GitHub hosts that repository at the domain root:

- Repository: `nhamhhung/nhamhhung.github.io`
- Site URL: `https://nhamhhung.github.io/`
- Correct Vite base path: `/`

For a normal project repository, GitHub hosts the site under a subpath:

- Repository: `nhamhhung/my-portfolio`
- Site URL: `https://nhamhhung.github.io/my-portfolio/`
- Correct Vite base path: `/my-portfolio/`

This distinction matters because Vite uses `base` to generate asset URLs. A root Pages repository should not use `/<repository-name>/`; otherwise CSS, JavaScript, images, and PDFs may be requested from the wrong path.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
