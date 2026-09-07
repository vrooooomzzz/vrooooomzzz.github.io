# Integration Test Instructions

## Purpose

Verify that the application shell, Business presentation, shared data, routes, and journal pages work together after the README and contact-color amendment.

## Run the Rendered Integration Group

```bash
npx vitest run src/App.test.tsx src/templates/journalPostPages.test.tsx src/templates/business/businessTemplate.test.tsx
```

Expected verified result: 3 files and 39 tests pass.

## Test Inventory

| File                                               | Main responsibility                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| `src/App.test.tsx`                                 | Application rendering, navigation, style switching, and shared routes |
| `src/templates/journalPostPages.test.tsx`          | Journal list/detail rendering and route behavior                      |
| `src/templates/business/businessTemplate.test.tsx` | Business sections, contact content, project media, and presentation   |

## Manual Responsive Check

Run `npm run dev`, then check Engineering and Business in light and dark modes. In Business, confirm the Direct Contact card matches nearby surfaces and retains readable email and social controls at desktop and narrow widths.

## Failure Recovery

Run only the failing file first, fix the earliest assertion or render error, and then rerun `npm run test` so shared behavior remains protected.
