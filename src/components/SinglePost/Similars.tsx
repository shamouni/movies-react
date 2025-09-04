import { Link } from "react-router";
const ROOT = process.env.REACT_APP_ROOT;

const Similars = () => {
  return (
    <section className="similar">
      <div className="container">
        <h4 className="head">Similars</h4>
        <div className="row">
          {[...Array(6)].map((i, k) => (
            <div className="col col-2" key={k}>
              <Link to={ROOT + "/post/" + (k + 1)} role="link">
                <img
                  src={`${ROOT}/assets/images/thumb${k + 1}.jpg`}
                  alt=""
                  role="img"
                />
                <h5>Movies name</h5>
                <div className="vote">
                  <i className="fa fa-heart mr-05" aria-hidden="true"></i>
                  85%
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Similars;
