import React from "react";
import axios from "axios";

export default function SortBar({ topicFetcher }) {
  console.log({ topicFetcher }, "PPPP");
  const sortArticles = sortBy => {
    console.log(sortBy, "THIS SORTBY");
    return axios
      .get(`https://amelias-news-api.herokuapp.com/api/articles?`, {
        params: {
          sort_by: sortBy
        }
      })
      .then(response => topicFetcher(response.data.articles));
  };
  return (
    <div>
      <p>Sort By</p>
      <ul>
        <button
          id="DateSort"
          onClick={() => {
            sortArticles("created_at");
          }}
        >
          Date
        </button>

        <button
          id="CommentCountSort"
          onClick={() => {
            sortArticles("comment_count");
          }}
        >
          Comment Count
        </button>

        <button
          id="VoteSort"
          onClick={() => {
            sortArticles("votes");
          }}
        >
          Vote
        </button>
      </ul>
    </div>
  );
}
