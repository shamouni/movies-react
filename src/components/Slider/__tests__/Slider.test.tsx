import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Slider from "../Slider";
import { TSlideItem } from "../types";

// Mock Slides component
jest.mock("../Slides", () => ({
  __esModule: true,
  default: ({ items }: { items: any[] }) => (
    <div data-testid="slides">Slides: {items.length}</div>
  ),
}));

// Mock useSlider hook
jest.mock("../useSlider", () => ({
  useSlider: () => ({
    containerRef: { current: null },
  }),
}));

const mockData: TSlideItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Slide ${i + 1}`,
  image: `slide${i + 1}.jpg`,
}));

describe("Slider component", () => {
  it("renders 3 Slides components when data is provided", () => {
    render(
      <MemoryRouter>
        <Slider data={mockData} />
      </MemoryRouter>
    );

    const slides = screen.getAllByTestId("slides");
    expect(slides.length).toBe(3);

    // Total items = 9, split in 3 parts → expect approx 3 each
    slides.forEach((slide) => {
      expect(slide).toHaveTextContent(/Slides: [2-4]/); // tolerate rounding
    });
  });

  it("renders 3 Slides components even if data is empty", () => {
    render(
      <MemoryRouter>
        <Slider data={[]} />
      </MemoryRouter>
    );

    const slides = screen.getAllByTestId("slides");
    expect(slides.length).toBe(3);
    slides.forEach((slide) => {
      expect(slide).toHaveTextContent("Slides: 0");
    });
  });

  it("renders navigation arrows", () => {
    render(
      <MemoryRouter>
        <Slider data={mockData} />
      </MemoryRouter>
    );

    expect(document.getElementById("prev-slide")).toBeInTheDocument();
    expect(document.getElementById("next-slide")).toBeInTheDocument();
  });
});
