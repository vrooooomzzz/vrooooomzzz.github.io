# Component Methods - Runtime Template Selector

## Template Registry And Persistence

```ts
const PORTFOLIO_TEMPLATE_STORAGE_KEY: string

function isPortfolioTemplateId(value: unknown): value is PortfolioTemplateId

function getPortfolioTemplate(templateId: PortfolioTemplateId | string): PortfolioTemplate

function getInitialPortfolioTemplateId(
  defaultTemplateId: PortfolioTemplateId,
  storage?: Pick<Storage, 'getItem'>,
): PortfolioTemplateId

function persistPortfolioTemplateId(
  templateId: PortfolioTemplateId,
  storage?: Pick<Storage, 'setItem'>,
): void
```

- Validation accepts only `engineering`, `neutral`, or `business`.
- Missing stored state uses the typed source default.
- Invalid stored or requested state resolves to Engineering.
- Unavailable browser storage fails safely without blocking rendering.

## App Orchestration

```ts
type PortfolioAppProps = {
  initialTemplate?: PortfolioTemplate
}

function PortfolioApp(props: PortfolioAppProps): JSX.Element

function selectTemplate(templateId: PortfolioTemplateId): void
```

- `PortfolioApp` initializes one active template ID and derives the active template.
- `selectTemplate` validates, persists, and updates state without remounting route or layout hooks.

## Shared Selector

```ts
type PortfolioStyleSelectorProps = {
  activeTemplateId: PortfolioTemplateId
  onSelectTemplate: (templateId: PortfolioTemplateId) => void
  testIdPrefix: string
}

function PortfolioStyleSelector(props: PortfolioStyleSelectorProps): JSX.Element
```

- The selector emits only typed IDs from the registry.
- The trigger has the accessible label `Portfolio style`.
- The active item exposes checked/current semantics through Chakra Menu controls.

## Shell Contract

```ts
type PortfolioShellProps = {
  activeSection: SectionId
  activeTemplateId: PortfolioTemplateId
  layoutMode: LayoutMode
  navigationItems: readonly NavigationItem[]
  getNavigationHref: (sectionId: SectionId) => string
  onNavigate: (sectionId: SectionId) => void
  onSelectTemplate: (templateId: PortfolioTemplateId) => void
  onToggleLayoutMode: () => void
  children: ReactNode
}
```

The contract keeps App responsible for browser state and shells responsible only for presentation.

## Content Validation

| Check | Result |
|---|---|
| TypeScript fences | Balanced and syntactically representative |
| Mermaid diagrams | Not used |
| Markdown structure | Valid headings, lists, and table |
