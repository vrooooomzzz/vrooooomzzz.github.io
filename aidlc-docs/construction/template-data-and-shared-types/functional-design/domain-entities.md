# Domain Entities - Template Data And Shared Types

## Entity Relationship Summary

```text
Portfolio
  contains Profile
  contains NavigationItem[]
  contains section data collections
  contains optional asset-backed collections

NavigationItem
  references SectionId

Section data entries
  may reference AssetReference
  may contain ExternalLink[]
```

## Entity Definitions

### `Profile`

Represents the portfolio owner's identity.

```ts
type Profile = {
  name: string
  slug: string
  role: string
  location: string
  email: string
  profileImage: string
  summary: string
  socialLinks: ExternalLink[]
}
```

### `HeroSection`

Represents first-screen content.

```ts
type HeroSection = {
  eyebrow: string
  statusBadges: string[]
  headline: string
  highlightedPhrase?: string
  intro: string
  stats: Metric[]
  primaryAction: SectionAction
  secondaryAction: SectionAction
  stackHighlights: string[]
}
```

### `NavigationItem`

Represents a section in the page order and navbar.

```ts
type NavigationItem = {
  id: SectionId
  label: string
  enabled: boolean
}
```

### `AboutSection`

```ts
type AboutSection = {
  eyebrow: string
  title: string
  intro: string
  paragraphs: string[]
  metrics: Metric[]
}
```

### `Metric`

```ts
type Metric = {
  value: string
  label: string
}
```

### `EducationEntry`

```ts
type EducationEntry = {
  degree: string
  institution: string
  period: string
  specialization: string
  logo: string
  description: string[]
}
```

### `ExperienceEntry`

```ts
type ExperienceEntry = {
  title: string
  company: string
  period: string
  description: string[]
}
```

### `AwardEntry`

```ts
type AwardEntry = {
  title: string
  organization: string
  year: string
  description: string
  logo: string
  tag: string
}
```

### `ProjectEntry`

```ts
type ProjectEntry = {
  title: string
  description: string
  technologies: string[]
  actions: ExternalLink[]
}
```

### `GalleryItem`

```ts
type GalleryItem = {
  id: string
  src: string
  alt: string
  title: string
  description: string
}
```

### `VideoEntry`

```ts
type VideoEntry = {
  id: string
  title: string
  description: string
  videoId: string
}
```

### `SkillCategory`

```ts
type SkillCategory = {
  category: string
  skills: string[]
}
```

### `CertificateEntry`

```ts
type CertificateEntry = {
  title: string
  issuer: string
  kind: string
  file: string
}
```

### `ExternalLink`

```ts
type ExternalLink = {
  label: string
  href: string
  ariaLabel: string
}
```

### `SectionAction`

```ts
type SectionAction = {
  label: string
  sectionId: SectionId
  ariaLabel: string
}
```

### `Portfolio`

```ts
type Portfolio = {
  profile: Profile
  hero: HeroSection
  navigation: NavigationItem[]
  about: AboutSection
  education: EducationEntry[]
  experience: ExperienceEntry[]
  awards: AwardEntry[]
  projects: ProjectEntry[]
  gallery: GalleryItem[]
  videos: VideoEntry[]
  skills: SkillCategory[]
  certificates: CertificateEntry[]
}
```

## Required Entity Relationships

- `Portfolio.navigation[].id` must match known `SectionId` values.
- `HeroSection` actions must target known section IDs.
- `ProjectEntry.actions[]` must be valid `ExternalLink` objects.
- `Profile.socialLinks[]` must be valid `ExternalLink` objects.
- Asset fields such as logos, images, and certificate files must be import-resolved strings.

## Optionality Model

- Core objects are required: `profile`, `hero`, `navigation`, `about`, `education`, `experience`, `projects`, `skills`.
- Optional content collections are represented as arrays that may be empty: `awards`, `gallery`, `videos`, `certificates`.
- Section visibility is controlled by navigation `enabled` flags.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
