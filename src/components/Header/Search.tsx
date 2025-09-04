import { useState, useEffect } from "react";
import { Link } from "react-router";
import DataMock from "../../store/data-mock.json";
import { TCardItem } from "../Posts/types";

const ROOT = process.env.REACT_APP_ROOT;
const body = document.querySelector("body") as HTMLBodyElement;

const Search = () => {
  const [filteredList, setFilteredList] = useState<TCardItem[]>([]);
  const [flag, setFlag] = useState(false);
  const inputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
    e.stopPropagation();

  const hideList = () => setFlag(false);
  const showList = () => setFlag(true);

  useEffect(() => {
    body.addEventListener("mousedown", hideList);

    return () => {
      body.removeEventListener("mousedown", hideList);
    };
  }, []);

  const lookup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { posts } = DataMock;
    const { value } = e.target as HTMLTextAreaElement;

    const regular = new RegExp(value, "i");
    const f = posts.filter((i) => i.title.match(regular));
    setFilteredList(f);
  };

  const itemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    setTimeout(hideList, 500);
  };

  return (
    <div id="search">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        onKeyUp={lookup}
        onFocus={showList}
        onMouseDown={inputClick}
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search movies name ..."
      />

      {flag && filteredList.length > 0 && (
        <div className="list" data-testid="search-list">
          {filteredList.map((i) => (
            <Link
              onMouseDown={itemClick}
              to={ROOT + "/post/" + i.id}
              key={i.id}
            >
              {i.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
