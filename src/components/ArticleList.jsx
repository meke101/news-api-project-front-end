import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import TopicSearchBar from "./TopicSearchBar";
import SortBar from "./SortBar";

export default class ArticleList extends Component {
  state = { articles: [], isLoading: true };
  render() {
    console.log(this.state.articles);
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <TopicSearchBar topicFetcher={this.topicFetcher} />
        <h3>SortBar</h3>
        <SortBar topicFetcher={this.topicFetcher} />
        <h2>Article List</h2>
        <ul>
          {this.state.articles.map(article => {
            // return <li key={article.article_id}>{article.title}</li>;
            return (
              <li key={article.article_id}>
                {" "}
                <ArticleCard key={article.article_id} article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  topicFetcher = articles => {
    this.setState({ articles: articles });
  };

  componentDidMount() {
    console.log("comp did mount- article list");
    this.fetchArticles();
    // this.topicFetcher();
  }

  fetchArticles() {
    console.log("fetch art");
    return axios
      .get("https://amelias-news-api.herokuapp.com/api/articles")
      .then(response =>
        this.setState({ articles: response.data.articles, isLoading: false })
      );
  }
}
