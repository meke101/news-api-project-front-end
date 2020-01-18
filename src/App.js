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
    error: null,
    currentUser: "grumpy19"
  };

  render() {
    return (
      <header class="header">
        <i>For people who love fake news...</i>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Router>
            <HomePage path="/" />
            <HomePage path="/articles" />
            <ArticleSinglePage
              currentUser={this.state.currentUser}
              path="/articles/:article_id"
            />
            <ArticleSinglePage
              currentUser={this.state.currentUser}
              path="/articles/:article_id/comments/"
            />
            <CommentSinglePage path="/comments/:comment_id" />
            <ErrorPage status={404} msg={"Page not found"} default />
          </Router>
        </div>
      </header>
    );
  }
}
