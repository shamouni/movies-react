export type TPost = {
  id: number;
  title: string;
  genre?: string[];
  actors?: string[];
  satisfied?: number;
  director?: string;
  year?: string;
  country?: string;
  imdb?: number;
  desc?: string;
}

export type TTrailer = {
  id: number;
  desc?: string;
  summary?: string;
}

export type TCommentItem = {
  id: number;
  user: string;
  email: string;
  comment: string;
  like: number;
  dislike: number;
}

export type TCommentInput = {
  user: string;
  email: string;
  comment: string;
}

export type TReduxPostState = {
  post: TPost,
  comments: TCommentItem[],
  fetching: boolean
}