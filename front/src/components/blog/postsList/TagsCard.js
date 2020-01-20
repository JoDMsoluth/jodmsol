import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CustomButton from "lib/CustomButton";
import { withRouter } from "react-router-dom";

const TagsCard = ({ tag, history, match }) => {
  const { category } = match.params;
  return (
    <>
      <ButtonWrap>
        <CustomButton
          color="lightGray"
          size="medium"
          inline
          onClick={() =>
            history.push(
              `/blog/${category}?tag=${tag.slice(1, tag.length)}&page=1`
            )
          }
        >
          {tag}
        </CustomButton>
      </ButtonWrap>
    </>
  );
};

export default withRouter(TagsCard);

const ButtonWrap = styled.span`
  padding: 0.8rem 1rem 0.8rem 0;
  height: 16.1rem;
  &:hover button {
    background: ${palette.gray5};
  }
`;
