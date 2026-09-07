# Story Generation Plan - Multi-Page Layout Switcher

## Feature

Multi-Page Layout Switcher

## Purpose

Plan how to generate personas and user stories for a navbar button that switches the portfolio between single-page and multi-page layout modes.

## Source Requirements

- `aidlc-docs/inception/requirements/multi-page-layout-switcher-requirements.md`
- `aidlc-docs/inception/requirements/multi-page-layout-switcher-requirement-verification-questions.md`
- Existing reverse engineering artifacts under `aidlc-docs/inception/reverse-engineering/`

## Recommended Story Approach

Use a hybrid journey-based and persona-based approach:

- Journey-based for visitor interactions: switch mode, navigate between pages, return to single-page mode.
- Persona-based for student/template concerns: understand the feature, keep GitHub Pages compatibility, and verify behavior.

## Story Options

| Approach | Benefit | Trade-Off | Recommendation |
|---|---|---|---|
| User Journey-Based | Follows real interaction flow from switch to navigation. | May underrepresent student maintainer concerns. | Use as primary structure. |
| Feature-Based | Maps cleanly to implementation surfaces. | Can become too technical too early. | Use for traceability only. |
| Persona-Based | Captures visitor and student needs clearly. | Can duplicate stories if overused. | Use as secondary grouping. |
| Domain-Based | Useful for larger business domains. | Too heavy for a small UI feature. | Do not use. |
| Epic-Based | Good for complex product increments. | More overhead than needed here. | Use only a lightweight epic heading. |

## Execution Checklist

- [x] Validate user stories are needed.
- [x] Create user stories assessment.
- [x] Read approved requirements.
- [x] Identify story personas.
- [x] Select recommended story breakdown approach.
- [x] Create this story generation plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/inception/user-stories/multi-page-layout-switcher-personas.md`.
- [x] Generate `aidlc-docs/inception/user-stories/multi-page-layout-switcher-stories.md`.
- [x] Confirm INVEST criteria coverage.
- [x] Map personas to stories.
- [x] Update this plan after generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log story generation completion and approval prompt.

## Questions

## Question 1: Persona Set

Which personas should the generated stories include?

A) Visitor, Student Customizer, and Template Maintainer.  
B) Visitor only.  
C) Student Customizer only.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. The feature serves both runtime visitors and template users.

## Question 2: Story Breakdown

How should stories be organized?

A) Hybrid journey/persona breakdown: visitor journey stories first, then student/maintainer support stories.  
B) Pure feature breakdown: switcher, routing, persistence, styling, tests.  
C) Pure persona breakdown: all stories grouped by persona.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. This keeps stories user-centered while preserving implementation traceability.

## Question 3: Story Granularity

How detailed should each story be?

A) Small enough to map to one coherent behavior, such as toggling mode, navigating pages, persisting preference, or verifying tests.  
B) One large story for the entire layout switcher feature.  
C) Very small technical stories for each individual file change.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. This keeps stories testable without becoming file-level tasks.

## Question 4: Acceptance Criteria Style

What acceptance criteria format should stories use?

A) Bullet criteria with clear expected behavior and test implications.  
B) Given/When/Then only.  
C) Minimal one-line criteria.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. Bullet criteria are readable for students and still specific enough for implementation.

## Question 5: Priority Labels

Should stories include priority labels?

A) Yes: Must, Should, Could.  
B) Yes: P0, P1, P2.  
C) No priority labels.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. Must/Should/Could is friendlier for classroom/template work.

## Question 6: Story Count

What story count is appropriate?

A) 5-7 stories covering visitor switching, multi-page navigation, persistence, single-page preservation, student customization, accessibility, and tests.  
B) 2-3 broad stories only.  
C) 10+ highly detailed stories.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. This is enough detail without making the feature feel bigger than it is.

## Question 7: Technical Constraints In Stories

How much technical detail should stories include?

A) Include user-visible technical constraints such as hash URLs and GitHub Pages compatibility, but avoid file-level implementation tasks.  
B) Include exact code/file changes in each story.  
C) Avoid all technical constraints.  
X) Other (please describe after [Answer]: tag below)

[Answer]: A

Recommendation: A. Hash routing and GitHub Pages compatibility are user-visible constraints worth preserving.

## Proposed Answers

| Question | Proposed Answer |
|---|---|
| Question 1 | A |
| Question 2 | A |
| Question 3 | A |
| Question 4 | A |
| Question 5 | A |
| Question 6 | A |
| Question 7 | A |

## Mandatory Artifacts

- [x] Generate `multi-page-layout-switcher-stories.md` with user stories following INVEST criteria.
- [x] Generate `multi-page-layout-switcher-personas.md` with user archetypes and characteristics.
- [x] Include acceptance criteria for each story.
- [x] Map personas to relevant stories.
- [x] Keep story content user-centered and avoid implementation task planning.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable; no ASCII diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Code fences | Not applicable; no fenced code blocks included. |
| Special characters | Inline code and markdown punctuation checked for readability. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User approved disabling it during Requirements Analysis for this static UI-only feature. |
| Property-Based Testing | Disabled | User approved disabling it during Requirements Analysis; focused example-based tests are sufficient. |
