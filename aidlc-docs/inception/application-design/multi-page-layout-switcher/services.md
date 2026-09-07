# Services - Multi-Page Layout Switcher

## Service Layer Overview

This feature does not need backend services. The service layer is a lightweight browser-side orchestration layer made of one hook/controller and pure helper utilities.

## Portfolio Layout Controller

**Recommended implementation surface**: `src/hooks/usePortfolioLayout.ts` or `src/utils/portfolioLayout.ts`.

**Purpose**: Coordinate layout mode, navigation mode, hash page state, and persistence.

**Responsibilities**:

- Initialize layout mode from localStorage.
- Keep layout mode changes persisted.
- Initialize active page from `window.location.hash` when in multi-page mode.
- Listen for hash changes so browser back and forward can update the active page.
- Provide mode-aware navigation callbacks to `Navbar`.
- Keep `App` free from low-level hash and storage parsing details.

**Interactions**:

- Receives enabled section IDs from `App`.
- Receives scroll-active section from `useActiveSection`.
- Calls existing `scrollToSection` in single-page mode.
- Uses layout helper utilities for storage and hash parsing.
- Returns UI-ready state and callbacks to `App`.

## Layout Storage Service

**Recommended implementation surface**: pure functions in the same utility module as the layout controller.

**Purpose**: Encapsulate safe localStorage access.

**Responsibilities**:

- Read a saved layout mode.
- Ignore invalid saved values.
- Write only valid layout mode values.
- Catch storage exceptions so the app never crashes because storage is unavailable.

**Stored data**:

- Key: a fixed layout mode preference key.
- Value: one of the valid layout mode strings.
- No personal data, analytics identifiers, or secrets.

## Hash Page Service

**Recommended implementation surface**: pure functions in the same utility module as the layout controller.

**Purpose**: Encapsulate GitHub Pages-safe page hashes.

**Responsibilities**:

- Create page hashes such as `#/projects`.
- Parse page hashes into enabled `SectionId` values.
- Reject unsupported or disabled section IDs.
- Provide safe fallback values for unknown hashes.

**Routing rule**:

- Multi-page mode uses `#/sectionId`.
- Single-page mode keeps standard section anchors such as `#projects`.
- No path-based URLs are required.

## UI Orchestration Service

**Recommended implementation surface**: `App.tsx` composition.

**Purpose**: Wire layout state to rendered UI.

**Responsibilities**:

- Select all-section rendering or active-section rendering.
- Pass the correct active section to `Navbar`.
- Pass `layoutMode`, `onToggleLayoutMode`, `onNavigate`, and `getNavigationHref` to `Navbar`.
- Keep section components mode-agnostic.

## Testing Service Boundary

**Recommended implementation surface**: Vitest and React Testing Library.

**Purpose**: Validate behavior without browser automation or network calls.

**Responsibilities**:

- Test pure helpers for storage and hash parsing.
- Test the app-level mode switch behavior.
- Test single-page mode renders multiple enabled sections.
- Test multi-page mode renders the selected section.
- Test invalid hash fallback where practical in JSDOM.

## Non-Goals

- No backend route service.
- No data fetching service.
- No CMS service.
- No authentication or user account service.
- No analytics service.
- No React Router dependency.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | No enabled security extension applies. The design still avoids secrets and backend services. |
| Property-Based Testing | Disabled | Example-based tests remain the approved verification approach. |
