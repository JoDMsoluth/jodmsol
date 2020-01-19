import React from "react";
import SeriesCard from "./SeriesCard";
import styled from "styled-components";

export default function SeriesCardList({ series, seriesError, loading }) {
  if (seriesError) {
    console.log("post is not exist");
  }
  if (loading || !series) {
    return null;
  }
  return (
    <>
      <ContentContainer>
        {series.map(series => (
          <SeriesCard key={`${series.title}.${series._id}`} series={series} />
        ))}
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%
  padding: 0 8rem;
`;
