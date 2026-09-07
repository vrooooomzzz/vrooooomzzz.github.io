import { useCallback, useEffect, useMemo, useState } from "react";

import type { SectionId } from "../types/portfolio";
import { scrollToSection } from "../utils/scroll";

export type LayoutMode = "single" | "multi";

export const LAYOUT_MODE_STORAGE_KEY = "portfolio-layout-mode";
export const DEFAULT_LAYOUT_MODE: LayoutMode = "single";
export const DEFAULT_SECTION_ID: SectionId = "home";

type LayoutModeStorage = Pick<Storage, "getItem" | "setItem">;

const canUseBrowser = (): boolean => typeof window !== "undefined";

const getBrowserStorage = (): LayoutModeStorage | undefined => {
  if (!canUseBrowser()) {
    return undefined;
  }

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
};

export const isLayoutMode = (value: unknown): value is LayoutMode =>
  value === "single" || value === "multi";

export const readStoredLayoutMode = (
  storage: Pick<Storage, "getItem"> | undefined = getBrowserStorage(),
): LayoutMode => {
  try {
    const storedMode = storage?.getItem(LAYOUT_MODE_STORAGE_KEY);

    return isLayoutMode(storedMode) ? storedMode : DEFAULT_LAYOUT_MODE;
  } catch {
    return DEFAULT_LAYOUT_MODE;
  }
};

export const writeStoredLayoutMode = (
  mode: LayoutMode,
  storage: Pick<Storage, "setItem"> | undefined = getBrowserStorage(),
): boolean => {
  try {
    storage?.setItem(LAYOUT_MODE_STORAGE_KEY, mode);
    return Boolean(storage);
  } catch {
    return false;
  }
};

export const createSectionHash = (sectionId: SectionId): string =>
  `#/${sectionId}`;

export const createAnchorHash = (sectionId: SectionId): string =>
  `#${sectionId}`;

export const isMultiPageHash = (hash: string): boolean => hash.startsWith("#/");

export const isMultiPageSectionHash = (hash: string): boolean =>
  /^#\/[^/]+$/.test(hash);

export const resolveSectionId = (
  sectionId: string | null | undefined,
  enabledSectionIds: readonly SectionId[],
  fallbackSectionId: SectionId = enabledSectionIds[0] ?? DEFAULT_SECTION_ID,
): SectionId => {
  if (enabledSectionIds.includes(sectionId as SectionId)) {
    return sectionId as SectionId;
  }

  return enabledSectionIds.includes(fallbackSectionId)
    ? fallbackSectionId
    : DEFAULT_SECTION_ID;
};

export const parseSectionHash = (
  hash: string,
  enabledSectionIds: readonly SectionId[],
): SectionId | undefined => {
  const rawSectionId = hash.replace(/^#\/?/, "");

  if (!rawSectionId) {
    return undefined;
  }

  return enabledSectionIds.includes(rawSectionId as SectionId)
    ? (rawSectionId as SectionId)
    : undefined;
};

const updateBrowserHash = (hash: string): void => {
  if (!canUseBrowser()) {
    return;
  }

  window.history.pushState(null, "", hash);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const replaceBrowserHash = (hash: string): void => {
  if (!canUseBrowser()) {
    return;
  }

  window.history.replaceState(null, "", hash);
};

export type PortfolioLayoutState = {
  layoutMode: LayoutMode;
  activeSection: SectionId;
  activePageSection: SectionId;
  isMultiPageLayout: boolean;
  getNavigationHref: (sectionId: SectionId) => string;
  navigateToSection: (sectionId: SectionId) => void;
  toggleLayoutMode: () => void;
};

export const usePortfolioLayout = (
  enabledSectionIds: readonly SectionId[],
  scrollActiveSection: SectionId,
): PortfolioLayoutState => {
  const fallbackSectionId = enabledSectionIds[0] ?? DEFAULT_SECTION_ID;

  const initialHashSection = useMemo(
    () =>
      canUseBrowser()
        ? parseSectionHash(window.location.hash, enabledSectionIds)
        : undefined,
    [enabledSectionIds],
  );

  const [layoutMode, setLayoutMode] = useState<LayoutMode>(() => {
    if (canUseBrowser() && isMultiPageSectionHash(window.location.hash)) {
      return "multi";
    }

    return readStoredLayoutMode();
  });

  const [activePageSection, setActivePageSection] = useState<SectionId>(
    () =>
      initialHashSection ??
      resolveSectionId(
        scrollActiveSection,
        enabledSectionIds,
        fallbackSectionId,
      ),
  );
  const visibleActivePageSection = resolveSectionId(
    activePageSection,
    enabledSectionIds,
    fallbackSectionId,
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (!isMultiPageSectionHash(window.location.hash)) return;

      const hashSection = parseSectionHash(
        window.location.hash,
        enabledSectionIds,
      );
      const resolvedSection = hashSection ?? fallbackSectionId;

      setLayoutMode("multi");
      writeStoredLayoutMode("multi");
      setActivePageSection(resolvedSection);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [enabledSectionIds, fallbackSectionId]);

  useEffect(() => {
    if (
      canUseBrowser() &&
      isMultiPageSectionHash(window.location.hash) &&
      !parseSectionHash(window.location.hash, enabledSectionIds)
    ) {
      replaceBrowserHash(createSectionHash(visibleActivePageSection));
    }
  }, [enabledSectionIds, visibleActivePageSection]);

  const navigateToSection = useCallback(
    (sectionId: SectionId) => {
      const targetSectionId = resolveSectionId(
        sectionId,
        enabledSectionIds,
        fallbackSectionId,
      );

      if (layoutMode === "multi") {
        setActivePageSection(targetSectionId);
        updateBrowserHash(createSectionHash(targetSectionId));
        return;
      }

      updateBrowserHash(createAnchorHash(targetSectionId));
      scrollToSection(targetSectionId);
    },
    [enabledSectionIds, fallbackSectionId, layoutMode],
  );

  const toggleLayoutMode = useCallback(() => {
    setLayoutMode((currentMode) => {
      const nextMode: LayoutMode =
        currentMode === "single" ? "multi" : "single";
      const targetSectionId = resolveSectionId(
        currentMode === "single"
          ? scrollActiveSection
          : visibleActivePageSection,
        enabledSectionIds,
        fallbackSectionId,
      );

      writeStoredLayoutMode(nextMode);
      setActivePageSection(targetSectionId);

      if (nextMode === "multi") {
        updateBrowserHash(createSectionHash(targetSectionId));
      } else {
        updateBrowserHash(createAnchorHash(targetSectionId));
        window.setTimeout(() => scrollToSection(targetSectionId), 0);
      }

      return nextMode;
    });
  }, [
    enabledSectionIds,
    fallbackSectionId,
    scrollActiveSection,
    visibleActivePageSection,
  ]);

  const getNavigationHref = useCallback(
    (sectionId: SectionId) =>
      layoutMode === "multi"
        ? createSectionHash(sectionId)
        : createAnchorHash(sectionId),
    [layoutMode],
  );

  const activeSection =
    layoutMode === "multi" ? visibleActivePageSection : scrollActiveSection;

  return {
    layoutMode,
    activeSection,
    activePageSection: visibleActivePageSection,
    isMultiPageLayout: layoutMode === "multi",
    getNavigationHref,
    navigateToSection,
    toggleLayoutMode,
  };
};
