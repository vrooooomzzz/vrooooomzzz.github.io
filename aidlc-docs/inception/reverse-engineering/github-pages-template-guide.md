# GitHub Pages Template Guide

## Purpose

This guide records deployment and template-readiness findings from the current application. The student-facing instructions live in `README.md` and `DEPLOYMENT.md`.

## Current Deployment Flow

1. Student pushes changes to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The workflow installs Node dependencies with `npm ci`.
4. The workflow builds the Vite app with `npm run build`.
5. GitHub Pages deploys the generated `dist/` folder.

## Current GitHub Pages Settings Needed

- In the GitHub repository, open **Settings**.
- Open **Pages**.
- Set **Source** to **GitHub Actions**.
- Push to `main`.
- Wait for the workflow in the **Actions** tab to complete.

## Current Base Path Requirement

The app reads an environment-controlled base path:

```ts
base: process.env.VITE_BASE_PATH ?? "/",
```

The GitHub Actions workflow derives `VITE_BASE_PATH` from the repository name. Local development falls back to `/`, so students do not need to hardcode a repository name in `vite.config.ts`.

For deployment details and URL troubleshooting, use `DEPLOYMENT.md`.

## Student-Friendly Setup Guide Requirements

The final guide should include:

- Required tools: Git, Node.js 20 or newer, npm, GitHub account.
- How to fork or use the project as a template.
- How to clone the repository.
- How to install dependencies with `npm install`.
- How to run locally with `npm run dev`.
- Which files students should edit first.
- How to replace profile photo, gallery images, certificates, and logos.
- How to update GitHub, LinkedIn, YouTube, blog, and email links.
- How to configure the Vite base path.
- How to enable GitHub Pages with GitHub Actions.
- How to verify the deployed URL.
- Troubleshooting for 404 pages, missing assets, failed builds, and wrong Node versions.

## Implemented Template Features

- Student-editable content is organized under `src/data/`.
- Navigation and section descriptions have typed central configuration.
- Engineering, Neutral, and Business render the same content through distinct structures.
- `src/data/template.ts` chooses the first-visit default.
- A shared `Portfolio style` control lets visitors switch in place and persists their browser choice.
- README and deployment guidance describe customization, verification, and publishing.

## Manual Deployment Verification Checklist

- [ ] `npm install` completes.
- [ ] `npm run dev` starts the local site.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] `npm run preview` displays the production build.
- [ ] GitHub Actions deployment completes successfully.
- [ ] Published site URL loads without 404 errors.
- [ ] Images, PDFs, and YouTube embeds load correctly.
- [ ] Navigation links scroll to the right sections.
- [ ] Engineering, Neutral, and Business can be selected from desktop and mobile widths.
- [ ] Style switching preserves the current section or journal route and layout mode.
- [ ] Contact form opens the expected email client.
