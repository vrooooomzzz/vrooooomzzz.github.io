import type { PortfolioTemplateId } from "../templates/types";

export const PORTFOLIO_TEMPLATE_STORAGE_KEY = "portfolio-template-id";
export const FALLBACK_PORTFOLIO_TEMPLATE_ID: PortfolioTemplateId =
  "engineering";

type TemplateSelectionStorage = Pick<Storage, "getItem" | "setItem">;

const getBrowserStorage = (): TemplateSelectionStorage | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
};

export const isPortfolioTemplateId = (
  value: unknown,
): value is PortfolioTemplateId =>
  value === "engineering" || value === "business";

export const getInitialPortfolioTemplateId = (
  defaultTemplateId: PortfolioTemplateId,
  storage: Pick<Storage, "getItem"> | undefined = getBrowserStorage(),
): PortfolioTemplateId => {
  try {
    const storedTemplateId = storage?.getItem(PORTFOLIO_TEMPLATE_STORAGE_KEY);

    if (storedTemplateId === null || storedTemplateId === undefined) {
      return defaultTemplateId;
    }

    return isPortfolioTemplateId(storedTemplateId)
      ? storedTemplateId
      : FALLBACK_PORTFOLIO_TEMPLATE_ID;
  } catch {
    return defaultTemplateId;
  }
};

export const persistPortfolioTemplateId = (
  templateId: PortfolioTemplateId,
  storage: Pick<Storage, "setItem"> | undefined = getBrowserStorage(),
): void => {
  try {
    storage?.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, templateId);
  } catch {
    // A blocked storage API should not prevent visitors from changing styles.
  }
};
