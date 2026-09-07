import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Provider } from "../components/ui/provider";
import { journalPosts } from "../data/portfolio";
import BusinessJournalPostPage from "./business/BusinessJournalPostPage";

afterEach(() => cleanup());

const themes = [
  ["Business", BusinessJournalPostPage, "business-journal-post"],
] as const;

describe.each(themes)("%s journal publication", (_name, JournalPage, seam) => {
  it("renders the local post with media, metadata, Markdown, and return navigation", () => {
    const post = journalPosts[0];
    render(
      <Provider>
        <JournalPage slug={post.slug} />
      </Provider>,
    );

    expect(
      document.querySelector(`[data-presentation="${seam}"]`),
    ).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-page")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: post.title }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-image")).toHaveAttribute(
      "alt",
      post.imageAlt,
    );
    expect(
      screen.getByText(post.publishedDate, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Mentoring at the SIM–LSE Data Analytics Challenge 2026",
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-back-link")).toHaveAttribute(
      "href",
      "#/journal",
    );
  });

  it("renders a theme-owned missing-post composition", () => {
    render(
      <Provider>
        <JournalPage slug="missing-post" />
      </Provider>,
    );
    expect(screen.getByTestId("journal-post-not-found")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Journal post not found" }),
    ).toBeInTheDocument();
  });
});
