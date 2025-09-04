import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Trailer from "../Trailer";
import { TTrailer } from "../types";

describe("Trailer component", () => {
  const mockPost: TTrailer = {
    id: 5,
    desc: "This is a sample description",
    summary: "This is a summary of the movie",
  };

  beforeEach(() => {
    render(<Trailer post={mockPost} />);
  });

  it("should render the trailer container", () => {
    const trailerDiv = screen.getByTestId("trailer");
    expect(trailerDiv).toBeInTheDocument();
  });

  it("should render the video element", () => {
    const video = screen.getByRole("video");
    expect(video).toBeInTheDocument();
  });
});
