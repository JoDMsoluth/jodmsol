import client from "./axiosSetting";
import qs from "qs";

export const addPostApi = ({
  title,
  markdown,
  tags,
  category,
  series,
  coverImg
}) =>
  client.post("api/blog/post/add", {
    title,
    markdown,
    tags,
    category,
    series,
    coverImg
  });

export const loadPostApi = id => client.get(`api/blog/post/load/${id}`);

export const updatePostApi = ({
  id,
  title,
  markdown,
  tags,
  category,
  series,
  coverImg
}) =>
  client.patch(`api/blog/post/update/${id}`, {
    title,
    markdown,
    tags,
    category,
    series,
    coverImg
  });

export const deletePostApi = id => client.delete(`api/blog/post/delete/${id}`);

export const likePostApi = () => client.get(`api/blog/post/like`);
export const unlikePostApi = () => client.get(`api/blog/post/unlike`);
