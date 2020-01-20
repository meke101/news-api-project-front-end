import React, { Component } from "react";
import Like from "../Like.png";
import Dislike from "../Dislike.png";
import { updateCommentVote, updateArticleVote } from "../Api";

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
            this.patchVote("up");
          }}
        >
          <img alt="like-button" src={Like} width="20px" height="20px"></img>
        </button>

        <button
          disabled={likeBtnClicked}
          onClick={() => {
            this.patchVote("down");
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

    // if (voteDirection === true) {
    //   newVote.inc_votes = 1;
    // } else newVote.inc_votes = -1;

    if (likeBtnClicked === false && voteDirection === "up") {
      newVote.inc_votes = 1;
    } else if (likeBtnClicked === true && voteDirection === "up") {
      newVote.inc_votes = -1;
    } else if (dislikeBtnClicked === false && voteDirection === "down") {
      newVote.inc_votes = -1;
    } else if (dislikeBtnClicked === true && voteDirection === "down") {
      newVote.inc_votes = 1;
    }

    // if (dislikeBtnClicked === false && voteDirection === "down") {
    //   newVote.inc_votes = -1;
    // } else newVote.inc_votes = 1;
    if (voteDirection === "up") {
      this.setState(currentState => {
        return {
          likeBtnClicked: !currentState.likeBtnClicked,
          voteDifference: currentState.voteDifference + newVote.inc_votes
        };
      });
    }

    if (voteDirection === "down") {
      this.setState(currentState => {
        return {
          dislikeBtnClicked: !currentState.dislikeBtnClicked,
          voteDifference: currentState.voteDifference + newVote.inc_votes
        };
      });
    }

    const { comment_id, article_id } = this.props;

    if (comment_id) {
      updateCommentVote(comment_id, newVote);
    } else {
      updateArticleVote(article_id, newVote);
    }
  };
}
