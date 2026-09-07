# Application Design Plan - Runtime Template Selector

> **Status: Approved on 2026-07-23.**

## Purpose

Define the minimal component, interface, service, and dependency changes required for browser-persisted selection among Engineering, Neutral, and Business.

## Resolved Design Decisions

No additional design questions are required. Approved requirements and stories already establish:

- App owns active runtime template state.
- `src/data/template.ts` remains the typed source default.
- Valid visitor choices persist in browser local storage.
- One shared selector is integrated into every responsive shell header.
- Switching preserves route, journal context, layout mode, color mode, and content.
- Existing Chakra and React Icons dependencies are sufficient.

## Execution Checklist

- [x] Read approved requirements, stories, workflow amendment, reverse engineering context, and current shell contracts.
- [x] Generate `components.md` with component definitions and responsibilities.
- [x] Generate `component-methods.md` with high-level signatures and contracts.
- [x] Generate `services.md` with selection and orchestration boundaries.
- [x] Generate `component-dependency.md` with dependencies and communication flow.
- [x] Generate consolidated `application-design.md`.
- [x] Validate completeness against NBV-10 through NBV-13 and NBV-US-05.
- [x] Validate Markdown and application/document boundaries.
- [x] Update AI-DLC state and present the design review gate.

## Artifact Location

`aidlc-docs/inception/application-design/runtime-template-selector/`

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, lists, checkboxes, and tables |
