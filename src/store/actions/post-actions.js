import TYPES from "../types/post-types";

export const Fetch_Posts = (f = { page: 1, limit: 6 }) => ({
  type: TYPES.FETCH_POSTS,
  successType: TYPES.FETCH_POSTS_SUCCESS,
  failedType: TYPES.FETCH_POSTS_FAILED,
  isEndpointCall: true,
  endpoint: `posts?_page=${f.page}&_limit=${f.limit}`,
  reduxData: { page: f.page, limit: f.limit },
  method: "GET",
});

export const Fetch_Single_Post = (id) => ({
  type: TYPES.FETCH_SINGLE_POST,
  successType: TYPES.FETCH_SINGLE_POST_SUCCESS,
  failedType: TYPES.FETCH_SINGLE_POST_FAILED,
  isEndpointCall: true,
  endpoint: `posts/${id}`,
  reduxData: { id },
  method: "GET",
});

const fetch_comments = (id) => ({
  type: TYPES.FETCH_COMMENTS,
  successType: TYPES.FETCH_COMMENTS_SUCCESS,
  failedType: TYPES.FETCH_COMMENTS_FAILED,
  isEndpointCall: true,
  endpoint: `posts/${id}/comments`,
  reduxData: { id },
  method: "GET",
});

const add_comment = (id, comment) => ({
  type: TYPES.ADD_COMMENT,
  successType: TYPES.ADD_COMMENT_SUCCESS,
  failedType: TYPES.ADD_COMMENT_FAILED,
  isEndpointCall: true,
  endpoint: `posts/${id}/comments`,
  reduxData: { id, comment },
  method: "POST",
});

// Dispatch and Fetch, Using Thunk
export const Add_Comment_And_Fetch = (id, comment) => (dispatch) => {
  dispatch(add_comment(id, comment)).then((res) => {
    if (res) {
      dispatch(fetch_comments(id));
    }
  });
};
