import React from "react";
import CommentList from "./CommentList";
import AddCommentBar from "./AddCommentBar";

export default function ArticleCommentsBar({ article_id }) {
  console.log(article_id, "HEREEE");
  return (
    <div>
      <p>ArticleCOMMENTSSSS bar</p>
      {/* <AddCommentBar article_id={article_id} />  */}
      <CommentList article_id={article_id} />
    </div>
  );
}
