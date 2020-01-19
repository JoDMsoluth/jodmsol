import React from "react";
import { withRouter } from "react-router-dom";
import Pagination from "components/common/pagination/Pagination";
import { useSelector } from "react-redux";
import qs from "qs";

const PaginationContainer = ({ location, match }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading["LOAD_POSTS"]
  }));
  if (!posts || loading) return null;

  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const { category, filter } = match.params;
  console.log("category", category);
  return (
    <Pagination
      tag={tag}
      category={category}
      filter={filter}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
