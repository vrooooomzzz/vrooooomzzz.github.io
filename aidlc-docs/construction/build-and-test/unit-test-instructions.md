# Unit Test Execution Instructions

## Purpose

Run the deterministic tests that protect typed data, navigation, layout helpers, template selection, registry behavior, CSS isolation, and accessibility safeguards.

## Run All Automated Tests

```bash
npm run test
```

Expected verified result:

- 9 test files pass.
- 88 tests pass.
- 0 tests fail.

Vitest reports results in the terminal. Coverage reporting is not configured, so no coverage percentage or report directory should be inferred.

## Run the Unit-Oriented Group

```bash
npx vitest run src/utils/templateSelection.test.ts src/hooks/usePortfolioLayout.test.ts src/test/data/navigation.test.ts src/test/data/portfolio.test.ts src/templates/templateRegistry.test.ts src/themeAccessibility.test.ts
```

Expected verified result: 6 files and 49 tests pass.

## Test Inventory

| File                                     | Main responsibility                                                                                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `src/utils/templateSelection.test.ts`    | Source default, saved preference, invalid-value fallback, and storage failures                      |
| `src/hooks/usePortfolioLayout.test.ts`   | Layout validation, hash parsing, route creation, fallback, and persistence                          |
| `src/test/data/navigation.test.ts`       | Unique section IDs, labels, baseline availability, and visibility filtering                         |
| `src/test/data/portfolio.test.ts`        | Beginner README, shared content, links, accessible media, resume facts, and certificates            |
| `src/templates/templateRegistry.test.ts` | Two registered templates, visible selector options, complete section maps, and Engineering fallback |
| `src/themeAccessibility.test.ts`         | Theme contrast, semantic contact colors, scoped selectors, control clearance, and reduced motion    |

The remaining three files exercise rendered component integrations and are documented in `integration-test-instructions.md`.

## Fixing a Failure

1. Read the failing test name and first assertion message.
2. Open the source file named in the stack trace.
3. Correct the source or update the test only when the intended behavior changed.
4. Rerun the focused file with `npx vitest run path/to/file.test.ts`.
5. Rerun `npm run test` before considering the issue resolved.

## When to Run

Run the suite after changing shared data, assets, navigation, template availability, persistence, layouts, section names, theme components, or styling safeguards, and before publishing the site.
