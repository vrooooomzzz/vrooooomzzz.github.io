import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
beforeEach(() => {
  vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);
  window.localStorage.clear();
  window.history.replaceState(null, "", "/");
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe("Reference-informed public portfolio", () => {
  it("presents one coherent narrative without presentation configuration controls", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hi, I’m Đức Tuấn.",
    );
    expect(
      screen
        .getByRole("navigation", { name: "Main navigation" })
        .querySelectorAll("a"),
    ).toHaveLength(4);
    expect(screen.queryByLabelText(/Portfolio style/)).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText(/Switch to.*layout/),
    ).not.toBeInTheDocument();
    expect(document.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(document.querySelector("a[download]")).toBeNull();
  });
  it("does not let old style and layout preferences change the public experience", () => {
    window.localStorage.setItem("portfolio-template-id", "engineering");
    window.localStorage.setItem("portfolio-layout-mode", "multi");
    render(<App />);
    expect(screen.getByTestId("home-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.getByTestId("experience-section")).toBeInTheDocument();
  });
  it("provides three source-grounded studies with native deeper reading", () => {
    render(<App />);
    for (const id of ["spotify", "kkbox", "sim-lse"]) {
      const details = screen.getByTestId(`case-study-${id}`);
      expect(details.tagName).toBe("DETAILS");
      fireEvent.click(screen.getByTestId(`case-study-${id}-toggle`));
      expect(details).toHaveTextContent("Data & method");
    }
    expect(screen.getByTestId("case-study-sim-lse")).toHaveTextContent(
      "Nguyễn Thế Khang",
    );
    expect(document.body.textContent).not.toMatch(
      /Nham Quoc Hung|nhamhung|0\.74320|top 10/,
    );
  });
  it("normalizes old supported deep links without exposing a multi-page UI", async () => {
    window.history.replaceState(null, "", "/#/projects");
    render(<App />);
    await waitFor(() => expect(location.hash).toBe("#projects"));
    expect(screen.getByTestId("home-section")).toBeInTheDocument();
  });
  it("never exposes the former owner’s old journal article", () => {
    window.history.replaceState(
      null,
      "",
      "/#/journal/my-first-local-journal-entry",
    );
    render(<App />);
    expect(screen.getByTestId("journal-post-not-found")).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent("Mentoring for the SIM-LSE");
  });
  it("resolves unsupported section URLs to the overview", async () => {
    window.history.replaceState(null, "", "/#/contact");
    render(<App />);
    await waitFor(() => expect(location.hash).toBe("#home"));
    expect(screen.getByTestId("home-section")).toBeInTheDocument();
  });
  it("opens the compact menu, navigates to a real section, and closes it", () => {
    render(<App />);
    const trigger = screen.getByTestId("mobile-menu-toggle");
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const nav = screen.getByRole("navigation", { name: "Mobile navigation" });
    fireEvent.click(
      [...nav.querySelectorAll("a")].find(
        (a) => a.getAttribute("href") === "#projects",
      )!,
    );
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
  it("closes the mobile menu with Escape and returns keyboard focus", () => {
    render(<App />);
    const trigger = screen.getByTestId("mobile-menu-toggle");
    fireEvent.click(trigger);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveFocus();
  });
  it("allows readers to pause motion", () => {
    render(<App />);
    const control = screen.getByTestId("motion-toggle");
    fireEvent.click(control);
    expect(control).toHaveAttribute("aria-pressed", "false");
    expect(document.querySelector(".dt-site")).toHaveAttribute(
      "data-motion",
      "off",
    );
  });
  it("combines mathematical education and practical experience within the journey", () => {
    render(<App />);
    expect(screen.getByTestId("experience-section")).toContainElement(
      screen.getByTestId("education-section"),
    );
    expect(screen.getByTestId("education-section")).toHaveTextContent(
      "Expected graduation",
    );
    expect(screen.getByTestId("experience-section")).toHaveTextContent("FOXAi");
  });
});
