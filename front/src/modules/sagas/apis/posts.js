import client from "./axiosSetting";
import qs from "qs";

export const loadPostsApi = ({
  latest,
  parpular,
  category,
  series,
  tag,
  page,
  filter
}) => {
  const queryString = qs.stringify({
    latest,
    parpular,
    series,
    tag,
    page
  });
  console.log("queryString", queryString);
  return client.get(`api/posts/load/${category}/${filter}?${queryString}`);
};
