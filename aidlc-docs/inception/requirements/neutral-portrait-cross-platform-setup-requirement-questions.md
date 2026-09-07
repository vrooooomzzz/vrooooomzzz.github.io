# Requirement Questions - Neutral Portrait and Cross-Platform Setup

> **Status: Approved on 2026-08-02.** The user approved the recommended A/A/A decisions. This change adjusts one existing presentation component and expands student documentation; it does not add a template, route, dependency, or content model.

## Confirmed Changes

- Reduce the visual footprint of the profile portrait in the Neutral theme.
- Keep the same profile image and preserve the Neutral theme's editorial identity.
- Expand the README into a detailed, beginner-friendly installation and local setup guide.
- Keep application behavior, shared content, and the Engineering and Business layouts unchanged.

## Question 1
How closely should the Neutral portrait match the other themes?

A) Use a medium portrait panel similar to Business (Recommended) - Constrain the desktop portrait to roughly 420px wide with a stable portrait aspect ratio, center it within its column, and scale it down responsively on smaller screens.
B) Match Engineering exactly - Use the compact 90px to 120px square profile image treatment.
C) Keep the current editorial image width but cap its height at approximately 480px.
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
Which operating systems should receive dedicated setup instructions?

A) Major student desktop environments (Recommended) - Cover Windows 10/11, current macOS, and common Linux families including Ubuntu/Debian, Fedora, and Arch-based systems; add short notes for WSL and ChromeOS Linux where useful.
B) Core three only - Cover Windows, macOS, and Ubuntu Linux without additional Linux families or compatibility notes.
C) Windows and macOS only - Keep Linux instructions limited to the shared terminal commands.
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
How should the README guide beginners through installation?

A) Beginner-first with alternatives (Recommended) - Explain prerequisites, graphical installers, optional operating-system package-manager commands, version checks, Git clone and ZIP download paths, dependency installation, local development, editing, verification, updates, and common setup errors.
B) Terminal-first - Lead with package-manager commands and keep graphical installer guidance brief.
C) Graphical-tools-first - Lead with browser downloads, VS Code, and GitHub Desktop, with terminal commands only where required to run the project.
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Proposed Requirements

1. Neutral must retain the existing accurate profile image while reducing its size to a medium, responsive portrait treatment comparable to the Business theme.
2. The portrait must not stretch, overflow, or dominate the first viewport at supported desktop and mobile sizes.
3. Neutral's current copy, actions, routes, supporting project artwork, and editorial layout identity must remain intact.
4. README setup instructions must clearly separate Windows, macOS, and Linux prerequisite installation while converging on the same repository commands afterward.
5. The guide must use copyable shell blocks with the correct shell identified and must explain placeholders such as `<owner>` and `<repository>`.
6. Students must be able to follow either a Git clone path or a ZIP download path without prior repository experience.
7. The guide must cover Node.js and Git version checks, dependency installation, development startup, the local URL, stopping and restarting the server, verification commands, and common operating-system-specific problems.
8. Package-manager examples must be optional alternatives to official installers and must avoid unsafe global npm or permission workarounds.
9. Existing customization, template-selection, journal, asset, deployment, and troubleshooting guidance must remain accurate and easy to find.
10. No runtime dependency, route, persistence, content-schema, or deployment behavior may change.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, choices, answer tags, lists, and tables |
| Application/document boundary | Application code remains outside `aidlc-docs/` |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Existing workflow decision; this amendment introduces no data or service boundary. |
| Property-Based Testing | Disabled | Existing workflow decision; deterministic UI and documentation checks remain appropriate. |
