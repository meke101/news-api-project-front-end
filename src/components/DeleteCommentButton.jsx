import React, { Component } from "react";
import * as api from "../Api";

export default class DeleteCommentButton extends Component {
  state = {
    deleteBtnActive: false
  };

  render() {
    const { deleteBtnActive } = this.state;
    return (
      <div>
        <button onClick={this.handleDeleteClick} disabled={!deleteBtnActive}>
          Delete
        </button>
      </div>
    );
  }

  componentDidMount() {
    const { currentUser, author } = this.props;
    if (currentUser === author) {
      console.log("USER DELETEBERE");
      this.setState({ deleteBtnActive: true });
    }
  }

  handleDeleteClick = event => {
    const { comment_id, deleteComment, currentUser, author } = this.props;
    if (currentUser === author) {
      api
        .deleteCommentById(comment_id)
        .then(() => deleteComment(comment_id))
        .catch(err => {
          this.setState({
            err: { status: err.response.status, msg: err.response.data.msg },
            errMessage: `${currentUser}, you cannot delete ${author}'s comments!`
          });
        });
    }
  };
}
