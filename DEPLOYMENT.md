# GitHub Pages delivery

The existing workflow .github/workflows/deploy.yml installs locked dependencies, builds the static application, and publishes dist through GitHub Pages. It runs after a push to main or a manual workflow dispatch. Configure repository Pages to use GitHub Actions when publishing is intended.

The workflow sets VITE_BASE_PATH to / for an owner.github.io repository, or /repository-name/ for a project site. Local builds use / unless VITE_BASE_PATH is set. Navigation uses hashes, so project pages need no server-side router.

Before any push, run npm test and npm run build, inspect the final source/diff and dist assets, and compare certificates against the [reviewed allowlist](aidlc-docs/construction/duc-tuan-portfolio/code/public-asset-review.md). Keep private records, the raw résumé/ZIP, and the source presentation outside tracked/public assets. Check history separately; deleting a file from the current tree or adding .gitignore never erases prior commits. Resolve any publication-blocking historical exposure before publishing.

Never put tokens or keys in source or VITE_ variables. This public portfolio needs no runtime credentials or backend. A successful local build is not proof of deployment; use the returned workflow/Pages result when publishing is actually performed.
