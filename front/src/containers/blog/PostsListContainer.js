import React, { useEffect } from "react";
import { loadPosts, loadPostsInTag, unloadPosts } from "modules/stores/posts";
import { useDispatch, useSelector } from "react-redux";
import BlogContent from "components/blog/postsList";
import qs from "qs";
import { withRouter } from "react-router-dom";
import Pagination from "components/common/pagination/Pagination";

const PostsListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, postError, loading, lastPage } = useSelector(
    ({ posts, loading }) => ({
      posts: posts.posts,
      postError: posts.postError,
      loading: loading["LOAD_POSTS"],
      lastPage: posts.lastPage
    })
  );

  const { tag, id, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const { category, filter } = match.params;
  useEffect(() => {
    console.log(
      "tag, id, page, category, filter",
      tag,
      id,
      page,
      category,
      filter
    );
    if (tag) {
      dispatch(
        loadPostsInTag({
          tag,
          page,
          category
        })
      );
    } else {
      dispatch(
        loadPosts({
          tag,
          page,
          category,
          filter
        })
      );
    }

    return () => {
      dispatch(unloadPosts());
    };
  }, [dispatch, location.search, match.params]);

  return (
    <>
      <BlogContent posts={posts} loading={loading} postError={postError} />
      <Pagination
        page={parseInt(page, 10)}
        lastPage={parseInt(lastPage, 10)}
        tag={tag}
        category={category}
        filter={filter}
      />
    </>
  );
};

export default withRouter(PostsListContainer);
