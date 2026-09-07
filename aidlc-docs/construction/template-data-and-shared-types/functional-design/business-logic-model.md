# Business Logic Model - Template Data And Shared Types

## Unit Summary

Unit 1 creates the student-editable content layer for the portfolio template. The business logic is not transactional; it is a static content model that must be complete enough to render the portfolio, flexible enough for students to hide optional sections, and typed enough to catch common editing mistakes before deployment.

## Functional Decisions

- **Requiredness model**: Mixed. Core identity and navigation fields are required; optional section arrays can be empty or disabled.
- **Optional sections**: Represented with an `enabled` flag in section/navigation config.
- **Asset validation**: Compile-time Vite imports plus lightweight tests for required example assets and certificate metadata.
- **External links**: Typed link objects with `label`, `href`, and accessible label where applicable.

## Core Business Objects

### Portfolio

The aggregate object consumed by later units.

```ts
type Portfolio = {
  profile: Profile
  navigation: NavigationItem[]
  about: AboutSection
  education: EducationEntry[]
  experience: ExperienceEntry[]
  awards?: AwardEntry[]
  projects: ProjectEntry[]
  gallery?: GalleryItem[]
  videos?: VideoEntry[]
  skills: SkillCategory[]
  certificates?: CertificateEntry[]
}
```

### Section Configuration

Section configuration is the source of truth for page order, labels, visibility, and section IDs.

```ts
type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'experience'
  | 'awards'
  | 'projects'
  | 'gallery'
  | 'videos'
  | 'skills'
  | 'contact'

type NavigationItem = {
  id: SectionId
  label: string
  enabled: boolean
}
```

### Link Object

All external user-facing actions use a typed link object.

```ts
type ExternalLink = {
  label: string
  href: string
  ariaLabel: string
}
```

## Business Workflows

### Workflow 1: Student Updates Core Identity

1. Student opens `src/data/profile.ts`.
2. Student updates name, role, contact email, location, hero summary, and social links.
3. TypeScript validates required fields and link object shape.
4. Later component unit renders the new profile data in Hero, Navbar, and Contact.

### Workflow 2: Student Hides An Optional Section

1. Student opens `src/data/navigation.ts`.
2. Student sets `enabled: false` for an optional section such as `videos`.
3. Later component unit filters disabled navigation items and sections.
4. Tests validate that enabled section IDs remain unique and known.

### Workflow 3: Student Replaces Assets

1. Student imports or references replacement assets in focused data files.
2. Vite catches missing imports at build time.
3. Tests validate required example metadata such as certificate title, issuer, kind, and file.
4. Documentation unit explains replacement steps.

### Workflow 4: Portfolio Data Is Aggregated

1. Focused files export typed data objects.
2. `src/data/portfolio.ts` imports focused data.
3. The aggregate `portfolio` object exports all content.
4. Later units import the aggregate or focused exports based on component needs.

## Data Flow

```text
Focused data files
  -> portfolio aggregator
  -> section components and navigation
  -> tests and documentation references
```

## Functional Boundaries

- Unit 1 defines data shape and example data only.
- Unit 1 does not refactor visual rendering.
- Unit 1 does not implement tests, but it defines what tests must validate.
- Unit 1 does not implement deployment configuration.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
