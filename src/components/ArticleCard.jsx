import React from "react";
import { Link } from "@reach/router";
import VoteBar from "./VoteBar";
import moment from "moment";
// import "moment-timezone";

export default function ArticleCard({ article }) {
  const { article_id, title, author, votes, topic, created_at } = article;

  const formattedDate = moment(created_at).format("MMM Do YYYY");
  console.log(formattedDate);

  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <p>
          <b>{title} </b> - <i> author:</i> {author} - <i> topic:</i> {topic} - <i> posted:</i> {formattedDate} :
        </p>
      </Link>
      <VoteBar article_id={article_id} votes={votes} />
    </div>
  );
}
