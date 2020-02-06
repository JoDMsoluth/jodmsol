import React, { useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  loadSeriesPosts,
  unloadSeries,
  setSeriesToc,
  setSeriesActiveHeading,
} from 'modules/stores/series';
import { useDispatch, useSelector } from 'react-redux';
import throttle from 'lodash/throttle';

import styled from 'styled-components';
import MarkdownRender from 'components/common/markdown/MarkdownRender';
import palette from 'lib/styles/palette';
import thumbnail from 'statics/images/kickVillageProject.PNG';
import SeriesPostsList from 'components/blog/postsList/SereisPostsList';
import PostToc from 'components/blog/post/PostToc';

const SeriesViewContainer = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const dispatch = useDispatch();
  const { activeHeading, seriesPosts, seriesError, loading, toc } = useSelector(
    ({ series, loading }) => ({
      seriesPosts: series.seriesPosts,
      seriesError: series.seriesError,
      loading: loading['LOAD_SERIES_POSTS'],
      toc: series.toc,
      activeHeading: series.activeHeading,
    }),
  );
  const onSetToc = useCallback(toc => {
    dispatch(setSeriesToc(toc));
  });
  const onActiveHeading = throttle(id => {
    dispatch(setSeriesActiveHeading(id));
  }, 250);

  useEffect(() => {
    if (document.body && document.body.scrollTop) {
      document.body.scrollTop = 0;
    }
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
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
  console.log(seriesPosts, 'seriesPosts');
  if (seriesError) {
    console.log('seriesPosts is not exist');
  }
  if (loading || !seriesPosts) {
    return null;
  }

  const { coverImg, title, markdown, desc, posts, category } = seriesPosts;
  const seriesPost =
    posts.length > 5 ? posts.slice(0, 5) : posts.slice(0, posts.length);
  return (
    <SeriesViewWrap>
      <PostToc
        toc={toc}
        activeHeading={activeHeading}
        onActiveHeading={onActiveHeading}
      />
      <SeriesViewTitle>{title}</SeriesViewTitle>
      <Thumbnail src={coverImg || thumbnail} alt="coverImg"></Thumbnail>
      <SeriesViewDesc>{desc}</SeriesViewDesc>
      <MarkdownRender markdown={markdown} onSetToc={onSetToc} />
      <SeriesPostsList posts={seriesPost} category={category} />
    </SeriesViewWrap>
  );
};

export default SeriesViewContainer;

const SeriesViewWrap = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem 15rem;
  font-size: 1.125rem;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;
const SeriesViewTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray3};
`;
const SeriesViewDesc = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray3};
`;
