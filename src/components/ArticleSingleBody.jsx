import React, { Component } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import ErrorPage from "./ErrorPage";
import VoteBar from "./VoteBar";
import * as api from "../Api";

export default class ArticleSingleBody extends Component {
  state = {
    body: { body: "" },
    isLoading: true,
    err: null
  };

  render() {
    console.log(this.state.err, "EEEERRRRR");
    if (this.state.err !== null) {
      return (
        <div>
          <Router>
            <ErrorPage
              default
              status={this.state.err.status}
              msg={this.state.err.msg}
            />
          </Router>
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
          <p> Topic: {topic}</p>
          <p> {body}</p>
          <p> {author}</p>
        </div>
        <div class="singleArticleBox-column-right">
          <VoteBar article_id={this.props.article_id} votes={votes} />
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
