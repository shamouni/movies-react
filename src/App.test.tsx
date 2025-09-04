import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

describe("App", () => {
  it("renders without crashing and shows Home route by default", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
