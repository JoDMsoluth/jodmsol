import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SeriesCard from './SeriesCard';

export default function SeriesCardList({ series, seriesError, loading }) {
  if (seriesError) {
    console.log('post is not exist');
  }
  if (loading || !series) {
    return null;
  }
  return (
    <>
      <ContentContainer>
        {series.map(seriesPost => (
          <SeriesCard
            key={`${seriesPost.title}.${seriesPost._id}`}
            series={seriesPost}
          />
        ))}
      </ContentContainer>
    </>
  );
}
SeriesCardList.prototype = {
  series: PropTypes.object,
  seriesError: PropTypes.string,
  loading: PropTypes.bool,
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%
  padding: 0 8rem;
`;
