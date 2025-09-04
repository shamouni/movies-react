import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SliderSkeleton from "../Slider-skeleton";

describe("SliderSkeleton component", () => {
  it("renders 9 skeleton slides", () => {
    render(<SliderSkeleton />);

    const skeletonSlides = screen.getAllByTestId("slide-skeleton");
    expect(skeletonSlides).toHaveLength(9);
  });

  it("each skeleton slide contains a Skeleton component", () => {
    render(<SliderSkeleton />);

    const skeletonSlides = screen.getAllByTestId("slide-skeleton");
    skeletonSlides.forEach((slide) => {
      // Check that the slide contains at least one element with the 'react-loading-skeleton' class
      const skeleton = slide.querySelector(".react-loading-skeleton");
      expect(skeleton).toBeInTheDocument();
    });
  });
});
