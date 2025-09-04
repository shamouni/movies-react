import { useState } from "react";
import { TPost } from "./types";

const ROOT = process.env.REACT_APP_ROOT || "";

interface IDetailsProps {
  post?: Partial<TPost>;
}

const Details = ({ post = {} }: IDetailsProps) => {
  const {
    id,
    title = "-",
    genre = [],
    actors = [],
    satisfied,
    director = "-",
    year = "-",
    country = "",
    imdb,
  } = post;

  const initialLike = 212;
  const initialDislike = 7;

  const [like, setLike] = useState<number>(initialLike);
  const [dislike, setDislike] = useState<number>(initialDislike);

  const likeClick = () => {
    setLike((prev) => (prev > initialLike ? initialLike : prev + 1));
    setDislike(initialDislike);
  };

  const dislikeClick = () => {
    setDislike((prev) => (prev > initialDislike ? initialDislike : prev + 1));
    setLike(initialLike);
  };

  return (
    <div className="post-header">
      <div className="post-cover" />

      <div className="container">
        <div className="row">
          <div className="figure col col-auto">
            {id && (
              <img
                src={`${ROOT}/assets/images/thumb${id}.jpg`}
                alt={title}
                width={207}
                height={290}
              />
            )}
          </div>

          <div className="col">
            <div className="text">
              <h1>{title}</h1>

              <div className="meta">
                <span>{genre.length ? genre.join(", ") : "-"}</span>
                <span>{year}</span>
                <span>+7</span>
                <span>{country}</span>
                <span>2.1 hours</span>
              </div>

              <div className="cast">
                <div className="row">
                  <div className="col col-auto">
                    <span className="icon yellow">
                      <i className="fa fa-imdb" aria-hidden="true" />
                    </span>
                    {imdb ?? "-"}
                    /10, 320 votes
                  </div>

                  <div className="col col-auto">
                    <span className="icon green">
                      <i className="fa fa-heart" aria-hidden="true" />
                    </span>
                    {satisfied ?? "-"}% satisfaction
                  </div>
                </div>

                <div className="actors">
                  <span className="lbl">Actors: </span>
                  {actors.length ? actors.join(", ") : "-"}
                </div>

                <div className="director">
                  <span className="lbl">Directors: </span>
                  {director}
                </div>

                <div className="votes">
                  <span onClick={likeClick} style={{ cursor: "pointer" }}>
                    <i className="fa fa-thumbs-up" aria-hidden="true" /> {like}
                  </span>
                  <span onClick={dislikeClick} style={{ cursor: "pointer" }}>
                    <i className="fa fa-thumbs-down" aria-hidden="true" />{" "}
                    {dislike}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
