# Domain Entities - Component Refactor And Shared UI Utilities

## Entity Relationship Summary

Unit 2 does not add new business data entities. It adds UI orchestration entities and view models that consume the Unit 1 portfolio data.

| Entity | Source | Purpose |
|---|---|---|
| `Portfolio` | Unit 1 data aggregate | Full content source for the UI. |
| `NavigationItem` | Unit 1 data | Section ID, label, and visibility flag. |
| `EnabledNavigationItem` | Derived in UI layer | Navigation item with `enabled: true`. |
| `SectionRegistry` | UI layer | Maps `SectionId` to the React section component. |
| `ActiveSectionState` | UI hook | Tracks the section currently in view. |
| `ContactFormInput` | Contact utility/UI | Form fields used to build a mailto URL. |
| `ExternalActionViewModel` | Shared UI component | Link/action fields used for accessible external actions. |

## Derived Entity Definitions

### `EnabledNavigationItem`

Represents a visible section navigation entry.

```ts
type EnabledNavigationItem = NavigationItem & {
  enabled: true
}
```

### `SectionRegistry`

Maps section IDs to renderable components.

```ts
type SectionRegistry = Partial<Record<SectionId, React.ComponentType>>
```

The registry may be partial so disabled or future sections do not force unused component imports in every scenario. Code generation can keep direct imports for simplicity if that reads better.

### `ActiveSectionState`

Represents the current active section ID.

```ts
type ActiveSectionState = {
  activeSection: SectionId
  sectionIds: SectionId[]
}
```

### `ContactFormInput`

Represents contact form values.

```ts
type ContactFormInput = {
  name: string
  email: string
  subject: string
  message: string
}
```

### `ExternalActionViewModel`

Uses the Unit 1 `ExternalLink` shape directly.

```ts
type ExternalActionViewModel = ExternalLink
```

## Entity Ownership

| Entity | Owned By | Notes |
|---|---|---|
| `Portfolio` | Unit 1 | Consumed by Unit 2, not redesigned here. |
| `NavigationItem` | Unit 1 | Unit 2 filters and renders it. |
| `SectionRegistry` | Unit 2 | Belongs near `App` or a small config module. |
| `ActiveSectionState` | Unit 2 | Belongs in `src/utils/scroll.ts` or a hook file if created. |
| `ContactFormInput` | Unit 2 | Belongs in `src/utils/contact.ts` or `Contact.tsx` if local. |
| `ExternalActionViewModel` | Unit 2 shared UI | Belongs in `ExternalAction` props. |

## Validation Constraints

- Every rendered section ID must be a known `SectionId`.
- Every enabled navigation item should map to a section component.
- Every visible external action should have a non-empty `label`, `href`, and accessible label.
- Contact form helpers should encode subject and body before generating mailto URLs.
- Video helpers should not perform network calls.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
