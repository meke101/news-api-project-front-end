import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

export default class ArticleList extends Component {
  state = { articles: [], isLoading: true };
  render() {
    console.log(this.state.articles);
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h2>Article List</h2>
        <ul>
          {this.state.articles.map(article => {
            // return <li key={article.article_id}>{article.title}</li>;
            return (
              <li>
                {" "}
                <ArticleCard key={article.article_id} article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    console.log("comp did mount- article list");
    this.fetchArticles();
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
