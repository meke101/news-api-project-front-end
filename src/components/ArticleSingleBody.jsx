import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default class ArticleSingleBody extends Component {
  state = {
    body: { body: "" },
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    const { title, body, topic, author, votes } = this.state.article;

    return (
      <div className="singleArticleBox">
        <Link to={`/articles/`}>
          <button>Home</button>
        </Link>
        <h3> {title}</h3>
        <p> Topic: {topic}</p>
        <p> {body}</p>
        <p> {author}</p>
        <p> Votes: {votes}</p>
      </div>
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
      );
  }
}
