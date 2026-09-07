# Code Generation Plan - Journal Section

## Purpose

Merge the existing video and blog presentation into one Journal section using local video metadata and WordPress-sourced blog metadata with feed images.

## Target Files

### Files To Create

- [x] `src/data/blog.ts`
- [x] `src/components/Journal.tsx`
- [x] `aidlc-docs/construction/blog-section/code/code-generation-summary.md`

### Files To Modify

- [x] `src/types/portfolio.ts`
- [x] `src/data/navigation.ts`
- [x] `src/data/portfolio.ts`
- [x] `src/App.tsx`
- [x] `src/components/Gallery.tsx`
- [x] `src/data/navigation.test.ts`
- [x] `src/data/portfolio.test.ts`

## Generation Steps

### Step 1: Add Journal Data Contract

- [x] Add `journal` to `SectionId`.
- [x] Add feed image fields to `BlogEntry`.
- [x] Add `blog` to `Portfolio`.

### Step 2: Add Blog Data

- [x] Create local `src/data/blog.ts`.
- [x] Include selected post titles, dates, categories, summaries, topics, links, and feed images.
- [x] Export blog data through `src/data/portfolio.ts`.

### Step 3: Add Journal Section UI

- [x] Create `src/components/Journal.tsx`.
- [x] Merge video embeds and writing cards into one section.
- [x] Use `SectionShell`, `ContentCard`, and `ExternalAction`.
- [x] Add a visit-blog call to action.

### Step 4: Wire Navigation And Layout

- [x] Replace separate `videos` and `blog` section IDs with `journal`.
- [x] Add `Journal` to `App.tsx` section component map.
- [x] Update `Gallery` next-section flow to point to `journal`.
- [x] Let `Journal` continue to `skills`.

### Step 5: Update Tests

- [x] Add `journal` to baseline section expectations.
- [x] Validate blog post metadata, links, and feed images.

## Quality Gates

- [x] `npm run test`
- [x] `npm run lint`
- [x] `npm run build`
