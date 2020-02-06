import React from 'react';
import styled from 'styled-components';
import MarkdownRender from 'components/common/markdown/MarkdownRender';
import palette from 'lib/styles/palette';
import { Link } from 'react-router-dom';
import PostToc from './PostToc';

export default function PostView({
  post,
  postError,
  loading,
  category,
  toc,
  onSetToc,
  onActiveHeading,
  activeHeading,
}) {
  console.log(post, 'post');
  if (postError) {
    console.log('post is not exist');
  }
  if (loading || !post) {
    return null;
  }

  if (document.body && document.body.scrollTop) {
    document.body.scrollTop = 0;
  }
  if (document.documentElement) {
    document.documentElement.scrollTop = 0;
  }

  const { title, markdown, tags } = post;
  return (
    <PostViewWrap>
      <PostToc
        toc={toc}
        activeHeading={activeHeading}
        onActiveHeading={onActiveHeading}
      />
      <PostViewTitle>{title}</PostViewTitle>
      <MarkdownRender
        markdown={markdown}
        onSetToc={onSetToc}
        onActiveHeading={onActiveHeading}
      />
      <PostViewTags>
        {tags.map((tag, i) => (
          <Link
            to={`/blog/${category}/tags?tag=${tag.slice(1, tag.length)}&page=1`}
            key={`${tag}${i}`}
          >{`${tag} `}</Link>
        ))}
      </PostViewTags>
    </PostViewWrap>
  );
}

const PostViewWrap = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem;
  font-size: 1.125rem;
`;
const PostViewTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray3};
`;
const PostViewTags = styled.div`
  font-size: 1rem;
  font-weight: 200;
  padding-top: 2rem;
  border-top: 1px solid ${palette.gray3};
  color: ${palette.teal8}
  & > a:hover {
      color: ${palette.teal6}
  }
`;
