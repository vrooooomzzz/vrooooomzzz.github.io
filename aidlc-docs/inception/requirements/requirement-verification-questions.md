# Requirements Verification Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe your preference after the `[Answer]:` tag.

## Question 1

What should be the primary outcome of this work?

A) Create documentation only, including reverse engineering and GitHub Pages setup guide
B) Refactor the code into a student-friendly template and update the documentation
C) Refactor code, update documentation, and add lightweight tests
X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Question 2

How far should the maintainability refactor go?

A) Standard template refactor: move editable content into typed data files, share navigation config, and share scroll utilities
B) Minimal refactor: keep most component structure, only improve obvious duplication and docs
C) Comprehensive refactor: add typed data files, reusable section/card components, shared config, improved accessibility labels, and stronger lint/test setup
X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Question 3

How should GitHub Pages base path configuration work for students?

A) Keep it explicit in `vite.config.ts` and document how students change `base`
B) Use an environment variable such as `VITE_BASE_PATH`, with a documented fallback
C) Use GitHub repository metadata in the workflow to generate the base path automatically where possible
X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Question 4

What kind of student setup guide should be produced?

A) Beginner-friendly full guide: install tools, clone/fork, customize content/assets, run locally, deploy, troubleshoot
B) Concise deployment guide only: focus on GitHub Pages and build commands
C) Two guides: a quick-start README plus a detailed deployment/customization guide
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 5

Should the template keep the current owner's content as example data?

A) Yes, keep current content as realistic example data and clearly tell students what to replace
B) Replace current content with neutral placeholder student content
C) Keep current visual layout but remove most personal-specific content
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 6

Should test coverage be added now?

A) Yes, add lightweight smoke tests for rendering, navigation config, and key template data
B) No automated tests now; provide manual verification checklist only
C) Add testing instructions and dependencies only, but no test files yet
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 7

Should security extension rules be enforced for this project?

A) Yes - enforce all SECURITY rules as blocking constraints (recommended for production-grade applications)
B) No - skip all SECURITY rules (suitable for PoCs, prototypes, and experimental projects)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 8

Should property-based testing (PBT) rules be enforced for this project?

A) Yes - enforce all PBT rules as blocking constraints (recommended for projects with business logic, data transformations, serialization, or stateful components)
B) Partial - enforce PBT rules only for pure functions and serialization round-trips (suitable for projects with limited algorithmic complexity)
C) No - skip all PBT rules (suitable for simple CRUD applications, UI-only projects, or thin integration layers with no significant business logic)
X) Other (please describe after [Answer]: tag below)

[Answer]: C
