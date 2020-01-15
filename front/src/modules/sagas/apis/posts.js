import client from "./axiosSetting";
import qs from "qs";

export const addPostApi = ({ title, markdown, tags }) =>
  client.post("api/post/add", { title, markdown, tags });

export const loadPostApi = id => client.get(`api/post/load/${id}`);

export const updatePostApi = ({ id, title, markdown, tags }) =>
  client.patch(`api/post/update/${id}`, { title, markdown, tags });

export const deletePostApi = id => client.delete(`api/post/delete/${id}`);

export const loadPostsApi = ({ page, tag }) => {
  const queryString = qs.stringify({
    page
  });
  return client.get(`api/posts/load?${queryString}`);
};

export const likePostApi = () => client.get(`api/post/like`);
export const unlikePostApi = () => client.get(`api/post/unlike`);
