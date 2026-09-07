import { describe, expect, it, vi } from "vitest";

import {
  FALLBACK_PORTFOLIO_TEMPLATE_ID,
  PORTFOLIO_TEMPLATE_STORAGE_KEY,
  getInitialPortfolioTemplateId,
  isPortfolioTemplateId,
  persistPortfolioTemplateId,
} from "./templateSelection";

describe("template selection persistence", () => {
  it.each([
    ["engineering", true],
    ["neutral", false],
    ["business", true],
    ["gallery", false],
    [null, false],
    [undefined, false],
  ])("validates %j as a supported template id", (value, expected) => {
    expect(isPortfolioTemplateId(value)).toBe(expected);
  });

  it("uses the source default when no visitor choice exists", () => {
    const storage = { getItem: vi.fn(() => null) };

    expect(getInitialPortfolioTemplateId("engineering", storage)).toBe(
      "engineering",
    );
    expect(storage.getItem).toHaveBeenCalledWith(
      PORTFOLIO_TEMPLATE_STORAGE_KEY,
    );
  });

  it("restores a valid visitor choice", () => {
    const storage = { getItem: vi.fn(() => "business") };

    expect(getInitialPortfolioTemplateId("engineering", storage)).toBe(
      "business",
    );
  });

  it("falls back to engineering for an invalid saved choice", () => {
    const storage = { getItem: vi.fn(() => "missing") };

    expect(getInitialPortfolioTemplateId("business", storage)).toBe(
      FALLBACK_PORTFOLIO_TEMPLATE_ID,
    );
  });

  it("falls back to engineering for an obsolete neutral choice", () => {
    const storage = { getItem: vi.fn(() => "neutral") };

    expect(getInitialPortfolioTemplateId("business", storage)).toBe(
      FALLBACK_PORTFOLIO_TEMPLATE_ID,
    );
  });

  it("uses the source default when storage cannot be read", () => {
    const storage = {
      getItem: vi.fn(() => {
        throw new Error("Storage unavailable");
      }),
    };

    expect(getInitialPortfolioTemplateId("business", storage)).toBe("business");
  });

  it("persists a valid choice without exposing storage failures", () => {
    const setItem = vi.fn();

    expect(() =>
      persistPortfolioTemplateId("engineering", { setItem }),
    ).not.toThrow();
    expect(setItem).toHaveBeenCalledWith(
      PORTFOLIO_TEMPLATE_STORAGE_KEY,
      "engineering",
    );

    expect(() =>
      persistPortfolioTemplateId("business", {
        setItem: () => {
          throw new Error("Storage unavailable");
        },
      }),
    ).not.toThrow();
  });
});
