import { Route, Routes, BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

import "./Shared/assets/scss/main.scss";
import "./Shared/assets/scss/slider.scss";
import "./Shared/assets/css/font-awesome.css";
import "react-loading-skeleton/dist/skeleton.css";

const ROOT = process.env.REACT_APP_ROOT;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route path={ROOT} element={<Home />} />
          <Route path={ROOT + "/category"} element={<Home />} />
          <Route path={ROOT + "/post/:id"} element={<SinglePost />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
