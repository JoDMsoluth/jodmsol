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
  client.post("api/post/add", {
    title,
    markdown,
    tags,
    category,
    series,
    coverImg
  });

export const loadPostApi = id => client.get(`api/post/load/${id}`);

export const updatePostApi = ({
  id,
  title,
  markdown,
  tags,
  category,
  series,
  coverImg
}) =>
  client.patch(`api/post/update/${id}`, {
    title,
    markdown,
    tags,
    category,
    series,
    coverImg
  });

export const deletePostApi = id => client.delete(`api/post/delete/${id}`);

export const likePostApi = () => client.get(`api/post/like`);
export const unlikePostApi = () => client.get(`api/post/unlike`);
