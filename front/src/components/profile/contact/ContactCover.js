import React from "react";
import styled from "styled-components";
import arrange from "lib/styles/arrage";
import palette from "lib/styles/palette";

export function ContactCover() {
  return (
    <>
      <CoverWrap>
        <FlipButton>Click Me</FlipButton>
      </CoverWrap>
    </>
  );
}

const CoverWrap = styled.div`
  ${arrange.center}
  width : 100%;
  height: 100%;
`;

const FlipButton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  ${arrange.center}
  background-color: ${palette.gray3};
`;
