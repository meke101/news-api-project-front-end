import React, { Component } from "react";
import axios from "axios";

export default class AddCommentBar extends Component {
  state = {
    user: this.props.currentUser,
    text: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a Comment:
            <input
              placeholder={"Enter comment..."}
              value={this.state.text}
              onChange={event => {
                this.handleChange(event.target.value);
              }}
              required
            ></input>
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();

    this.addComment();
    this.setState({ text: "" });
  };

  handleChange = eventValue => {
    this.setState({ text: eventValue });
  };

  addComment() {
    const { user, text } = this.state;
    const { article_id } = this.props;
    const newComment = { username: user, body: text };
    if (newComment.body.length > 0) {
      return axios
        .post(
          `https://amelias-news-api.herokuapp.com/api/articles/${article_id}/comments`,
          newComment
        )
        .then(({ data }) => this.props.addComment(data));
    }
  }
}
