import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Search from "../Search";

describe("Search component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
  });

  it("shows filtered list on input focus and typing", async () => {
    const input = screen.getByPlaceholderText(/search movies name/i);

    await userEvent.click(input);
    await userEvent.type(input, "Inception");

    const listContainer = await screen.findByTestId("search-list");

    const filteredItems = within(listContainer).getAllByText(
      (content, element) =>
        element?.tagName.toLowerCase() === "a" && content.includes("Inception")
    );

    expect(filteredItems.length).toBeGreaterThan(0);
  });
});
