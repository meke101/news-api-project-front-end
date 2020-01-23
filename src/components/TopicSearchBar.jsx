import React, { Component } from "react";
import * as api from "../Api";

export default class TopicSearchBar extends Component {
  state = {
    topicSearch: "",
    isLoading: true,
    err: null,
    errMessage: ""
  };
  render() {
    return (
      <div className="topic-search-bar-container">
        <link
          href="https://fonts.googleapis.com/css?family=Trochut:400,700&display=swap"
          rel="stylesheet"
        ></link>

        <h1 className="articles-title">
          Welcome to our splendid list of articles!
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="topic-search-bar-row">
            <label>Enter a topic</label>
            <input
              id="topicInput"
              placeholder={"Enter topic..."}
              value={this.state.topicSearch}
              onChange={event => {
                this.handleChange(event.target.value);
              }}
              required
            />
            <button>Search</button>
          </div>
        </form>
        <p> {this.state.errMessage}</p>
      </div>
    );
  }

  handleChange = eventValue => {
    this.setState({ topicSearch: eventValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.filterByTopic();
    this.setState({ topicSearch: "" });
  };

  filterByTopic() {
    const { topicSearch } = this.state;
    const search = {
      params: {
        topic: topicSearch
      }
    };
    api
      .filterArticles(search)
      .then(response => {
        this.setState({ errMessage: "" });
        this.props.displayNewArticles(response.data.articles);
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false,
          errMessage: `No articles were found for "${topicSearch}", sorry!`
        });
      });
  }
}
