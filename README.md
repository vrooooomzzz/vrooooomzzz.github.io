# Nguyễn Đức Tuấn — Data & Human Stories

A static portfolio for a mathematics student exploring music recommendation, machine learning, and business analytics. Built with React, TypeScript, native HTML/CSS/SVG, and Vite. The public experience is one continuous narrative, organized around selected work, analytical process, learning journey, and life beyond data.

## Local development

Use a Node version compatible with the dependency lockfile, then run `npm ci` and `npm run dev`. The terminal prints the local preview URL. Run `npm test` and `npm run build` before preparing a public change. Build output is in dist/; neither dist nor node_modules belongs in Git.

## Edit the portfolio

Public prose is in src/data/. Projects contain in-site case-study narratives; certificate entries reference individually reviewed local files. Change the public presentation in src/templates/business/. Legacy template utilities remain in the source for compatibility but are not part of the public rendering path. The App uses section-anchor navigation and preserves older section links. Presentation/layout selectors are intentionally absent from the public site. Missing contact, portrait, and résumé information is intentionally optional; add only authorized public details.

## Public files and private inputs

Keep the source résumé DOCX, downloaded ZIP, private credentials, transcripts, score reports, and raw team presentation local. Never import them into the application or add them to public/. Extract working copies into temporary storage outside the repository. The current .gitignore excludes raw DOCX/ZIP inputs in src/assets; check other locations separately.

Only ordinary certificates that passed individual review belong in src/assets/certificates/duc-tuan/. See [the public asset review](aidlc-docs/construction/duc-tuan-portfolio/code/public-asset-review.md) for approved files, hashes, inspection scope, and limitations. Inspect content, links, and metadata before adding new evidence. A single course must not be described as a full professional credential without completion evidence.

## Before publication

Review `git status`, `git diff`, changed/untracked files, source/public assets, and dist after a successful build. Verify no raw/private records, secrets, old-owner files, unsupported claims, or unintended contact actions are included. Stage only deliberately reviewed paths; inspect `git diff --staged` before committing. Git ignore rules do not remove already committed files or old history.

A push to main triggers the existing GitHub Actions Pages workflow. Review privacy before pushing. See [DEPLOYMENT.md](DEPLOYMENT.md) for static hosting details. This implementation does not itself imply a push or deployment.

Workflow decisions and verification evidence are indexed in [aidlc-docs/README.md](aidlc-docs/README.md).
