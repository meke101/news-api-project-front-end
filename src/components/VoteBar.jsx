import React, { Component } from "react";
import Like from "../Like.png";
import Dislike from "../Dislike.png";
import { updateVote } from "../Api";

export default class VoteBar extends Component {
  state = {
    likeBtnClicked: false,
    dislikeBtnClicked: false,
    voteDifference: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (!(this.props === prevProps)) {
      this.setState({ voteDifference: 0 });
    }
  }

  render() {
    const { votes } = this.props;
    const { voteDifference, likeBtnClicked, dislikeBtnClicked } = this.state;
    return (
      <div className="vote-options-container">
        <p>Likes: {votes + voteDifference} </p>

        <button
          class="vote-button"
          disabled={dislikeBtnClicked}
          onClick={() => {
            this.patchVote(1);
          }}
        >
          <img alt="like-button" src={Like} width="20px" height="20px"></img>
        </button>

        <button
          disabled={likeBtnClicked}
          onClick={() => {
            this.patchVote(-1);
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
    const { likeBtnClicked, dislikeBtnClicked } = this.state;
    const newVote = {
      inc_votes: 0
    };

    if (likeBtnClicked === false && voteDirection === 1) {
      newVote.inc_votes++;
    } else if (likeBtnClicked === true && voteDirection === 1) {
      newVote.inc_votes--;
    } else if (dislikeBtnClicked === false && voteDirection === -1) {
      newVote.inc_votes--;
    } else if (dislikeBtnClicked === true && voteDirection === -1) {
      newVote.inc_votes++;
    }

    if (voteDirection === 1) {
      this.setState(currentState => {
        return {
          likeBtnClicked: !currentState.likeBtnClicked,
          voteDifference: currentState.voteDifference + newVote.inc_votes
        };
      });
    }

    if (voteDirection === -1) {
      this.setState(currentState => {
        return {
          dislikeBtnClicked: !currentState.dislikeBtnClicked,
          voteDifference: currentState.voteDifference + newVote.inc_votes
        };
      });
    }

    const { id, type } = this.props;

    updateVote(id, newVote, type);
  };
}
