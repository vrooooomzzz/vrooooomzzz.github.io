# Application Design - Runtime Template Selector

> **Status: Approved and implemented on 2026-07-23.**

## Summary

The portfolio remains one static React and Vite application. `PortfolioApp` becomes the sole owner of active runtime template state, while the registry validates IDs and one guarded local-storage utility persists visitor choice. A shared `PortfolioStyleSelector` renders inside all three responsive shell headers and emits typed choices back to App.

## Architectural Decisions

- Keep `src/data/template.ts` as the typed initial default.
- Store only a valid `PortfolioTemplateId` in browser local storage.
- Fall back to Engineering for invalid stored or requested values.
- Keep route, journal, layout, active-section, and color-mode state mounted above the selected shell.
- Add selection state and callback to `PortfolioShellProps`.
- Reuse one Chakra Menu component and the existing registry metadata across all templates.
- Add no selector-specific runtime dependency, backend, infrastructure, or URL model.

## Ownership Boundaries

| Boundary | Owner |
|---|---|
| Source default | `src/data/template.ts` |
| Valid IDs, labels, and template resolution | Template registry |
| Persisted choice validation | Template selection helper |
| Active template state and switching | `PortfolioApp` |
| Menu presentation and active semantics | `PortfolioStyleSelector` |
| Header placement and responsive fit | Engineering, Neutral, and Business shells |
| Route and layout preservation | Existing App and `usePortfolioLayout` boundary |

## Requirement And Story Coverage

| Requirement or story | Design coverage |
|---|---|
| NBV-10 | Typed source default, validated storage override, Engineering fallback |
| NBV-11 | Shared selector integrated into every responsive shell header |
| NBV-12 | App-owned state preserves route, journal, and layout hooks during switching |
| NBV-13 | Active semantics, immediate rendering, and guarded persistence |
| NBV-NFR-02/03 | Chakra Menu semantics, focus behavior, stable compact controls, responsive verification |
| NBV-NFR-05/06 | Scoped shells and unchanged static deployment |
| NBV-NFR-07/08 | Deterministic registry, persistence, interaction, route, layout, lint, and build gates |
| NBV-US-05 | Complete in-place visitor selection journey |

## Test Boundary

- Unit-test validation and persistence fallbacks.
- Render every shell and assert the selector trigger and three choices.
- Switch from each template and assert active shell replacement.
- Assert current section, local journal route, and layout mode remain unchanged.
- Assert saved choice is restored and invalid state falls back safely.
- Retain existing template, route, content, accessibility, and build regression suites.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown tables | Valid simple pipe tables |
| Application/document boundary | Design files remain under `aidlc-docs`; application code remains under `src` |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
