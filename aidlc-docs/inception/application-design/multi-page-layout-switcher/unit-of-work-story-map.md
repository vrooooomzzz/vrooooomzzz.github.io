# Unit Of Work Story Map - Multi-Page Layout Switcher

## Story Assignment Summary

| Story | Priority | Assigned Unit | Coverage |
|---|---|---|---|
| MLS-01: Switch Between Layout Modes | Must | Multi-Page Layout Switcher | Navbar control, mode state, toggle behavior |
| MLS-02: Browse One Section Per Page | Must | Multi-Page Layout Switcher | Conditional section rendering and active page fallback |
| MLS-03: Navigate With GitHub Pages-Safe Hash URLs | Must | Multi-Page Layout Switcher | Hash parsing, hash generation, page navigation |
| MLS-04: Remember The Selected Layout Mode | Should | Multi-Page Layout Switcher | localStorage read/write and safe fallback |
| MLS-05: Present Multi-Page Mode As A Polished Page Experience | Should | Multi-Page Layout Switcher | Page-like layout treatment and accessibility expectations |
| MLS-06: Verify Layout Modes With Lightweight Tests | Must | Multi-Page Layout Switcher | Focused Vitest and React Testing Library coverage |

## Story Flow

1. Visitor sees the layout switch control.
2. Visitor switches from single-page mode to multi-page mode.
3. App renders one active section page.
4. Visitor navigates to sections using `#/section` hashes.
5. App restores the selected layout mode on refresh.
6. Tests verify the core behavior for future student edits.

## Requirements Coverage

| Requirement | Covered By Story | Covered By Unit Responsibility |
|---|---|---|
| FR-MLS-01 | MLS-01 | Navbar switcher and mode state |
| FR-MLS-02 | MLS-01, MLS-06 | Single-page rendering and smooth-scroll preservation |
| FR-MLS-03 | MLS-02 | Multi-page active section rendering |
| FR-MLS-04 | MLS-03 | Hash-based page navigation |
| FR-MLS-05 | MLS-04 | localStorage persistence |
| FR-MLS-06 | MLS-05 | Focused multi-page presentation |
| FR-MLS-07 | MLS-06 | Focused automated tests |
| NFR-MLS-01 | MLS-03 | GitHub Pages-safe hashes |
| NFR-MLS-02 | MLS-02, MLS-04, MLS-06 | Small hook or utility and centralized section mapping |
| NFR-MLS-03 | MLS-01, MLS-05 | Accessible controls and active navigation state |
| NFR-MLS-04 | MLS-05, MLS-06 | No heavyweight dependencies; local fast tests |
| NFR-MLS-05 | MLS-04 | Store only layout mode, no secrets or personal data |

## Persona Coverage

| Persona | Covered Stories | Unit Support |
|---|---|---|
| Visitor | MLS-01, MLS-02, MLS-03, MLS-05 | Can switch modes, browse focused sections, and navigate with shareable hashes. |
| Student Customizer | MLS-01, MLS-04, MLS-06 | Can keep the feature while editing content and verify behavior locally. |
| Template Maintainer | MLS-03, MLS-04, MLS-05, MLS-06 | Gets GitHub Pages-safe behavior, test coverage, and maintainable boundaries. |

## Acceptance Gate

The unit is complete when:

- Single-page mode still renders all enabled sections.
- Multi-page mode renders one valid enabled section.
- Navbar links and switch controls work in desktop and mobile contexts.
- Multi-page hashes use `#/sectionId`.
- Invalid hashes and storage values fall back safely.
- Focused tests pass with the existing local test command.
- Build and lint continue to pass.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | Hash examples and IDs wrapped in code formatting. |
