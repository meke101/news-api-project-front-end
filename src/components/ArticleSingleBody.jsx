import React, { Component } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import ErrorPage from "./ErrorPage";
import VoteBar from "./VoteBar";
import * as api from "../Api";
import CommentList from "./CommentList";

export default class ArticleSingleBody extends Component {
  state = {
    body: { body: "" },
    isLoading: true,
    err: null
  };

  render() {
    if (this.state.err !== null) {
      return (
        <div>
          <ErrorPage
            default
            status={this.state.err.status}
            msg={this.state.err.msg}
          />
        </div>
      );
    }

    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    const { title, body, topic, author, votes } = this.state.article;

    return (
      <article className="singleArticleBox">
        <div class="singleArticleBox-column-left">
          <h3> {title}</h3>
          <p>
            <b>Topic: </b> <i> {topic} </i>, <b>Author: </b> <i> {author} </i>
          </p>
          <p> {body}</p>
          <VoteBar article_id={this.props.article_id} votes={votes} />
          <CommentList
            article_id={this.props.article_id}
            currentUser={this.props.currentUser}
          />
        </div>
      </article>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    const { article_id } = this.props;
    api
      .getArticlesById(article_id)
      .then(response =>
        this.setState({ article: response.data.article, isLoading: false })
      )
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        });
      });
  }
}
