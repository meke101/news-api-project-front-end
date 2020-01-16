import React, { Component } from "react";
import axios from "axios";

export default class ArticleSingleBody extends Component {
  state = {
    body: { body: "" },
    isLoading: true
  };

  render() {
    // const { article_id } = this.props;
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    const { title, body, topic, author, votes } = this.state.article;

    return (
      <div className="singleArticleBox">
        <h3>Article single body</h3>
        <p> {title}</p>
        <p> {topic}</p>
        <p> {body}</p>
        <p> {author}</p>
        <p> {votes}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("comp did mount single article");
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
