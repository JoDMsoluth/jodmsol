import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { loadSeriesPosts, unloadSeries } from 'modules/stores/series';
import { useDispatch, useSelector } from 'react-redux';
import SeriesView from 'components/blog/post/SeriesView';

const SeriesViewContainer = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { seriesPosts, seriesError, loading } = useSelector(
    ({ series, loading }) => ({
      seriesPosts: series.seriesPosts,
      seriesError: series.seriesError,
      loading: loading['LOAD_SERIES_POSTS'],
    }),
  );

  useEffect(() => {
    dispatch(loadSeriesPosts(id));
    return () => {
      dispatch(unloadSeries());
    };
  }, [dispatch, id]);

  console.log(seriesPosts, 'seriesPosts');
  if (seriesError) {
    console.log('seriesPosts is not exist');
  }
  if (loading || !seriesPosts) {
    return null;
  }
  return (
    <>
      <SeriesView
        seriesPosts={seriesPosts}
        loading={loading}
        seriesError={seriesError}
      />
    </>
  );
};

export default withRouter(SeriesViewContainer);
