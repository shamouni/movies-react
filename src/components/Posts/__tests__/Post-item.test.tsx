import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostItem from "../Post-item";
import { TPost } from "../../SinglePost/types";

describe("PostItem Component", () => {
  const mockPost: TPost = {
    id: 1,
    title: "The Test Movie",
    genre: ["Action", "Drama"],
    satisfied: 87,
    actors: ["John Doe", "Jane Smith"],
    director: "John Director",
    desc: "This is a test description",
    year: "2023",
    country: "USA",
    imdb: 8.5,
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <PostItem post={mockPost} />
      </MemoryRouter>
    );
  });

  it("renders the title", () => {
    expect(screen.getByText("The Test Movie")).toBeInTheDocument();
  });

  it("renders the image with correct src and alt", () => {
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", expect.stringContaining("thumb1.jpg"));
    expect(img).toHaveAttribute("alt", "The Test Movie");
  });

  it("renders genre", () => {
    expect(screen.getByText(/Action, Drama/)).toBeInTheDocument();
  });

  it("renders satisfied percentage", () => {
    expect(screen.getByText(/87% satisfied/)).toBeInTheDocument();
  });

  it("renders actors and director", () => {
    expect(
      screen.getByText(/Actors: John Doe, Jane Smith/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Director: John Director/)).toBeInTheDocument();
  });

  it("renders description", () => {
    expect(
      screen.getByText(/This is a test description.../)
    ).toBeInTheDocument();
  });

  it("renders year, country and imdb", () => {
    expect(screen.getByText(/Year: 2023/)).toBeInTheDocument();
    expect(screen.getByText(/Country: USA/)).toBeInTheDocument();
    expect(screen.getByText(/Imdb: 8.5/)).toBeInTheDocument();
  });

  it("renders Watch Online link with correct href", () => {
    const watchLink = screen.getByRole("link", { name: /Watch Online/i });
    expect(watchLink).toHaveAttribute(
      "href",
      expect.stringContaining("/post/1")
    );
  });
});
