import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Comments from "./Comments";
import PostDetails from "./PostDetails";
import Download from "./Download";
import Similars from "./Similars";
import Trailer from "./Trailer";
import { ThunkDispatch } from "redux-thunk";
import { TCommentItem, TPost, TReduxPostState } from "./types";

import {
  Fetch_Single_Post,
  Add_Comment_And_Fetch,
} from "../../store/actions/post-actions";

interface SinglePostProps {
  post: TPost;
  comments: TCommentItem[];
  Fetch_Single_Post: (id: string) => void;
  Add_Comment_And_Fetch: (id: string, comment: TCommentItem) => void;
}

export const SinglePost_No_Connected = (props: SinglePostProps) => {
  const { post, comments, Fetch_Single_Post, Add_Comment_And_Fetch } = props;
  const { id = "" } = useParams();

  useEffect(() => {
    Fetch_Single_Post(id);
    document.body.classList.add("page-post");
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("page-post");
    };
  }, [id, Fetch_Single_Post]);

  const addComment = (comment: TCommentItem) => {
    Add_Comment_And_Fetch(id, comment);
  };

  return (
    <>
      <section className="post-detail">
        <PostDetails post={post} />
        <Trailer post={post} />
        <Download />
      </section>

      <Similars />
      <Comments data={comments} addComment={addComment} />
    </>
  );
};

const mapStateToProps = (state: TReduxPostState) => ({
  post: state.post,
  comments: state.comments,
  fetching: state.fetching,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TReduxPostState, unknown, any>
) => ({
  Fetch_Single_Post: (id: string) => dispatch(Fetch_Single_Post(id)),
  Add_Comment_And_Fetch: (id: string, comment: TCommentItem) =>
    dispatch(Add_Comment_And_Fetch(id, comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost_No_Connected);
