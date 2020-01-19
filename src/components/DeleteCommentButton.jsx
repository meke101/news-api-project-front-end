import React from "react";
import * as api from "../Api";

export default function DeleteCommentButton({
  comment_id,
  deleteComment,
  currentUser,
  author
}) {
  const handleDeleteClick = event => {
    if (currentUser === author) {
      api
        .deleteCommentById(comment_id)
        .then(() => deleteComment(comment_id))
        .catch(err => {
          this.setState({
            err: { status: err.response.status, msg: err.response.data.msg }
          });
        });
    }
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
