import client from "./axiosSetting";
import qs from "qs";

export const loadPostsApi = ({ category, tag, page, filter }) => {
  const queryString = qs.stringify({
    tag,
    page
  });
  if (filter)
    return client.get(
      `api/blog/posts/load/${category}/${filter}?${queryString}`
    );
  return client.get(`api/blog/posts/load/${category}?${queryString}`);
};

export const loadHashtagsApi = ({ category, page }) => {
  const queryString = qs.stringify({
    page
  });
  return client.get(`api/blog/posts/load/${category}/tags?${queryString}`);
};

export const loadPostsInSeriesApi = ({ category, page, id }) => {
  const queryString = qs.stringify({
    page
  });
  return client.get(
    `api/blog/posts/load/${category}/series/${id}?${queryString}`
  );
};

export const loadPostsInTagApi = ({ category, page, tag }) => {
  const queryString = qs.stringify({
    page
  });
  return client.get(
    `api/blog/posts/load/${category}/tags/${tag}?${queryString}`
  );
};
