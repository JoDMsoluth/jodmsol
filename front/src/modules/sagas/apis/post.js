import client from './axiosSetting';

export const addPostApi = ({ title, markdown, tags, category, coverImg, id }) =>
  client.post(`api/blog/post/add/${category}/${id}`, {
    title,
    markdown,
    tags,
    coverImg,
  });

export const loadPostApi = id => client.get(`api/blog/post/load/${id}`);

export const updatePostApi = ({
  id,
  title,
  markdown,
  tags,
  category,
  series,
  coverImg,
}) =>
  client.patch(`api/blog/post/update/${id}`, {
    title,
    markdown,
    tags,
    category,
    series,
    coverImg,
  });

export const deletePostApi = id => client.delete(`api/blog/post/delete/${id}`);

export const likePostApi = id =>
  client.patch(`api/blog/post/like/${id}`, null, { withCredentials: true });
export const unlikePostApi = id =>
  client.patch(`api/blog/post/unlike/${id}`, null, { withCredentials: true });

export const uploadImgApi = ({ imageFormData }) => {
  return client.post(`api/blog/post/images`, imageFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
