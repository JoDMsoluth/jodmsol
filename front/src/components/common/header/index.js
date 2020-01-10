import React from "react";
import styled from "styled-components";
import font from "src/lib/styles/font";
import palette from "src/lib/styles/palette";

export default function Header({ desc }) {
  return (
    <>
      <HeaderContainer>
        <BlogVersion>V 0.0.1</BlogVersion>
        <Title>JoDmSoluth</Title>
        <Category>{desc}</Category>
        <Visitios>Today : 123</Visitios>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  padding: 0 2rem;
  position: relative;
  height: 7rem;
`;

const BlogVersion = styled.div`
color : ${palette.gray6}
font-size : 1rem;
font-weight : 800;
`;

const Title = styled.div`
text-align : center;
font-size : 2rem;
${font.boldFont}
color : ${palette.gray8}
font-weight : 600;
`;

const Category = styled.div`
text-align : center;
line-height: 0.7rem;
font-size : 1rem;
color : ${palette.gray6}
font-weight : 800;`;

const Visitios = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  color : ${palette.gray6}
  font-size : 1rem;
  font-weight : 800;
  `;
