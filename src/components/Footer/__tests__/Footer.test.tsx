import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  it("renders the Footer component", () => {
    // Render the Footer component
    render(<Footer />);

    // Check if copyright text is rendered
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();

    // Check if main feature links/texts exist
    expect(screen.getByText(/Format guide/i)).toBeInTheDocument();
    expect(screen.getByText(/Volume adjustment/i)).toBeInTheDocument();
    expect(screen.getByText(/Formats guide/i)).toBeInTheDocument();

    // Check if social media icons/texts are rendered
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/Telegram/i)).toBeInTheDocument();
  });
});
