import { useEffect, useState } from "react";

import type { NavigationItem, SectionId } from "../types/portfolio";

export type EnabledNavigationItem = NavigationItem & { enabled: true };

const DEFAULT_SECTION_ID: SectionId = "home";

export const getEnabledNavigationItems = (
  items: readonly NavigationItem[],
  isSectionVisible: (sectionId: SectionId) => boolean = () => true,
): EnabledNavigationItem[] =>
  items.filter(
    (item): item is EnabledNavigationItem =>
      item.enabled && isSectionVisible(item.id),
  );

export const getEnabledSectionIds = (
  items: readonly NavigationItem[],
  isSectionVisible?: (sectionId: SectionId) => boolean,
): SectionId[] =>
  getEnabledNavigationItems(items, isSectionVisible).map((item) => item.id);

export const scrollToSection = (sectionId: SectionId): void => {
  const section = document.getElementById(sectionId);

  section?.scrollIntoView({ behavior: "smooth" });
};

export const useActiveSection = (
  sectionIds: readonly SectionId[],
  offset = 150,
): SectionId => {
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionIds[0] ?? DEFAULT_SECTION_ID,
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);

        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();

        return rect.top <= offset && rect.bottom >= offset;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, sectionIds]);

  return activeSection;
};
