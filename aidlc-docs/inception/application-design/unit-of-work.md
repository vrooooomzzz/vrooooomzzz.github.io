# Unit Of Work

## Decomposition Strategy

The project remains one deployable React/Vite static app. Construction is decomposed into five focused logical units so implementation can happen in a safe dependency order while staying understandable for future contributors.

## Unit 1: Template Data And Shared Types

- **Purpose**: Create the typed content layer students will edit.
- **Primary Responsibilities**:
  - Define shared portfolio data types in `src/types/portfolio.ts`.
  - Create focused data files under `src/data/*`.
  - Create `src/data/portfolio.ts` aggregator.
  - Preserve current owner content as realistic example data.
  - Keep asset imports Vite-compatible.
- **Primary Files**:
  - `src/types/portfolio.ts`
  - `src/data/profile.ts`
  - `src/data/navigation.ts`
  - `src/data/about.ts`
  - `src/data/education.ts`
  - `src/data/experience.ts`
  - `src/data/awards.ts`
  - `src/data/projects.ts`
  - `src/data/gallery.ts`
  - `src/data/videos.ts`
  - `src/data/skills.ts`
  - `src/data/certificates.ts`
  - `src/data/portfolio.ts`
- **Owner Profile**: Contributor comfortable with TypeScript and content modeling.
- **Completion Criteria**:
  - All existing content is represented in typed data modules.
  - Navigation IDs are unique and complete.
  - Data modules compile under strict TypeScript.

## Unit 2: Component Refactor And Shared UI Utilities

- **Purpose**: Refactor UI to consume typed data and reduce meaningful duplication.
- **Primary Responsibilities**:
  - Refactor `App`, `Navbar`, and section components to use shared data/config.
  - Add shared scroll/navigation utilities.
  - Add contact/media helpers.
  - Add moderate reusable UI components such as `SectionShell`, `ContentCard`, and `ExternalAction` where useful.
  - Improve accessible labels for links and controls.
- **Primary Files**:
  - `src/App.tsx`
  - `src/components/*`
  - `src/components/shared/*`
  - `src/utils/scroll.ts`
  - `src/utils/contact.ts`
  - `src/utils/media.ts`
  - `src/utils/animation.ts`
- **Owner Profile**: Contributor comfortable with React, Chakra UI, and accessibility basics.
- **Completion Criteria**:
  - Existing portfolio sections still render.
  - Components consume data/config instead of inline content arrays where planned.
  - Duplicated scroll helpers are replaced.
  - Obvious accessible-name gaps are improved.

## Unit 3: GitHub Pages Deployment Configuration

- **Purpose**: Make deployment easier for student forks.
- **Primary Responsibilities**:
  - Update Vite base path handling to read `VITE_BASE_PATH` with `/` fallback.
  - Update GitHub Actions to derive and pass the repository Pages base path.
  - Preserve support for `username.github.io` root deployments.
- **Primary Files**:
  - `vite.config.ts`
  - `.github/workflows/deploy.yml`
- **Owner Profile**: Contributor comfortable with Vite and GitHub Actions.
- **Completion Criteria**:
  - Local development works with `/`.
  - GitHub Actions passes repository-derived base path.
  - Production build still succeeds.

## Unit 4: Student Documentation

- **Purpose**: Create beginner-friendly setup, customization, deployment, and troubleshooting guidance.
- **Primary Responsibilities**:
  - Rewrite README as a student-first quick start.
  - Rewrite or expand deployment guide.
  - Explain editable data files and asset replacement.
  - Explain GitHub Pages settings and base path behavior.
  - Include verification and troubleshooting steps.
- **Primary Files**:
  - `README.md`
  - `DEPLOYMENT.md`
- **Owner Profile**: Contributor comfortable writing beginner documentation.
- **Completion Criteria**:
  - README no longer contains unrelated Vite starter content.
  - Setup guide covers prerequisites, install, run, customize, test, build, and deploy.
  - Deployment guide covers repository Pages and user/organization Pages.

## Unit 5: Lightweight Tests And Verification

- **Purpose**: Add automated guardrails for app render, navigation config, and key template data.
- **Primary Responsibilities**:
  - Add Vitest and React Testing Library setup.
  - Add `npm run test`.
  - Add app smoke render test.
  - Add navigation config tests.
  - Add required portfolio data tests.
  - Update verification documentation.
- **Primary Files**:
  - `package.json`
  - Test config file if needed
  - `src/**/*.test.ts`
  - `src/**/*.test.tsx`
  - Build/test docs under `aidlc-docs/construction/build-and-test/`
- **Owner Profile**: Contributor comfortable with TypeScript tests and React Testing Library.
- **Completion Criteria**:
  - Test command exists.
  - Tests pass locally.
  - Tests avoid external network calls and browser automation.

## Recommended Sequence

1. Unit 1: Template Data And Shared Types
2. Unit 2: Component Refactor And Shared UI Utilities
3. Unit 3: GitHub Pages Deployment Configuration
4. Unit 4: Student Documentation
5. Unit 5: Lightweight Tests And Verification

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
