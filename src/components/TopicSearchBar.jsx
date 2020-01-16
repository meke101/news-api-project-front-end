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
    // const { topicSearch } = this.state;
    this.filterByTopic();
  };

  filterByTopic() {
    const { topicSearch } = this.state;
    console.log("filter");
    return axios
      .get(`https://amelias-news-api.herokuapp.com/api/articles?`, {
        params: {
          topic: topicSearch
        }
      })
      .then(response =>
        // this.setState({ articles: response.data.articles, isLoading: false }, () => { this.props} )

        this.props.topicFetcher(response.data.articles)
      );
  }
}

// handleChange = event => {
//   const { value } = event.target;
//   this.setState(currentState => {
//     console.log(currentState, value);
//     return { ...currentState, topicSearch: value };
//   });
//   // console.log(value);
// };

// handleSubmit = event => {
//   //prevents refresh
//   event.preventDefault();
//   // this.props.handleSubmit(this.state.search);
//   console.log(event, "<<<");
// };
