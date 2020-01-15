import React, { Component } from "react";
import axios from "axios";
import AddCommentBar from "./AddCommentBar";
import CommentCard from "./CommentCard";

export default class CommentList extends Component {
  state = {
    comments: [{ body: "no comments" }],
    isLoading: true
  };

  render() {
    const { article_id } = this.props;
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <AddCommentBar article_id={article_id} addComment={this.addComment} />
        <p>Comments list</p>
        <ul>
          {this.state.comments.map(comment => {
            // return <li key={comment.comment_id}>{comment.body}</li>;
            return (
              <li key={comment.comment_id}>
                {" "}
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  deleteComment={this.deleteComment}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  //render
  addComment = ({ comment }) => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  deleteComment = data => {
    // ['a','b','c']
    // 'b'
    console.log("delete comment - commentLIst");
    console.log(">>>>delRenProp>>>", data);
    this.setState(currentState => {
      const filteredComments = currentState.comments.filter(
        comment => comment.comment_id !== data
      );
      console.log(filteredComments, "FITL");

      return { comments: filteredComments };
    });
  };

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
