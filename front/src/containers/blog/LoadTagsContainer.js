import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { loadHashtags, unloadHashtags } from "modules/stores/hashtags";
import TagsCardList from "components/blog/postsList/TagsCardList";
import Pagination from "components/common/pagination/Pagination";

const LoadtagsContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { tags, tagsError, loading, lastPage } = useSelector(
    ({ hashtags, loading }) => ({
      tags: hashtags.tags,
      tagsError: hashtags.tagsError,
      loading: loading["LOAD_HASHTAGS"],
      lastPage: hashtags.lastPage
    })
  );

  const { page, tag } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
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

export default withRouter(LoadtagsContainer);
