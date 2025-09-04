import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Similars from "../Similars";
import { MemoryRouter } from "react-router";

// Set a fake ROOT env for testing
process.env.REACT_APP_ROOT = "/movies-react";

describe("Similars component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Similars />
      </MemoryRouter>
    );

    // Check heading
    expect(screen.getByText(/similars/i)).toBeInTheDocument();

    // Check that 6 similar items are rendered
    const items = screen.getAllByRole("link");
    expect(items.length).toBe(6);

    // Check that all items have an image
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(6);

    // Optional: check one of the links contains the correct href
    expect(items[0]).toHaveAttribute("href", "/movies-react/post/1");

    // Optional: check text content inside each item
    expect(screen.getAllByText("Movies name").length).toBe(6);
    expect(screen.getAllByText(/85%/).length).toBe(6);
  });
});
