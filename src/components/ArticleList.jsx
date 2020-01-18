import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import TopicSearchBar from "./TopicSearchBar";
import SortBar from "./SortBar";
import ErrorPage from "./ErrorPage";

export default class ArticleList extends Component {
  state = { articles: [], isLoading: true, err: null };
  render() {
    const { err } = this.state;
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    if (err) {
      return <ErrorPage {...err} />;
    }
    return (
      <div class="wrapper">
        <div>
          <TopicSearchBar articleListRerender={this.articleListRerender} />
          <SortBar articleListRerender={this.articleListRerender} />
          <h4>Article List</h4>

          <div class="article-cards-container">
            {this.state.articles.map(article => {
              return (
                // <div class="article-card">

                <ArticleCard key={article.article_id} article={article} />
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  articleListRerender = articles => {
    if (articles) {
      this.setState({ articles: articles });
    } else this.setState({ err: 404 });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    return axios
      .get("https://amelias-news-api.herokuapp.com/api/articles")
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
