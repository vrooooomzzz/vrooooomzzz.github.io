# Frontend Components - Component Refactor And Shared UI Utilities

## Component Strategy

Unit 2 uses a moderate refactor. Components should become data-driven and slightly more reusable, but each portfolio section should remain recognizable and easy for students to navigate.

## Application Shell

### `App`

**Responsibilities**:

- Import `portfolio.navigation`.
- Derive enabled navigation items and enabled section IDs.
- Track active section using shared active-section logic.
- Render `Navbar`.
- Render only enabled sections using a section registry.

**State**:

- `activeSection: SectionId`

**Key Design Rule**:

The same enabled navigation source should drive navbar links, active-section tracking, and page section rendering.

### Section Registry

**Possible location**: `src/components/sections.ts` or local to `App.tsx`.

**Responsibilities**:

- Map `SectionId` values to section components.
- Keep component ordering controlled by `navigation`.

**Preferred shape**:

```ts
const sectionComponents: Partial<Record<SectionId, React.ComponentType>> = {
  home: Hero,
  about: About,
  education: Education,
}
```

## Navigation

### `Navbar`

**Responsibilities**:

- Render desktop and mobile navigation from enabled navigation data.
- Highlight active section.
- Use shared `scrollToSection`.
- Close mobile drawer after navigation.
- Keep accessible labels for open/close menu controls.

**Props**:

```ts
type NavbarProps = {
  activeSection?: SectionId
  navigationItems?: NavigationItem[]
}
```

Passing `navigationItems` keeps `Navbar` easy to test later, but importing from `portfolio` is acceptable if implementation remains simpler.

## Shared Utilities

### `src/utils/scroll.ts`

**Functions**:

- `scrollToSection(sectionId: SectionId): void`
- `getEnabledNavigationItems(items: NavigationItem[]): NavigationItem[]`
- `getEnabledSectionIds(items: NavigationItem[]): SectionId[]`
- Optional active-section hook if it stays readable.

### `src/utils/contact.ts`

**Functions**:

- `buildMailtoUrl(input: ContactFormInput, recipientEmail: string): string`

**Rules**:

- Use `encodeURIComponent`.
- Default subject to `Contact from Portfolio` when subject is empty.
- Do not submit to a backend.

### `src/utils/media.ts`

**Functions**:

- `getYouTubeEmbedUrl(videoId: string): string`
- `getYouTubeWatchUrl(videoId: string): string`

### `src/utils/animation.ts`

**Functions**:

- `getAnimationDelayClass(index: number): string`

**Rules**:

- Preserve existing delay behavior: index 0 gets `delay-1`, index 1 gets `delay-2`, later items get `delay-3`.

## Shared UI Components

### `SectionShell`

**Possible file**: `src/components/shared/SectionShell.tsx`

**Responsibilities**:

- Render section root `Box`.
- Render `Container`.
- Render optional eyebrow, title, and intro.
- Render optional next-section arrow using `scrollToSection`.
- Preserve `engineering-grid` class and responsive spacing.

**Use Where Helpful**:

- `About`
- `Education`
- `Experience`
- `Awards`
- `Projects`
- `Gallery`
- `Videos`
- `Skills`
- `Contact`

### `ContentCard`

**Possible file**: `src/components/shared/ContentCard.tsx`

**Responsibilities**:

- Standardize repeated card background, border, radius, transition, and hover treatment.
- Accept Chakra-compatible props if useful.
- Avoid hiding section-specific layout details.

### `ExternalAction`

**Possible file**: `src/components/shared/ExternalAction.tsx`

**Responsibilities**:

- Render project buttons, social links, and video watch links consistently.
- Apply `ariaLabel`.
- Use safe external-link attributes.
- Support variants only if they stay simple: `button`, `link`, `icon`.

## Section Component Design

### `Hero`

- Consume `profile` and `hero`.
- Render social links from `profile.socialLinks`.
- Use `hero.primaryAction` and `hero.secondaryAction` for CTAs.
- Preserve profile image, engineering snapshot, and stack highlight layout.

### `About`

- Consume `about`.
- Render `about.paragraphs`.
- Render `about.metrics`.
- Remove local hardcoded `stats`.

### `Education`

- Consume `education`.
- Render imported logos from data.
- Preserve education card layout.

### `Experience`

- Consume `experience`.
- Preserve timeline layout.
- Remove local hardcoded experience array.

### `Awards`

- Consume `awards`.
- Preserve card grid, tags, and logo rendering.

### `Projects`

- Consume `projects`.
- Replace `github` and `demo` assumptions with `project.actions`.
- Use `ExternalAction` for each action.

### `Gallery`

- Consume `gallery`.
- Preserve selected image state and modal behavior.
- Use stable string IDs from data.

### `Videos`

- Consume `videos`.
- Use `getYouTubeEmbedUrl`.
- Use `video.watchLink` for external action.

### `Skills`

- Consume `skills` and `certificates`.
- Remove `import.meta.glob` certificate metadata construction from the component.
- Preserve PDF preview and modal behavior.
- Use `certificate.ariaLabel` for interactive cards.

### `Contact`

- Consume `profile.email` and `profile.socialLinks`.
- Use `buildMailtoUrl`.
- Preserve form state locally.
- Render social/contact links from data.

## Shared UI Helper Lint Fixes

### `src/components/ui/color-mode.tsx`

Functional intent:

- Keep current color mode behavior.
- Replace empty interfaces with type aliases or direct inherited prop types.
- Move or adjust non-component exports if needed to satisfy React Fast Refresh lint rules.

### `src/components/ui/toaster.tsx`

Functional intent:

- Keep current toaster behavior.
- Adjust exports to satisfy React Fast Refresh lint rules, likely by moving the `toaster` singleton to a separate helper file or disabling only if the project standard allows it.

## State Management

- Keep local component state for drawer open/close, modal selected item, certificate selected item, and contact form fields.
- Do not introduce global state management.
- Do not add runtime data fetching.

## API Integration Points

There are no backend API integrations. Unit 2 uses browser APIs only:

- DOM lookup and smooth scrolling.
- `window.location.href` for mailto navigation.
- `window.open` only where an external action remains button-like.

## Accessibility Requirements

- Every icon-only social link must have an accessible label.
- Mobile menu button and close button labels must remain meaningful.
- Project, video, and certificate actions should use data-provided labels.
- Keyboard behavior for gallery and certificate cards should remain intact.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
