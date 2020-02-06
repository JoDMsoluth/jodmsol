import React from 'react';
import styled from 'styled-components';
import MarkdownRender from 'components/common/markdown/MarkdownRender';
import palette from 'lib/styles/palette';
import thumbnail from 'statics/images/kickVillageProject.PNG';
import SeriesPostsList from '../postsList/SereisPostsList';
import PostToc from './PostToc';

export default function SeriesView({
  toc,
  onSetToc,
  seriesPosts,
  seriesError,
  loading,
}) {
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
}

const SeriesViewWrap = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem 20rem;
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
