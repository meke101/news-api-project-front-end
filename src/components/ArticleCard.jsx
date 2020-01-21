import React from "react";
import { Link } from "@reach/router";
import VoteBar from "./VoteBar";
import moment from "moment";
// import "moment-timezone";

export default function ArticleCard({ article }) {
  const {
    article_id,
    title,
    author,
    votes,
    topic,
    created_at,
    comment_count
  } = article;

  const formattedDate = moment(created_at).format("MMM Do YYYY");

  return (
    <div className="article-card">
      <div className="article-card-contents">
        <Link to={`/articles/${article_id}`}>
          <h4>{title}</h4>
          <p>

            <i> Author: </i> {author} <br />
            <i> Topic: </i> {topic} <br />
            <i> Posted: </i> {formattedDate} <br />
            <i> Comment count: </i> {comment_count}:
          </p>
        </Link>
        <VoteBar article_id={article_id} votes={votes} />
      </div>
    </div>
  );
}
