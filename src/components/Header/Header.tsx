import { Link } from "react-router";
import NavMobile from "./Nav-Mobile";
import Search from "./Search";

const ROOT = process.env.REACT_APP_ROOT || "";
const CATEGORY = ROOT + "/category";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col col-auto">
            <Link role="link" to={ROOT}>
              <img src={`${ROOT}/assets/images/logo.png`} alt="logo" />
            </Link>
          </div>

          <div id="menu-main" className="col" role="navigation">
            <ul>
              <li>
                <Link role="link" to={ROOT}>
                  Home
                </Link>
              </li>
              <li className="has-sub">
                <Link role="link" to={CATEGORY}>
                  Movies
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </Link>

                <ul>
                  <li>
                    <Link role="link" to={CATEGORY}>
                      Comedy
                    </Link>
                  </li>
                  <li>
                    <Link role="link" to={CATEGORY}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link role="link" to={CATEGORY}>
                      Marvel
                    </Link>
                  </li>
                  <li>
                    <Link role="link" to={CATEGORY}>
                      Science Fiction
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link role="link" to={CATEGORY}>
                  Archive
                </Link>
              </li>
              <li>
                <Link role="link" to={CATEGORY}>
                  Action
                </Link>
              </li>
              <li>
                <Link role="link" to={ROOT}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col col-3 col-search">
            <Search />
          </div>

          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
