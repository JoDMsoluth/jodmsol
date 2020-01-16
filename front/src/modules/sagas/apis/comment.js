import client from "./axiosSetting";

export const addCommentApi = ({ postId, userId, password, comment }) =>
  client.post(`api/comment/add/${postId}`, {
    userId,
    password,
    comment
  });

export const loadCommentsApi = postId =>
  client.get(`api/comment/load/${postId}`);

export const updateCommentApi = ({ commentId, password, comment }) =>
  client.patch(`api/comment/update/${commentId}`, { password, comment });

export const deleteCommentApi = ({ commentId, password }) =>
  client.delete(`api/comment/delete/${commentId}`, { password });
