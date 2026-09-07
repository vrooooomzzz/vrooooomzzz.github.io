# Domain Entities - Multi-Page Layout Switcher

## Domain Overview

The feature domain is portfolio browsing mode selection. The entities are small browser-side concepts rather than backend records.

## Entity Summary

| Entity | Type | Purpose |
|---|---|---|
| Layout Mode | Value object | Represents whether the portfolio renders as a single page or multi-page view. |
| Section ID | Existing domain identifier | Identifies a portfolio section and page target. |
| Enabled Section List | Derived collection | Ordered list of sections available for rendering and routing. |
| Page Hash | Value object | GitHub Pages-safe hash for multi-page navigation. |
| Layout Preference | Stored preference | Saved layout mode value in localStorage. |
| Layout State | Derived UI state | Combines mode, active section, active page, and navigation callbacks. |

## Layout Mode

| Attribute | Description |
|---|---|
| Values | `single`, `multi` |
| Default | `single` |
| Validation | Any other value is invalid and ignored. |
| Persistence | Stored as a plain string in localStorage when available. |

## Section ID

| Attribute | Description |
|---|---|
| Source | Existing `SectionId` type and navigation data. |
| Validity | Valid only when included in enabled navigation items. |
| Usage | Drives rendering, navbar active state, scroll targets, and page hash targets. |

## Enabled Section List

| Attribute | Description |
|---|---|
| Source | `getEnabledSectionIds(navigation)`. |
| Order | Same order as navigation data. |
| Default fallback | `home` if enabled, otherwise first enabled section. |
| Consumers | Layout hook, App rendering, hash parser, navbar state. |

## Page Hash

| Attribute | Description |
|---|---|
| Format | `#/sectionId` |
| Examples | `#/home`, `#/projects`, `#/contact` |
| Invalid examples | `#/not-real`, `#projects`, empty hash for explicit page selection |
| Resolution | Valid only if the parsed section ID is enabled. |

## Layout Preference

| Attribute | Description |
|---|---|
| Storage | Browser localStorage |
| Stored value | Valid layout mode string only |
| Invalid value handling | Ignore and default safely |
| Storage failure handling | Continue in memory; no visitor-facing warning required |

## Layout State

| Attribute | Description |
|---|---|
| `layoutMode` | Current selected mode. |
| `activeSection` | Section highlighted in navigation. |
| `activePageSection` | Section rendered in multi-page mode. |
| `toggleLayoutMode` | Action for switching modes. |
| `navigateToSection` | Mode-aware navigation action. |
| `getNavigationHref` | Mode-aware href builder. |

## Entity Relationships

| Relationship | Description |
|---|---|
| Layout State uses Layout Mode | Mode decides rendering and navigation behavior. |
| Layout State uses Enabled Section List | Section list validates active and target sections. |
| Page Hash resolves to Section ID | Hash parser maps `#/sectionId` to an enabled section. |
| Layout Preference initializes Layout Mode | Valid saved preference restores the selected mode. |
| App renders from Layout State | App chooses all sections or one section based on state. |
| Navbar presents Layout State | Navbar displays active state and delegates actions. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no Mermaid diagrams included. |
| ASCII diagrams | Not applicable. |
| Markdown tables | Valid simple pipe tables. |
| Special characters | Hash examples and code identifiers wrapped in code formatting. |
