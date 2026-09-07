import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { PortfolioApp } from "../../App";
import { Provider } from "../../components/ui/provider";
import {
  certificates,
  education,
  experience,
  gallery,
  profile,
  sectionContent,
  sectionIds,
  videos,
  writing,
} from "../../data/portfolio";
import { engineeringTemplate } from "../engineering";
import { businessTemplate } from ".";

const renderBusiness = () =>
  render(
    <Provider>
      <PortfolioApp initialTemplate={businessTemplate} />
    </Provider>,
  );

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

afterEach(() => cleanup());

describe("Business presentation ownership", () => {
  it("owns every canonical section", () => {
    for (const sectionId of sectionIds) {
      expect(
        businessTemplate.sectionComponents[sectionId],
        `Business must own the ${sectionId} presentation`,
      ).not.toBe(engineeringTemplate.sectionComponents[sectionId]);
    }
  });

  it("owns its local journal view", () => {
    expect(businessTemplate.JournalPostComponent).not.toBe(
      engineeringTemplate.JournalPostComponent,
    );
  });

  it("renders theme-owned section seams from shared truthful content", () => {
    renderBusiness();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(document.body.textContent).toContain(profile.name);

    for (const sectionId of sectionIds) {
      expect(
        document.querySelector(`[data-presentation="business-${sectionId}"]`),
        `Business needs a stable ${sectionId} presentation seam`,
      ).toBeInTheDocument();
    }

    for (const copy of Object.values(sectionContent)) {
      expect(screen.getByText(copy.description)).toBeInTheDocument();
    }
  });

  it("does not add unsupported executive or commercial claims", () => {
    renderBusiness();

    for (const unsupportedCopy of [
      /executive brief/i,
      /review board/i,
      /client impact/i,
      /commercial performance/i,
    ]) {
      expect(screen.queryByText(unsupportedCopy)).not.toBeInTheDocument();
    }
  });

  it("exposes stable readability hooks for the refined Business sections", () => {
    renderBusiness();

    expect(document.querySelectorAll(".business-section-title")).toHaveLength(
      sectionIds.length - 1,
    );

    expect(screen.getAllByTestId(/^business-education-detail-/)).toHaveLength(
      education.reduce((total, entry) => total + entry.description.length, 0),
    );
    expect(screen.getAllByTestId(/^business-experience-detail-/)).toHaveLength(
      experience.reduce((total, entry) => total + entry.description.length, 0),
    );

    expect(screen.getAllByTestId(/^business-gallery-card-/)).toHaveLength(
      gallery.length,
    );
    expect(screen.getAllByTestId(/^business-video-card-/)).toHaveLength(
      videos.length,
    );
    expect(screen.getByTestId("business-direct-contact")).toBeInTheDocument();
  });

  it("formats Journal and Credential details as compact highlighted text", () => {
    renderBusiness();

    expect(screen.getAllByTestId(/^business-video-description-/)).toHaveLength(
      videos.length,
    );
    expect(screen.getAllByTestId(/^business-writing-details-/)).toHaveLength(
      writing.length,
    );
    expect(screen.getAllByTestId(/^business-credential-details-/)).toHaveLength(
      certificates.length,
    );

    expect(
      screen.queryAllByTestId(/^business-journal-(video|writing)-.+-detail-/),
    ).toHaveLength(0);
    expect(
      screen.queryAllByTestId(/^business-credential-\d+-detail-/),
    ).toHaveLength(0);

    expect(screen.getByTestId("business-writing-details-0")).toHaveTextContent(
      `Published: ${writing[0].publishedDate}`,
    );
    expect(
      screen.getByTestId("business-credential-details-0"),
    ).toHaveTextContent(`Issuer: ${certificates[0].issuer}`);
    expect(screen.queryAllByText(/^Film \d{2}$/)).toHaveLength(0);
    expect(screen.queryAllByText(/^C\d{2}$/)).toHaveLength(0);
  });

  it("uses Engineering names and previews every certificate", () => {
    renderBusiness();

    for (const copy of Object.values(sectionContent)) {
      expect(
        screen.getByRole("heading", { name: copy.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(copy.eyebrow)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", { name: "Educational Videos" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Writing and Technical Notes" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Certificate Gallery" }),
    ).toBeInTheDocument();
    expect(screen.getByText("CONNECT_CHANNELS")).toBeInTheDocument();
    expect(screen.queryByText(/credential register/i)).not.toBeInTheDocument();

    const previews = screen.getAllByTestId(/^business-certificate-preview-/);
    expect(previews).toHaveLength(certificates.length);
    expect(previews[0]).toHaveAttribute(
      "data",
      `${certificates[0].file}#page=1&view=FitH`,
    );
  });
});
