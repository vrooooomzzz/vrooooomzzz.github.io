# Component Dependencies - Runtime Template Selector

## Dependency Matrix

| Component | Depends on | Communicates by |
|---|---|---|
| `App` | Source default, registry, persistence helper, layout and route hooks | State and typed shell props |
| Template selection helper | Registry IDs and optional browser storage | Pure return values and guarded storage side effects |
| `PortfolioStyleSelector` | Template registry metadata and shell callback | Typed selection callback |
| Engineering shell and `Navbar` | Shared selector and shell props | Props only |
| Neutral shell | Shared selector and shell props | Props only |
| Business shell | Shared selector and shell props | Props only |
| Tests | App, registry, storage, and shell controls | DOM interactions and assertions |

## Communication Flow

1. `App` requests the initial ID from the selection helper using `selectedTemplateId` as the default.
2. The helper returns a valid stored choice, the valid source default, or Engineering.
3. `App` resolves the matching template and renders its shell without changing existing route or layout hooks.
4. The shell renders `PortfolioStyleSelector` with the active ID and selection callback.
5. The visitor chooses a menu item; the selector emits its typed ID.
6. `App` persists the ID and updates active template state.
7. React replaces the shell and section presentation while preserving App-owned route and layout state.

## Coupling Rules

- Shells never import `selectedTemplateId` or browser storage.
- The shared selector never manipulates route, layout, color mode, or content.
- Template components remain unaware of persistence details.
- Registry metadata remains the single runtime source for template options and labels.
- No template-specific CSS may style another template's shell.

## Failure Flow

- Missing stored value: use the source default.
- Invalid stored value: use Engineering.
- Storage read/write exception: continue with valid in-memory state.
- Unknown requested ID: resolve Engineering before rendering.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Text alternative | Communication and failure flows provided as ordered text |
| Markdown structure | Valid headings, lists, and tables |
