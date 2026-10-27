# Duc Tuan Portfolio - NFR Design Plan

## Prerequisites

NFR Requirements and technology decisions explicitly approved. The execution plan requires this design stage and skips Infrastructure Design; next stage is Code Generation Part 1 (planning).

## Category assessment

| Category | Applicability and decision | Clarification outcome |
| --- | --- | --- |
| Resilience | Apply safe navigation/storage fallback and document-preview fallback; server retries/failover N/A because there is no backend | Approved static scope determines behavior; no unresolved choice |
| Scalability | Existing static hosting; queues/caches/custom scaling N/A | No growth-driven backend or load SLA requested |
| Performance | Lightweight certificate previews, lazy images, local assets, output-size review | Approved NFR-04 determines the targets; no invented latency guarantee |
| Security/privacy | Selective publication, certificate allowlist, source/output/history review | Original confidentiality instruction and NFR-01 determine the boundary |
| Logical components | Reuse data, templates, App, existing navigation, tests, and local inspection tooling | No new infrastructure or service selection is needed |

Each mandated design category was evaluated against approved evidence. No unanswered choice affects the design; the question below is the required concrete stage review.

## Checklist

- [x] Load stage rules, approved NFR requirements/technology decisions, state, and relevant source contracts.
- [x] Assess all resilience, scalability, performance, privacy/security, and logical-component categories with applicability rationale.
- [x] Design selective asset flow, public-content boundaries, certificate rendering, optional content, and static fallbacks.
- [x] Generate and validate nfr-design-patterns.md and logical-components.md before writing.
- [x] Map design patterns to NFR-01 through NFR-06 and record optional-extension skips.
- [x] Update state, execution progress, active index, and append-only audit; present standard completion options.
- [x] Receive explicit NFR Design approval before Code Generation planning - user response "approve and continue".

## Question 1: NFR Design review

Approve [design patterns](../duc-tuan-portfolio/nfr-design/nfr-design-patterns.md) and [logical components](../duc-tuan-portfolio/nfr-design/logical-components.md)?

A) Continue to Next Stage - approve and proceed to Code Generation Part 1 planning.
B) Request Changes - describe changes after [Answer]:.
C) Other (please describe after [Answer]:).

[Answer]: A
