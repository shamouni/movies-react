import React from "react";
import { TTrailer } from "./types";

const ROOT = process.env.REACT_APP_ROOT;

interface ITrailerProps {
  post?: TTrailer;
}

const Trailer = ({ post }: ITrailerProps) => {
  const { id = 0, desc = "", summary = "" } = post || {};

  return (
    <div className="trailer" data-testid="trailer">
      <div className="container">
        <div className="row">
          <div className="col">
            <video
              src={`${ROOT}/assets/images/goal.mp4`}
              poster={`${ROOT}/assets/images/thumb${id}.jpg`}
              width="100%"
              controls
              preload="none"
              role="video"
            ></video>
          </div>

          <div className="col text">
            <h5>Summary</h5>
            <p>{desc}</p>
            <h5 className="mt-3">About</h5>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
