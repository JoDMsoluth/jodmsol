import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import font from "lib/styles/font";

export default function ProfileComponentLayout({ id, title, children }) {
  return (
    <>
      <ComponentWrap>
        <Title id={id}>{title}</Title>
        {children}
      </ComponentWrap>
    </>
  );
}

const ComponentWrap = styled.div`
  margin-bottom: 5rem;
  border-top: 1px solid;
  border-color: ${palette.gray5};
`;

const Title = styled.div`
  padding-top: 5rem;
  border-top: 1px solid;
  border-color: ${palette.gray5};
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 4rem;
  ${font.boldFont}
`;
