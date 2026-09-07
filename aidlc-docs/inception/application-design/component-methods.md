# Component Methods

## Application Shell

### `App`

```ts
function App(): JSX.Element
```

- **Purpose**: Render the portfolio page with navigation and ordered sections.
- **Inputs**: Portfolio data/config imported from `src/data/portfolio`.
- **Output**: React page tree.

```ts
function useActiveSection(sectionIds: SectionId[], offset?: number): SectionId
```

- **Purpose**: Track which section is currently active while scrolling.
- **Inputs**:
  - `sectionIds`: Ordered section identifiers.
  - `offset`: Optional scroll offset for fixed navbar.
- **Output**: Active section ID.

## Navigation

### `Navbar`

```ts
type NavbarProps = {
  activeSection?: SectionId
}

function Navbar(props: NavbarProps): JSX.Element
```

- **Purpose**: Render desktop/mobile navigation from shared config.
- **Inputs**: `activeSection`.
- **Output**: Header, desktop links, mobile drawer.

```ts
function scrollToSection(sectionId: SectionId): void
```

- **Purpose**: Smooth-scroll to a section by ID.
- **Inputs**: Section ID.
- **Output**: Browser scroll side effect.

## Shared Utilities

```ts
function buildMailtoUrl(input: ContactFormInput, recipientEmail: string): string
```

- **Purpose**: Build encoded mailto URL from contact form fields.
- **Inputs**:
  - Contact form data.
  - Recipient email.
- **Output**: Mailto URL string.

```ts
function getYouTubeEmbedUrl(videoId: string): string
```

- **Purpose**: Build iframe embed URL for YouTube videos.
- **Inputs**: YouTube video ID.
- **Output**: YouTube embed URL.

```ts
function getYouTubeWatchUrl(videoId: string): string
```

- **Purpose**: Build external YouTube watch URL.
- **Inputs**: YouTube video ID.
- **Output**: YouTube watch URL.

```ts
function getAnimationDelayClass(index: number): string
```

- **Purpose**: Return existing reveal animation delay class.
- **Inputs**: Item index.
- **Output**: CSS class string.

## Section Components

Each section keeps a simple function component signature:

```ts
function Hero(): JSX.Element
function About(): JSX.Element
function Education(): JSX.Element
function Experience(): JSX.Element
function Awards(): JSX.Element
function Projects(): JSX.Element
function Gallery(): JSX.Element
function Videos(): JSX.Element
function Skills(): JSX.Element
function Contact(): JSX.Element
```

- **Purpose**: Render one portfolio section.
- **Inputs**: Imported typed data modules.
- **Output**: Section-specific React UI.

## Shared UI Components

```ts
type SectionShellProps = {
  id: SectionId
  eyebrow?: string
  title: string
  intro?: string
  nextSectionId?: SectionId
  children: React.ReactNode
}

function SectionShell(props: SectionShellProps): JSX.Element
```

- **Purpose**: Standardize section container and heading layout.
- **Inputs**: Section metadata, optional next-section target, children.
- **Output**: Styled section wrapper.

```ts
type ContentCardProps = {
  children: React.ReactNode
  className?: string
}

function ContentCard(props: ContentCardProps): JSX.Element
```

- **Purpose**: Standardize repeated card chrome.
- **Inputs**: Children and optional class name.
- **Output**: Styled card wrapper.

```ts
type ExternalActionProps = {
  href: string
  label: string
  ariaLabel?: string
  variant?: 'button' | 'icon' | 'link'
}

function ExternalAction(props: ExternalActionProps): JSX.Element
```

- **Purpose**: Render external links/actions consistently and accessibly.
- **Inputs**: URL, visual label, accessible label, variant.
- **Output**: Link or button-like external action.

## Data Modules

```ts
export const profile: Profile
export const navigationItems: NavigationItem[]
export const about: AboutSection
export const education: EducationEntry[]
export const experience: ExperienceEntry[]
export const awards: AwardEntry[]
export const projects: ProjectEntry[]
export const gallery: GalleryItem[]
export const videos: VideoEntry[]
export const skills: SkillCategory[]
export const certificates: CertificateEntry[]
export const portfolio: Portfolio
```

- **Purpose**: Provide typed example content for students to customize.
- **Inputs**: Static imports and literals.
- **Output**: Typed portfolio data.

## Test Interfaces

```ts
describe('portfolio data', () => void)
describe('navigation config', () => void)
describe('App smoke render', () => void)
```

- **Purpose**: Validate data/config integrity and app render.
- **Inputs**: Portfolio data and React app.
- **Output**: Passing Vitest assertions.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
