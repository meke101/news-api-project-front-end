import React from "react";
import ArticleList from "./ArticleList";

export default function HomePage() {
  return (
    <div class="homepage-container">
      <h2 id="ArticlesTitle">Welcome to our splendid list of articles!</h2>

      <ArticleList />
    </div>
  );
}
