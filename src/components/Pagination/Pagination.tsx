import { Link } from "react-router";

interface PaginationProps {
  page?: number;
  limit?: number;
  count?: number;
}

const Pagination = (props: PaginationProps) => {
  const { page = 1, limit = 1, count = 1 } = props;

  const url = "?page=";
  const pagesCount = Math.ceil(count / limit);

  return (
    <div className="pagination">
      <ul>
        {page > 1 && (
          <li>
            <Link to={url + (page - 1)} className="btn btn-blue">
              Prev
            </Link>
          </li>
        )}

        {count > 1 &&
          [...Array(pagesCount)].map((_, k) => {
            const active = k + 1 === page ? "active" : "normal";
            return (
              <li key={k}>
                <Link to={url + (k + 1)} className={`btn btn-blue ${active}`}>
                  {k + 1}
                </Link>
              </li>
            );
          })}

        {page * limit < count && (
          <li>
            <Link to={url + (page + 1)} className="btn btn-blue">
              Next
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
