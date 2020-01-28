import client from "./axiosSetting";

export const addCommentApi = ({ id, userId, password, content }) =>
  client.post(`api/blog/comments/add/${id}`, {
    userId,
    password,
    content
  });

export const loadCommentsApi = id => client.get(`api/blog/comments/load/${id}`);

export const updateCommentApi = ({ id, userId, password, content }) =>
  client.patch(`api/blog/comments/update/${id}`, { userId, password, content });

export const deleteCommentApi = ({ id, password }) =>
  client.delete(`api/blog/comments/delete/${id}`, { password });

export const addRecommentApi = ({ id, userId, password, content }) =>
  client.post(`api/blog/recomments/add/${id}`, {
    userId,
    password,
    content
  });

export const updateRecommentApi = ({ id, userId, password, content }) =>
  client.patch(`api/blog/recomments/update/${id}`, {
    userId,
    password,
    content
  });

export const deleteRecommentApi = ({ id, password }) =>
  client.delete(`api/blog/recomments/delete/${id}`, { password });
