import axios from "axios";

// const baseURL = "`https://amelias-news-api.herokuapp.com/api";

export const getArticleComments = article_id => {
  return axios.get(
    `https://amelias-news-api.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const addCommentByArticleId = (article_id, newComment) => {
  return axios.post(
    `https://amelias-news-api.herokuapp.com/api/articles/${article_id}/comments`,
    newComment
  );
};

export const getArticleList = () => {
  return axios.get("https://amelias-news-api.herokuapp.com/api/articles");
};

export const getArticlesById = article_id => {
  return axios.get(
    `https://amelias-news-api.herokuapp.com/api/articles/${article_id} `
  );
};

export const deleteCommentById = comment_id => {
  return axios.delete(
    `https://amelias-news-api.herokuapp.com/api/comments/${comment_id}`
  );
};

export const sortArticles = sort => {
  return axios.get(
    `https://amelias-news-api.herokuapp.com/api/articles?`,
    sort
  );
};

export const filterArticles = params => {
  return axios.get(
    `https://amelias-news-api.herokuapp.com/api/articles?`,
    params
  );
};

export const updateCommentVote = (comment_id, newVote) => {
  return axios.patch(
    `https://amelias-news-api.herokuapp.com/api/comments/${comment_id}`,
    newVote
  );
};

export const updateArticleVote = (article_id, newVote) => {
  return axios.patch(
    `https://amelias-news-api.herokuapp.com/api/articles/${article_id}`,
    newVote
  );
};


