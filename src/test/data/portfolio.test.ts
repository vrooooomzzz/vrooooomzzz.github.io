import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, basename } from "node:path";
import { describe, expect, it } from "vitest";
import { portfolio } from "../../data/portfolio";

describe("Public content boundary", () => {
  it("contains only supported public identity and omits unavailable contact data", () => {
    expect(portfolio.profile.name).toBe("Nguyễn Đức Tuấn");
    expect(portfolio.profile.email).toBeUndefined();
    expect(portfolio.profile.resume).toBeUndefined();
    expect(portfolio.profile.socialLinks).toHaveLength(0);
    expect(portfolio.writing).toHaveLength(0);
    expect(portfolio.gallery).toHaveLength(0);
  });
  it("only enables sections with relevant content and no unsupported contact or writing", () => {
    const enabled = portfolio.navigation
      .filter((n) => n.enabled)
      .map((n) => n.id);
    expect(enabled).not.toContain("contact");
    expect(enabled).not.toContain("journal");
    expect(enabled).not.toContain("gallery");
    expect(enabled).toContain("projects");
    expect(enabled).toContain("skills");
  });
  it("ships exactly the reviewed certificate assets and no source archives", () => {
    const folder = resolve("src/assets/certificates/duc-tuan");
    const actual = readdirSync(folder).sort();
    const referenced = portfolio.certificates
      .flatMap((c) => [
        basename(c.file),
        ...(c.preview ? [basename(c.preview)] : []),
      ])
      .sort();
    expect(actual).toEqual(referenced);
    expect(actual).toHaveLength(10);
    const review = readFileSync(
      resolve(
        "aidlc-docs/construction/duc-tuan-portfolio/code/public-asset-review.md",
      ),
      "utf8",
    );
    for (const name of actual) {
      expect(review).toContain(name);
      expect(name).toMatch(/\.(png|pdf)$/);
    }
    expect(existsSync(resolve("src/assets/documents/resume.pdf"))).toBe(false);
    expect(existsSync(resolve("src/assets/certificates/university.pdf"))).toBe(
      false,
    );
  });
  it("uses valid local case-study artwork and complete public narratives without invented destinations", () => {
    for (const project of portfolio.projects) {
      expect(project.actions).toHaveLength(0);
      expect(project.imageAlt).toMatch(/illustrat/i);
      expect(project.caseStudy?.length).toBeGreaterThanOrEqual(4);
      for (const part of project.caseStudy ?? []) {
        expect(part.label.trim()).not.toBe("");
        expect(part.text.trim()).not.toBe("");
      }
    }
  });
  it("provides dates and experience appropriate to the student", () => {
    expect(portfolio.education[0].period).toContain("expected");
    expect(portfolio.experience[0].company).toContain("FOXAi");
    expect(JSON.stringify(portfolio)).not.toMatch(
      /Nham Quoc Hung|nhamhung|NUS Top Student|ASEAN Scholarship/,
    );
  });
});
