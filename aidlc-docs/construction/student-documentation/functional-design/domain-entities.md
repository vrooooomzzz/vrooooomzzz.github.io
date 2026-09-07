# Domain Entities - Student Documentation

## Unit

Unit 4: Student Documentation

## Documentation Entities

### Student

| Field | Description |
|---|---|
| Role | Primary documentation reader |
| Experience Level | New to React/Vite and GitHub Pages |
| Goal | Customize and deploy a portfolio |
| Main Questions | What do I edit? How do I run it? How do I deploy it? |

### README

| Field | Description |
|---|---|
| File | `README.md` |
| Purpose | Student quick start and customization guide |
| Primary User | Student |
| Scope | Setup, project map, editing guide, verification, deployment handoff |

### Deployment Guide

| Field | Description |
|---|---|
| File | `DEPLOYMENT.md` |
| Purpose | GitHub Pages setup and troubleshooting |
| Primary User | Student deploying the template |
| Scope | Pages settings, workflow behavior, base path behavior, deployment verification |

### Editable Data File

| Field | Description |
|---|---|
| Location | `src/data/*.ts` |
| Purpose | Student-editable portfolio content |
| Examples | `profile.ts`, `projects.ts`, `navigation.ts`, `certificates.ts` |

### Asset

| Field | Description |
|---|---|
| Location | `src/assets/` |
| Purpose | Images, logos, and PDF certificates |
| Risk | Missing or renamed assets can break imports |

### Deployment Workflow

| Field | Description |
|---|---|
| File | `.github/workflows/deploy.yml` |
| Purpose | Build and deploy to GitHub Pages |
| Student Action | Enable Pages source as GitHub Actions |
| Base Path Behavior | Derived automatically by workflow |

## Entity Relationships

| Relationship | Description |
|---|---|
| Student reads README | Starts setup and customization from README. |
| README points to data files | Students edit content through `src/data`. |
| README points to DEPLOYMENT | Deployment details live in the deployment guide. |
| Deployment Guide explains workflow | Students understand Actions and Pages status. |
| Data files reference assets | Students must keep imports aligned when replacing files. |

## Ownership

| Entity | Maintainer |
|---|---|
| README | Template maintainer |
| DEPLOYMENT | Template maintainer |
| Data file guidance | Template maintainer |
| Asset replacement guidance | Template maintainer |
| Deployment troubleshooting | Template maintainer |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
