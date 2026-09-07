# Story Generation Plan - Neutral and Business Layout Variety

> **Neutral portrait and cross-platform setup amendment: Plan approved and generation completed on 2026-08-02; amended story artifacts awaiting approval.** Earlier story plans and the five-story set remain approved foundations.

## Purpose

Create a small set of personas and testable user stories from the approved Neutral and Business layout requirements.

## Recommended Approach

Use a focused feature-based breakdown with user-centered outcomes:

- Neutral magazine expression for student authors.
- Business consulting-report expression for student authors.
- Clear navigation and reading for portfolio visitors.
- Preserved behavior, accessibility, and Engineering regression for maintainers.

This keeps each story independent and testable without restating every requirement as a separate story.

## Story Approach Options

- **Focused feature-based**: Lowest overhead and direct mapping to the two templates.
- **User journey-based**: More detail about author and visitor flows, but some repetition across templates.
- **Persona-based**: Clear stakeholder grouping, but likely duplicates shared acceptance criteria.
- **Epic-based**: Unnecessary hierarchy for this bounded enhancement.

## Planning Questions

Please answer each question by placing the selected letter after its `[Answer]:` tag. Choose `X) Other` when none of the options matches your preference.

### Question 1

Which personas should the story set represent?

A) Student portfolio author and portfolio visitor, with maintainer needs expressed as acceptance constraints
B) Student portfolio author, portfolio visitor, and template maintainer as three equal personas
C) Student portfolio author only
D) Student portfolio author, portfolio visitor, and teacher or mentor reviewer
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should the stories be organized?

A) Four focused feature stories covering Neutral, Business, visitor navigation, and preserved quality
B) Six to eight user-journey stories covering selection, reading, navigation, actions, responsive use, and maintenance
C) Six to eight persona-grouped stories split between authors, visitors, and maintainers
D) One story for every functional requirement
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

Which acceptance-criteria format should be used?

A) Concise checklists mapped to requirement IDs
B) Given/When/Then scenarios for every story
C) Given/When/Then for visitor interactions and concise checklists for presentation and regression constraints
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Execution Checklist

- [x] Read the approved requirements and current template context.
- [x] Assess whether user stories add value.
- [x] Define a minimal recommended story methodology.
- [x] Validate all planning answers and resolve any ambiguity.
- [x] Obtain explicit approval of this story-generation plan.
- [x] Generate `aidlc-docs/inception/user-stories/neutral-business-layout-variety-personas.md`.
- [x] Generate `aidlc-docs/inception/user-stories/neutral-business-layout-variety-stories.md`.
- [x] Ensure every story satisfies INVEST criteria.
- [x] Include acceptance criteria and map personas to stories.
- [x] Verify coverage of all functional and non-functional requirements.
- [x] Update checkboxes immediately as generation steps complete.
- [x] Update AI-DLC state and request story-artifact approval.

## Mandatory Artifacts

- [x] Personas with goals, needs, and relevant story mappings.
- [x] User stories with acceptance criteria and requirement traceability.

## Runtime Selector Amendment Plan

### Recommended Approach

Use the existing focused feature-based methodology and existing personas:

- Add `NBV-US-05` for a visitor selecting and persisting a portfolio style without losing context.
- Update `NBV-US-03` only where predictable navigation now includes the selector.
- Update `NBV-US-04` so `src/data/template.ts` is the initial default rather than the only selection mechanism.
- Extend INVEST and requirement traceability tables without introducing a new persona or epic.

### Considered Alternatives

- **Expand only existing stories**: Lower story count, but hides the selector's distinct visitor journey and persistence behavior.
- **Add separate author, visitor, and persistence stories**: More granular, but excessive for one compact browser-only control.
- **Recommended focused story**: One independently testable selector outcome with affected constraints updated in place.

### Clarification Assessment

No additional story-planning questions are required. The approved requirements already define the actor, three choices, placement, persistence, route and layout preservation, terminology, accessibility boundary, and fallback behavior.

### Execution Checklist

- [x] Read and validate the approved runtime selector requirements amendment.
- [x] Confirm user stories add value for the new visitor-facing workflow.
- [x] Reuse the approved focused feature-based methodology and existing personas.
- [x] Analyze story-planning ambiguity; no unresolved questions remain.
- [x] Obtain explicit approval of this amendment plan.
- [x] Update the Portfolio Visitor and Student Portfolio Author needs in the active personas artifact.
- [x] Add `NBV-US-05` with concise testable acceptance criteria.
- [x] Update affected acceptance criteria in `NBV-US-03` and `NBV-US-04`.
- [x] Extend INVEST review and requirement traceability through NBV-13.
- [x] Validate Markdown, requirement coverage, and extension compliance.
- [x] Request explicit approval of the amended story artifacts.

## Student-Friendly Refresh Amendment Plan

> **Status: Approved and generated on 2026-08-01.** This focused amendment reuses the approved feature-based approach, existing personas, and existing five-story set.

### Recommended Approach

- Reframe `NBV-US-01` from a professional magazine to a relaxed student learning journal.
- Reframe `NBV-US-02` from a consulting report to an organized student project showcase.
- Extend `NBV-US-01` and `NBV-US-02` for accurate project-owned media, approachable wording, restrained theme treatment, and Business case-label spacing.
- Extend `NBV-US-03` and `NBV-US-05` so the selector has no visible check icon while retaining semantic selection, keyboard behavior, and clear active-row styling.
- Extend `NBV-US-04` for project image and alternative-text maintenance, local asset constraints, and explicit Engineering regression.
- Update the two existing personas only where their goals and needs still describe professional magazine or consulting-report identities.

### Considered Alternatives

- **Add a new refresh story**: Makes the amendment visible, but separates presentation quality from the two stories that own those presentations.
- **Create image, wording, and spacing stories**: Offers granular tracking but creates unnecessary coordination for one bounded visual refresh.
- **Recommended in-place amendment**: Keeps each observable outcome with its current owner and avoids expanding the story count.

### Clarification Assessment

No additional story-planning questions are required. The approved requirements define the existing personas, three project subjects, accurate portrait boundary, student-journal and student-showcase identities, restrained tone, selector semantics, minimum case clearance, accessibility expectations, and preserved behavior.

### Execution Checklist

- [x] Read and validate the approved student-friendly requirements amendment.
- [x] Confirm user stories add value for the user-facing presentation and media changes.
- [x] Reuse the approved focused feature-based methodology and existing personas.
- [x] Analyze story-planning ambiguity; no unresolved questions remain.
- [x] Obtain explicit approval of this amendment plan.
- [x] Update the Student Portfolio Author and Portfolio Visitor goals and needs.
- [x] Reframe `NBV-US-01` and `NBV-US-02` with student-friendly outcomes and acceptance criteria.
- [x] Update affected acceptance criteria in `NBV-US-03`, `NBV-US-04`, and `NBV-US-05`.
- [x] Extend INVEST review and requirement traceability through NBV-20 and NBV-NFR-10.
- [x] Validate Markdown, requirement coverage, and extension compliance.
- [x] Request explicit approval of the amended story artifacts.

### Mandatory Artifacts

- [x] Update `aidlc-docs/inception/user-stories/neutral-business-layout-variety-personas.md`.
- [x] Update `aidlc-docs/inception/user-stories/neutral-business-layout-variety-stories.md`.
- [x] Preserve INVEST compliance, testable acceptance criteria, and persona mappings.

## Neutral Portrait and Cross-Platform Setup Amendment Plan

> **Status: Approved and generated on 2026-08-02.** This focused amendment reuses the approved feature-based approach, existing personas, and existing five-story set.

### Recommended Approach

- Extend `NBV-US-01` so Neutral's first viewport uses a responsive medium portrait comparable to Business without changing the portrait asset or editorial identity.
- Extend `NBV-US-04` so a student can install prerequisites, obtain the repository, run it locally, verify changes, update dependencies safely, and resolve common setup problems on major desktop operating systems.
- Update the Student Portfolio Author needs only; the Portfolio Visitor persona and all other story outcomes remain unchanged.
- Extend requirement traceability through NBV-23 and NBV-NFR-12 without adding a documentation-only story.

### Considered Alternatives

- **Add a setup story**: Makes README work more visible, but creates a documentation-only story for behavior already owned by shared maintenance.
- **Add a portrait story**: Isolates one visual adjustment but fragments the existing Neutral presentation outcome.
- **Recommended in-place amendment**: Keeps both changes with their current user journeys and avoids expanding the story set.

### Clarification Assessment

No additional story-planning questions are required. The approved requirements define the portrait footprint, responsive behavior, operating-system scope, installation approaches, student journey, preserved behavior, and verification boundaries.

### Execution Checklist

- [x] Read and validate the approved Neutral portrait and cross-platform setup requirements.
- [x] Assess direct and indirect user impact and confirm a focused story amendment adds value.
- [x] Reuse the approved feature-based methodology, existing personas, and existing five-story set.
- [x] Analyze story-planning ambiguity; no unresolved questions remain.
- [x] Obtain explicit approval of this amendment plan.
- [x] Update the Student Portfolio Author needs without changing the Portfolio Visitor persona.
- [x] Extend `NBV-US-01` with medium portrait and responsive framing acceptance criteria.
- [x] Extend `NBV-US-04` with cross-platform beginner onboarding acceptance criteria.
- [x] Extend INVEST review and requirement traceability through NBV-23 and NBV-NFR-12.
- [x] Validate Markdown, requirement coverage, and extension compliance.
- [x] Request explicit approval of the amended story artifacts.

### Mandatory Artifacts

- [x] Update `aidlc-docs/inception/user-stories/neutral-business-layout-variety-personas.md`.
- [x] Update `aidlc-docs/inception/user-stories/neutral-business-layout-variety-stories.md`.
- [x] Preserve INVEST compliance, testable acceptance criteria, and persona mappings.

## Content Validation

| Check              | Result                                             |
| ------------------ | -------------------------------------------------- |
| Mermaid diagrams   | Not used                                           |
| ASCII diagrams     | Not used                                           |
| Markdown structure | Valid headings, lists, checkboxes, and answer tags |

## Extension Compliance

| Extension              | Status   | Rationale                               |
| ---------------------- | -------- | --------------------------------------- |
| Security Baseline      | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
