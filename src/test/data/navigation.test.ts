import { describe, expect, it } from "vitest";

import { navigation, sectionIds } from "../../data/navigation";
import type { SectionId } from "../../types/portfolio";
import { getEnabledNavigationItems } from "../../utils/scroll";

const expectedSectionIds: SectionId[] = [
  "home",
  "about",
  "education",
  "experience",
  "awards",
  "projects",
  "gallery",
  "journal",
  "skills",
  "contact",
];

describe("src/data/navigation.ts", () => {
  it("keeps sectionIds unique for app section mapping", () => {
    const uniqueSectionIds = new Set(sectionIds);

    expect(
      uniqueSectionIds.size,
      "src/data/navigation.ts has duplicate sectionIds",
    ).toBe(sectionIds.length);
  });

  it("keeps every navigation item aligned with known section IDs", () => {
    const knownSectionIds = new Set(sectionIds);

    for (const item of navigation) {
      expect(
        knownSectionIds.has(item.id),
        `src/data/navigation.ts has unknown navigation id "${item.id}"`,
      ).toBe(true);
    }
  });

  it("keeps enabled navigation labels readable", () => {
    for (const item of navigation.filter((navItem) => navItem.enabled)) {
      expect(
        item.label.trim(),
        `src/data/navigation.ts enabled item "${item.id}" needs a label`,
      ).not.toHaveLength(0);
    }
  });

  it("keeps the baseline template sections available", () => {
    for (const sectionId of expectedSectionIds) {
      expect(
        sectionIds,
        `src/data/navigation.ts is missing baseline section "${sectionId}"`,
      ).toContain(sectionId);
    }
  });

  it("applies optional template visibility after global navigation settings", () => {
    const visibleItems = getEnabledNavigationItems(
      navigation,
      (sectionId) => sectionId !== "experience" && sectionId !== "awards",
    );

    expect(visibleItems.map((item) => item.id)).not.toContain("experience");
    expect(visibleItems.map((item) => item.id)).not.toContain("awards");
    expect(visibleItems[0]?.id).toBe("home");
  });
});
