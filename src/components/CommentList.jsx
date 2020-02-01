import React, { Component } from "react";
import * as api from "../Api";
import AddCommentBar from "./AddCommentBar";
import CommentCard from "./CommentCard";

export default class CommentList extends Component {
  state = {
    comments: [{ body: "" }],
    isLoading: true
  };

  render() {
    const { article_id, currentUser } = this.props;
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="comments-container">
        <AddCommentBar
          article_id={article_id}
          addComment={this.addComment}
          currentUser={currentUser}
        />
        <p>Comments list </p>

        {this.state.comments.map(comment => {
          return (
            <div class="comment-cards-container">
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                deleteComment={this.deleteComment}
                patchCommentVote={this.patchCommentVote}
                currentUser={currentUser}
              />
            </div>
          );
        })}
      </div>
    );
  }

  addComment = ({ comment }) => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  deleteComment = data => {
    this.setState(currentState => {
      const filteredComments = currentState.comments.filter(
        comment => comment.comment_id !== data
      );

      return { comments: filteredComments };
    });
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    const { article_id } = this.props;

    api
      .getArticleComments(article_id)
      .then(response =>
        this.setState({ comments: response.data.comments, isLoading: false })
      )
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        });
      });
  }
}
