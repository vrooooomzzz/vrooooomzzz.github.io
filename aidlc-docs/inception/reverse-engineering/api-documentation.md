# API Documentation

## REST APIs

No REST APIs are implemented. The portfolio is a static client-side application with no backend or database.

## Internal APIs

### Template Registry
- **`getPortfolioTemplate(templateId: PortfolioTemplateId | string): PortfolioTemplate`**: Resolves a registered template and falls back to Engineering.
- **`activePortfolioTemplate: PortfolioTemplate`**: Compatibility export for the source default selected by `src/data/template.ts`; runtime App rendering derives its active template from state.
- **`portfolioTemplates: PortfolioTemplate[]`**: Registered Engineering, Neutral, and Business templates.

### `PortfolioTemplate`
- **Fields**: `id`, `label`, `description`, `ShellComponent`, `JournalPostComponent`, `chapterLabels`, and `sectionComponents`.
- **Section Contract**: `sectionComponents` is a complete `Record<SectionId, ComponentType>`.
- **Current IDs**: `engineering`, `neutral`, and `business`.

### App Shell
- **`PortfolioApp({ initialTemplate? }): JSX.Element`**: Owns the active runtime template ID and resolves enabled navigation, template sections, layout mode, current hash, and local journal routes.
- **`App(): JSX.Element`**: Renders `PortfolioApp` with the source default and any valid saved visitor preference.
- **Journal Behavior**: A `#/journal/{slug}` hash renders `JournalPostPage`; otherwise App renders all enabled sections or the active multi-page section.

### Runtime Template Selection
- **`isPortfolioTemplateId(value): value is PortfolioTemplateId`**: Accepts only the three registered IDs.
- **`getInitialPortfolioTemplateId(defaultTemplateId, storage?): PortfolioTemplateId`**: Restores a valid visitor choice, uses the source default when no choice exists, falls back to Engineering for corrupted state, and tolerates unavailable storage.
- **`persistPortfolioTemplateId(templateId, storage?): void`**: Saves a valid visitor choice without allowing storage failures to block rendering.
- **`PortfolioStyleSelector`**: Shared Chakra Menu radio selector rendered by every template shell.
- **Storage key**: `portfolio-template-id`.

### `PortfolioShellProps`
- **State**: `activeSection`, `activeTemplateId`, and `layoutMode`.
- **Actions**: Section navigation, layout toggling, and typed template selection.
- **Content**: Enabled navigation items, navigation-href resolver, and rendered section children.

### Layout Hook
- **`usePortfolioLayout(enabledSectionIds, scrollActiveSection): PortfolioLayoutState`**: Coordinates layout mode and navigation.
- **`createSectionHash(sectionId): string`**: Returns a multi-page hash such as `#/projects`.
- **`createAnchorHash(sectionId): string`**: Returns a single-page anchor such as `#projects`.
- **`parseSectionHash(hash, enabledSectionIds): SectionId | undefined`**: Validates a section hash.
- **`resolveSectionId(sectionId, enabledSectionIds, fallback): SectionId`**: Resolves unknown IDs safely.
- **`readStoredLayoutMode` / `writeStoredLayoutMode`**: Access layout preference with storage failure fallbacks.

### Navigation and Scroll Utilities
- **`getEnabledNavigationItems(items)`**: Narrows navigation to enabled entries.
- **`getEnabledSectionIds(items)`**: Returns enabled section IDs.
- **`scrollToSection(sectionId)`**: Smooth-scrolls to a section.
- **`useActiveSection(sectionIds, offset)`**: Tracks the active section from viewport geometry.

### Journal Utilities
- **`createJournalPostHref(slug): string`**: Creates `#/journal/{slug}`.
- **`parseJournalPostHash(hash): string | undefined`**: Extracts a local post slug from the hash.

### Shared UI APIs
- **`ExternalAction`**: Renders accessible internal, external, mail, and download actions.
- **`SectionShell`**: Frames shared section headings, descriptions, content, and next-section navigation.
- **`ContentCard`**: Provides shared card surface behavior.
- **`LogoMark`**: Resolves configured logo keys into visual marks.
- **`PortfolioStyleSelector`**: Displays the current portfolio style and emits one of the three typed IDs.

## Data Models

### Portfolio Root
- **Fields**: `profile`, `hero`, `navigation`, `about`, `education`, `experience`, `awards`, `projects`, `gallery`, `videos`, `blog`, `journalPosts`, `writing`, `skills`, and `certificates`.
- **Validation**: Constructed with TypeScript `satisfies Portfolio`; tests verify key fields and links.

### Navigation and Sections
- **`SectionId`**: Union of `home`, `about`, `education`, `experience`, `awards`, `projects`, `gallery`, `journal`, `skills`, and `contact`.
- **`NavigationItem`**: `id`, `label`, and `enabled`.

### Writing
- **`WordPressWritingPost`**: External WordPress title, URL, image, date, category, summary, and topics.
- **`LocalJournalPost`**: Local slug, hash URL, image, date, metadata, and imported Markdown content.
- **`WritingEntry`**: Union of WordPress and local writing entries.

### Portfolio Evidence
- **Models**: `Profile`, `HeroSection`, `AboutSection`, `EducationEntry`, `ExperienceEntry`, `AwardEntry`, `ProjectEntry`, `GalleryItem`, `VideoEntry`, `SkillCategory`, and `CertificateEntry`.
- **Relationships**: Templates consume these shared records; actions use `ExternalLink` or `DownloadLink`; project and media arrays feed repeated presentation components.

## External Browser APIs

- `window.history.pushState` and hash events for static routing.
- `window.localStorage` for layout and portfolio-style preferences.
- `document.getElementById` and `scrollIntoView` for single-page navigation.
- `window.location.href` with `mailto:` for contact submission.
- Dialog, iframe, image, and PDF browser capabilities for media previews.
