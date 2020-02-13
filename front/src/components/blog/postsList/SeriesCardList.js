import React from 'react';
import SeriesCard from './SeriesCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
        {series.map(series => (
          <SeriesCard key={`${series.title}.${series._id}`} series={series} />
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
