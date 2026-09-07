import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App, { PortfolioApp } from "./App";
import { Provider } from "./components/ui/provider";
import {
  journalPosts,
  navigation,
  profile,
  projects,
  sectionContent,
} from "./data/portfolio";
import { selectedTemplateId } from "./data/template";
import { businessTemplate } from "./templates/business";
import { engineeringTemplate } from "./templates/engineering";
import type { PortfolioTemplate, PortfolioTemplateId } from "./templates/types";
import { PORTFOLIO_TEMPLATE_STORAGE_KEY } from "./utils/templateSelection";

const enabledNavigationItems = navigation.filter((item) => item.enabled);

type ActiveTemplateControls = {
  primaryAction: string;
  resume: string;
  layout: string;
  theme: string;
  menu?: string;
  projectLink: string;
};

const activeTemplateControls: ActiveTemplateControls = {
  engineering: {
    primaryAction: "hero-primary-action",
    resume: "hero-resume-download",
    layout: "navbar-layout-toggle",
    theme: "navbar-theme-toggle",
    menu: "navbar-menu-toggle",
    projectLink: "navbar-mobile-link-projects",
  },
  business: {
    primaryAction: "business-hero-primary-action",
    resume: "business-hero-resume-download",
    layout: "business-layout-toggle",
    theme: "business-theme-toggle",
    projectLink: "business-contents-link-projects",
  },
}[selectedTemplateId];

const renderPortfolio = () =>
  render(
    <Provider>
      <App />
    </Provider>,
  );

const renderTemplate = (template: PortfolioTemplate) =>
  render(
    <Provider>
      <PortfolioApp initialTemplate={template} />
    </Provider>,
  );

const templateSelectorPrefixes: Record<PortfolioTemplateId, string> = {
  engineering: "navbar",
  business: "business",
};

const selectPortfolioStyle = async (
  currentTemplateId: PortfolioTemplateId,
  nextTemplateId: PortfolioTemplateId,
) => {
  const prefix = templateSelectorPrefixes[currentTemplateId];

  fireEvent.click(screen.getByTestId(`${prefix}-style-selector-trigger`));
  fireEvent.click(
    await screen.findByTestId(
      `${prefix}-style-selector-option-${nextTemplateId}`,
    ),
  );
};

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  window.localStorage.clear();
  window.history.pushState(null, "", "/");
});

afterEach(() => {
  cleanup();
});

describe("App smoke render", () => {
  it("renders core portfolio content from local data files", () => {
    renderPortfolio();

    expect(document.body.textContent).toContain(profile.name);
    expect(document.body.textContent).toContain(profile.role);
    expect(
      screen.getByTestId(activeTemplateControls.primaryAction),
    ).toBeInTheDocument();
    expect(screen.getByTestId(activeTemplateControls.resume)).toHaveAttribute(
      "download",
      profile.resume.fileName,
    );
    expect(
      screen.getAllByText(enabledNavigationItems[0].label).length,
    ).toBeGreaterThan(0);
  });

  it("renders school achievements with accessible school logos", () => {
    renderPortfolio();

    expect(screen.getByText("Model Student Award")).toBeInTheDocument();
    expect(
      screen.getByText("Singapore Youth Festival Choir - Silver Award"),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("img", { name: "Zhonghua Secondary School logo" }),
    ).toHaveLength(2);
  });

  it("renders student-editable descriptions below every non-home section heading", () => {
    renderPortfolio();

    for (const copy of Object.values(sectionContent)) {
      expect(screen.getByText(copy.description)).toBeInTheDocument();
    }
  });

  it("renders the layout switch control and all enabled sections in single-page mode", () => {
    renderPortfolio();

    expect(
      screen.getByTestId(activeTemplateControls.layout),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(activeTemplateControls.theme),
    ).toBeInTheDocument();
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      selectedTemplateId,
    );
    expect(
      screen.getByTestId(
        `${templateSelectorPrefixes[selectedTemplateId]}-style-selector-trigger`,
      ),
    ).toHaveAccessibleName("Portfolio style: Engineering");
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.getAllByText("IN_SITE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("WORDPRESS").length).toBeGreaterThan(0);
    expect(screen.getByTestId("writing-image-local-0")).toHaveAttribute(
      "data-image-fit",
      "cover",
    );
    expect(screen.getByTestId("writing-image-frame-local-0")).toHaveAttribute(
      "data-thumbnail-height",
      "190px",
    );
    expect(
      screen.getAllByTestId(/^writing-image-wordpress-/)[0],
    ).toHaveAttribute("data-image-fit", "cover");
    expect(
      screen.getAllByTestId(/^writing-image-frame-wordpress-/)[0],
    ).toHaveAttribute("data-thumbnail-height", "190px");
  });

  it("switches to multi-page mode and renders one selected page section", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId(activeTemplateControls.layout));

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    if (activeTemplateControls.menu) {
      fireEvent.click(screen.getByTestId(activeTemplateControls.menu));
    }
    fireEvent.click(
      await screen.findByTestId(activeTemplateControls.projectLink),
    );

    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#/projects");
  });

  it("initializes multi-page mode from a direct GitHub Pages-safe section hash", async () => {
    window.history.pushState(null, "", "#/projects");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#/projects");
  });

  it("keeps a direct anchor hash in single-page mode", () => {
    window.history.pushState(null, "", "#about");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("resolves an invalid slash route to the first enabled section without rendering an alternate tree", () => {
    window.history.pushState(null, "", "#/missing");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(
      document.getElementById(enabledNavigationItems[0].id),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(screen.queryByTestId("projects-section")).not.toBeInTheDocument();
  });

  it("renders a local journal post from a direct GitHub Pages-safe hash", () => {
    window.history.pushState(null, "", journalPosts[0].href);

    renderPortfolio();

    expect(screen.getByTestId("journal-post-page")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: journalPosts[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByText("IN_SITE")).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-image")).toHaveAttribute(
      "data-image-fit",
      "contain",
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Mentoring at the SIM–LSE Data Analytics Challenge 2026",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("SIM–LSE Data Analytics Challenge 2026", {
        selector: "strong",
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-back-link")).toHaveAttribute(
      "href",
      "#/journal",
    );
  });

  it("renders a graceful fallback for an unknown local journal post hash", () => {
    window.history.pushState(null, "", "#/journal/missing-post");

    renderPortfolio();

    expect(screen.getByTestId("journal-post-not-found")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Journal post not found" }),
    ).toBeInTheDocument();
  });

  it.each([
    [
      "engineering",
      engineeringTemplate,
      "navbar-layout-toggle",
      "navbar-theme-toggle",
      "navbar",
    ],
    [
      "business",
      businessTemplate,
      "business-layout-toggle",
      "business-theme-toggle",
      "business",
    ],
  ] as const)(
    "composes the %s template through the shared App boundary",
    async (
      templateId,
      template,
      layoutToggleId,
      themeToggleId,
      selectorPrefix,
    ) => {
      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-template-id",
        templateId,
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(screen.getByTestId("about-section")).toBeInTheDocument();
      expect(screen.getByTestId(layoutToggleId)).toBeInTheDocument();
      expect(screen.getByTestId(themeToggleId)).toBeInTheDocument();
      fireEvent.click(
        screen.getByTestId(`${selectorPrefix}-style-selector-trigger`),
      );
      for (const supportedTemplate of ["engineering", "business"] as const) {
        const option = await screen.findByTestId(
          `${selectorPrefix}-style-selector-option-${supportedTemplate}`,
        );

        expect(option).toHaveAttribute(
          "aria-checked",
          supportedTemplate === templateId ? "true" : "false",
        );
      }
      for (const copy of Object.values(sectionContent)) {
        expect(screen.getByText(copy.description)).toBeInTheDocument();
      }
    },
  );

  it.each([
    [engineeringTemplate, "hero-resume-download"],
    [businessTemplate, "business-hero-resume-download"],
  ] as const)(
    "keeps shared external actions clear of their borders",
    (template, resumeActionId) => {
      renderTemplate(template);

      expect(screen.getByTestId(resumeActionId)).toHaveClass(
        "portfolio-action-link",
      );
    },
  );

  it("composes Business as an editorial casebook with sticky contents", () => {
    renderTemplate(businessTemplate);

    expect(
      document.querySelector(".business-casebook-header"),
    ).toBeInTheDocument();
    expect(
      document.querySelector(".business-casebook-rail"),
    ).toBeInTheDocument();
    expect(
      document.querySelector(".business-casebook-document"),
    ).toBeInTheDocument();
    expect(
      document.querySelector('nav[aria-label="Business showcase contents"]'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("business-contents-link-projects"),
    ).toBeInTheDocument();
    expect(screen.getByText("Editorial casebook")).toBeInTheDocument();
    expect(
      screen.getByText(sectionContent.projects.eyebrow),
    ).toBeInTheDocument();
    expect(screen.queryByText("Executive brief")).not.toBeInTheDocument();
    expect(screen.queryByText("Reviewed evidence")).not.toBeInTheDocument();
  });

  it.each([["business", businessTemplate]] as const)(
    "uses project-owned covers throughout the %s presentation",
    (_templateId, template) => {
      renderTemplate(template);

      for (const project of projects) {
        const projectImages = screen.getAllByRole("img", {
          name: project.imageAlt,
        });

        expect(projectImages.length).toBeGreaterThan(0);
        for (const image of projectImages) {
          expect(image).toHaveAttribute("src", project.image);
        }
      }
    },
  );

  it("gives every Business project card explicit mobile clearance", () => {
    renderTemplate(businessTemplate);

    for (const project of projects) {
      expect(
        screen.getByTestId(`business-case-label-${project.id}`),
      ).toHaveAttribute("data-inline-clearance", "16px");
    }
  });

  it.each([
    ["engineering", engineeringTemplate, "navbar-layout-toggle"],
    ["business", businessTemplate, "business-layout-toggle"],
  ] as const)(
    "keeps the %s template compatible with both layout modes",
    (_templateId, template, layoutToggleId) => {
      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-layout-mode",
        "single",
      );
      fireEvent.click(screen.getByTestId(layoutToggleId));
      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-layout-mode",
        "multi",
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    },
  );

  it.each([
    ["engineering", engineeringTemplate, "navbar-link-journal"],
    ["business", businessTemplate, "business-contents-link-journal"],
  ] as const)(
    "keeps the %s shell and journal context for local journal routes",
    (templateId, template, journalLinkId) => {
      window.history.pushState(null, "", journalPosts[0].href);

      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-template-id",
        templateId,
      );
      expect(screen.getByTestId("journal-post-page")).toBeInTheDocument();
      expect(screen.getByTestId(journalLinkId)).toHaveAttribute(
        "aria-current",
        "page",
      );
    },
  );

  it("keeps semantic portfolio-style selection without a visible check indicator", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId("navbar-style-selector-trigger"));
    const activeOption = await screen.findByTestId(
      "navbar-style-selector-option-engineering",
    );
    const selectorMenu = screen.getByTestId("navbar-style-selector-menu");

    expect(activeOption).toHaveAttribute("aria-checked", "true");
    expect(
      selectorMenu.querySelector('[data-part="item-indicator"]'),
    ).toBeNull();
  });

  it("switches immediately between both visible portfolio styles and persists the latest choice", async () => {
    renderPortfolio();

    await selectPortfolioStyle("engineering", "business");
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(window.localStorage.getItem(PORTFOLIO_TEMPLATE_STORAGE_KEY)).toBe(
      "business",
    );

    await selectPortfolioStyle("business", "engineering");
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "engineering",
    );
    expect(window.localStorage.getItem(PORTFOLIO_TEMPLATE_STORAGE_KEY)).toBe(
      "engineering",
    );
  });

  it("restores a valid saved style instead of the source default", () => {
    window.localStorage.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, "business");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(
      screen.getByTestId("business-style-selector-trigger"),
    ).toHaveAccessibleName("Portfolio style: Business");
  });

  it("falls back to Engineering when a saved style is invalid", () => {
    window.localStorage.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, "missing");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "engineering",
    );
  });

  it("falls back to Engineering when a saved style is the removed Neutral option", () => {
    window.localStorage.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, "neutral");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "engineering",
    );
  });

  it("preserves a multi-page section route and layout while changing styles", async () => {
    window.history.pushState(null, "", "#/projects");

    renderPortfolio();
    await selectPortfolioStyle("engineering", "business");

    expect(window.location.hash).toBe("#/projects");
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("preserves an open local journal post while changing styles", async () => {
    window.history.pushState(null, "", journalPosts[0].href);

    renderPortfolio();
    await selectPortfolioStyle("engineering", "business");

    expect(window.location.hash).toBe(journalPosts[0].href);
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(screen.getByTestId("journal-post-page")).toBeInTheDocument();
  });

  it("preserves a visitor-selected layout mode while changing styles", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId("navbar-layout-toggle"));
    await selectPortfolioStyle("engineering", "business");

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
  });

  it("preserves color mode while changing styles", async () => {
    renderPortfolio();

    fireEvent.click(await screen.findByTestId("navbar-theme-toggle"));
    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));
    await selectPortfolioStyle("engineering", "business");

    expect(document.documentElement).toHaveClass("dark");
    expect(
      await screen.findByTestId("business-theme-toggle"),
    ).toBeInTheDocument();
  });
});
