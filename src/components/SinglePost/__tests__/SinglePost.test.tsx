import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SinglePost_No_Connected } from "../SinglePost";
import { MemoryRouter, Route, Routes } from "react-router";
import { TPost, TCommentItem } from "../types";

// Mock sub-components
jest.mock("../PostDetails", () => () => <div data-testid="PostDetails" />);
jest.mock("../Trailer", () => () => <div data-testid="Trailer" />);
jest.mock("../Download", () => () => <div data-testid="Download" />);
jest.mock("../Similars", () => () => <div data-testid="Similars" />);
jest.mock("../Comments", () => () => <div data-testid="Comments" />);

// Mock props
const mockPost: TPost = {
  id: 1,
  title: "Test Movie",
  genre: ["Action"],
  satisfied: 90,
  actors: ["Actor 1", "Actor 2"],
  director: "Director X",
  desc: "Description here",
  year: "2022",
  country: "USA",
  imdb: 8.5,
};

const mockComments: TCommentItem[] = [
  {
    id: 1,
    user: "Ali",
    email: "ali@example.com",
    comment: "Very good",
    like: 2,
    dislike: 0,
  },
];

const mockFetchSinglePost = jest.fn();
const mockAddComment = jest.fn();

describe("SinglePost component", () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });
  beforeEach(() => {
    mockFetchSinglePost.mockClear();
    mockAddComment.mockClear();
  });

  it("renders all child components and calls Fetch_Single_Post", () => {
    render(
      <MemoryRouter initialEntries={["/post/1"]}>
        <Routes>
          <Route
            path="/post/:id"
            element={
              <SinglePost_No_Connected
                post={mockPost}
                comments={mockComments}
                Fetch_Single_Post={mockFetchSinglePost}
                Add_Comment_And_Fetch={mockAddComment}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    // Assert Fetch_Single_Post was called with correct id
    expect(mockFetchSinglePost).toHaveBeenCalledWith("1");

    // Assert child components exist
    expect(screen.getByTestId("PostDetails")).toBeInTheDocument();
    expect(screen.getByTestId("Trailer")).toBeInTheDocument();
    expect(screen.getByTestId("Download")).toBeInTheDocument();
    expect(screen.getByTestId("Similars")).toBeInTheDocument();
    expect(screen.getByTestId("Comments")).toBeInTheDocument();
  });
});
