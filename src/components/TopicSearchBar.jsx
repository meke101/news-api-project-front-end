import React, { Component } from "react";
import axios from "axios";

export default class TopicSearchBar extends Component {
  state = {
    topicSearch: "",
    isLoading: true,
    err: null
  };

  render() {
    if (this.state.err !== null) {
      return (
        <div>
          <p> Topic not found </p>
        </div>
      );
    }
    return (
      <div className="topic-search-bar-container">
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
            ></input>
            <button>Search</button>
          </div>
        </form>
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

    return axios
      .get(`https://amelias-news-api.herokuapp.com/api/articles?`, {
        params: {
          topic: topicSearch
        }
      })
      .then(response => this.props.articleListRerender(response.data.articles))
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        });
      });
  }
}
