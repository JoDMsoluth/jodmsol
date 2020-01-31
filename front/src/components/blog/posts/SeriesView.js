import React from "react";
import styled from "styled-components";
import MarkdownRender from "components/common/markdown/MarkdownRender";
import palette from "lib/styles/palette";
import thumbnail from "statics/images/kickVillageProject.PNG";

export default function SeriesView({ seriesPosts, seriesError, loading }) {
  console.log(seriesPosts, "seriesPosts");
  if (seriesError) {
    console.log("seriesPosts is not exist");
  }
  if (loading || !seriesPosts) {
    return null;
  }

  const { coverImg, title, markdown, desc } = seriesPosts;
  return (
    <SeriesViewWrap>
      <SeriesViewTitle>{title}</SeriesViewTitle>
      <Thumbnail coverImg={coverImg || thumbnail}></Thumbnail>
      <SeriesViewDesc>{desc}</SeriesViewDesc>
      <MarkdownRender markdown={markdown} />
    </SeriesViewWrap>
  );
}

const SeriesViewWrap = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.125rem;
`;
const Thumbnail = styled.div`
  width: 100%;
  background: url(${props => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
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
