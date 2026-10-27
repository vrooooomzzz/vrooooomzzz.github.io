import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Provider } from "../components/ui/provider";
import BusinessJournalPostPage from "./business/BusinessJournalPostPage";
import JournalPostPage from "../components/JournalPostPage";
afterEach(() => cleanup());
describe.each([
  ["Business", BusinessJournalPostPage],
  ["Engineering", JournalPostPage],
] as const)("%s absent articles", (_name, Page) => {
  it.each(["missing-post", "my-first-local-journal-entry"])(
    "does not expose a previous-owner article at %s",
    (slug) => {
      render(
        <Provider>
          <Page slug={slug} />
        </Provider>,
      );
      expect(screen.getByTestId("journal-post-not-found")).toBeInTheDocument();
      expect(
        screen.queryByTestId("journal-post-image"),
      ).not.toBeInTheDocument();
    },
  );
});
