import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

import { Router } from "@reach/router";
import HomePage from "./components/HomePage";
import ArticleSinglePage from "./components/ArticleSinglePage";
import CommentSinglePage from "./components/CommentSinglePage";
import ErrorPage from "./components/ErrorPage";

export default class App extends Component {
  state = {
    error: null
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <HomePage path="/" />
          <HomePage path="/articles" />
          <ArticleSinglePage path="/articles/:article_id" />
          <ArticleSinglePage path="/articles/:article_id/comments/" />
          <CommentSinglePage path="/comments/:comment_id" />
          <ErrorPage status={404} msg={"Page not found"} default />
        </Router>
      </div>
    );
  }
}
