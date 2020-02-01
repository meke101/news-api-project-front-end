import React, { Component } from "react";
import * as api from "../Api";

export default class AddCommentBar extends Component {
  state = {
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
    const { text } = this.state;
    const { article_id, currentUser } = this.props;
    const newComment = { username: currentUser, body: text };
    if (newComment.body.length > 0) {
      api
        .addCommentByArticleId(article_id, newComment)
        .then(({ data }) => this.props.addComment(data));
    }
  }
}
