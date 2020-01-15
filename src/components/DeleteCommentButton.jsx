import React from "react";
import axios from "axios";

export default function DeleteCommentButton({ comment_id, deleteComment }) {
  console.log(comment_id, "<<<<<<<<");
  

  const handleDeleteClick = event => {
    console.log("handle delete click function", comment_id);

    return axios
      .delete(
        `https://amelias-news-api.herokuapp.com/api/comments/${comment_id}`
      )
      .then(( ) =>
        deleteComment(comment_id)
      );
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
