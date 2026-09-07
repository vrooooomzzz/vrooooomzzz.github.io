# Unit of Work Dependency - Journal Inline Posts

## Unit Dependency Matrix

| Unit | Depends On | Dependency Type | Notes |
|---|---|---|---|
| Journal Inline Posts | Existing Journal section | UI | Enhances the current Journal writing area. |
| Journal Inline Posts | Existing portfolio data model | Data | Extends `BlogEntry` into a source-aware writing model. |
| Journal Inline Posts | Existing app hash navigation | Behavior | Adds local post hash handling while preserving section hashes. |
| Journal Inline Posts | Existing shared UI components | UI | Reuses `ContentCard`, `ExternalAction`, and `SectionShell`. |
| Journal Inline Posts | Existing test setup | Verification | Uses Vitest and Testing Library. |

## Internal Implementation Sequence

1. Update types and source-aware content model.
2. Add local journal content registry.
3. Combine local and WordPress writing entries.
4. Update Journal card rendering and source badges.
5. Add local post page and hash handling.
6. Update tests.
7. Run build and verification.

## External Dependencies

- No backend services.
- No database.
- No authentication provider.
- No runtime WordPress API calls.
- Existing React, Chakra UI, Vite, and test dependencies remain sufficient unless Markdown processing requires a build-time parser.

## Risk Controls

- Keep local and WordPress post behavior explicit via source discriminants.
- Keep local post routing isolated from existing section navigation.
- Preserve existing tests before adding new assertions.
- Verify `npm run test`, `npm run lint`, and `npm run build`.
