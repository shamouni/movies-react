import { render, screen, fireEvent } from "@testing-library/react";
import Comments from "../Comments";
import { TCommentItem } from "../types";

jest.mock("../utils", () => ({
  getDate: () => "2023-09-04",
}));

const mockComments: TCommentItem[] = [
  {
    id: 1,
    user: "Alice",
    email: "alice@example.com",
    comment: "Great movie!",
    like: 2,
    dislike: 1,
  },
  {
    id: 2,
    user: "Bob",
    email: "bob@example.com",
    comment: "Not bad.",
    like: 1,
    dislike: 0,
  },
];

describe("Comments Component", () => {
  it("renders comments and displays correct count", () => {
    render(<Comments data={mockComments} addComment={jest.fn()} />);

    expect(screen.getByText("2 comments")).toBeInTheDocument();
    expect(screen.getByText("Great movie!")).toBeInTheDocument();
    expect(screen.getByText("Not bad.")).toBeInTheDocument();
    expect(screen.getAllByText("2023-09-04")).toHaveLength(2);
  });

  it("adds a comment and clears form", () => {
    const mockAddComment = jest.fn();
    render(<Comments data={mockComments} addComment={mockAddComment} />);

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const textarea = screen.getByPlaceholderText("How was this movie?");
    const button = screen.getByRole("button", { name: /send it/i });

    fireEvent.change(nameInput, { target: { value: "Charlie" } });
    fireEvent.change(emailInput, { target: { value: "charlie@example.com" } });
    fireEvent.change(textarea, { target: { value: "Loved it!" } });

    fireEvent.click(button);

    expect(mockAddComment).toHaveBeenCalledWith(
      expect.objectContaining({
        user: "Charlie",
        email: "charlie@example.com",
        comment: "Loved it!",
        like: 0,
        dislike: 0,
      })
    );

    // check that form is cleared
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(textarea).toHaveValue("");
  });
});
