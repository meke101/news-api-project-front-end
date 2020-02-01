import axios from "axios";

const baseURL = "https://amelias-news-api.herokuapp.com/api";

export const getArticleComments = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`);
};

export const addCommentByArticleId = (article_id, newComment) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`, newComment);
};

export const getArticleList = () => {
  return axios.get(`${baseURL}/articles`);
};

export const getArticlesById = article_id => {
  return axios.get(`${baseURL}/articles/${article_id} `);
};

export const deleteCommentById = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const sortArticles = sort => {
  return axios.get(`${baseURL}/articles?`, sort);
};

export const filterArticles = params => {
  return axios.get(`${baseURL}/articles?`, params);
};

export const updateCommentVote = (comment_id, newVote) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, newVote);
};

export const updateArticleVote = (article_id, newVote) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, newVote);
};
