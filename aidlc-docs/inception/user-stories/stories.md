# User Stories

## Story Approach

- **Breakdown**: Hybrid user journey-based stories with feature-based support stories.
- **Personas**: Student Template User, Portfolio Visitor, Template Maintainer.
- **Acceptance Criteria Style**: Mixed. User workflow stories use Given/When/Then. Technical support stories use concise checklist criteria.
- **Priority Order**: Student journey order: discover, customize, run locally, test, deploy, troubleshoot.

## Story Summary

| ID | Title | Primary Persona | Priority |
|---|---|---|---|
| US-01 | Understand the template at first glance | Student Template User | High |
| US-02 | Identify editable content files | Student Template User | High |
| US-03 | Edit profile and social identity safely | Student Template User | High |
| US-04 | Edit resume-style section content safely | Student Template User | High |
| US-05 | Replace visual and certificate assets | Student Template User | High |
| US-06 | Keep section navigation consistent | Template Maintainer | High |
| US-07 | Navigate the portfolio on desktop and mobile | Portfolio Visitor | High |
| US-08 | View projects and external proof links | Portfolio Visitor | Medium |
| US-09 | Contact the portfolio owner | Portfolio Visitor | Medium |
| US-10 | Run the project locally | Student Template User | High |
| US-11 | Verify the portfolio before publishing | Student Template User | High |
| US-12 | Deploy to GitHub Pages with minimal manual setup | Student Template User | High |
| US-13 | Troubleshoot common deployment failures | Student Template User | High |
| US-14 | Preserve accessibility and responsive usability | Portfolio Visitor | Medium |
| US-15 | Maintain simple reusable code structure | Template Maintainer | High |
| US-16 | Validate template data and app rendering with tests | Template Maintainer | High |

## US-01: Understand The Template At First Glance

**As a** Student Template User,  
**I want** a beginner-friendly README that explains what this project is and how to start,  
**so that** I can use the portfolio template without needing prior Vite or GitHub Pages experience.

### Acceptance Criteria

Given I open the repository README,  
When I read the first sections,  
Then I can understand the purpose of the template, required tools, and the first setup command.

Given I am new to the project,  
When I look for customization instructions,  
Then the README points me to the files and guide sections I should edit first.

### INVEST Notes

- **Independent**: Can be completed as documentation work.
- **Valuable**: Reduces beginner confusion.
- **Testable**: README includes required setup, customization, and deployment sections.

## US-02: Identify Editable Content Files

**As a** Student Template User,  
**I want** portfolio content stored in clearly named data files,  
**so that** I can update my information without editing layout-heavy JSX.

### Acceptance Criteria

Given I want to change profile, education, experience, awards, projects, videos, skills, certificates, or contact details,  
When I inspect the source tree,  
Then I can find clearly named data/config files for those content areas.

Given I edit a content field incorrectly,  
When TypeScript checks run,  
Then type errors help me identify the mistake.

### INVEST Notes

- **Independent**: Content data can be extracted without changing visual theme.
- **Valuable**: Makes the template student-friendly.
- **Testable**: Data files exist and components consume them.

## US-03: Edit Profile And Social Identity Safely

**As a** Student Template User,  
**I want** profile identity, social links, email, location, and hero highlights in typed data,  
**so that** I can personalize the first impression of my portfolio safely.

### Acceptance Criteria

Given I edit profile data,  
When the app renders,  
Then the hero, navbar, and contact sections display my updated information.

Given I update GitHub, LinkedIn, email, or other links,  
When I open the portfolio,  
Then the relevant links point to my updated destinations.

### INVEST Notes

- **Independent**: Can be validated through rendered text and links.
- **Valuable**: Hero/contact identity is the most visible student customization.
- **Testable**: Tests or manual checks can assert required profile fields.

## US-04: Edit Resume-Style Section Content Safely

**As a** Student Template User,  
**I want** education, experience, awards, projects, skills, videos, and gallery content in typed arrays,  
**so that** I can replace example content with my own achievements.

### Acceptance Criteria

Given I update an education or experience entry,  
When the site renders,  
Then the corresponding section shows the updated card content.

Given I add a project with technologies and external links,  
When the project section renders,  
Then the project appears with readable tags and working actions.

### INVEST Notes

- **Independent**: Each section can consume exported data.
- **Valuable**: Covers the core student resume content.
- **Testable**: Data shape and section rendering can be verified.

## US-05: Replace Visual And Certificate Assets

**As a** Student Template User,  
**I want** clear instructions and data references for images, logos, gallery photos, and certificates,  
**so that** I can replace example assets without breaking production builds.

### Acceptance Criteria

Given I replace an image or certificate asset,  
When I run the build,  
Then Vite resolves the asset successfully.

Given I add a certificate PDF,  
When the skills/certificates section renders,  
Then the certificate metadata and preview/open action are available.

### INVEST Notes

- **Independent**: Asset references can be documented and typed.
- **Valuable**: Students often personalize visuals first.
- **Testable**: Build and data validation confirm asset references.

## US-06: Keep Section Navigation Consistent

**As a** Template Maintainer,  
**I want** section IDs, labels, and order defined once,  
**so that** navigation, active section tracking, and rendered sections stay synchronized.

### Acceptance Criteria

- Navigation config contains unique section IDs.
- App section tracking uses the same section config as the navbar.
- Desktop and mobile navigation render from the same config.
- Adding or removing a section requires changing one shared source of truth.

### INVEST Notes

- **Independent**: Shared navigation config can be implemented separately.
- **Valuable**: Prevents template drift.
- **Testable**: Tests can assert uniqueness and expected IDs.

## US-07: Navigate The Portfolio On Desktop And Mobile

**As a** Portfolio Visitor,  
**I want** clear desktop and mobile navigation,  
**so that** I can move to the portfolio section I care about.

### Acceptance Criteria

Given I am using a desktop viewport,  
When I click a navigation link,  
Then the page scrolls smoothly to the matching section.

Given I am using a mobile viewport,  
When I open the menu and select a section,  
Then the drawer closes and the page scrolls to that section.

### INVEST Notes

- **Independent**: Navigation behavior can be validated apart from content changes.
- **Valuable**: Visitors need quick scanning.
- **Testable**: Manual or component tests can verify section config and controls.

## US-08: View Projects And External Proof Links

**As a** Portfolio Visitor,  
**I want** project cards with clear external actions,  
**so that** I can inspect the student's work and supporting evidence.

### Acceptance Criteria

Given I view the projects section,  
When I inspect a project card,  
Then I can see title, description, technologies, and external action buttons.

Given I use assistive technology,  
When I focus an external project action,  
Then the action has a meaningful accessible name.

### INVEST Notes

- **Independent**: Project data and buttons can be checked directly.
- **Valuable**: Projects are central portfolio evidence.
- **Testable**: Link labels and URLs can be validated.

## US-09: Contact The Portfolio Owner

**As a** Portfolio Visitor,  
**I want** a simple contact form and social links,  
**so that** I can reach the student without a backend service.

### Acceptance Criteria

Given I enter name, email, subject, and message,  
When I submit the contact form,  
Then my email client opens with a prefilled mailto message.

Given I click a social/contact link,  
When the link opens,  
Then it points to the portfolio owner's configured profile or email address.

### INVEST Notes

- **Independent**: Contact remains static-site friendly.
- **Valuable**: Supports recruiter/collaborator outreach.
- **Testable**: Mailto composition and link data can be checked.

## US-10: Run The Project Locally

**As a** Student Template User,  
**I want** setup instructions for local development,  
**so that** I can preview my changes before publishing.

### Acceptance Criteria

Given I have Git, Node.js 20 or newer, npm, and the repository,  
When I follow the setup guide,  
Then I can install dependencies and start the Vite dev server.

Given the dev server is running,  
When I edit content data,  
Then I can preview my changes locally.

### INVEST Notes

- **Independent**: Local setup guide can be validated with commands.
- **Valuable**: Students need fast feedback before deploy.
- **Testable**: `npm install` and `npm run dev` instructions are present.

## US-11: Verify The Portfolio Before Publishing

**As a** Student Template User,  
**I want** clear build, lint, and test commands,  
**so that** I can catch mistakes before deploying to GitHub Pages.

### Acceptance Criteria

Given I finish customizing content,  
When I run the documented verification commands,  
Then lint, tests, and production build can be run locally.

Given a required data field is missing or invalid,  
When tests or type checks run,  
Then the issue is caught before deployment.

### INVEST Notes

- **Independent**: Verification scripts are distinct from deployment.
- **Valuable**: Prevents broken student portfolios.
- **Testable**: Scripts exist and run.

## US-12: Deploy To GitHub Pages With Minimal Manual Setup

**As a** Student Template User,  
**I want** GitHub Pages deployment to use repository metadata where possible,  
**so that** I do not have to manually understand Vite base paths before publishing.

### Acceptance Criteria

Given I push to the main branch,  
When GitHub Actions runs,  
Then it builds and deploys the site to GitHub Pages.

Given my repository is not named `username.github.io`,  
When deployment builds,  
Then the Vite base path is configured for the repository page path where possible.

Given my repository is named `username.github.io`,  
When deployment builds,  
Then the site can deploy at the root path.

### INVEST Notes

- **Independent**: Deployment config can be updated and documented.
- **Valuable**: GitHub Pages base paths are a common student blocker.
- **Testable**: Workflow and docs can be inspected; build can run locally with base path settings.

## US-13: Troubleshoot Common Deployment Failures

**As a** Student Template User,  
**I want** troubleshooting guidance for 404s, missing assets, wrong base paths, failed builds, and Node version issues,  
**so that** I can recover when deployment does not work the first time.

### Acceptance Criteria

Given my deployed page returns 404,  
When I read the deployment guide,  
Then I can check Pages source, workflow status, repository name, and base path.

Given assets are missing after deployment,  
When I read troubleshooting guidance,  
Then I can identify base path or asset reference issues.

### INVEST Notes

- **Independent**: Troubleshooting docs can be added without code changes.
- **Valuable**: Reduces support friction.
- **Testable**: Guide includes named failure modes and remedies.

## US-14: Preserve Accessibility And Responsive Usability

**As a** Portfolio Visitor,  
**I want** the portfolio to remain readable and navigable on common devices and with accessible labels,  
**so that** I can review the student's work comfortably.

### Acceptance Criteria

- External icon-only links have accessible labels.
- Interactive project, gallery, certificate, menu, and contact controls have meaningful labels.
- Existing responsive layout behavior is preserved.
- The refactor does not remove image alt text.

### INVEST Notes

- **Independent**: Accessibility improvements can be validated by inspection and smoke tests.
- **Valuable**: Improves visitor trust and usability.
- **Testable**: Labels and alt text can be checked.

## US-15: Maintain Simple Reusable Code Structure

**As a** Template Maintainer,  
**I want** reusable helpers and components for repeated section patterns,  
**so that** future template updates stay small and understandable.

### Acceptance Criteria

- Repeated scroll helper logic is replaced by a shared utility or hook.
- Reusable components are introduced only where they reduce meaningful duplication.
- Components remain easy for students to trace from data to UI.
- Application code remains outside `aidlc-docs/`.

### INVEST Notes

- **Independent**: Helper and component refactors can be implemented incrementally.
- **Valuable**: Improves long-term maintainability.
- **Testable**: Repeated helper code is reduced and imports use shared utilities.

## US-16: Validate Template Data And App Rendering With Tests

**As a** Template Maintainer,  
**I want** lightweight automated tests for rendering, navigation config, and key template data,  
**so that** future changes do not silently break the template.

### Acceptance Criteria

- A test command is available in `package.json`.
- Tests verify the app renders without crashing.
- Tests verify navigation IDs are unique and include required sections.
- Tests verify required profile/template data fields are present.
- Tests do not require external network calls or browser automation.

### INVEST Notes

- **Independent**: Test setup can be added after or alongside refactor.
- **Valuable**: Provides guardrails for students and maintainers.
- **Testable**: Test command passes locally and in build/test instructions.

## Requirements Coverage

| Requirement Area | Covered By |
|---|---|
| Preserve sections and example content | US-03, US-04, US-05, US-07 |
| Extract editable content | US-02, US-03, US-04, US-05 |
| Shared types | US-02, US-03, US-04, US-16 |
| Centralized navigation | US-06, US-07, US-16 |
| Shared scroll behavior | US-07, US-15 |
| Reusable UI structure | US-15 |
| Accessibility labels | US-08, US-09, US-14 |
| GitHub Pages base path | US-12, US-13 |
| Beginner setup guide | US-01, US-10, US-13 |
| Student README cleanup | US-01 |
| Lightweight tests | US-11, US-16 |
| Static hosting model | US-09, US-12 |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
