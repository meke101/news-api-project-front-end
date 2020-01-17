import React, { Component } from "react";
import axios from "axios";

export default class VoteBar extends Component {
  state = {
    clicked: false,
    voteDifference: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (!(this.props === prevProps)) {
      this.setState({ voteDifference: 0 });
    }
  }

  render() {
    const { votes } = this.props;
    const { voteDifference, clicked } = this.state;
    return (
      <div>
        <p>Likes: {votes + voteDifference} </p>
        <button
          disabled={clicked}
          id="Like"
          onClick={() => {
            this.patchVote(1);
          }}
        >
          Like
        </button>

        <button
          disabled={clicked}
          id="Dislike"
          onClick={() => {
            this.patchVote(-1);
          }}
        >
          Dislike
        </button>
      </div>
    );
  }
  patchVote = voteDirection => {
    const newVote = {
      inc_votes: voteDirection
    };

    this.setState(currentState => {
      return {
        clicked: true,
        voteDifference: currentState.voteDifference + voteDirection
      };
    });

    const { comment_id, article_id } = this.props;

    if (comment_id) {
      return axios.patch(
        `https://amelias-news-api.herokuapp.com/api/comments/${comment_id}`,
        newVote
      );
    } else if (article_id) {
      return axios.patch(
        `https://amelias-news-api.herokuapp.com/api/articles/${article_id}`,
        newVote
      );
    }
  };
}
