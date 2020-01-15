import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";
import TopicSearchBar from "./TopicSearchBar";

export default function HomePage() {
  return (
    <div>
      <h1 id="ArticlesTitle">Welcome to our list of articles</h1>

      {/* <TopicSearchBar /> */}
      <ArticleList />
    </div>
  );
}
