# Business Logic Model - Multi-Page Layout Switcher

## Purpose

Define the behavior model for switching the portfolio between the existing single-page layout and a GitHub Pages-safe multi-page layout.

## Functional Scope

The unit manages a visitor preference and page selection state inside the browser. It does not fetch data, call APIs, or introduce backend behavior.

## Core Workflow

1. App initializes enabled section IDs from existing navigation data.
2. App reads a valid saved layout mode from localStorage.
3. If no valid saved mode exists, App defaults to single-page mode.
4. Single-page mode renders all enabled sections and uses smooth-scroll navigation.
5. Multi-page mode renders one active section and uses hashes such as `#/projects`.
6. Layout switching preserves the visitor's current context where practical.
7. Invalid hashes, invalid storage values, and storage failures fall back safely without crashing.

## State Model

| State | Source | Meaning |
|---|---|---|
| `layoutMode` | localStorage or in-memory React state | Current browsing mode: `single` or `multi`. |
| `enabledSectionIds` | navigation data | Ordered list of enabled section IDs that can be rendered or routed. |
| `scrollActiveSection` | scroll utility | Current section visible in single-page mode. |
| `activePageSection` | hash parser and fallback resolver | Current section rendered in multi-page mode. |
| `activeSection` | derived state | Section highlighted in the navbar. |

## Mode Initialization

| Input | Result |
|---|---|
| Valid saved mode `single` | Start in single-page mode. |
| Valid saved mode `multi` | Start in multi-page mode and resolve active page from hash. |
| Missing saved mode | Start in single-page mode. |
| Invalid saved mode | Ignore it and start in single-page mode. |
| localStorage unavailable | Start in single-page mode and keep current-session state in memory. |

## Hash Resolution

Multi-page hashes use the format `#/sectionId`.

| Hash Input | Resolution |
|---|---|
| `#/projects` and `projects` is enabled | Active page is `projects`. |
| `#/not-real` | Active page falls back to `home`, or first enabled section if `home` is not enabled. |
| `#projects` in multi-page mode | Treat as non-page hash and fall back safely. |
| Empty hash in multi-page mode | Active page defaults to `home`, or first enabled section if `home` is not enabled. |

## Navigation Model

### Single-Page Mode

- Navbar hrefs use `#sectionId`.
- Navbar clicks call smooth-scroll behavior.
- Active section comes from scroll tracking.
- App renders all enabled sections.

### Multi-Page Mode

- Navbar hrefs use `#/sectionId`.
- Navbar clicks update the hash.
- Active section comes from the resolved hash page.
- App renders only the active enabled section.

## Toggle Model

### Single To Multi

When switching from single-page mode to multi-page mode:

1. Use the current scroll-active section if it is enabled.
2. Set layout mode to `multi`.
3. Persist `multi` when storage is available.
4. Update the hash to `#/sectionId`.
5. Render only that active section.

### Multi To Single

When switching from multi-page mode to single-page mode:

1. Use the current active page section.
2. Set layout mode to `single`.
3. Persist `single` when storage is available.
4. Update the hash to `#sectionId`.
5. Render all sections.
6. Smooth-scroll to the active section after the full page is available.

## Error And Fallback Model

| Scenario | Behavior |
|---|---|
| localStorage read throws | Ignore persisted preference and default to single-page mode. |
| localStorage write throws | Keep current in-memory mode and continue without warning. |
| Hash references disabled section | Fall back to `home` or first enabled section. |
| Hash references unknown section | Fall back to `home` or first enabled section. |
| `home` is disabled | Use the first enabled section as the default. |
| No enabled sections | Use existing navigation safeguards; implementation should avoid crashing. |

## Testable Behaviors

- Default mode is single-page when no valid saved mode exists.
- Valid saved `multi` restores multi-page mode.
- Invalid saved mode falls back to single-page mode.
- Switching to multi-page uses the current scroll-active section.
- Switching back to single-page scrolls to the active page section.
- Unknown multi-page hashes fall back safely.
- Single-page mode renders multiple sections.
- Multi-page mode renders the selected section only.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | Hash examples and code identifiers wrapped in code formatting. |
