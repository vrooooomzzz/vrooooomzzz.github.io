# Domain Entities - GitHub Pages Deployment Configuration

## Unit

Unit 3: GitHub Pages Deployment Configuration

## Entity Overview

This unit has no runtime application domain entities. Its functional entities are deployment configuration concepts used during build and publish.

## Entities

### Portfolio App

| Field | Description |
|---|---|
| Name | React/Vite static portfolio application |
| Build Output | `dist/` |
| Hosting Model | Static GitHub Pages site |

### Base Path

| Field | Description |
|---|---|
| Value | Public URL prefix used by Vite for generated assets |
| Local Default | `/` |
| Repository Pages Value | `/<repository-name>/` |
| Root Pages Value | `/` |
| Override Source | `VITE_BASE_PATH` |

### GitHub Repository

| Field | Description |
|---|---|
| Owner | GitHub account or organization name |
| Repository Name | Project repository name |
| Root Pages Indicator | Repository name equals `<owner>.github.io` |

### Build Environment

| Field | Description |
|---|---|
| Runtime | GitHub Actions Ubuntu runner |
| Node Version | 20 |
| Package Manager | npm |
| Build Command | `npm run build` |
| Base Path Variable | `VITE_BASE_PATH` |

### Pages Workflow

| Field | Description |
|---|---|
| Workflow File | `.github/workflows/deploy.yml` |
| Automatic Trigger | Push to `main` |
| Manual Trigger | `workflow_dispatch` |
| Artifact Path | `./dist` |
| Deployment Target | GitHub Pages |

## Relationships

| Relationship | Description |
|---|---|
| GitHub Repository determines Base Path | Repository metadata is used to derive the Pages path in Actions. |
| Base Path configures Portfolio App build | Vite uses the base path when generating static asset URLs. |
| Build Environment produces artifact | The workflow installs dependencies and builds `dist/`. |
| Pages Workflow publishes artifact | GitHub Pages deploys the uploaded `dist/` artifact. |

## Data Ownership

| Entity | Owner |
|---|---|
| Base Path derivation rule | Template maintainer |
| Repository metadata | GitHub Actions runtime |
| Build output | Vite build process |
| Deployment target | GitHub Pages |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out during Requirements Analysis. |
| Property-Based Testing | Disabled | User opted out during Requirements Analysis. |
