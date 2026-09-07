# Logical Components - Template Data And Shared Types

## Overview

Unit 1 logical components are source-code modules and test-support concepts. There are no queues, caches, circuit breakers, runtime services, databases, or infrastructure components for this unit.

## Logical Component 1: Shared Type Model

- **Location**: `src/types/portfolio.ts`
- **Purpose**: Define the contract for all portfolio data.
- **Responsibilities**:
  - Export core entity types such as `Portfolio`, `Profile`, `NavigationItem`, `ExternalLink`, and section entry types.
  - Define valid `SectionId` values.
  - Support `satisfies` checks in data modules.
- **NFR Mapping**:
  - Type safety
  - Maintainability
  - Build-time reliability

## Logical Component 2: Focused Data Modules

- **Location**: `src/data/*.ts`
- **Purpose**: Store student-editable portfolio content by content area.
- **Responsibilities**:
  - Keep content explicit and beginner-readable.
  - Import local assets where needed.
  - Export typed data objects and arrays.
- **NFR Mapping**:
  - Beginner usability
  - Maintainability
  - Static hosting compatibility

## Logical Component 3: Portfolio Aggregator

- **Location**: `src/data/portfolio.ts`
- **Purpose**: Provide one complete portfolio data object.
- **Responsibilities**:
  - Import focused data modules.
  - Export `portfolio`.
  - Preserve a clear app-level data entrypoint.
- **NFR Mapping**:
  - Low coupling
  - Maintainability
  - Component integration readiness

## Logical Component 4: Section Configuration

- **Location**: `src/data/navigation.ts`
- **Purpose**: Define section order, labels, known IDs, and enabled flags.
- **Responsibilities**:
  - Export navigation items.
  - Represent optional section visibility.
  - Maintain the section source of truth for app shell, navbar, and tests.
- **NFR Mapping**:
  - Reliability
  - Student-friendly optionality
  - Testability

## Logical Component 5: Asset Reference Layer

- **Location**: Focused data files and optional asset index modules.
- **Purpose**: Keep local media references build-valid and easy to replace.
- **Responsibilities**:
  - Use Vite-compatible imports.
  - Group gallery/certificate assets if that improves readability.
  - Avoid fragile public absolute paths for bundled assets.
- **NFR Mapping**:
  - Build reliability
  - Student usability

## Logical Component 6: Link Metadata Model

- **Location**: `ExternalLink` type and link fields in data files.
- **Purpose**: Ensure external actions are renderable and accessible.
- **Responsibilities**:
  - Require `label`, `href`, and `ariaLabel`.
  - Support social links, project actions, video links, and certificate actions.
  - Avoid component-generated accessibility guesses.
- **NFR Mapping**:
  - Accessibility metadata
  - Testability
  - Reusable UI readiness

## Logical Component 7: Data Validation Test Support

- **Location**: Later Unit 5 test files and optional pure helper module.
- **Purpose**: Validate semantic data requirements.
- **Responsibilities**:
  - Validate required profile fields.
  - Validate unique known section IDs.
  - Validate external link metadata.
  - Validate project action presence.
  - Validate certificate metadata when present.
- **NFR Mapping**:
  - Testability
  - Reliability
  - Accessibility metadata

## Logical Component Interaction

```text
Shared Type Model
  -> Focused Data Modules
  -> Portfolio Aggregator
  -> Later App/Component Units

Section Configuration
  -> Portfolio Aggregator
  -> Later App/Navbar Units
  -> Data Validation Tests

Asset Reference Layer
  -> Focused Data Modules
  -> Vite Build

Link Metadata Model
  -> Focused Data Modules
  -> Later UI Components
  -> Data Validation Tests
```

## Excluded Logical Components

These are intentionally not part of Unit 1:

- Runtime API service.
- Data persistence layer.
- CMS integration.
- Link reachability checker.
- Authentication or authorization layer.
- Runtime fallback manager for incomplete required data.

## NFR Coverage Matrix

| NFR Concern | Logical Components |
|---|---|
| Maintainability | Shared Type Model, Focused Data Modules, Portfolio Aggregator |
| Testability | Section Configuration, Link Metadata Model, Data Validation Test Support |
| Accessibility Metadata | Link Metadata Model, Data Validation Test Support |
| Build Reliability | Asset Reference Layer, Shared Type Model |
| Beginner Usability | Focused Data Modules, Section Configuration |
| Static Hosting | Focused Data Modules, Portfolio Aggregator, Asset Reference Layer |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
