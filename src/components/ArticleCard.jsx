import React from "react";
import { Link } from "@reach/router";
import VoteBar from "./VoteBar";


export default function ArticleCard({ article }) {
  const { article_id, title, author, votes, topic } = article;
  // console.log(article_id);

  return (
    <div>
      <Link to={`/articles/${article_id}`}>
        <h4>
          Article Card - {title} - {author} - {topic} - {votes} :
        </h4>
      </Link>
        <VoteBar article_id={article_id}/>
    </div>
  );
}
