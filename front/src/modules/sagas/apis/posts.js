import client from "./axiosSetting";

export const addPostApi = ({ title, markdown, tags }) =>
  client.post("api/post/add", { title, markdown, tags });

export const loadPostApi = id => client.get(`api/post/load/${id}`);

export const updatePostApi = ({ id, title, markdown, tags }) =>
  client.patch(`api/post/update/${id}`, { title, markdown, tags });

export const deletePostApi = id => client.delete(`api/post/delete/${id}`);

export const loadPostsApi = () => client.get("api/posts/load");
