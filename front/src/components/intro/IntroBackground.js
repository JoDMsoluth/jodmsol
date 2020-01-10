import React from "react";
import styled from "styled-components";
import uncleSam from "statics/images/uncleSam.png";

const IntroBackground = () => {
  return (
    <>
      <HeaderWrap />
    </>
  );
};

export default IntroBackground;

const HeaderWrap = styled.div`
  width: 100%;
  height: 35rem;
  position: relative;
  color: white;
  text-align: center;
  background-image: url(${uncleSam});
  background-size: 25rem 30rem;
  background-repeat: no-repeat;
  background-position: 90% center;
`;
