# Code Generation Summary - Journal Section

## Summary

Merged the previous video and blog presentation into one Journal section. The section now presents educational videos and selected posts from `https://nhamhung.wordpress.com/` together, with feed images on every blog card.

## Created Files

| File | Purpose |
|---|---|
| `src/data/blog.ts` | Local curated metadata for selected WordPress posts, including feed images and alt text. |
| `src/components/Journal.tsx` | Combined journal section UI with video embeds, blog cards, and a full blog call to action. |
| `aidlc-docs/construction/blog-section/code/code-generation-summary.md` | AI-DLC implementation summary. |

## Modified Files

| File | Change |
|---|---|
| `src/types/portfolio.ts` | Replaced separate `videos` and `blog` section IDs with `journal`, and added blog feed image fields. |
| `src/data/navigation.ts` | Replaced separate `Videos` and `Blog` navigation items with `Journal`. |
| `src/data/portfolio.ts` | Exported blog data through the central portfolio module. |
| `src/App.tsx` | Added `Journal` to the section component map. |
| `src/components/Gallery.tsx` | Updated next-section flow from `videos` to `journal`. |
| `src/data/navigation.test.ts` | Added `journal` to baseline section expectations. |
| `src/data/portfolio.test.ts` | Added blog metadata and feed image validation. |

## Runtime Notes

- No runtime WordPress fetch was added.
- No new dependency was added.
- Links open through existing external link behavior.
- Multi-page mode works because `journal` is part of the shared section ID/navigation model.
- Blog feed images were sourced from the public WordPress RSS feed and stored as local metadata URLs.

## Review Change - 2026-07-01

- Replaced the curated blog cards with the four WordPress posts requested by the site owner.
- Preserved local metadata so the GitHub Pages build remains independent of WordPress at runtime.
- Verified post titles, publication dates, categories, and featured images from the public WordPress pages/feed.

## Review Change - Resume Download

- Added `src/assets/documents/resume.pdf` as a typed profile resume asset.
- Added a hero action that downloads the resume PDF with a stable file name.
- Extended the shared external action so local download links can reuse the existing button styling.
- Moved the resume into `src/assets/documents/` to keep general documents separate from image and certificate assets.
