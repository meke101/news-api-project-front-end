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
    <div className={`article-card-${topic} article-card`}>
      <div className={`article-card-contents article-card-contents-${topic}`}>
        <Link to={`/articles/${article_id}`}>
          <h3>
            <b>{title}</b>
          </h3>
          <p>
            <b> Author: </b> <i> {author} </i>
            <br />
            <b> Topic: </b> <i>{topic} </i> <br />
            <b> Posted: </b> <i> {formattedDate} </i> <br />
            <b> Comment count: </b> <i>{comment_count}:</i>
          </p>
        </Link>
      </div>
      <VoteBar article_id={article_id} votes={votes} />
    </div>
  );
}
