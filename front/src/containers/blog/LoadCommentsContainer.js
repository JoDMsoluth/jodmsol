import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { loadHashtags, unloadHashtags } from "modules/stores/hashtags";
import TagsCardList from "components/blog/postsList/TagsCardList";
import Pagination from "components/common/pagination/Pagination";

const LoadCommentsContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { comments, commentsError, loading } = useSelector(
    ({ comments, loading }) => ({
      comments: comments.comments,
      commentError: comments.commentError,
      loading: loading["LOAD_COMMENTS"]
    })
  );

  const { category, filter } = match.params;
  useEffect(() => {
    dispatch(
      loadHashtags({
        tag,
        page,
        category
      })
    );
    return () => {
      dispatch(unloadHashtags());
    };
  }, [dispatch, location.search, match.params]);

  return (
    <>
      <TagsCardList tags={tags} loading={loading} tagsError={tagsError} />
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

export default withRouter(LoadCommentsContainer);
