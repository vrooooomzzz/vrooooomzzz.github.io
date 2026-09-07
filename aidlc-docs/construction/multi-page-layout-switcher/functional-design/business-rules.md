# Business Rules - Multi-Page Layout Switcher

## Layout Mode Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-01 | Supported layout mode values are `single` and `multi`. |
| BR-MLS-02 | The default layout mode is `single`. |
| BR-MLS-03 | Invalid stored mode values must be ignored. |
| BR-MLS-04 | The selected valid layout mode should be persisted to localStorage when possible. |
| BR-MLS-05 | localStorage failures must not prevent the visitor from using the switcher during the current session. |

## Section Resolution Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-06 | Only enabled navigation section IDs are valid page targets. |
| BR-MLS-07 | `home` is the preferred fallback section. |
| BR-MLS-08 | If `home` is unavailable, the first enabled section is the fallback. |
| BR-MLS-09 | Unknown, malformed, or disabled page hashes must resolve to the fallback section. |
| BR-MLS-10 | Section components must not be duplicated for multi-page mode. |

## Hash Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-11 | Single-page anchors use `#sectionId`. |
| BR-MLS-12 | Multi-page page hashes use `#/sectionId`. |
| BR-MLS-13 | Multi-page navigation must not require path-based routes. |
| BR-MLS-14 | Browser back and forward should update the active page in multi-page mode through hash changes. |

## Navigation Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-15 | Single-page navigation smooth-scrolls to the target section. |
| BR-MLS-16 | Multi-page navigation updates the hash and renders the target section. |
| BR-MLS-17 | The navbar active state reflects the scroll-active section in single-page mode. |
| BR-MLS-18 | The navbar active state reflects the hash-active section in multi-page mode. |
| BR-MLS-19 | Mobile navigation should close after a navigation action or layout toggle. |

## Toggle Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-20 | Switching from single-page to multi-page uses the current scroll-active section as the active page. |
| BR-MLS-21 | Switching from single-page to multi-page updates the hash to `#/sectionId`. |
| BR-MLS-22 | Switching from multi-page to single-page uses the current active page as the scroll target. |
| BR-MLS-23 | Switching from multi-page to single-page updates the hash to `#sectionId` and smooth-scrolls after all sections render. |
| BR-MLS-24 | Switching modes must not remove or mutate portfolio content data. |

## Rendering Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-25 | Single-page mode renders all enabled sections in navigation order. |
| BR-MLS-26 | Multi-page mode renders only the active enabled section. |
| BR-MLS-27 | Multi-page mode may use an app-level wrapper for spacing and focus. |
| BR-MLS-28 | Individual section components should remain unaware of layout mode. |

## Testing Rules

| Rule ID | Rule |
|---|---|
| BR-MLS-29 | Tests must verify switch control behavior. |
| BR-MLS-30 | Tests must verify single-page and multi-page rendering differences. |
| BR-MLS-31 | Tests must verify hash-based page behavior where practical in JSDOM. |
| BR-MLS-32 | Tests must verify invalid storage or hash values fall back safely. |
| BR-MLS-33 | Tests must avoid browser automation, network calls, and live deployment checks. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | Hash examples and code identifiers wrapped in code formatting. |
