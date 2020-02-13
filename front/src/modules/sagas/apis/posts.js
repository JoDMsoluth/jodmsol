import qs from 'qs';
import client from './axiosSetting';

export const loadPostsApi = ({ category, tag, page, filter }) => {
  const queryString = qs.stringify({
    tag,
    page,
  });
  if (filter)
    return client.get(
      `api/blog/posts/load/${category}/${filter}?${queryString}`,
    );
  return client.get(`api/blog/posts/load/${category}?${queryString}`);
};

export const loadHashtagsApi = ({ category, page }) => {
  const queryString = qs.stringify({
    page,
  });
  return client.get(`api/blog/posts/load/${category}/tags?${queryString}`);
};

export const loadPostsInSeriesApi = ({ id, category, page }) => {
  const queryString = qs.stringify({
    page,
    id,
  });
  return client.get(`api/blog/posts/load/${category}/series?${queryString}`);
};

export const loadPostsInTagApi = ({ category, page, tag }) => {
  const queryString = qs.stringify({
    page,
  });
  return client.get(
    `api/blog/posts/load/${category}/tags/${tag}?${queryString}`,
  );
};

export const searchPostsApi = ({ category, filter, q, page }) => {
  const queryString = qs.stringify({
    q,
    page,
  });
  return client.get(
    `api/blog/posts/search/${category}/${filter}?${queryString}`,
  );
};
