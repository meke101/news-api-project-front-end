import React from "react";
import ArticleSingleBody from "./ArticleSingleBody";

import ArticleCommentsBar from "./ArticleCommentsBar";

export default function ArticleSinglePage({ article_id }) {
  // console.log(props);
  return (
    <div>
      <h2>ARTICLE SINGLE P</h2>
      <ArticleSingleBody article_id={article_id} />
      <ArticleCommentsBar article_id={article_id} />
    </div>
  );
}
