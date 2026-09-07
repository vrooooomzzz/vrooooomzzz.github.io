import { describe, expect, it } from "vitest";

import { selectedTemplateId } from "../data/template";
import { sectionIds } from "../data/portfolio";
import {
  activePortfolioTemplate,
  getPortfolioTemplate,
  portfolioTemplates,
} from "./index";
import { portfolioTemplateOptionList } from "./options";
import type { PortfolioTemplateId } from "./types";

describe("portfolio template registry", () => {
  it("keeps the selected template resolvable", () => {
    expect(activePortfolioTemplate.id).toBe(selectedTemplateId);
  });

  it("exposes exactly the two supported template ids", () => {
    expect(portfolioTemplates.map((template) => template.id)).toEqual([
      "engineering",
      "business",
    ]);
  });

  it("keeps registry and selector options aligned", () => {
    expect(portfolioTemplateOptionList.map((option) => option.id)).toEqual([
      "engineering",
      "business",
    ]);
    expect(portfolioTemplates.map((template) => template.id)).toEqual(
      portfolioTemplateOptionList.map((option) => option.id),
    );
  });

  it("keeps every template aligned with the portfolio section ids", () => {
    for (const template of portfolioTemplates) {
      expect(
        template.label.trim(),
        `${template.id} template needs a readable label`,
      ).not.toHaveLength(0);
      expect(
        template.description.trim(),
        `${template.id} template needs a readable description`,
      ).not.toHaveLength(0);
      expect(
        template.ShellComponent,
        `${template.id} template needs a shell`,
      ).toBeTypeOf("function");
      expect(
        template.JournalPostComponent,
        `${template.id} template needs a journal page`,
      ).toBeTypeOf("function");

      for (const sectionId of sectionIds) {
        expect(
          template.chapterLabels[sectionId].trim(),
          `${template.id} needs a ${sectionId} chapter label`,
        ).not.toHaveLength(0);
        expect(
          template.sectionComponents[sectionId],
          `${template.id} template is missing the ${sectionId} section component`,
        ).toBeTypeOf("function");
      }
    }
  });

  it("falls back to engineering for unknown template ids", () => {
    expect(
      getPortfolioTemplate("missing" as PortfolioTemplateId | string).id,
    ).toBe("engineering");
  });

  it("falls back to engineering for the removed neutral template id", () => {
    expect(getPortfolioTemplate("neutral").id).toBe("engineering");
  });

  it("keeps all canonical sections available in every theme", () => {
    for (const template of portfolioTemplates) {
      expect(
        "isSectionVisible" in template ? template.isSectionVisible : undefined,
      ).toBeUndefined();
    }
  });
});
