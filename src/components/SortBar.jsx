import React, { Component } from "react";
import * as api from "../Api";

export default class SortBar extends Component {
  state = {
    sortBy: "",
  };

  sortArticles = sortBy => {
    const sort = {
      params: {
        sort_by: sortBy
      }
    };
    api
      .sortArticles(sort)
      .then(response => this.props.displayNewArticles(response.data.articles));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortBy !== prevState.sortBy) {
      this.sortArticles(this.state.sortBy);
    }
  }

  render() {
    return (
      <div class="sort-by-container">
        <h2> Articles: </h2>
        
          <label className="sort-button-container">
            {" "}
            Sort by:
            <button
              focus
              id="DateSort"
              onClick={() => {
                this.setState({ sortBy: "created_at" });
              }}
            >
              Date
            </button>
            <button
              id="CommentCountSort"
              onClick={() => {
                this.setState({ sortBy: "comment_count" });
              }}
            >
              Comment Count
            </button>
            <button
              id="VoteSort"
              onClick={() => {
                this.setState({ sortBy: "votes" });
              }}
            >
              Vote
            </button>
          </label>
        
      </div>
    );
  }
}
