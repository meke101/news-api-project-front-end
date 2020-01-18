import React from "react";
import axios from "axios";

export default function DeleteCommentButton({
  comment_id,
  deleteComment,
  currentUser,
  author
}) {

  const handleDeleteClick = event => {
    if (currentUser === author ) {
      return axios
        .delete(
          `https://amelias-news-api.herokuapp.com/api/comments/${comment_id}`
        )
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
