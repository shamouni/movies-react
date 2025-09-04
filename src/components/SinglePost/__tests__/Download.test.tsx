import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Download from "../Download";

describe("Download component", () => {
  beforeEach(() => {
    render(<Download />);
  });

  it("renders quality and size texts", () => {
    expect(
      screen.getByText(/quality: 1080p, size: 1.86 gb/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/quality: 720p, size: 915 mb/i)
    ).toBeInTheDocument();
  });

  it("renders download buttons", () => {
    const btn1080 = screen.getByRole("link", { name: /download 1080p/i });
    const btn720 = screen.getByRole("link", { name: /download 720p/i });
    const btnWatch = screen.getByRole("link", { name: /watch online/i });

    expect(btn1080).toBeInTheDocument();
    expect(btn720).toBeInTheDocument();
    expect(btnWatch).toBeInTheDocument();
  });

  it("applies correct button classes", () => {
    const btn1080 = screen.getByRole("link", { name: /download 1080p/i });
    const btn720 = screen.getByRole("link", { name: /download 720p/i });
    const btnWatch = screen.getByRole("link", { name: /watch online/i });

    expect(btn1080).toHaveClass("btn-green");
    expect(btn720).toHaveClass("btn-green");
    expect(btnWatch).toHaveClass("btn-yellow");
  });
});
