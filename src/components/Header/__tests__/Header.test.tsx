import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "../Header";
import "@testing-library/jest-dom";

test("renders logo inside Header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();
});

test("renders Home link", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const menu = screen.getByRole("navigation");
  const moviesLink = within(menu).getByText("Home");
  expect(moviesLink).toBeInTheDocument();
});

test("renders Movies menu", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const menu = screen.getByRole("navigation");
  const moviesLink = within(menu).getByText("Movies");
  expect(moviesLink).toBeInTheDocument();
});
