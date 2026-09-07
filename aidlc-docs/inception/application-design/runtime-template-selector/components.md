# Components - Runtime Template Selector

## `PortfolioApp`

- **Location**: `src/App.tsx`
- **Purpose**: Own active runtime template state alongside existing route and layout state.
- **Responsibilities**:
  - Initialize from a valid stored choice or the source default.
  - Resolve the active `PortfolioTemplate` from the registry.
  - Persist visitor selections and pass selection state into the active shell.
  - Preserve existing hash, journal, layout, active-section, and rendered-content orchestration.
- **Interface**: Accepts an optional initial template for deterministic tests; production uses persisted/default resolution.

## Template Selection Utilities

- **Location**: `src/utils/templateSelection.ts` with registry resolution in `src/templates/index.ts`.
- **Purpose**: Validate template IDs, resolve safe fallbacks, and isolate local-storage access.
- **Responsibilities**:
  - Expose the three-template registry.
  - Narrow unknown values to `PortfolioTemplateId`.
  - Read and write the stable browser-storage key.
  - Fall back to Engineering for invalid stored or requested values.

## `PortfolioStyleSelector`

- **Location**: `src/components/shared/PortfolioStyleSelector.tsx`
- **Purpose**: Provide one accessible menu for choosing Engineering, Neutral, or Business.
- **Responsibilities**:
  - Render a compact icon button with the accessible label `Portfolio style`.
  - Render exactly the registry's three template labels.
  - Identify the active item semantically and visually.
  - Invoke the supplied callback without owning persistence or route state.
  - Use existing Chakra Menu, React Icons, theme tokens, and visible focus behavior.
- **Interface**: Active template ID, selection callback, and stable test-ID prefix.

## `PortfolioShellProps`

- **Location**: `src/templates/types.ts`
- **Purpose**: Carry shared selection state from App to any template shell.
- **Additions**:
  - `activeTemplateId: PortfolioTemplateId`
  - `onSelectTemplate: (templateId: PortfolioTemplateId) => void`

## Shell Integrations

### Engineering

- `EngineeringShell` forwards selector props to `Navbar`.
- `Navbar` places the shared selector in its persistent header control group at every responsive width.

### Neutral

- `NeutralShell` places the shared selector beside color and layout controls in the magazine masthead.
- Existing navigation drawer and editorial structure remain unchanged.

### Business

- `BusinessShell` places the shared selector beside color and layout controls in the report header.
- Existing contents drawer and report rail remain unchanged.

## Test And Documentation Components

- Registry tests validate the exact three choices and fallback.
- App tests validate switching, persistence, current state, route and layout preservation, and all-three-shell availability.
- README documents source defaults, visitor overrides, persistence, and reset behavior.

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | No enabled security extension applies. |
| Property-Based Testing | Disabled | Deterministic state and interaction tests are sufficient. |
