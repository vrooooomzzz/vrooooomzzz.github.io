# Application Design Plan - Journal Inline Posts

## Purpose

Define the high-level components, service boundaries, methods, and dependencies for the Journal Inline Posts enhancement.

## Design Scope

- Source-aware writing content model for local Markdown posts and WordPress posts.
- Journal card rendering that distinguishes local and external content.
- In-site local post reading page using GitHub Pages-compatible hash navigation.
- Static content loading with no backend, database, authentication, or runtime content API.

## Design Questions

No additional application-design questions are required. Requirements and stories already define:

- Markdown local posts.
- Unified local and WordPress writing list.
- Source badges.
- Hash-compatible reading pages.
- Static GitHub Pages deployment.

## Execution Checklist

- [x] Generate components.md with component definitions and high-level responsibilities.
- [x] Generate component-methods.md with method signatures and high-level purposes.
- [x] Generate services.md with service definitions and orchestration patterns.
- [x] Generate component-dependency.md with dependency relationships and communication patterns.
- [x] Generate application-design.md consolidation document.
- [x] Validate design completeness and consistency against requirements and stories.
