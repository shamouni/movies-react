import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Home } from "../Home";
import { TSlideItem } from "../../Slider/types";
import { TPost } from "../../SinglePost/types";

describe("Home Component", () => {
  const initialState = {
    sliders: [
      { id: 1, image: "/slider1.jpg", title: "Slider 1" } as TSlideItem,
    ],
    posts: [{ id: 1, title: "Test Post", body: "Content..." } as TPost],
    count: 12,
    fetching: false,
  };

  let fetchPostsMock: jest.Mock;

  beforeEach(() => {
    fetchPostsMock = jest.fn();
  });

  const renderComponent = (route = "/") => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Home
          posts={initialState.posts}
          sliders={initialState.sliders}
          count={initialState.count}
          fetching={initialState.fetching}
          Fetch_Posts={fetchPostsMock}
        />
      </MemoryRouter>
    );
  };

  it("should render the Slider when not in /category path", () => {
    renderComponent("/");

    expect(screen.getByAltText("Slider 1")).toBeInTheDocument();
  });

  it("should NOT render the Slider when in /category path", () => {
    renderComponent("/category");

    expect(screen.queryByText("Slider 1")).not.toBeInTheDocument();
  });

  it("should render the Posts component with provided data", () => {
    renderComponent("/");

    expect(screen.getByText("Test Post")).toBeInTheDocument();
  });

  it("should call Fetch_Posts on mount", () => {
    renderComponent("/?page=2");

    expect(fetchPostsMock).toHaveBeenCalledWith({ page: 2, limit: 6 });
  });

  it("should use default page 1 if no query param", () => {
    renderComponent("/");

    expect(fetchPostsMock).toHaveBeenCalledWith({ page: 1, limit: 6 });
  });
});
