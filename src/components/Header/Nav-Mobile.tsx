import { useEffect } from "react";

const ROOT = process.env.REACT_APP_ROOT;
const Body1 = document.getElementsByTagName("body")[0];
const BC = Body1.classList;
const Cls = "show-nav";

const NavMobile = () => {
  useEffect(() => {
    Body1.addEventListener("mousedown", hideNav);

    return () => {
      Body1.removeEventListener("mousedown", hideNav);
    };
    // eslint-disable-next-line
  }, []);

  const toggleShow = () => {
    if (BC.toString().indexOf(Cls) === -1) {
      BC.add(Cls);
    } else {
      BC.remove(Cls);
    }
  };

  const hideNav = () => {
    if (BC.toString().indexOf(Cls) !== -1) {
      toggleShow();
    }
  };

  return (
    <>
      <div id="nav-mobile">
        <a className="logo" href="#!">
          <img src={`${ROOT}/assets/images/logo.png`} alt="mobile logo" />
        </a>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Movies</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
        </ul>
      </div>

      <div className="col col-nav col-auto">
        <i onClick={toggleShow} className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="cover"></div>
    </>
  );
};

export default NavMobile;
