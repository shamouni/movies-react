import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Slides from "../Slides";
import { TSlideItem } from "../types";

jest.mock("../Slider-skeleton", () => () => (
  <div data-testid="slider-skeleton" />
));

const mockSlides: TSlideItem[] = [
  { id: 1, title: "Slide 1", image: "slide1.jpg" },
  { id: 2, title: "Slide 2", image: "slide2.jpg" },
];

describe("Slides component", () => {
  it("renders slide items when items are provided", () => {
    render(
      <MemoryRouter>
        <Slides items={mockSlides} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(mockSlides.length);

    mockSlides.forEach((item) => {
      expect(screen.getByAltText(item.title || "")).toBeInTheDocument();
    });
  });

  it("renders SliderSkeleton when no items are provided", () => {
    render(
      <MemoryRouter>
        <Slides items={[]} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("slider-skeleton")).toBeInTheDocument();
  });

  it("renders SliderSkeleton when items is undefined", () => {
    render(
      <MemoryRouter>
        <Slides />
      </MemoryRouter>
    );

    expect(screen.getByTestId("slider-skeleton")).toBeInTheDocument();
  });
});
