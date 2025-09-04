import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Pagination from "../Pagination";

describe("Pagination Component", () => {
  const renderPagination = (props: {
    page?: number;
    limit?: number;
    count?: number;
  }) => {
    return render(
      <MemoryRouter>
        <Pagination {...props} />
      </MemoryRouter>
    );
  };

  it("renders only one page when count <= limit", () => {
    renderPagination({ page: 1, limit: 10, count: 5 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("Prev")).not.toBeInTheDocument();
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("renders Prev button when page > 1", () => {
    renderPagination({ page: 2, limit: 5, count: 20 });

    expect(screen.getByText("Prev")).toBeInTheDocument();
  });

  it("renders Next button when not on the last page", () => {
    renderPagination({ page: 2, limit: 5, count: 20 });

    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("does not render Prev when on first page", () => {
    renderPagination({ page: 1, limit: 5, count: 20 });

    expect(screen.queryByText("Prev")).not.toBeInTheDocument();
  });

  it("does not render Next when on last page", () => {
    renderPagination({ page: 4, limit: 5, count: 20 });

    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("renders correct number of page buttons", () => {
    renderPagination({ page: 1, limit: 5, count: 15 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.queryByText("4")).not.toBeInTheDocument();
  });

  it("active page button has active class", () => {
    renderPagination({ page: 2, limit: 5, count: 15 });

    const activeBtn = screen.getByText("2");
    expect(activeBtn).toHaveClass("active");
  });

  it("all page buttons have correct href (to)", () => {
    renderPagination({ page: 2, limit: 5, count: 15 });

    const page1Link = screen.getByText("1");
    expect(page1Link.closest("a")).toHaveAttribute("href", "/?page=1");

    const page2Link = screen.getByText("2");
    expect(page2Link.closest("a")).toHaveAttribute("href", "/?page=2");

    const page3Link = screen.getByText("3");
    expect(page3Link.closest("a")).toHaveAttribute("href", "/?page=3");
  });
});
