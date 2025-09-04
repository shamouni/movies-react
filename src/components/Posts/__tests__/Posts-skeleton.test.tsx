import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostsSkeleton from "../Posts-skeleton";

describe("PostsSkeleton Component", () => {
  it("renders 4 skeleton post items", () => {
    render(<PostsSkeleton />);

    const skeletonItems = screen.getAllByTestId("post-skeleton-item");
    expect(skeletonItems).toHaveLength(4);
  });
});
