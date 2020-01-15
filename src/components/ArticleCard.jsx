import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard({ article }) {
  const { article_id } = article;
  // console.log(article_id);

  return (
    <div>
      <Link to={`/articles/${article_id}`}>
        <h4>Article Card - {article.title}</h4>
      </Link>
    </div>
  );
}
