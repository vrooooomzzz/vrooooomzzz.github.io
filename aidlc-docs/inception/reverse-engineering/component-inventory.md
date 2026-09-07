# Component Inventory

## Application Packages

- `my-portfolio` - React/Vite application that renders a configurable student portfolio and local journal.

## Infrastructure Packages

- `.github/workflows/deploy.yml` - GitHub Actions workflow that builds and deploys the static site to GitHub Pages.

## Shared Packages

- `src/data` - Student-editable typed portfolio and template configuration.
- `src/types` - Shared data and section contracts.
- `src/hooks` - Layout and navigation state.
- `src/utils` - Scroll, route, media, animation, and template-selection helpers.
- `src/components/shared` - Reusable section, card, action, logo, and portfolio-style primitives.
- `src/components/ui` - Chakra provider and UI helpers.
- `src/assets` - Images, logos, resume, and certificate documents.
- `src/content/journal` - Local Markdown journal bodies.

## Test Packages

- `src/App.test.tsx` - Application smoke and route behavior.
- `src/test/data/*.test.ts` - Navigation and content validation.
- `src/hooks/*.test.ts` - Layout helper behavior.
- `src/templates/*.test.ts` - Template registry completeness and fallback.
- `src/utils/*.test.ts` - Journal and template-selection utility behavior.

## Total Count

- **Total Packages**: 1 application package plus deployment configuration.
- **Source Files**: Current files are tracked directly in `src/`; counts change as students add content and assets.
- **React Components**: Engineering, Neutral, and Business shells plus shared and template-specific sections.
- **TypeScript Modules**: Typed data, hooks, utilities, templates, and tests.
- **Stylesheets**: 2 CSS files.
- **Bundled Assets and Content**: 24 files, including one Markdown journal post.
- **Automated Tests**: The active suite covers App, accessibility, layout, registry, data, and template-selection behavior; exact results are recorded in the active code-generation summary.

## User-Facing Components

- `App` / `PortfolioApp` - Runtime template, route, layout, and visible-section orchestration.
- `Navbar` - Engineering desktop/mobile navigation and display controls.
- `EngineeringShell`, `NeutralShell`, and `BusinessShell` - Distinct responsive page structures and headers.
- `PortfolioStyleSelector` - Shared three-choice style menu present in every shell header.
- `Hero`, `NeutralHero`, and `BusinessHero` - Template-specific introductions and actions.
- `About` - Biography and metrics.
- `Education` - Education records.
- `Experience` - Work and leadership records.
- `Awards` - Awards and recognitions.
- `Projects`, `NeutralProjects`, and `BusinessProjects` - Template-specific project presentations.
- `Gallery` - Shared visual portfolio and preview.
- `Journal` - Combined in-site and external writing index.
- `JournalPostPage` - Local writing detail and not-found states.
- `Skills` - Skill groups and certificates.
- `Contact` - Mailto contact form and social actions.

## Template Differentiation Boundary

- **Currently Template-Specific**: Shell/header/navigation structure, Hero, About, Projects, chapter labels, and scoped CSS variables where needed.
- **Currently Shared**: App-level section ordering, runtime style selector, layout state, Education, Experience, Awards, Gallery, Journal, Skills, Contact, local post detail, and all student data.
- **Architectural Constraint**: Templates can replace their shell and section components, but App retains the shared section sequence, routing model, runtime template state, and layout ownership.
