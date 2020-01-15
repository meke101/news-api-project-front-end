import React, { Component } from "react";
import axios from "axios";

export default class CommentList extends Component {
  state = {
    comments: [{ body: "no comments" }],
    isLoading: true
  };

  render() {
     if (this.state.isLoading) {
       return <p>Loading...</p>;
     }
    return (
      <div>
        <p>Comments list</p>
        <ul>
          {this.state.comments.map(comment => {
            return <li key={comment.comment_id}>{comment.body}</li>;
          })}
        </ul>
      </div>
    );
  }
  
  componentDidMount() {
    console.log("comp did mount comments");
    this.fetchComments();
  }
  
  fetchComments() {
    const { article_id } = this.props;
    return axios
      .get(
        `https://amelias-news-api.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(response =>
        this.setState({ comments: response.data.comments, isLoading: false })
      );
  }
}
