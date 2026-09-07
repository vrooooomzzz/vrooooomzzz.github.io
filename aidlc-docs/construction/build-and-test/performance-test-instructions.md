# Performance Test Instructions

## Purpose

Track build output and browser-delivery risks appropriate to a static GitHub Pages portfolio. Server load, throughput, concurrent-user, and API stress testing are not applicable because the project has no application server or API.

## Performance Requirements

- The production build must complete successfully.
- Decorative theme work must not add a large external download or materially regress startup size.
- The built entry page and assets must be servable from the local production preview.
- Background decoration must remain CSS-based, pointer-inert, and free of scroll-linked processing.

## Execute the Static Performance Check

```bash
npm run build
```

Record the JavaScript and CSS sizes printed by Vite and compare them with the current baseline.

## Verified Baseline

| Measure          | Observed result                                            |
| ---------------- | ---------------------------------------------------------- |
| Vite build time  | Approximately 6.00 seconds on the verification machine     |
| Main JavaScript  | 975.76 kB minified; 296.49 kB gzip                         |
| Main CSS         | 34.61 kB minified; 7.43 kB gzip                            |
| Complete `dist/` | Approximately 9.4 MB including images and PDF certificates |
| Preview response | HTTP 200 for `/` on the local Vite production preview      |

The main JavaScript remains above Vite's 500 kB warning threshold. This is a tracked, non-blocking warning; the current bundle is smaller than the previous recorded baseline.

## Optional Browser Measurement

For a future performance-focused change, run Lighthouse against `npm run preview` and record mobile performance, accessibility, and largest-contentful-paint results on the same machine and network profile. No Lighthouse threshold is claimed for this change because a controlled browser performance run was not part of the approved scope.

## Optimization Candidates if the Baseline Regresses

1. Split theme code with dynamic imports.
2. Compress the largest local images.
3. Review whether all PDFs must ship in the initial static artifact.
4. Lazy-load media below the fold.
5. Rebuild and compare the same Vite output fields.

## Not Applicable

- Server response-time objectives under load.
- Requests per second or concurrent-user targets.
- API, database, queue, or cache throughput.
- Stress testing or autoscaling validation.
