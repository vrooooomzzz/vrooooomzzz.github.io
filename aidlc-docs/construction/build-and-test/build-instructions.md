# Build Instructions

## Prerequisites

| Requirement                   | Project value                                                      |
| ----------------------------- | ------------------------------------------------------------------ |
| Runtime                       | Node.js 20.19 or newer; the verified local run used Node.js 24.0.0 |
| Package manager               | npm; the verified local run used npm 11.3.0                        |
| Build tools                   | TypeScript 5.9 and Vite 7 through the package scripts              |
| Required secrets              | None                                                               |
| Optional environment variable | `VITE_BASE_PATH` for a non-root GitHub Pages path                  |
| Output directory              | `dist/`                                                            |

The GitHub Pages workflow uses the current Node.js 20 release and derives `VITE_BASE_PATH` automatically.

## Build Steps

### 1. Install Locked Dependencies

From the repository root, run:

```bash
npm ci
```

Use `npm install` only when intentionally changing dependencies or regenerating `package-lock.json`.

### 2. Run Quality Checks

```bash
npm run test
npm run lint
```

Expected verified result: 9 test files and 88 tests pass, with no ESLint errors.

### 3. Build the Static Site

```bash
npm run build
```

This runs the TypeScript project build and then creates the Vite production bundle.

### 4. Verify Build Success

Expected results:

- The command exits successfully.
- `dist/index.html` exists.
- `dist/assets/` contains the bundled JavaScript, CSS, images, resume, and certificates.
- The generated site remains compatible with static GitHub Pages hosting.

The current build emits a non-blocking Vite warning because the main JavaScript chunk is larger than 500 kB. The verified output is 975.76 kB minified and 296.49 kB gzip.

### 5. Preview the Production Build

```bash
npm run preview
```

Open the local URL printed by Vite. The verified preview served `/` with HTTP 200.

## Build Artifacts

| Artifact                  | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| `dist/index.html`         | Static application entry point                          |
| `dist/assets/index-*.js`  | Minified React application bundle                       |
| `dist/assets/index-*.css` | Compiled shared and theme styling                       |
| `dist/assets/` media      | Bundled images, resume, certificates, and project media |

The verified `dist/` directory is approximately 9.4 MB, including portfolio media and PDF certificates.

## Troubleshooting

### Native SWC Binding Fails to Load

This usually means `node_modules` was installed with another Node.js version or computer architecture.

1. Confirm the active runtime with `node --version`.
2. Stop the development server.
3. Remove only the repository's `node_modules` directory.
4. Run `npm ci` again.
5. Retry `npm run build` or `npm run dev`.

### Dependency Installation Fails

- Confirm Node.js meets the minimum version above.
- Confirm the terminal is open in the repository root.
- Keep `package-lock.json` and use `npm ci` for a reproducible installation.

### TypeScript Build Fails

Run `npm run test` and inspect the first reported file. Common causes are a typed data value that no longer matches `src/types/portfolio.ts`, a missing asset import, or an incomplete template registry entry.

### Built Assets Do Not Load

Check that imported files still exist under `src/assets/`. For project-site deployment, confirm the GitHub workflow supplies the correct `VITE_BASE_PATH` before building.
