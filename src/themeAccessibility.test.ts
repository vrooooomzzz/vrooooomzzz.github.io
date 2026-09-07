/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const appStyles = readFileSync(resolve(process.cwd(), "src/App.css"), "utf8");
const businessStyles = readFileSync(
  resolve(process.cwd(), "src/templates/business/business.css"),
  "utf8",
);
const indexStyles = readFileSync(
  resolve(process.cwd(), "src/index.css"),
  "utf8",
);
const businessPresentationSources = [
  "BusinessAbout.tsx",
  "BusinessAwards.tsx",
  "BusinessDetailList.tsx",
  "BusinessEducation.tsx",
  "BusinessExperience.tsx",
  "BusinessGallery.tsx",
  "BusinessHero.tsx",
  "BusinessJournal.tsx",
  "BusinessProjects.tsx",
  "BusinessSectionHeading.tsx",
  "BusinessShell.tsx",
  "BusinessSkills.tsx",
].map((fileName) =>
  readFileSync(
    resolve(process.cwd(), "src/templates/business", fileName),
    "utf8",
  ),
);
const businessProjectsSource = readFileSync(
  resolve(process.cwd(), "src/templates/business/BusinessProjects.tsx"),
  "utf8",
);
const businessHeroSource = readFileSync(
  resolve(process.cwd(), "src/templates/business/BusinessHero.tsx"),
  "utf8",
);
const businessShellSource = readFileSync(
  resolve(process.cwd(), "src/templates/business/BusinessShell.tsx"),
  "utf8",
);

const businessPalette = ["#3368a0", "#66a3bf", "#c8dfdb", "#f2efe7"];
const businessTextPalette = ["#524646", "#fcf2e5"];
const legacyBusinessColors = [
  "#100f14",
  "#18161c",
  "#242029",
  "#f7f0e5",
  "#c4b9aa",
  "#e6b86b",
  "#cf9147",
  "#a9642d",
  "#8f491f",
  "#783a17",
  "#0e0d11",
  "#f4efe5",
  "#e9e0d2",
  "#d7c8b5",
  "#241d19",
  "#5f574d",
  "#85511f",
  "#704018",
  "#613713",
  "#562d0e",
  "#e5dbcc",
  "rgba(230, 184, 107",
  "rgba(112, 64, 24",
];

const getThemeBlock = (source: string, selector: string): string => {
  const marker = `${selector} {`;
  const start = source.indexOf(marker);

  if (start === -1) {
    throw new Error(`Missing theme selector: ${selector}`);
  }

  const bodyStart = start + marker.length;
  const bodyEnd = source.indexOf("}", bodyStart);

  return source.slice(bodyStart, bodyEnd);
};

const getHexToken = (block: string, token: string): string => {
  const match = block.match(
    new RegExp(`--${token}:\\s*(#[0-9a-fA-F]{6})\\s*;`),
  );

  if (!match) {
    throw new Error(`Missing hexadecimal theme token: --${token}`);
  }

  return match[1];
};

const channelToLinear = (channel: number): number => {
  const normalized = channel / 255;

  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string): number => {
  const channels = [1, 3, 5].map((start) =>
    channelToLinear(Number.parseInt(hex.slice(start, start + 2), 16)),
  );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrastRatio = (foreground: string, background: string): number => {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort(
    (left, right) => right - left,
  );

  return (lighter + 0.05) / (darker + 0.05);
};

const themeScopes = [
  ["Engineering dark", indexStyles, ":root"],
  ["Engineering light", indexStyles, ".light"],
  ["Business dark", businessStyles, ".portfolio-template-business"],
  ["Business light", businessStyles, ".light .portfolio-template-business"],
] as const;

describe("portfolio theme accessibility safeguards", () => {
  it("keeps the Business theme anchored to its approved palette", () => {
    const normalizedBusinessStyles = businessStyles.toLowerCase();

    businessPalette.forEach((color) => {
      expect(normalizedBusinessStyles).toContain(color);
    });
    businessTextPalette.forEach((color) => {
      expect(normalizedBusinessStyles).toContain(color);
    });
    legacyBusinessColors.forEach((color) => {
      expect(normalizedBusinessStyles).not.toContain(color);
    });
  });

  it("keeps the Business contact and profile presentation readable", () => {
    const darkTheme = getThemeBlock(
      businessStyles,
      ".portfolio-template-business",
    );
    const lightTheme = getThemeBlock(
      businessStyles,
      ".light .portfolio-template-business",
    );
    const emailRule = getThemeBlock(
      businessStyles,
      ".portfolio-template-business .business-contact-email",
    );
    const contactCardRule = getThemeBlock(
      businessStyles,
      ".portfolio-template-business .business-contact-card",
    );
    const lightContactCardRule = getThemeBlock(
      businessStyles,
      ".light .portfolio-template-business .business-contact-card",
    );
    const contactSocialsRule = getThemeBlock(
      businessStyles,
      ".portfolio-template-business .business-contact-socials",
    );
    const contactSocialLinkRule = getThemeBlock(
      businessStyles,
      ".portfolio-template-business .business-contact-socials a",
    );
    const subjectRecordRule = getThemeBlock(
      businessStyles,
      ".portfolio-template-business .business-subject-record",
    );

    expect(getHexToken(darkTheme, "text-300").toLowerCase()).toBe("#e8e0d5");
    expect(emailRule).toContain("display: inline-flex;");
    expect(emailRule).toContain("align-self: center;");
    expect(emailRule).toContain("width: fit-content;");
    expect(emailRule).toContain("max-width: 100%;");
    expect(emailRule).toContain("border: 1px solid var(--line-500);");
    expect(emailRule).toContain("background: var(--accent-500);");
    expect(emailRule).toContain("padding:");
    expect(emailRule).toContain("overflow-wrap: anywhere;");
    expect(contactCardRule).toContain("align-items: center;");
    expect(contactCardRule).toContain("text-align: center;");
    expect(contactCardRule).toContain("background: var(--surface-800);");
    expect(contactCardRule).toContain("color: var(--text-100);");
    expect(lightContactCardRule).toContain("background: var(--primary-bg);");
    expect(lightContactCardRule).toContain("color: var(--primary-text);");
    expect(contactCardRule).not.toContain("color: white;");
    expect(contactCardRule).not.toContain("--control-bg-soft:");
    expect(contactCardRule).not.toContain("--control-hover-bg:");
    expect(
      contrastRatio(
        getHexToken(darkTheme, "text-100"),
        getHexToken(darkTheme, "bg-700"),
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrastRatio(
        getHexToken(lightTheme, "primary-text"),
        getHexToken(lightTheme, "primary-bg"),
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(contactSocialsRule).toContain("justify-content: center;");
    expect(contactSocialLinkRule).toContain("display: inline-flex;");
    expect(contactSocialLinkRule).toContain(
      "border: 1px solid var(--line-500);",
    );
    expect(contactSocialLinkRule).toContain("background: var(--accent-500);");
    expect(contactSocialLinkRule).toContain("padding:");
    expect(businessStyles).toMatch(
      /business-contact-email:hover,\s*\.portfolio-template-business \.business-contact-socials a:hover\s*{[^}]*background:\s*var\(--accent-500\);[^}]*border-color:\s*currentColor;/s,
    );
    expect(businessStyles).toMatch(
      /\.light \.portfolio-template-business \.business-contact-email,\s*\.light \.portfolio-template-business \.business-contact-socials a\s*{[^}]*background:\s*var\(--primary-hover-bg\);/s,
    );
    expect(businessStyles).toMatch(
      /\.light \.portfolio-template-business \.business-contact-email:hover,\s*\.light \.portfolio-template-business \.business-contact-socials a:hover\s*{[^}]*background:\s*var\(--primary-hover-bg\);[^}]*border-color:\s*currentColor;/s,
    );
    expect(
      contrastRatio(
        getHexToken(darkTheme, "text-100"),
        getHexToken(darkTheme, "accent-500"),
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrastRatio(
        getHexToken(lightTheme, "primary-text"),
        getHexToken(lightTheme, "primary-hover-bg"),
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(subjectRecordRule).toContain("width: 100%;");
    expect(subjectRecordRule).toContain("max-width: 20rem;");
    expect(subjectRecordRule).toContain("justify-self: center;");
    expect(businessHeroSource).toContain('aspectRatio="4 / 3.5"');
    expect(businessHeroSource).not.toContain('aspectRatio="4 / 3"');
    expect(businessHeroSource).not.toContain('aspectRatio="4 / 4.4"');
  });

  it("keeps decorative sequence numbering out of the Business presentation", () => {
    const combinedSource = businessPresentationSources.join("\n");

    expect(combinedSource).not.toMatch(/padStart\(2,\s*["']0["']\)/);
    expect(combinedSource).not.toMatch(/Chapter\s+(?:\d{2}|\{)/);
    expect(combinedSource).not.toContain("Showcase 01");
    expect(combinedSource).not.toContain("No.");
    expect(combinedSource).not.toContain("O{index + 1}");
    expect(businessStyles).not.toMatch(
      /business-(?:ledger-number|experience-number|award-index|detail-index|writing-number)/,
    );
  });

  it("left-aligns Business project covers and pads navigation consistently", () => {
    expect(businessProjectsSource).toContain('objectFit="cover"');
    expect(businessStyles).toMatch(
      /\.portfolio-template-business \.business-case-image\s*{[^}]*object-position:\s*left center;/s,
    );
    expect(businessShellSource).toContain("px={3}");
    expect(businessShellSource).not.toContain(
      'px={prefix === "contents" ? 0 : 3}',
    );
  });

  it.each(themeScopes)(
    "keeps critical %s text pairs at WCAG AA contrast",
    (_name, source, selector) => {
      const block = getThemeBlock(source, selector);
      const background = getHexToken(block, "bg-900");
      const primaryText = getHexToken(block, "primary-text");

      expect(
        contrastRatio(getHexToken(block, "text-300"), background),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(getHexToken(block, "accent-300"), background),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(primaryText, getHexToken(block, "primary-bg")),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(primaryText, getHexToken(block, "primary-hover-bg")),
      ).toBeGreaterThanOrEqual(4.5);
    },
  );

  it("keeps compact actions clear of their edges", () => {
    expect(appStyles).toMatch(
      /\.portfolio-action-link\s*{[^}]*min-height:\s*2\.5rem;[^}]*padding:\s*0\.5rem 1rem;/s,
    );
  });

  it("keeps theme presentation selectors isolated and motion optional", () => {
    expect(businessStyles).not.toMatch(/\.portfolio-template-engineering/);
    expect(businessStyles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(businessStyles).toContain("pointer-events: none");
  });
});
