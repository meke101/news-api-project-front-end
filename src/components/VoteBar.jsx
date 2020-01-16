import React, { Component } from "react";
import axios from "axios";

export default class VoteBar extends Component {
  state = {
    clicked: false,
    voteDifference: 0
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, "PREVPROP");
    console.log(this.props);
    if (!(this.props === prevProps)) {
      this.setState({ voteDifference: 0 });
    }
  }

  render() {
    const { votes } = this.props;
    const { voteDifference } = this.state;
    console.log("votes", votes, "+", voteDifference);
    return (
      <div>
        <p>Likes: {votes + voteDifference} </p>
        <button
          id="Like"
          onClick={() => {
            this.patchVote(1);
          }}
        >
          Like
        </button>

        <button
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
    console.log(article_id, "VOTE BAR");
    const { clicked } = this.state;
    console.log(clicked, "STATE");

    if (comment_id) {
      return axios
        .patch(
          `https://amelias-news-api.herokuapp.com/api/comments/${comment_id}`,
          newVote
        )
        .then(() => console.log("patched comment vote"));
    } else if (article_id) {
      return axios
        .patch(
          `https://amelias-news-api.herokuapp.com/api/articles/${article_id}`,
          newVote
        )
        .then(res => console.log(res.data));
    }
  };
}
