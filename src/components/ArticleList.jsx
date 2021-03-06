import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import TopicSearchBar from "./TopicSearchBar";
import SortBar from "./SortBar";
import ErrorPage from "./ErrorPage";
import * as api from "../Api";

export default class ArticleList extends Component {
  state = { articles: [], isLoading: true, err: null };
  if(err) {
    return <ErrorPage {...this.state.err} />;
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div class="wrapper">
        <TopicSearchBar displayNewArticles={this.displayNewArticles} />
        <SortBar displayNewArticles={this.displayNewArticles} />

        <div class="article-cards-container">
          {this.state.articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </div>
      </div>
    );
  }

  displayNewArticles = articles => {
    if (articles) {
      this.setState({ articles: articles });
    } else this.setState({ err: 404 });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    api
      .getArticleList()
      .then(response =>
        this.setState({ articles: response.data.articles, isLoading: false })
      )
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.msg },
          isLoading: false
        });
      });
  }
}
