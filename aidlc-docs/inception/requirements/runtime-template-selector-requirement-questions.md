# Runtime Template Selector - Requirements Questions

> **Status: Answers validated on 2026-07-23.** The user's approval accepted each recommended option.

The selector adds a new runtime choice that supersedes the earlier source-only template-selection constraint. The existing Security Baseline and Property-Based Testing extension decisions remain disabled for this UI-only amendment.

## Question 1: Runtime Choice And Persistence

Who should be able to switch templates, and how long should the choice last?

A) Any visitor can switch; remember the choice in that browser, with `src/data/template.ts` used as the initial default (recommended)
B) Any visitor can switch for the current browser tab only; reloads return to `src/data/template.ts`
C) Treat the control as an author preview tool; reloads always return to `src/data/template.ts`
X) Other (please describe after the `[Answer]:` tag below)

[Answer]: A

## Question 2: Selector Placement

Where should the template selector appear?

A) Integrate one compact menu button into each template's desktop and mobile header controls (recommended)
B) Use one fixed floating button in a consistent screen corner across all templates
C) Show the selector only in the Home section
X) Other (please describe after the `[Answer]:` tag below)

[Answer]: A

## Question 3: Switching Context

What should happen to the visitor's current location when the template changes?

A) Switch in place while preserving the current section or journal route and the current layout mode (recommended)
B) Switch templates and return to the Home section
C) Put the template in a shareable URL parameter and reload that URL
X) Other (please describe after the `[Answer]:` tag below)

[Answer]: A

## Question 4: Control Label

What label should distinguish this selector from the existing light/dark color control?

A) Portfolio style (recommended)
B) Template
C) Theme
X) Other (please describe after the `[Answer]:` tag below)

[Answer]: A

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, options, answer tags, and table |
| Extension configuration | Existing disabled decisions carried forward |
