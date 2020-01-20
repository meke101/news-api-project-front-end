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
            err: { status: err.response.status, msg: err.response.data.msg },
            errMessage: `${currentUser}, you cannot delete ${author}'s comments!`
          });
        });
    }
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Delete</button>
      {/* <p> {this.state.errMessage}</p> */}
    </div>
  );
}
