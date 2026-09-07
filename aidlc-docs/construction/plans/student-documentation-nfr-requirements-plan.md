# NFR Requirements Plan - Student Documentation

## Unit

Unit 4: Student Documentation

## Purpose

Plan non-functional requirements for the student-facing documentation updates. This stage defines quality expectations for the README and deployment guide before writing the final NFR artifacts.

## Unit Context

The project is becoming a reusable portfolio baseline for students. The current documentation still contains Vite starter guidance and manual GitHub Pages base path instructions that no longer match the updated deployment workflow.

The documentation must help students:

- Understand the template quickly.
- Install and run the project locally.
- Find the files they should edit.
- Customize data and assets safely.
- Deploy through GitHub Pages with GitHub Actions.
- Troubleshoot common beginner failures.

## NFR Focus Areas

| Area            | Requirement Intent                                                                        |
| --------------- | ----------------------------------------------------------------------------------------- |
| Usability       | Documentation should be beginner-friendly, direct, and copyable.                          |
| Accuracy        | Commands, file paths, and deployment behavior must match the current codebase.            |
| Maintainability | Docs should be easy for future students or instructors to update when data files change.  |
| Reliability     | Deployment instructions should reduce common GitHub Pages misconfiguration issues.        |
| Scope Control   | Documentation should not introduce new services, paid tools, analytics, or backend setup. |

## Execution Checklist

- [x] Read Unit 4 functional design artifacts.
- [x] Read current `README.md`.
- [x] Read current `DEPLOYMENT.md`.
- [x] Identify documentation-specific NFR concerns.
- [x] Create this NFR requirements plan with clarification questions.
- [x] Collect and validate answers.
- [x] Generate `aidlc-docs/construction/student-documentation/nfr-requirements/nfr-requirements.md`.
- [x] Generate `aidlc-docs/construction/student-documentation/nfr-requirements/tech-stack-decisions.md`.
- [x] Update plan checkboxes after artifact generation.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Log completion and approval prompt in `aidlc-docs/audit.md`.

## Planning Questions

### Question 1: Primary Documentation Quality Target

What quality target should guide the README and deployment guide?

A. Beginner-friendly, step-by-step docs with concrete commands and exact file paths.  
B. Compact reference docs for experienced developers.  
C. Instructor-maintainer docs focused on class logistics.  
X. Other.

[Answer]: A

Recommendation: A. This best fits a baseline student portfolio template.

### Question 2: Accuracy And Verification Approach

How strict should the documentation accuracy requirements be?

A. Docs must match current code paths and commands; verify build and lint references but defer test command documentation until Unit 5.  
B. Include future test commands now even before Unit 5 adds test coverage.  
C. Keep verification guidance vague and generic.  
X. Other.

[Answer]: A

Recommendation: A. It avoids promising tests before the testing unit exists.

### Question 3: Maintainability Approach

How should the documentation stay maintainable for future student cohorts?

A. Keep README and DEPLOYMENT as plain Markdown with clear sections and stable file path references.  
B. Split the documentation into many small files under a new docs folder now.  
C. Generate documentation from code comments.  
X. Other.

[Answer]: A

Recommendation: A. Two clear Markdown files are easiest for beginners and instructors to maintain.

### Question 4: Deployment Documentation Reliability

How much GitHub Pages failure prevention should the deployment guide include?

A. Explain automatic base path behavior and common GitHub Pages failures in `DEPLOYMENT.md`.  
B. Only link to GitHub Pages documentation.  
C. Only mention deployment briefly in `README.md`.  
X. Other.

[Answer]: A

Recommendation: A. This addresses the most likely beginner deployment issues.

### Question 5: Security And Operations Scope

What operational scope should this documentation unit cover?

A. No secrets, backend services, analytics, or paid tooling; document static GitHub Pages only.  
B. Add analytics and monitoring documentation now.  
C. Add backend or contact form service setup documentation now.  
X. Other.

[Answer]: A

Recommendation: A. This keeps the template simple and safe for student use.

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
