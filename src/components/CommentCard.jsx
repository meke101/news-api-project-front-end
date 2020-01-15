import React from "react";
import { Link } from "@reach/router";
import DeleteCommentButton from "./DeleteCommentButton";

export default function CommentCard({ comment, deleteComment }) {
  const { comment_id, body, author } = comment;
  // console.log(comment_id);

  return (
    <div>
      <h4>
        comment Card - {body} - {author}
      </h4>
      <DeleteCommentButton
        comment_id={comment_id}
        deleteComment={deleteComment}
      />
    </div>
  );


}
