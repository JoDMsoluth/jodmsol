import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { Link } from 'react-router-dom';
import thumbnail from 'statics/images/kickVillageProject.PNG';
import qs from 'qs';
import CustomButton from 'lib/CustomButton';
import PropTypes from 'prop-types';

SeriesCard.propTypes = {
  series: PropTypes.object,
};

export default function SeriesCard({ series }) {
  if (!series) {
    return null;
  }
  const { _id: id, __v, title, desc, updatedAt } = series;

  return (
    <>
      <ContentCardWrap>
        <Link to={`/series/${id}`}>
          <CoverImg coverImg={thumbnail} />
        </Link>
        <Content>
          <ContentHead>
            <div>{moment(updatedAt).format('YYYY.MM.DD.')}</div>
            <Link to={`/series/${id}`}>
              <b>{title}</b>
            </Link>
            <div>
              <span>
                {__v > 1 ? `${__v} units is posted` : `${__v} unit is posted`}
              </span>
            </div>
          </ContentHead>
          <ContentBody>
            <div>{desc.length > 500 ? desc.substring(0, 500) : desc}</div>
          </ContentBody>
          <Link to={`/series/${id}`}>
            <CustomButton color="darkGray" size="medium">
              Show Posts
            </CustomButton>
          </Link>
        </Content>
      </ContentCardWrap>
    </>
  );
}

const ContentCardWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
  height: 20.1rem;
  border-bottom: 1px solid ${palette.gray5};
  &:hover {
    background: ${palette.gray0};
  }
`;
const CoverImg = styled.div`
  &::before {
    content: '';
    display: inline-block;
    transform: translate(-3%, 3%);
    height: 17rem;
    width: 17rem;
    background: url(${props => props.coverImg});
    background-position: 50% 50%;
    background-size: cover;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  }
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-20%, -53%);
  background: ${palette.gray0};
  width: 17rem;
  height: 17rem;
`;
const Content = styled.div`
  position : relative;
  display:inline-block;
  white-space: pre-wrap;
  padding : 1rem 2rem 3rem
  width: calc(100% - 15rem);
  float:right;
  height: 18rem;
  color: ${palette.gray7}
`;

const ContentHead = styled.div`
  padding-bottom: 1rem;
  & b {
    font-size: 2rem;
    color: ${palette.gray8};
  }
  & div:nth-child(3),
  div:nth-child(1) {
    font-size: 0.8rem;
    line-height: 0.7rem;
    font-weight: 600;
    color: ${palette.gray5};
  }
  & a:hover {
    color: ${palette.gray6};
  }
`;
const ContentBody = styled.div`
  height: 8.5rem;
  & div:nth-child(1) {
    height: 100%;
    overflow:hidden
    font-size:1rem
    line-height : 1.5rem;
    color: ${palette.gray7}
  }

`;
