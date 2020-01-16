import React, { useEffect } from "react";
import { loadPosts, unloadPosts } from "modules/stores/posts";
import { useDispatch, useSelector } from "react-redux";
import BlogContent from "components/blog/postsList";
import qs from "qs";
import { withRouter } from "react-router-dom";

const PostsListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, postError, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    postError: posts.postError,
    loading: loading["LOAD_POST"]
  }));

  useEffect(() => {
    const { tag, page, series, latest, popular } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    const { category, filter } = match.params;
    console.log(
      "tag, page, latest, popular, category, filter",
      tag,
      page,
      series,
      latest,
      popular,
      category,
      filter
    );
    dispatch(
      loadPosts({
        tag,
        page,
        category,
        series,
        latest,
        popular,
        filter
      })
    );
    return () => {
      dispatch(unloadPosts());
    };
  }, [dispatch, location.search, match.params]);

  return (
    <>
      <BlogContent posts={posts} loading={loading} postError={postError} />
    </>
  );
};

export default withRouter(PostsListContainer);
