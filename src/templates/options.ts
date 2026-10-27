import type { PortfolioTemplateId } from "./types";

type PortfolioTemplateOption = {
  id: PortfolioTemplateId;
  label: string;
  description: string;
};

export const portfolioTemplateOptions = {
  engineering: {
    id: "engineering",
    label: "Engineering",
    description:
      "A structured portfolio for technical projects, problem-solving, and the tools you are learning.",
  },
  business: {
    id: "business",
    label: "Business",
    description:
      "A personal analytics portfolio connecting questions, methods, and human context.",
  },
} satisfies Record<PortfolioTemplateId, PortfolioTemplateOption>;

export const selectablePortfolioTemplateIds = [
  "engineering",
  "business",
] as const satisfies readonly PortfolioTemplateId[];

export const portfolioTemplateOptionList = selectablePortfolioTemplateIds.map(
  (templateId) => portfolioTemplateOptions[templateId],
);
