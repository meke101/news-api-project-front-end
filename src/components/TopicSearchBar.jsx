import React, { Component } from "react";
import axios from "axios";

export default class TopicSearchBar extends Component {
  state = {
    topicSearch: "",
    isLoading: true
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
      .then(response =>
       

        this.props.topicFetcher(response.data.articles)
      );
  }
}
