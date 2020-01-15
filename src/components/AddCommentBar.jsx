import React, { Component } from "react";
import axios from "axios";
import CommentList from "./CommentList";

export default class AddCommentBar extends Component {
  state = {
    currentArticle: "",
    user: "grumpy19",
    // newComment: null,
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
            ></input>
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(" add comment handle submit");
    // const { text } = this.state;
    // console.log(text, "<<<< second ");
    this.addComment();
  };

  handleChange = eventValue => {
    console.log("add comment handle change");
    this.setState({ text: eventValue });
    console.log(this.state.text, "first <<<<<");
  };

  addComment() {
    const { user, text } = this.state;
    const { article_id } = this.props;
    const newComment = { username: user, body: text };
    // console.log(newComment);
    // console.log(article_id);
    return axios
      .post(
        `https://amelias-news-api.herokuapp.com/api/articles/${article_id}/comments`,
        newComment
      )
      .then(({ data }) => this.props.addComment(data));
  }
}
