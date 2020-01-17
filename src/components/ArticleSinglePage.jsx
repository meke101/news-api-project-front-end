import React from "react";
import CommentList from "./CommentList";
import ArticleSingleBody from "./ArticleSingleBody";


export default function ArticleSinglePage({ article_id }) {
  return (
    <div>
      <ArticleSingleBody article_id={article_id} />
      <CommentList article_id={article_id} />
    </div>
  );
}
