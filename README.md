# Student Portfolio Template

This template gives you a personal portfolio with Engineering and Business styles, light and dark modes, and automatic GitHub Pages deployment. Follow the steps in order if this is your first time using GitHub, Git, npm, or Visual Studio Code.

## 1. Create your GitHub account

Create a free account at [github.com/signup](https://github.com/signup), verify your email address, and sign in. Remember your exact username because it becomes part of your website address.

## 2. Use this template to create your repository

Open this template repository on GitHub, then:

1. Select **Use this template > Create a new repository**.
2. Choose your personal account as the owner.
3. Name the repository exactly `<username>.github.io`, replacing `<username>` with your lowercase GitHub username. For example, `octocat` should use `octocat.github.io`.
4. Choose **Public** so GitHub Pages works with GitHub Free.
5. Select **Create repository**.

This creates an independent repository for your portfolio. The final website address will be `https://<username>.github.io`.

See GitHub's [repository template instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) if the button is difficult to find.

## 3. Add a trusted collaborator

Add your instructor if you want them to help edit or troubleshoot your code:

1. Open your new repository and select **Settings > Collaborators**.
2. Select **Add people**.
3. Search for your instructor's GitHub username and send the invitation.
4. Ask the instructor to accept the invitation.

An accepted collaborator has write access: they can pull and push repository code. Invite only people you trust. When support ends, return to **Settings > Collaborators** and remove their access. See GitHub's [collaborator instructions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

## 4. Enable GitHub Pages with GitHub Actions

The deployment workflow is already included:

1. Open **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions > Deploy to GitHub Pages**.
4. If no run has started, select **Run workflow**, choose `main`, and select **Run workflow** again.

Wait for the workflow to show a green check mark. Yellow means it is running; red means a step failed and should be opened for details.

## 5. Verify the first live site and add its link

After deployment succeeds:

1. Open **Settings > Pages** and select **Visit site**, or open `https://<username>.github.io`.
2. Return to the repository's **Code** page.
3. Next to **About**, select the settings gear.
4. Enter `https://<username>.github.io` in the **Website** field and save.

The portfolio link now appears in the repository's About section. GitHub Pages can take up to 10 minutes to publish for the first time.

## 6. Install Git, Node.js, and Visual Studio Code

Install these tools locally:

- [Git](https://git-scm.com/downloads) saves and uploads code changes.
- [Node.js LTS](https://nodejs.org/en/download) includes npm, which runs the website.
- [Visual Studio Code](https://code.visualstudio.com/) edits the project files.

Open a terminal and verify Git, Node.js, and npm:

```bash
git --version
node --version
npm --version
```

Use Node `20.19.0` or newer, or Node `22.12.0` or newer. Restart the terminal if an installed command is not recognized.

## 7. Tell Git who you are

Configure the name and email recorded on your commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use an email connected to your GitHub account or your GitHub no-reply email. Confirm the values:

```bash
git config --get user.name
git config --get user.email
```

`--global` applies this identity to every repository on the computer. Omit it when setting a different identity only inside one repository.

## 8. Clone and open your repository

On your repository's **Code** page, copy the HTTPS URL. In a terminal, run:

```bash
git clone https://github.com/<username>/<username>.github.io.git
cd <username>.github.io
git remote -v
```

The remote should be named `origin`; it is your own GitHub repository. In Visual Studio Code, select **File > Open Folder**, choose the cloned folder, and select **Terminal > New Terminal**. The folder should contain `package.json`.

## 9. Install and preview locally

Install the project packages and start the local site:

```bash
npm install
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173/`. Keep the terminal running while editing and press `Ctrl+C` to stop it.

npm creates `node_modules/`; do not edit or commit that folder. The GitHub Actions workflow uses `npm ci` for a locked, repeatable deployment build.

## 10. Customize and check your work

Most personal information is under `src/data/`:

| Change                                          | File                                                |
| ----------------------------------------------- | --------------------------------------------------- |
| Name, headline, email, resume, and social links | `src/data/profile.ts`                               |
| About text                                      | `src/data/about.ts`                                 |
| Section headings                                | `src/data/sectionContent.ts`                        |
| Education                                       | `src/data/education.ts`                             |
| Work and volunteering                           | `src/data/experience.ts`                            |
| Awards                                          | `src/data/awards.ts`                                |
| Projects, images, links, and tools              | `src/data/projects.ts`                              |
| Gallery photos and videos                       | `src/data/gallery.ts` and `src/data/videos.ts`      |
| Skills and certificates                         | `src/data/skills.ts` and `src/data/certificates.ts` |
| Blog links and journal posts                    | `src/data/blog.ts` and `src/data/journalPosts.ts`   |
| Section order and visibility                    | `src/data/navigation.ts`                            |
| First style shown                               | `src/data/template.ts`                              |

Put project images in `src/assets/projects/`, other images in `src/assets/`, the resume in `src/assets/documents/`, certificate PDFs in `src/assets/certificates/`, and journal Markdown in `src/content/journal/`. Update the matching import when a filename changes and provide useful `imageAlt` text.

To change the first portfolio style, edit `src/data/template.ts`:

```ts
export const selectedTemplateId = "engineering";
```

Use `"engineering"` or `"business"`. Save a small visible change and confirm it appears immediately on the local site. Then check both styles, both color modes, and a narrow browser window.

Run the automated checks before committing:

```bash
npm test
npm run lint
npm run build
```

The generated `dist/` build folder should not be committed.

## 11. Commit and push your changes

Review, stage, and inspect the changes:

```bash
git status
git add .
git diff --staged
```

If the staged files are correct, create the first commit and push it to your repository's `origin` remote:

```bash
git commit -m "Customize my portfolio"
git branch -M main
git push -u origin main
```

Later updates only need `git add .`, `git commit -m "Describe the change"`, and `git push`. Never commit passwords, access tokens, secret values, `.env` files, `node_modules/`, or `dist/`.

On the first HTTPS push, GitHub may open a browser or Git Credential Manager. GitHub does not accept your account password in the terminal; use browser sign-in or a personal access token, and never store a token in the project.

## 12. Watch the deployment

Open the repository's **Actions** tab and select **Deploy to GitHub Pages**. Your push to `main` should trigger a new run automatically.

- Yellow: wait for the workflow to finish.
- Green: the updated site deployed successfully.
- Red: open the failed job and its first failed step, fix the reported problem locally, commit, and push again.

## 13. Verify the updated live site

After the workflow succeeds, select its deployment link or open `https://<username>.github.io`. Confirm your latest visible change appears and check navigation, images, resume downloads, and both portfolio styles.

If old content remains, wait a few minutes, refresh without cache, or use a private browser window. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed URL and deployment troubleshooting.

## Common problems

### `package.json` cannot be found

The terminal is in the wrong folder. Open the cloned `<username>.github.io` folder in Visual Studio Code, then open a new terminal.

### The local site does not update

Confirm `npm run dev` is still running, save the file, and use the address printed by that command.

### `git push` is rejected

Run `git remote -v` and confirm `origin` points to your `<username>.github.io` repository. If GitHub contains newer work, run `git pull --ff-only` before pushing again.

### The workflow or live site fails

Run `npm test`, `npm run lint`, and `npm run build` locally. Check missing assets and import capitalization, then inspect the failed Actions step. Confirm **Settings > Pages** still uses **GitHub Actions**.

## Developer notes

The app uses React 19, TypeScript, Vite, Chakra UI, Tailwind CSS, Vitest, ESLint, GitHub Actions, and GitHub Pages. Shared components are in `src/components/`, templates are in `src/templates/`, and shared types are in `src/types/portfolio.ts`.

## License

MIT
