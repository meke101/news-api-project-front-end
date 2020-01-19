import React from "react";
import DeleteCommentButton from "./DeleteCommentButton";

import VoteBar from "./VoteBar";

export default function CommentCard({ comment, deleteComment, currentUser }) {
  const { comment_id, body, author, votes } = comment;
  return (
    <div class="comment-card-container">
      <div class="comment-card-body">
        <h5>
          {body} - {author} - {votes}
        </h5>
      </div>
      <div class="comment-card-right-column">
        <div class="-comment-card-voteBar">
          <VoteBar comment_id={comment_id} votes={votes} />
        </div>
        <div class="comment-card-delete">
          <DeleteCommentButton
            comment_id={comment_id}
            author={author}
            deleteComment={deleteComment}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
}
