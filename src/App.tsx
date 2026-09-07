import { useCallback, useEffect, useMemo, useState } from "react";

import "./App.css";
import { navigation } from "./data/portfolio";
import { selectedTemplateId } from "./data/template";
import { usePortfolioLayout } from "./hooks/usePortfolioLayout";
import { getPortfolioTemplate } from "./templates";
import type { PortfolioTemplate, PortfolioTemplateId } from "./templates/types";
import { parseJournalPostHash } from "./utils/journal";
import {
  getEnabledNavigationItems,
  getEnabledSectionIds,
  useActiveSection,
} from "./utils/scroll";
import {
  getInitialPortfolioTemplateId,
  persistPortfolioTemplateId,
} from "./utils/templateSelection";

type PortfolioAppProps = {
  initialTemplate?: PortfolioTemplate;
};

export function PortfolioApp({ initialTemplate }: PortfolioAppProps) {
  const [activeTemplateId, setActiveTemplateId] = useState<PortfolioTemplateId>(
    () =>
      getInitialPortfolioTemplateId(initialTemplate?.id ?? selectedTemplateId),
  );
  const [locationHash, setLocationHash] = useState(() => window.location.hash);
  const template = getPortfolioTemplate(activeTemplateId);
  const enabledNavigationItems = useMemo(
    () => getEnabledNavigationItems(navigation, template.isSectionVisible),
    [template],
  );
  const enabledSectionIds = useMemo(
    () => getEnabledSectionIds(enabledNavigationItems),
    [enabledNavigationItems],
  );
  const sectionComponents = template.sectionComponents;
  const scrollActiveSection = useActiveSection(enabledSectionIds);
  const {
    layoutMode,
    activeSection,
    activePageSection,
    isMultiPageLayout,
    getNavigationHref,
    navigateToSection,
    toggleLayoutMode,
  } = usePortfolioLayout(enabledSectionIds, scrollActiveSection);

  useEffect(() => {
    const syncLocationHash = () => setLocationHash(window.location.hash);

    window.addEventListener("hashchange", syncLocationHash);
    window.addEventListener("popstate", syncLocationHash);

    return () => {
      window.removeEventListener("hashchange", syncLocationHash);
      window.removeEventListener("popstate", syncLocationHash);
    };
  }, []);

  const localJournalPostSlug = parseJournalPostHash(locationHash);
  const visibleSectionIds = isMultiPageLayout
    ? [activePageSection]
    : enabledSectionIds;
  const ShellComponent = template.ShellComponent;
  const JournalPostComponent = template.JournalPostComponent;
  const shellActiveSection = localJournalPostSlug ? "journal" : activeSection;
  const selectTemplate = useCallback((templateId: PortfolioTemplateId) => {
    const resolvedTemplateId = getPortfolioTemplate(templateId).id;

    persistPortfolioTemplateId(resolvedTemplateId);
    setActiveTemplateId(resolvedTemplateId);
  }, []);
  const selectedContent = localJournalPostSlug ? (
    <JournalPostComponent slug={localJournalPostSlug} />
  ) : (
    visibleSectionIds.map((sectionId) => {
      const SectionComponent = sectionComponents[sectionId];

      return <SectionComponent key={sectionId} />;
    })
  );

  return (
    <ShellComponent
      activeSection={shellActiveSection}
      activeTemplateId={activeTemplateId}
      getNavigationHref={getNavigationHref}
      layoutMode={layoutMode}
      navigationItems={enabledNavigationItems}
      onNavigate={navigateToSection}
      onSelectTemplate={selectTemplate}
      onToggleLayoutMode={toggleLayoutMode}
    >
      {selectedContent}
    </ShellComponent>
  );
}

function App() {
  return <PortfolioApp />;
}

export default App;
