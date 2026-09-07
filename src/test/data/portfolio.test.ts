import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { portfolio, sectionIds } from "../../data/portfolio";
import type {
  ContentSectionId,
  ExternalLink,
  SectionId,
} from "../../types/portfolio";

const supportedHrefPattern = /^(https?:\/\/|mailto:|#\/)/;
const readme = readFileSync(resolve(process.cwd(), "README.md"), "utf8");

const expectNonEmpty = (value: string, message: string) => {
  expect(value.trim(), message).not.toHaveLength(0);
};

const expectExternalLink = (link: ExternalLink, context: string) => {
  expectNonEmpty(link.label, `${context} needs a link label`);
  expectNonEmpty(link.href, `${context} needs an href`);
  expectNonEmpty(link.ariaLabel, `${context} needs an ariaLabel`);
  expect(
    supportedHrefPattern.test(link.href),
    `${context} must use http(s) or mailto href`,
  ).toBe(true);
};

const expectKnownSection = (sectionId: SectionId, context: string) => {
  expect(sectionIds, `${context} must target a known section`).toContain(
    sectionId,
  );
};

describe("src/data/portfolio.ts", () => {
  it("keeps the README usable for a first-time contributor", () => {
    const requiredInstructions = [
      "Create your GitHub account",
      "Use this template",
      "Create a new repository",
      "<username>.github.io",
      "Settings > Collaborators",
      "Add people",
      "write access",
      "Settings > Pages",
      "Visit site",
      "About",
      "Website",
      "Visual Studio Code",
      "Terminal > New Terminal",
      "git --version",
      "node --version",
      "npm --version",
      'git config --global user.name "Your Name"',
      'git config --global user.email "you@example.com"',
      "git config --get user.name",
      "git clone",
      "origin",
      "npm install",
      "npm ci",
      "npm run dev",
      "npm test",
      "npm run lint",
      "npm run build",
      "git status",
      "git add .",
      "git diff --staged",
      "git commit -m",
      "git branch -M main",
      "git push -u origin main",
      "GitHub Actions",
      "Deploy to GitHub Pages",
      "Run workflow",
      "Settings > Pages",
      "DEPLOYMENT.md",
    ];

    requiredInstructions.forEach((instruction) => {
      expect(readme).toContain(instruction);
    });

    const journeyOrder = [
      "Create your GitHub account",
      "Use this template",
      "Settings > Collaborators",
      "Settings > Pages",
      "Install Git, Node.js, and Visual Studio Code",
      "Tell Git who you are",
      "Clone and open your repository",
      "Install and preview locally",
      "Customize and check your work",
      "Commit and push your changes",
      "Watch the deployment",
      "Verify the updated live site",
    ];
    let previousIndex = -1;
    journeyOrder.forEach((step) => {
      const currentIndex = readme.indexOf(step);
      expect(
        currentIndex,
        `${step} must appear in the student journey`,
      ).toBeGreaterThan(previousIndex);
      previousIndex = currentIndex;
    });

    expect(readme).toMatch(/node_modules.*dist|dist.*node_modules/s);
    expect(readme).toMatch(/secret|\.env/i);
    expect(readme).not.toMatch(/git push[^\n]*upstream/);
  });

  it("keeps student-editable copy complete for every non-home section", () => {
    const contentSectionIds = sectionIds.filter(
      (sectionId): sectionId is ContentSectionId => sectionId !== "home",
    );

    expect(Object.keys(portfolio.sectionContent)).toHaveLength(
      contentSectionIds.length,
    );

    for (const sectionId of contentSectionIds) {
      const copy = portfolio.sectionContent[sectionId];

      expectNonEmpty(
        copy.eyebrow,
        `src/data/sectionContent.ts ${sectionId}.eyebrow is required`,
      );
      expectNonEmpty(
        copy.title,
        `src/data/sectionContent.ts ${sectionId}.title is required`,
      );
      expectNonEmpty(
        copy.description,
        `src/data/sectionContent.ts ${sectionId}.description is required`,
      );
    }
  });

  it("keeps required profile and hero fields filled in", () => {
    expectNonEmpty(
      portfolio.profile.name,
      "src/data/profile.ts profile.name is required",
    );
    expectNonEmpty(
      portfolio.profile.role,
      "src/data/profile.ts profile.role is required",
    );
    expectNonEmpty(
      portfolio.profile.email,
      "src/data/profile.ts profile.email is required",
    );
    expectNonEmpty(
      portfolio.profile.profileImage,
      "src/data/profile.ts profile.profileImage is required",
    );
    expectNonEmpty(
      portfolio.profile.resume.href,
      "src/data/profile.ts profile.resume.href is required",
    );
    expectNonEmpty(
      portfolio.profile.resume.fileName,
      "src/data/profile.ts profile.resume.fileName is required",
    );
    expectNonEmpty(
      portfolio.profile.resume.ariaLabel,
      "src/data/profile.ts profile.resume.ariaLabel is required",
    );
    expectNonEmpty(
      portfolio.profile.summary,
      "src/data/profile.ts profile.summary is required",
    );
    expectNonEmpty(
      portfolio.hero.headline,
      "src/data/profile.ts hero.headline is required",
    );
    expectNonEmpty(
      portfolio.hero.intro,
      "src/data/profile.ts hero.intro is required",
    );
    expectKnownSection(
      portfolio.hero.primaryAction.sectionId,
      "src/data/profile.ts hero.primaryAction",
    );
    expectKnownSection(
      portfolio.hero.secondaryAction.sectionId,
      "src/data/profile.ts hero.secondaryAction",
    );
  });

  it("keeps social links and project actions usable without network checks", () => {
    const projectIds = new Set<string>();

    for (const link of portfolio.profile.socialLinks) {
      expectExternalLink(
        link,
        `src/data/profile.ts social link "${link.label}"`,
      );
    }

    for (const project of portfolio.projects) {
      expectNonEmpty(project.id, "src/data/projects.ts project.id is required");
      expect(
        projectIds.has(project.id),
        `src/data/projects.ts project id "${project.id}" must be unique`,
      ).toBe(false);
      projectIds.add(project.id);
      expectNonEmpty(
        project.title,
        "src/data/projects.ts project.title is required",
      );
      expectNonEmpty(
        project.description,
        `src/data/projects.ts project "${project.title}" needs a description`,
      );
      expectNonEmpty(
        project.image,
        `src/data/projects.ts project "${project.title}" needs a project cover`,
      );
      expect(
        project.image,
        `src/data/projects.ts project "${project.title}" cover must use its supplied PNG asset`,
      ).toMatch(/\.png$/);
      expectNonEmpty(
        project.imageAlt,
        `src/data/projects.ts project "${project.title}" needs image alt text`,
      );
      expect(
        project.imageAlt.split(/\s+/).length,
        `src/data/projects.ts project "${project.title}" needs descriptive image alt text`,
      ).toBeGreaterThanOrEqual(6);
      expect(
        project.imageAlt,
        `src/data/projects.ts project "${project.title}" alt text must describe the supplied screenshot or diagram`,
      ).toMatch(/screenshot|diagram/i);
      expectNonEmpty(
        project.logoKey,
        `src/data/projects.ts project "${project.title}" needs a logo key`,
      );
      expectNonEmpty(
        project.logoLabel,
        `src/data/projects.ts project "${project.title}" needs a logo label`,
      );
      expect(
        project.technologies.length,
        `src/data/projects.ts project "${project.title}" needs technologies`,
      ).toBeGreaterThan(0);

      for (const action of project.actions) {
        expectExternalLink(
          action,
          `src/data/projects.ts project "${project.title}" action "${action.label}"`,
        );
      }
    }

    expect(portfolio.projects.map((project) => project.id)).toEqual([
      "coursework-certificates",
      "program-analyzer",
      "java-resume-application",
    ]);

    for (const post of portfolio.blog) {
      expect(
        post.source,
        `src/data/blog.ts blog post "${post.title}" must be a WordPress entry`,
      ).toBe("wordpress");
      expectNonEmpty(
        post.title,
        "src/data/blog.ts blog post title is required",
      );
      expectNonEmpty(
        post.image,
        `src/data/blog.ts blog post "${post.title}" needs a feed image`,
      );
      expectNonEmpty(
        post.imageAlt,
        `src/data/blog.ts blog post "${post.title}" needs image alt text`,
      );
      expectNonEmpty(
        post.summary,
        `src/data/blog.ts blog post "${post.title}" needs a summary`,
      );
      expectExternalLink(
        { label: post.title, href: post.href, ariaLabel: `Read ${post.title}` },
        `src/data/blog.ts blog post "${post.title}"`,
      );
      expect(
        post.topics.length,
        `src/data/blog.ts blog post "${post.title}" needs topics`,
      ).toBeGreaterThan(0);
    }

    for (const post of portfolio.journalPosts) {
      expect(
        post.source,
        `src/data/journalPosts.ts local post "${post.title}" must be a local entry`,
      ).toBe("local");
      expectNonEmpty(
        post.slug,
        `src/data/journalPosts.ts local post "${post.title}" needs a slug`,
      );
      expectNonEmpty(
        post.title,
        "src/data/journalPosts.ts local post title is required",
      );
      expectNonEmpty(
        post.href,
        `src/data/journalPosts.ts local post "${post.title}" needs an href`,
      );
      expect(
        post.href.startsWith("#/journal/"),
        `src/data/journalPosts.ts local post "${post.title}" needs a journal hash href`,
      ).toBe(true);
      expectNonEmpty(
        post.image,
        `src/data/journalPosts.ts local post "${post.title}" needs an image`,
      );
      expectNonEmpty(
        post.imageAlt,
        `src/data/journalPosts.ts local post "${post.title}" needs image alt text`,
      );
      expectNonEmpty(
        post.summary,
        `src/data/journalPosts.ts local post "${post.title}" needs a summary`,
      );
      expectNonEmpty(
        post.content,
        `src/data/journalPosts.ts local post "${post.title}" needs Markdown content`,
      );
      expect(
        post.topics.length,
        `src/data/journalPosts.ts local post "${post.title}" needs topics`,
      ).toBeGreaterThan(0);
    }

    expect(
      portfolio.writing.some((post) => post.source === "local"),
      "src/data/portfolio.ts writing needs local posts",
    ).toBe(true);
    expect(
      portfolio.writing.some((post) => post.source === "wordpress"),
      "src/data/portfolio.ts writing needs WordPress posts",
    ).toBe(true);
  });

  it("keeps gallery and certificate entries accessible", () => {
    for (const item of portfolio.gallery) {
      expectNonEmpty(
        item.id,
        "src/data/gallery.ts gallery item id is required",
      );
      expectNonEmpty(
        item.src,
        `src/data/gallery.ts gallery item "${item.id}" needs a source`,
      );
      expectNonEmpty(
        item.alt,
        `src/data/gallery.ts gallery item "${item.id}" needs alt text`,
      );
      expectNonEmpty(
        item.title,
        `src/data/gallery.ts gallery item "${item.id}" needs a title`,
      );
    }

    for (const certificate of portfolio.certificates) {
      expectNonEmpty(
        certificate.title,
        "src/data/certificates.ts certificate title is required",
      );
      expectNonEmpty(
        certificate.issuer,
        `src/data/certificates.ts certificate "${certificate.title}" needs an issuer`,
      );
      expectNonEmpty(
        certificate.description,
        `src/data/certificates.ts certificate "${certificate.title}" needs a description`,
      );
      expectNonEmpty(
        certificate.file,
        `src/data/certificates.ts certificate "${certificate.title}" needs a file`,
      );
      expectNonEmpty(
        certificate.logoKey,
        `src/data/certificates.ts certificate "${certificate.title}" needs a logo key`,
      );
      expectNonEmpty(
        certificate.logoLabel,
        `src/data/certificates.ts certificate "${certificate.title}" needs a logo label`,
      );
      expectNonEmpty(
        certificate.ariaLabel,
        `src/data/certificates.ts certificate "${certificate.title}" needs an ariaLabel`,
      );
    }
  });

  it("keeps visible section arrays populated with display fields", () => {
    expect(
      portfolio.education.length,
      "src/data/education.ts should include at least one education entry",
    ).toBeGreaterThan(0);
    expect(
      portfolio.experience.length,
      "src/data/experience.ts should include at least one experience entry",
    ).toBeGreaterThan(0);
    expect(
      portfolio.awards.length,
      "src/data/awards.ts should include at least one award entry",
    ).toBeGreaterThan(0);
    expect(
      portfolio.projects.length,
      "src/data/projects.ts should include at least one project entry",
    ).toBeGreaterThan(0);
    expect(
      portfolio.skills.length,
      "src/data/skills.ts should include at least one skill category",
    ).toBeGreaterThan(0);

    for (const education of portfolio.education) {
      expectNonEmpty(
        education.degree,
        "src/data/education.ts education.degree is required",
      );
      expectNonEmpty(
        education.institution,
        `src/data/education.ts education "${education.degree}" needs an institution`,
      );
    }

    for (const experience of portfolio.experience) {
      expectNonEmpty(
        experience.title,
        "src/data/experience.ts experience.title is required",
      );
      expectNonEmpty(
        experience.company,
        `src/data/experience.ts experience "${experience.title}" needs a company`,
      );
    }

    for (const award of portfolio.awards) {
      expectNonEmpty(award.title, "src/data/awards.ts award.title is required");
      expectNonEmpty(
        award.organization,
        `src/data/awards.ts award "${award.title}" needs an organization`,
      );
      expectNonEmpty(
        award.year,
        `src/data/awards.ts award "${award.title}" needs a year`,
      );
      expectNonEmpty(
        award.description,
        `src/data/awards.ts award "${award.title}" needs a description`,
      );
      expectNonEmpty(
        award.tag,
        `src/data/awards.ts award "${award.title}" needs a tag`,
      );
      expect(
        Boolean(award.logo?.trim() || award.logoText?.trim()),
        `src/data/awards.ts award "${award.title}" needs a logo or text mark`,
      ).toBe(true);
    }

    for (const skillCategory of portfolio.skills) {
      expectNonEmpty(
        skillCategory.category,
        "src/data/skills.ts skill category name is required",
      );
      expect(
        skillCategory.skills.length,
        `src/data/skills.ts category "${skillCategory.category}" needs skills`,
      ).toBeGreaterThan(0);

      for (const skill of skillCategory.skills) {
        expectNonEmpty(
          skill.label,
          `src/data/skills.ts category "${skillCategory.category}" has a skill without a label`,
        );
        expectNonEmpty(
          skill.logoKey,
          `src/data/skills.ts skill "${skill.label}" needs a logo key`,
        );
        expectNonEmpty(
          skill.logoLabel,
          `src/data/skills.ts skill "${skill.label}" needs a logo label`,
        );
      }
    }
  });

  it("includes the resume-backed Sea and PSA internship experience", () => {
    const seaInternship = portfolio.experience.find(
      (entry) =>
        entry.title === "Data Analyst Intern" &&
        entry.company === "Sea Limited (Shopee Finance)",
    );
    const psaInternship = portfolio.experience.find(
      (entry) =>
        entry.title === "Data Analytics and Machine Learning Intern" &&
        entry.company === "PSA International",
    );

    expect(seaInternship?.period).toBe("Nov 2021 - May 2022");
    expect(seaInternship?.description.length).toBeGreaterThanOrEqual(3);
    expect(psaInternship?.period).toBe("May 2021 - Nov 2021");
    expect(psaInternship?.description.length).toBeGreaterThanOrEqual(2);
  });

  it("includes the Saint Andrew's and Zhonghua school achievements", () => {
    const modelStudentAward = portfolio.awards.find(
      (award) =>
        award.title === "Model Student Award" &&
        award.organization === "Saint Andrew's Junior College",
    );
    const choirAward = portfolio.awards.find(
      (award) =>
        award.title === "Singapore Youth Festival Choir - Silver Award" &&
        award.organization === "Zhonghua Secondary School",
    );

    expect(modelStudentAward).toMatchObject({ year: "2017", tag: "CHARACTER" });
    expect(modelStudentAward?.description).toContain("exemplary character");
    expect(choirAward).toMatchObject({ year: "2015", tag: "ARTS" });
    expect(choirAward?.logo).toContain("zhonghua");
    expect(choirAward?.description).toContain("Singapore Youth Festival");
  });
});
