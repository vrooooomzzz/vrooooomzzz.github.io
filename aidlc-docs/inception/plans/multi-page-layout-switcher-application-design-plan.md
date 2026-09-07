# Application Design Plan - Multi-Page Layout Switcher

## Purpose

Define the high-level component structure for adding a layout switcher that lets the portfolio run as either a single scrolling page or a GitHub Pages-safe multi-page experience.

## Context Inputs

- Requirements: `aidlc-docs/inception/requirements/multi-page-layout-switcher-requirements.md`
- User stories: `aidlc-docs/inception/user-stories/multi-page-layout-switcher-stories.md`
- Execution plan: `aidlc-docs/inception/plans/multi-page-layout-switcher-execution-plan.md`
- Existing implementation surfaces: `src/App.tsx`, `src/components/Navbar.tsx`, `src/data/navigation.ts`, `src/utils/scroll.ts`

## Design Decisions Already Resolved

No new user-facing design questions are required for this stage because the approved requirements already decide the relevant application design choices:

| Decision Area | Approved Direction |
|---|---|
| Layout choices | Preserve single-page mode and add multi-page mode. |
| Routing model | Use hash-based URLs such as `#/projects`. |
| Switch placement | Put the control in desktop and mobile navbar experiences. |
| Persistence | Store only the selected layout mode in `localStorage`. |
| Section source of truth | Reuse existing enabled navigation items and `SectionId` values. |
| Dependencies | Avoid React Router and heavyweight routing dependencies. |

## Execution Checklist

- [x] Analyze approved requirements and user stories.
- [x] Review existing `App`, `Navbar`, navigation data, and scroll utilities.
- [x] Generate `components.md` with component definitions and high-level responsibilities.
- [x] Generate `component-methods.md` with method signatures and interface purposes.
- [x] Generate `services.md` with service definitions and orchestration patterns.
- [x] Generate `component-dependency.md` with dependency relationships and communication patterns.
- [x] Generate consolidated `application-design.md`.
- [x] Validate design completeness and consistency.
- [x] Update AI-DLC state and execution plan tracking.

## Artifact Locations

Feature-specific artifacts are stored under:

`aidlc-docs/inception/application-design/multi-page-layout-switcher/`

This avoids overwriting the earlier baseline portfolio application design artifacts.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Planned only for dependency artifact; validated with simple node IDs and text alternative. |
| ASCII diagrams | Not applicable; no ASCII diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Code fences | Mermaid fence closed properly in dependency artifact. |
| Special characters | Hash examples and file paths wrapped in code formatting. |
