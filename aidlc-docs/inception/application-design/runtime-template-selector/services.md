# Services - Runtime Template Selector

## Template Selection Service

This is a small browser utility boundary, not a backend service.

### Responsibilities

- Validate unknown IDs against the typed registry.
- Resolve the source default when no stored choice exists.
- Resolve Engineering when stored or requested state is invalid.
- Read and write one stable local-storage key with safe failure handling.

### Exclusions

- No API, database, authentication, cookie, server session, or URL parameter.
- No duplicated template metadata outside the registry.

## App Orchestration Service

`PortfolioApp` coordinates selection with existing state:

1. Initialize active template ID once.
2. Resolve the active template object.
3. Keep `usePortfolioLayout`, hash state, and active-section state mounted.
4. Pass typed selection props into the active shell.
5. Persist and apply a new choice synchronously after menu selection.

## Presentation Service

`PortfolioStyleSelector` is presentation-only:

- Reads options from the registry.
- Displays labels and active state.
- Emits a typed ID.
- Does not read local storage or manipulate hashes.

## Documentation Service

- `README.md` explains build-time default versus browser-persisted visitor choice.
- Active and current reverse-engineering AI-DLC docs describe the delivered runtime architecture.
- Historical and superseded artifacts remain unchanged as audit history.

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Existing browser-only state introduces no new trust boundary. |
| Property-Based Testing | Disabled | Three finite IDs and deterministic fallbacks need example-based tests only. |
