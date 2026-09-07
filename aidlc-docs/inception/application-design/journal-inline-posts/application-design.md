# Application Design - Journal Inline Posts

## Overview

The Journal Inline Posts enhancement adds local Markdown-backed writing to the existing Journal while preserving WordPress-linked posts and educational videos. The design keeps the app fully static and GitHub Pages-compatible.

## Design Summary

- Introduce a source-aware writing model that can represent local posts and WordPress posts.
- Add a static local journal content registry for Markdown-authored posts.
- Update the Journal writing list to render both source types together.
- Add source badges to distinguish in-site and external writing.
- Add an in-site `JournalPostPage` for local posts.
- Add hash-compatible local post navigation and direct-link handling.
- Preserve existing WordPress external links and video feed behavior.

## Component Artifacts

- [Components](components.md)
- [Component Methods](component-methods.md)
- [Services](services.md)
- [Component Dependencies](component-dependency.md)

## Design Decisions

| Decision | Rationale |
|---|---|
| Use local Markdown files for in-site posts | Matches student authoring requirement while staying static. |
| Use a source-aware writing union | Keeps local and WordPress behavior explicit and testable. |
| Use hash-compatible local post URLs | Preserves GitHub Pages compatibility. |
| Keep WordPress posts external | Preserves existing Journal content and behavior. |
| Avoid backend persistence | Required by approved requirements. |

## Story Coverage

| Story | Design Coverage |
|---|---|
| Add A Local Markdown Journal Post | Local journal content registry and typed metadata. |
| Show Local And WordPress Posts Together | Unified writing list in Journal. |
| Distinguish In-Site And External Writing | Source badges on cards. |
| Read A Local Post Inside The Portfolio | `JournalPostPage` and local hash routing. |
| Support GitHub Pages-Compatible Post Links | Hash parsing and stable slugs. |
| Preserve External WordPress Behavior | External post source remains URL-based. |
| Keep The Journal Enhancement Fully Static | Static content registry and build-time/bundled content. |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Skipped | Disabled in `aidlc-docs/aidlc-state.md`. |
| Property-Based Testing | Skipped | Disabled in `aidlc-docs/aidlc-state.md`. |
