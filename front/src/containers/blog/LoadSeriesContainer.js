import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { loadSeries, unloadSeries } from 'modules/stores/series';
import SeriesCardList from 'components/blog/postsList/SeriesCardList';
import Pagination from 'components/common/pagination/Pagination';

const LoadSeriesContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { series, seriesError, loading, lastPage } = useSelector(
    ({ series, loading }) => ({
      series: series.series,
      seriesError: series.seriesError,
      loading: loading['LOAD_ALL_SERIES'],
      lastPage: series.lastPage,
    }),
  );

  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { category, filter } = match.params;
  useEffect(() => {
    console.log('tag, page, latest, popular, category, filter', page, category);
    dispatch(
      loadSeries({
        page,
        category,
      }),
    );
    return () => {
      dispatch(unloadSeries());
    };
  }, [dispatch, location.search, match.params]);

  return (
    <>
      <SeriesCardList
        series={series}
        loading={loading}
        seriesError={seriesError}
      />
      <Pagination
        page={parseInt(page, 10)}
        lastPage={parseInt(lastPage, 10)}
        category={category}
        filter={filter}
      />
    </>
  );
};

export default withRouter(LoadSeriesContainer);
