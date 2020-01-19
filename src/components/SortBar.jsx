import React, { Component } from "react";
import axios from "axios";
import * as api from "../Api";

export default class SortBar extends Component {
  state = {
    sortBy: ""
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
        <h4> Articles </h4>
        <div className="sort-button-container">
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
        </div>
      </div>
    );
  }
}
