import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TPost } from "../../SinglePost/types";
import Posts from "../Posts";
import { MemoryRouter } from "react-router";

jest.mock("../Post-item", () => (props: any) => (
  <div data-testid="post-item">{props.post.title}</div>
));

jest.mock("../Posts-skeleton", () => () => (
  <div data-testid="posts-skeleton">Loading skeleton...</div>
));

jest.mock("../Posts-sidebar", () => (props: any) => (
  <div data-testid="posts-sidebar">
    {props.loading ? "Sidebar Loaded" : "Sidebar Empty"}
  </div>
));

describe("Posts Component", () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  const mockPosts: TPost[] = [
    {
      id: 1,
      title: "Test Post 1",
      genre: [],
      satisfied: 90,
      actors: [],
      director: "",
      desc: "",
      year: "2022",
      country: "USA",
      imdb: 8.5,
    },
    {
      id: 2,
      title: "Test Post 2",
      genre: [],
      satisfied: 85,
      actors: [],
      director: "",
      desc: "",
      year: "2021",
      country: "UK",
      imdb: 8.0,
    },
  ];

  it("renders PostItem components when data is available and not fetching", () => {
    render(
      <MemoryRouter>
        <Posts
          data={mockPosts}
          fetching={false}
          page={1}
          limit={6}
          count={20}
        />
      </MemoryRouter>
    );

    // PostItems
    expect(screen.getAllByTestId("post-item")).toHaveLength(2);
    expect(screen.queryByTestId("posts-skeleton")).not.toBeInTheDocument();

    // Sidebar
    expect(screen.getByTestId("posts-sidebar")).toHaveTextContent(
      "Sidebar Loaded"
    );
  });

  it("renders PostsSkeleton when fetching is true", () => {
    render(<Posts fetching={true} data={[]} page={1} limit={6} count={0} />);

    expect(screen.getByTestId("posts-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("post-item")).not.toBeInTheDocument();

    expect(screen.getByTestId("posts-sidebar")).toHaveTextContent(
      "Sidebar Empty"
    );
  });
});
