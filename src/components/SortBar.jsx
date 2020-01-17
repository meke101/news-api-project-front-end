import React, { Component } from "react";
import axios from "axios";

// export default function SortBar({ articleListRerender }) {
export default class SortBar extends Component {
  state = {
    sortBy: ""
  };

  sortArticles = sortBy => {
    console.log(sortBy);
    console.log(this.state.sortBy, "SATATE");
    if (this.state.sortBy !== sortBy) {
      return axios
        .get(`https://amelias-news-api.herokuapp.com/api/articles?`, {
          params: {
            sort_by: sortBy
          }
        })
        .then(response =>
          this.props.articleListRerender(response.data.articles)
        );
    }
  };

  render() {
    return (
      <div>
        <p>Sort By</p>
        <ul>
          <button
            id="DateSort"
            onClick={() => {
              this.setState({ sortBy: "created_at" });
              this.sortArticles("created_at");
            }}
          >
            Date
          </button>

          <button
            id="CommentCountSort"
            onClick={() => {
              this.setState({ sortBy: "comment_count" });
              this.sortArticles("comment_count");
            }}
          >
            Comment Count
          </button>

          <button
            id="VoteSort"
            onClick={() => {
              this.setState({ sortBy: "votes" });
              this.sortArticles("votes");
            }}
          >
            Vote
          </button>
        </ul>
      </div>
    );
  }
}
