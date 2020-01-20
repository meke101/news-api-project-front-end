import React, { Component } from "react";
import axios from "axios";
import Like from "../Like.png";
import Dislike from "../Dislike.png";
import { updateCommentVote, updateArticleVote } from "../Api";

export default class VoteBar extends Component {
  state = {
    btnClicked: true,
    voteDifference: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (!(this.props === prevProps)) {
      this.setState({ voteDifference: 0 });
    }
  }

  render() {
    const { votes } = this.props;
    const { voteDifference, btnClicked } = this.state;
    return (
      <div className="vote-options-container">
        <p>Likes: {votes + voteDifference} </p>

        <button
          class="vote-button"
          // disabled={btnClicked}
          onClick={() => {
            this.patchVote(btnClicked);
          }}
        >
          <img alt="like-button" src={Like} width="20px" height="20px"></img>
        </button>

        <button
        
          // disabled={btnClicked}
          onClick={() => {
            this.patchVote(!btnClicked);
          }}
        >
          <img
            alt="Dislike button"
            src={Dislike}
            width="20px"
            height="20px"
          ></img>
        </button>
      </div>
    );
  }
  patchVote = voteDirection => {
    const newVote = {
      inc_votes: 0
    };

    if (voteDirection === true) {
      newVote.inc_votes = 1;
    } else newVote.inc_votes = -1;

    this.setState(currentState => {
      return {
        btnClicked: !currentState.btnClicked,
        voteDifference: currentState.voteDifference + newVote.inc_votes
      };
    });

    const { comment_id, article_id } = this.props;

    if (comment_id) {
      updateCommentVote(comment_id, newVote);
    } else {
      updateArticleVote(article_id, newVote);
    }
  };
}
