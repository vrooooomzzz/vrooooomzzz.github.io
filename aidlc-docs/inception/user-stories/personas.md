# Personas

## Persona 1: Student Template User

- **Name**: Minh, the student portfolio builder.
- **Role**: Student or early-career developer using the repository as a baseline portfolio.
- **Goals**:
  - Replace example content with personal profile, education, experience, projects, skills, media, and contact details.
  - Run the site locally without confusion.
  - Deploy the portfolio to GitHub Pages.
  - Understand where to make changes without accidentally breaking layout code.
- **Motivations**:
  - Build a polished portfolio for internships, scholarships, jobs, or school applications.
  - Learn a practical React/Vite project structure.
  - Avoid getting stuck on deployment details.
- **Pain Points**:
  - New to GitHub Pages, Vite base paths, and GitHub Actions.
  - Can accidentally break JSX while editing text.
  - May not know which assets or links need replacement.
- **Relevant Stories**: US-01 through US-13, US-15, US-16.

## Persona 2: Portfolio Visitor

- **Name**: Linh, the portfolio reviewer.
- **Role**: Recruiter, mentor, teacher, peer, scholarship reviewer, or collaborator viewing the deployed site.
- **Goals**:
  - Quickly understand the student's profile, education, experience, projects, skills, and contact options.
  - Navigate the portfolio smoothly on desktop or mobile.
  - Open supporting links, videos, and certificates.
- **Motivations**:
  - Evaluate the student's readiness, interests, and communication clarity.
  - Find relevant evidence of technical ability and learning journey.
- **Pain Points**:
  - Poor navigation, missing labels, broken assets, or incorrect links reduce trust.
  - Mobile issues can make the portfolio hard to review.
- **Relevant Stories**: US-07, US-08, US-09, US-11, US-14.

## Persona 3: Template Maintainer

- **Name**: An, the template maintainer.
- **Role**: Developer maintaining the portfolio baseline for future students.
- **Goals**:
  - Keep content data, UI components, deployment configuration, and tests easy to maintain.
  - Preserve the current visual experience while improving code organization.
  - Provide clear documentation and guardrails for student forks.
- **Motivations**:
  - Reduce repeated support questions.
  - Make future enhancements safer.
  - Keep the template stable across GitHub Pages deployments.
- **Pain Points**:
  - Duplicated navigation IDs and helper functions can drift.
  - Hard-coded content makes template updates slow.
  - Missing tests make regressions harder to catch.
- **Relevant Stories**: US-03, US-04, US-05, US-06, US-10, US-12, US-13, US-15, US-16.

## Persona Coverage Summary

| Persona | Primary Needs Covered |
|---|---|
| Student Template User | Setup, customization, local development, testing, deployment, troubleshooting |
| Portfolio Visitor | Navigation, content clarity, media access, contact flow, accessibility |
| Template Maintainer | Typed data, shared config, reusable helpers/components, docs, tests, deployment stability |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
