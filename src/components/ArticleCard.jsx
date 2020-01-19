import React from "react";
import { Link } from "@reach/router";
import VoteBar from "./VoteBar";
import moment from "moment";
// import "moment-timezone";

export default function ArticleCard({ article }) {
  const { article_id, title, author, votes, topic, created_at, comment_count } = article;

  const formattedDate = moment(created_at).format("MMM Do YYYY");

  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h5>
          <b>{title} </b>
        </h5>
        <ul list-style-type="none">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>  
        <p>
          <i> author:</i> {author} - \<i> topic:</i> {topic} - <i> posted:</i>{" "}
          {formattedDate} <i> Comment count: {comment_count}</i>:
        </p>
      </Link>
      <VoteBar article_id={article_id} votes={votes} />
    </div>
  );
}
