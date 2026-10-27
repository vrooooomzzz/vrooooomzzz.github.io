# Duc Tuan Portfolio - Logical Components

These are responsibilities within the existing application and local authoring workflow. They do not introduce new services or infrastructure.

| Logical responsibility | Existing boundary | Design change | Verification |
| --- | --- | --- | --- |
| Local source evidence | Ignored résumé/ZIP and temporary local extraction | Inspect source locally; copy only reviewed ordinary certificates | Raw inputs ignored/untracked; local review recorded without private excerpts |
| Public evidence catalog | src/data/certificates.ts and reviewed assets | Correct titles/issuers, controlled file type and lightweight preview, explicit allowlist | Published asset/file checks and content review |
| Public profile/content | src/data and shared portfolio types | Duc Tuan prose; optional missing contact/portrait/résumé; three case-study narratives | Typed build and identity/content tests |
| Presentation | Existing Business and Engineering components/styles | Analytics design within existing boundaries; image/PDF-aware certificates; absent actions omitted | Both-template rendering, keyboard and viewport review |
| Navigation and selection | App, template registry, layout hook, existing utilities | Business default, only supported sections, safe obsolete hashes/preferences | Route/history/storage tests and base-path build |
| Publication verification | Existing tests/build and local file review | Source/output inventory, certificate allowlist, history assessment, final diff | Document evidence and limits before any push |

## Dependency flow in text

Local source review produces approved public prose and an asset allowlist. Shared typed data imports only approved public assets. App resolves the supported template, enabled sections, and navigation state. Existing section components render that public data, with native detail controls and lightweight certificate access. Tests/build and a source/output review check the resulting artifact before publication. Private evidence does not cross into runtime configuration or production files.

## Small data-contract changes

Profile contact, portrait, and résumé fields become optional where no supported value exists, with all existing consumers adjusted. Project entries may gain public case-study text. Certificate entries may gain a controlled image/PDF discriminator or lightweight preview reference. These changes serve existing presentation components, not new persistence or API schemas. Concrete edits and files will be enumerated in the subsequent code-generation plan.

## Boundaries and failure behavior

- An unreviewed certificate is absent from both public data and source assets.
- An unavailable contact/project URL creates no action; the visitor can still read the case study.
- An unsupported document preview retains direct access to the reviewed file.
- An invalid stored preference or old hash resolves through safe existing fallback/not-found behavior.
- A browser/inspection limitation is recorded as unverified; it is not represented as a passed check.

## Infrastructure applicability

No queues, caches, circuit breakers, databases, authentication system, centralized application logging, or custom scaling resources are introduced. GitHub Pages delivery, the existing dependency lockfile, and Vite/TypeScript builds remain in place. Both optional extensions are disabled; required privacy and accessibility controls remain in scope.
