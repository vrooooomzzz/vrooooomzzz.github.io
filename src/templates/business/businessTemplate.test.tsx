import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "../../App";
import { certificates } from "../../data/certificates";
beforeEach(() => {
  window.history.replaceState(null, "", "/");
  Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
    configurable: true,
    value: function () {
      this.setAttribute("open", "");
    },
  });
  Object.defineProperty(HTMLDialogElement.prototype, "close", {
    configurable: true,
    value: function () {
      this.removeAttribute("open");
    },
  });
});
afterEach(() => cleanup());
describe("Process, project concepts, and reviewed evidence", () => {
  it("supports roving keyboard focus across process stages", () => {
    render(<App />);
    const ask = screen.getByRole("tab", { name: /Ask/ });
    ask.focus();
    fireEvent.keyDown(ask, { key: "ArrowRight" });
    const explore = screen.getByRole("tab", { name: /Explore/ });
    expect(explore).toHaveFocus();
    expect(explore).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Pandas");
    fireEvent.keyDown(explore, { key: "End" });
    expect(screen.getByRole("tab", { name: /Explain/ })).toHaveFocus();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("SHAP");
  });
  it("updates the audio concept, workflow, and dataset-scoped discount explanation", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Acousticness" }));
    expect(document.body).toHaveTextContent(
      "Instrumentation adds another dimension",
    );
    fireEvent.click(screen.getByTestId("workflow-next"));
    expect(
      document.querySelector(".dt-workflow-step.is-active"),
    ).toHaveTextContent("Behavioral features");
    fireEvent.click(screen.getByRole("button", { name: "Above 40%" }));
    expect(document.body).toHaveTextContent("not a universal causal rule");
  });
  it.each([0, 7])(
    "renders the actual Coursera page preview while preserving the original PDF for entry %i",
    (index) => {
      render(<App />);
      expect(document.querySelector("object,iframe")).toBeNull();
      const card = screen.getByTestId(`certificate-card-${index}`);
      expect(card.querySelector("img")).toHaveAttribute(
        "src",
        certificates[index].preview,
      );
      expect(card.querySelector("img")).toHaveAttribute("loading", "lazy");
      fireEvent.click(card);
      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAccessibleName(certificates[index].title);
      expect(dialog.querySelector("img")).toHaveAttribute(
        "src",
        certificates[index].preview,
      );
      expect(dialog.querySelector("object,iframe")).toBeNull();
      expect(screen.getByTestId("certificate-original")).toHaveAttribute(
        "href",
        certificates[index].file,
      );
      expect(screen.getByTestId("certificate-original")).toHaveTextContent(
        "Open original PDF",
      );
    },
  );
  it("opens a correctly labeled image and returns focus on close", () => {
    render(<App />);
    const trigger = screen.getByTestId("certificate-card-1");
    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(dialog.querySelector("img")).toHaveAttribute(
      "src",
      certificates[1].file,
    );
    expect(dialog.querySelector("img")?.getAttribute("alt")).toContain(
      "Nguyễn Đức Tuấn",
    );
    fireEvent.click(screen.getByTestId("certificate-close"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });
  it("provides all eight reviewed entries and distinguishes program completion from coursework", () => {
    render(<App />);
    expect(screen.getAllByTestId(/^certificate-card-/)).toHaveLength(
      certificates.length,
    );
    fireEvent.click(screen.getByTestId("certificate-card-7"));
    expect(screen.getByRole("dialog")).toHaveTextContent("Coursework");
    expect(screen.getByRole("dialog")).not.toHaveTextContent(
      "Professional Certificate",
    );
  });
});
