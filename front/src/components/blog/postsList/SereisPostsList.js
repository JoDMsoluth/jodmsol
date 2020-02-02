import React from 'react';
import SeriesPostsCard from './SeriesPostsCard';
import styled from 'styled-components';
import CustomButton from 'lib/CustomButton';
import palette from 'lib/styles/palette';
import { Link, useRouteMatch } from 'react-router-dom';

export default function SeriesPostsList({ posts, category }) {
  console.log('posts', posts);
  const match = useRouteMatch();
  const { id } = match.params;
  return (
    <>
      <ContentContainer>
        <div>Posts List</div>
        <Link to={`/blog/${category}?id=${id}&page=1`}>
          <StyledCustomButton color="transparent" size="small">
            View All
          </StyledCustomButton>
        </Link>
        <div>
          {posts.map &&
            posts.map(post => (
              <SeriesPostsCard key={`${post.title}.${post._id}`} post={post} />
            ))}
        </div>
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  position: relative;
  border-top: 1px solid ${palette.gray3};
  & > div:first-child {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${palette.gray6};
  }
  & > div:last-child {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }
`;
const StyledCustomButton = styled(CustomButton)`
  border: 1px solid ${palette.gray3};
  position: absolute;
  top: 1.4rem;
  right: 0;
`;
