import { describe, expect, it } from "vitest";

import type { SectionId } from "../types/portfolio";
import {
  LAYOUT_MODE_STORAGE_KEY,
  createAnchorHash,
  createSectionHash,
  isLayoutMode,
  isMultiPageSectionHash,
  parseSectionHash,
  readStoredLayoutMode,
  resolveSectionId,
  writeStoredLayoutMode,
} from "./usePortfolioLayout";

const enabledSectionIds: SectionId[] = ["home", "about", "projects"];

describe("usePortfolioLayout helpers", () => {
  it("validates supported layout modes", () => {
    expect(isLayoutMode("single")).toBe(true);
    expect(isLayoutMode("multi")).toBe(true);
    expect(isLayoutMode("grid")).toBe(false);
    expect(isLayoutMode(undefined)).toBe(false);
  });

  it("creates hash values for single-page anchors and multi-page routes", () => {
    expect(createAnchorHash("about")).toBe("#about");
    expect(createSectionHash("about")).toBe("#/about");
    expect(isMultiPageSectionHash("#/about")).toBe(true);
    expect(isMultiPageSectionHash("#/missing")).toBe(true);
    expect(isMultiPageSectionHash("#/journal/post-slug")).toBe(false);
  });

  it("parses valid hash values and ignores unknown sections", () => {
    expect(parseSectionHash("#/projects", enabledSectionIds)).toBe("projects");
    expect(parseSectionHash("#about", enabledSectionIds)).toBe("about");
    expect(parseSectionHash("#/missing", enabledSectionIds)).toBeUndefined();
    expect(parseSectionHash("", enabledSectionIds)).toBeUndefined();
  });

  it("resolves invalid section IDs to the configured fallback", () => {
    expect(resolveSectionId("projects", enabledSectionIds, "home")).toBe(
      "projects",
    );
    expect(resolveSectionId("missing", enabledSectionIds, "about")).toBe(
      "about",
    );
    expect(resolveSectionId(undefined, [], "projects")).toBe("home");
    expect(
      resolveSectionId(
        parseSectionHash("#/missing", enabledSectionIds),
        enabledSectionIds,
      ),
    ).toBe("home");
  });

  it("reconciles a section hidden by a template to home", () => {
    const limitedSectionIds: SectionId[] = ["home", "about", "projects"];

    expect(resolveSectionId("experience", limitedSectionIds, "home")).toBe(
      "home",
    );
    expect(parseSectionHash("#/experience", limitedSectionIds)).toBeUndefined();
  });

  it("reads and writes valid stored layout mode values", () => {
    let storedValue = "multi";
    const storage = {
      getItem: (key: string) =>
        key === LAYOUT_MODE_STORAGE_KEY ? storedValue : null,
      setItem: (_key: string, value: string) => {
        storedValue = value;
      },
    };

    expect(readStoredLayoutMode(storage)).toBe("multi");
    expect(writeStoredLayoutMode("single", storage)).toBe(true);
    expect(readStoredLayoutMode(storage)).toBe("single");
  });

  it("falls back when storage values are invalid or storage access fails", () => {
    const invalidStorage = {
      getItem: () => "dashboard",
    };
    const throwingStorage = {
      getItem: () => {
        throw new Error("storage unavailable");
      },
      setItem: () => {
        throw new Error("storage unavailable");
      },
    };

    expect(readStoredLayoutMode(invalidStorage)).toBe("single");
    expect(readStoredLayoutMode(throwingStorage)).toBe("single");
    expect(writeStoredLayoutMode("multi", throwingStorage)).toBe(false);
  });
});
