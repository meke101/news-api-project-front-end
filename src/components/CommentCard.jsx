import React from "react";
// import { Link } from "@reach/router";
import DeleteCommentButton from "./DeleteCommentButton";

import VoteBar from "./VoteBar";

export default function CommentCard({ comment, deleteComment, patchCommentVote }) {
  const { comment_id, body, author, votes } = comment;
  // console.log(comment_id);

  return (
    <div>
      <h4>
        comment Card - {body} - {author} -  {votes} 
      </h4>
      <DeleteCommentButton
        comment_id={comment_id}
        deleteComment={deleteComment}
      />
      <VoteBar comment_id={comment_id}
        // patchCommentVote={patchCommentVote} 
        votes={votes}/>
    </div>
  );
}
