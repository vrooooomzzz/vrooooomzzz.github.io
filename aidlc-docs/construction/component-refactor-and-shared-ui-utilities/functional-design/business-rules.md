# Business Rules - Component Refactor And Shared UI Utilities

## Navigation Rules

### BR-NAV-1: Enabled Sections Are The Rendering Source Of Truth

Only navigation entries with `enabled: true` should appear in the navbar and render on the page.

**Rationale**: Students should hide optional sections by editing data, not by deleting component code.

### BR-NAV-2: Section IDs Must Stay Typed

Scrolling, active-section tracking, section registry keys, and section root IDs should use `SectionId` where practical.

**Rationale**: Invalid section IDs should be caught by TypeScript or later tests.

### BR-NAV-3: Active Section Tracking Uses Enabled Order

The active-section hook should observe enabled section IDs in configured order.

**Rationale**: Disabled sections should not become active in navigation.

## Data Consumption Rules

### BR-DATA-1: No Student-Editable Inline Arrays In Components

Components should import portfolio data from `src/data/portfolio.ts` or focused data exports.

**Allowed exceptions**: Local UI state, form defaults, modal selected item state, and section component registries.

### BR-DATA-2: Data Modules Stay UI-Free

Data files must not import React, Chakra UI, component modules, or browser utilities.

**Rationale**: Students should be able to edit data without understanding UI internals.

### BR-DATA-3: Existing Example Content Is Preserved

The refactor should not intentionally change names, copy, images, links, certificates, skills, or section order.

**Rationale**: Unit 2 is a structural refactor, not a content rewrite.

## Shared Utility Rules

### BR-UTIL-1: Scroll Behavior Is Centralized

Smooth section scrolling should use a shared utility rather than repeated local functions.

### BR-UTIL-2: Mailto Construction Is Centralized

Contact form submission should use a shared helper that encodes subject and body.

### BR-UTIL-3: Media URL Construction Is Centralized

YouTube embed and watch URL generation should live in a media helper.

### BR-UTIL-4: Animation Delay Logic Is Centralized

Repeated `reveal-up delay-*` class selection may use a small helper.

## Shared UI Rules

### BR-UI-1: Extract Only Useful Shared Components

Create `SectionShell`, `ContentCard`, and `ExternalAction` only where they make the section code easier to read.

### BR-UI-2: Do Not Nest Decorative Cards Inside Cards

Shared components should avoid creating card-in-card page layouts. Cards remain for repeated items and functional surfaces.

### BR-UI-3: Preserve Existing Visual Tone

Shared components should preserve the current engineering-themed visual style, spacing, responsive behavior, and Chakra UI usage.

## Accessibility Rules

### BR-A11Y-1: Icon-Only Links Need Accessible Names

Social links, menu controls, certificate buttons, and modal actions must expose meaningful accessible labels.

### BR-A11Y-2: External Actions Use Data Labels

External links should use `ExternalLink.label` for visible text and `ExternalLink.ariaLabel` for accessible names where needed.

### BR-A11Y-3: Keyboard Interaction Must Be Preserved

Gallery and certificate interactive cards must remain keyboard usable.

## Lint And Verification Rules

### BR-LINT-1: Shared UI Helper Lint Errors Are In Scope

Existing lint errors in `src/components/ui/color-mode.tsx` and `src/components/ui/toaster.tsx` should be fixed in Unit 2.

### BR-LINT-2: Refactor Must Not Introduce New Type Or Lint Errors

Unit 2 code generation should run build and lint during verification.

## Out-Of-Scope Rules

- Do not add Vitest or React Testing Library in Unit 2.
- Do not change `vite.config.ts` or GitHub Actions in Unit 2.
- Do not rewrite README or `DEPLOYMENT.md` in Unit 2.
- Do not add runtime fetching, CMS integration, backend APIs, or databases.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
