import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CustomButton from "lib/CustomButton";

export default function TagsCard({ tag }) {
  return (
    <>
      <ButtonWrap>
        <CustomButton color="lightGray" size="medium" inline>
          {tag}
        </CustomButton>
      </ButtonWrap>
    </>
  );
}

const ButtonWrap = styled.span`
  padding: 0.8rem 1rem 0.8rem 0;
  height: 16.1rem;
  &:hover button {
    background: ${palette.gray5};
  }
`;
