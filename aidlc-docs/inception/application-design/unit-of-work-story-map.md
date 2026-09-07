# Unit Of Work Story Map

## Story Mapping Strategy

Each story is assigned to one primary unit and may include secondary supporting units where implementation or documentation crosses boundaries.

## Story To Unit Map

| Story | Title | Primary Unit | Supporting Units |
|---|---|---|---|
| US-01 | Understand the template at first glance | Unit 4: Student Documentation | Unit 1, Unit 3, Unit 5 |
| US-02 | Identify editable content files | Unit 1: Template Data And Shared Types | Unit 4, Unit 5 |
| US-03 | Edit profile and social identity safely | Unit 1: Template Data And Shared Types | Unit 2, Unit 5 |
| US-04 | Edit resume-style section content safely | Unit 1: Template Data And Shared Types | Unit 2, Unit 5 |
| US-05 | Replace visual and certificate assets | Unit 1: Template Data And Shared Types | Unit 2, Unit 4, Unit 5 |
| US-06 | Keep section navigation consistent | Unit 1: Template Data And Shared Types | Unit 2, Unit 5 |
| US-07 | Navigate the portfolio on desktop and mobile | Unit 2: Component Refactor And Shared UI Utilities | Unit 1, Unit 5 |
| US-08 | View projects and external proof links | Unit 2: Component Refactor And Shared UI Utilities | Unit 1, Unit 5 |
| US-09 | Contact the portfolio owner | Unit 2: Component Refactor And Shared UI Utilities | Unit 1, Unit 5 |
| US-10 | Run the project locally | Unit 4: Student Documentation | Unit 5 |
| US-11 | Verify the portfolio before publishing | Unit 5: Lightweight Tests And Verification | Unit 4 |
| US-12 | Deploy to GitHub Pages with minimal manual setup | Unit 3: GitHub Pages Deployment Configuration | Unit 4, Unit 5 |
| US-13 | Troubleshoot common deployment failures | Unit 4: Student Documentation | Unit 3, Unit 5 |
| US-14 | Preserve accessibility and responsive usability | Unit 2: Component Refactor And Shared UI Utilities | Unit 5 |
| US-15 | Maintain simple reusable code structure | Unit 2: Component Refactor And Shared UI Utilities | Unit 1 |
| US-16 | Validate template data and app rendering with tests | Unit 5: Lightweight Tests And Verification | Unit 1, Unit 2 |

## Unit Coverage Summary

### Unit 1: Template Data And Shared Types

- **Primary Stories**: US-02, US-03, US-04, US-05, US-06
- **Supporting Stories**: US-01, US-07, US-08, US-09, US-15, US-16
- **Coverage**: Editable content, shared types, navigation source of truth, asset data.

### Unit 2: Component Refactor And Shared UI Utilities

- **Primary Stories**: US-07, US-08, US-09, US-14, US-15
- **Supporting Stories**: US-03, US-04, US-05, US-06, US-16
- **Coverage**: UI data consumption, shared utilities, accessible labels, reusable patterns.

### Unit 3: GitHub Pages Deployment Configuration

- **Primary Stories**: US-12
- **Supporting Stories**: US-01, US-13
- **Coverage**: Vite base path, GitHub Actions Pages deployment.

### Unit 4: Student Documentation

- **Primary Stories**: US-01, US-10, US-13
- **Supporting Stories**: US-02, US-05, US-11, US-12
- **Coverage**: README, deployment guide, setup, customization, troubleshooting.

### Unit 5: Lightweight Tests And Verification

- **Primary Stories**: US-11, US-16
- **Supporting Stories**: US-01, US-02, US-03, US-04, US-05, US-06, US-07, US-08, US-09, US-12, US-13, US-14
- **Coverage**: Smoke rendering, data/config validation, command verification.

## Completeness Check

- All 16 user stories have primary units.
- All implementation acceptance criteria are covered by at least one unit.
- Unit dependencies align with the approved sequential construction strategy.
- The project remains a single deployable static app.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
