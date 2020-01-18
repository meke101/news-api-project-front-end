import React, { Component } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";

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
        <Link to={`/articles/`}>
          <button>Home</button>
        </Link>
        <h3> {title}</h3>
        <p> Topic: {topic}</p>
        <p> {body}</p>
        <p> {author}</p>
        <p> Votes: {votes}</p>
      </article>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    const { article_id } = this.props;
    return axios
      .get(`https://amelias-news-api.herokuapp.com/api/articles/${article_id} `)
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
