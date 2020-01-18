import React from "react";
import DeleteCommentButton from "./DeleteCommentButton";

import VoteBar from "./VoteBar";

export default function CommentCard({ comment, deleteComment, currentUser }) {
  const { comment_id, body, author, votes } = comment;
  return (
    <div>
      <h5>
        {body} - {author} - {votes}
      </h5>
      <DeleteCommentButton
        comment_id={comment_id}
        author={author}
        deleteComment={deleteComment}
        currentUser={currentUser}
      />
      <VoteBar comment_id={comment_id} votes={votes} />
    </div>
  );
}
