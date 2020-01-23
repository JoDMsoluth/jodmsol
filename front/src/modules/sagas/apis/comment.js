import client from "./axiosSetting";

export const addCommentApi = ({ id, userId, password, content }) =>
  client.post(`api/blog/comments/add/${id}`, {
    userId,
    password,
    content
  });

export const loadCommentsApi = id => client.get(`api/blog/comments/load/${id}`);

export const updateCommentApi = ({ id, password, comment }) =>
  client.patch(`api/blog/comments/update/${id}`, { password, comment });

export const deleteCommentApi = ({ id, password }) =>
  client.delete(`api/blog/comments/delete/${id}`, { password });
