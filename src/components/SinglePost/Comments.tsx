import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { TCommentItem, TCommentInput } from "./types";
import { getDate } from "./utils";

interface ICommentsProps {
  data?: TCommentItem[];
  addComment: (comment: TCommentItem) => void;
}

const Comments = ({ data = [], addComment }: ICommentsProps) => {
  const [comments, setComments] = useState<TCommentItem[]>([]);
  const [input, setInput] = useState<TCommentInput>({
    user: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    if (data.length > 0) {
      setComments(data);
    }
  }, [data]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    const newComment: TCommentItem = {
      ...input,
      id: Math.floor(Math.random() * 32767) + 1,
      like: 0,
      dislike: 0,
    };
    addComment(newComment);
    setInput({ user: "", email: "", comment: "" });
  };

  const handleVote = (id: number, action: "like" | "dislike") => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id !== id) return comment;

        const originalComment = data.find((c) => c.id === id);
        if (!originalComment) return comment;

        let like = comment.like;
        let dislike = comment.dislike;

        if (action === "like") {
          like =
            comment.like > originalComment.like
              ? originalComment.like
              : originalComment.like + 1;
          dislike = originalComment.dislike;
        } else {
          dislike =
            comment.dislike > originalComment.dislike
              ? originalComment.dislike
              : originalComment.dislike + 1;
          like = originalComment.like;
        }

        return { ...comment, like, dislike };
      })
    );
  };

  return (
    <section className="comments">
      <div className="container">
        <div className="head flex-between">
          <h4>
            <i className="fa fa-commenting mr-05" aria-hidden="true"></i>
            {comments.length} comments
          </h4>
          <a href="#form" className="btn">
            Add a comment
          </a>
        </div>

        <div className="opinions">
          {comments.map(({ id, user, comment, like, dislike }) => (
            <div className="item" key={id}>
              <div className="c-info">
                <span>
                  <i className="fa fa-user mr-1" aria-hidden="true"></i>
                  <b>{user}</b>
                  <time>{getDate()}</time>
                </span>
                <div className="vote">
                  <span onClick={() => handleVote(id, "like")}>
                    <i className="fa fa-thumbs-up like" aria-hidden="true"></i>{" "}
                    {like || 0}
                  </span>
                  <span onClick={() => handleVote(id, "dislike")}>
                    <i
                      className="fa fa-thumbs-down dislike"
                      aria-hidden="true"
                    ></i>{" "}
                    {dislike || 0}
                  </span>
                </div>
              </div>
              <p>{comment}</p>
            </div>
          ))}
        </div>

        <form id="form" className="form" onSubmit={handleAddComment}>
          <h4 className="head">Leave a comment</h4>
          <textarea
            value={input.comment}
            onChange={handleChange}
            name="comment"
            placeholder="How was this movie?"
          />
          <div>
            <input
              value={input.user}
              onChange={handleChange}
              type="text"
              name="user"
              placeholder="Name"
              required
            />
            <input
              value={input.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <button className="btn" type="submit">
              Send it
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Comments;
