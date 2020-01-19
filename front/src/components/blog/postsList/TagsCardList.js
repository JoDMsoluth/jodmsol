import React from "react";
import TagsCard from "./TagsCard";
import styled from "styled-components";

export default function TagsCardList({ tags, tagsError, loading }) {
  if (tagsError) {
    console.log("post is not exist");
  }
  if (loading || !tags) {
    return null;
  }
  return (
    <>
      <TagsWrap>
        {tags.map((tag, i) => (
          <TagsCard key={`${tag}${i}`} tag={tag} />
        ))}
      </TagsWrap>
    </>
  );
}

const TagsWrap = styled.div`
  width: 100%;
  padding: 3rem 8rem;
`;
