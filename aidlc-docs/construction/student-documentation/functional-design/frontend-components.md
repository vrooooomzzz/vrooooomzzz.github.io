# Frontend Components - Student Documentation

## Unit

Unit 4: Student Documentation

## Runtime UI Impact

This unit does not add or change visible React UI components. It designs student-facing Markdown documentation.

## Documentation Components

### README Structure

`README.md` should include:

1. Project purpose for students.
2. What students can customize.
3. Prerequisites.
4. Quick start commands.
5. Project structure map.
6. File-by-file customization guide.
7. Asset and certificate replacement guide.
8. Local verification commands.
9. Deployment handoff to `DEPLOYMENT.md`.
10. Troubleshooting quick links or brief notes.

### DEPLOYMENT Structure

`DEPLOYMENT.md` should include:

1. GitHub Pages deployment overview.
2. Repository Pages versus `<owner>.github.io` root Pages.
3. GitHub Pages settings steps.
4. GitHub Actions workflow explanation.
5. Automatic base path behavior.
6. Deployment verification.
7. Troubleshooting guide.
8. Optional custom domain note if retained.

## User Interaction Flows

### Customize Profile Flow

1. Student opens README customization section.
2. Student edits `src/data/profile.ts`.
3. Student runs `npm run dev`.
4. Student confirms hero, social links, and contact email changed.

### Replace Assets Flow

1. Student reads asset replacement section.
2. Student replaces files in `src/assets/`.
3. Student updates imports in the matching `src/data` file if filenames changed.
4. Student runs `npm run build`.

### Deploy Flow

1. Student reads README deployment handoff.
2. Student opens `DEPLOYMENT.md`.
3. Student enables GitHub Pages source as GitHub Actions.
4. Student pushes to `main` or manually runs workflow.
5. Student verifies Actions and Pages status.

## Form Validation Rules

Not applicable. This unit designs Markdown documentation only.

## API Integration Points

Not applicable. Documentation does not introduce backend or external API integrations.

## Automation-Friendly Notes

Documentation should use stable exact file paths and commands so future tests or documentation checks can validate the presence of key instructions.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
