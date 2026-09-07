# NFR Design Plan - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Plan the non-functional design patterns and logical documentation components that will satisfy the approved Student Documentation NFR requirements.

## Approved NFR Requirements Input

The approved NFR requirements emphasize:

- Beginner-first documentation.
- Exact commands and file paths.
- Plain Markdown in `README.md` and `DEPLOYMENT.md`.
- Accurate GitHub Pages workflow behavior.
- Symptom-based troubleshooting.
- Static-only deployment scope.
- No new documentation tooling, backend services, analytics, or secrets.

## NFR Design Focus Areas

| Category             | Applicability                       | Design Focus                                                                           |
| -------------------- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| Resilience Patterns  | Applicable to documentation quality | Add recovery-oriented troubleshooting and verification guidance.                       |
| Scalability Patterns | Limited                             | Keep Markdown structure extensible without adding a docs system.                       |
| Performance Patterns | Applicable to readability           | Keep quick start near the top and move advanced deployment details to `DEPLOYMENT.md`. |
| Security Patterns    | Applicable to student privacy       | Avoid secrets and include light personal information safety notes.                     |
| Logical Components   | Applicable                          | Define README and DEPLOYMENT sections as reusable documentation components.            |

## Execution Checklist

- [x] Read approved NFR requirements.
- [x] Read approved tech stack decisions.
- [x] Identify applicable NFR design categories.
- [x] Create this NFR design plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/student-documentation/nfr-design/nfr-design-patterns.md`.
- [x] Generate `aidlc-docs/construction/student-documentation/nfr-design/logical-components.md`.
- [x] Update plan checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

### Question 1: Resilience Pattern

How should the documentation help students recover from mistakes?

A. Use symptom-based troubleshooting with likely cause, fix, and verification steps.  
B. Use a short generic troubleshooting paragraph only.  
C. Leave troubleshooting mostly to external docs.  
X. Other.

[Answer]: A

Recommendation: A. This best satisfies the approved reliability requirement for beginner GitHub Pages failures.

### Question 2: Scalability Pattern

How should the docs scale as the portfolio template grows?

A. Keep two root Markdown files with stable headings and add new sections only when new template capabilities exist.  
B. Create a full documentation site now.  
C. Split every topic into separate Markdown files immediately.  
X. Other.

[Answer]: A

Recommendation: A. It keeps the template simple while still leaving room for future additions.

### Question 3: Performance And Scannability Pattern

How should the docs stay fast to scan?

A. Put quick-start and common customization paths near the top, then move advanced deployment details to `DEPLOYMENT.md`.  
B. Put every detail in README so students only open one file.  
C. Keep README very short and put nearly everything in DEPLOYMENT.  
X. Other.

[Answer]: A

Recommendation: A. This balances first-run speed with enough detail for deployment.

### Question 4: Security And Privacy Pattern

How should student safety guidance appear?

A. Include light notes about public-facing email/contact details and no required secrets, without adding a security-heavy section.  
B. Add a comprehensive security policy and threat model.  
C. Omit security and privacy notes entirely.  
X. Other.

[Answer]: A

Recommendation: A. This fits the static portfolio scope without overwhelming beginners.

### Question 5: Logical Documentation Components

What logical components should the NFR design define?

A. README quick start, customization map, verification checklist, deployment handoff, DEPLOYMENT setup, base-path explanation, verification, and troubleshooting.  
B. Only README quick start and DEPLOYMENT setup.  
C. A new generated docs component model unrelated to the current files.  
X. Other.

[Answer]: A

Recommendation: A. This maps directly to the approved NFR requirements and current documentation responsibilities.

## Proposed Answers

| Question | Proposed Answer |
| -------- | --------------- |
| 1        | A               |
| 2        | A               |
| 3        | A               |
| 4        | A               |
| 5        | A               |

## Content Validation

| Check                | Status                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Mermaid syntax       | N/A - no Mermaid diagrams included.                                |
| ASCII diagram syntax | N/A - no ASCII diagrams included.                                  |
| Markdown tables      | Valid pipe table format used.                                      |
| Question format      | Each question includes A/B/C/X options and an `[Answer]:` tag.     |
| Special characters   | File paths and placeholders are wrapped in backticks where needed. |

## Extension Rule Compliance

| Extension              | Status   | Rationale                                    |
| ---------------------- | -------- | -------------------------------------------- |
| Security Baseline      | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
