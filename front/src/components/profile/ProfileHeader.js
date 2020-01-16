import React from "react";
import styled from "styled-components";
import profileBgHeader from "statics/images/profileBgHeader.jpg";
import transitions from "lib/styles/transition";
import palette from "lib/styles/palette";
import CustomButton from "lib/CustomButton";
import smoothScrollTo from "lib/scrollTo";

const ProfileHeader = () => {
  return (
    <>
      <HeaderWrap>
        <HeaderTitle>Who is Hyehyeong Jo?</HeaderTitle>
        <HeaderDescription>
          <div>
            I am a web developer from Republic of Korea and currently living in
            Seoul.
          </div>
          <div>
            I enjoy building everything from small business sites to rich
            interactive web apps.
          </div>
          <div>if you are seeking employer, you can get in touch with me</div>
        </HeaderDescription>
        <StyledCustomButton
          size="large"
          color="darkGray"
          onClick={() => smoothScrollTo("introduce", 100)}
        >
          getting to know me
        </StyledCustomButton>
      </HeaderWrap>
      <GoArowWrap>
        <GoArrow className="fas fa-chevron-down" />
        <GoArrow className="fas fa-chevron-down" />
      </GoArowWrap>
    </>
  );
};

export default ProfileHeader;

const HeaderWrap = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
  color: black;
  text-align: center;
  line-height: 2rem;
  background-image: url(${profileBgHeader});
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderTitle = styled.h1`
  animation: ${transitions.pushRight} 1s ease;
`;
const HeaderDescription = styled.div`
  text-align: center;
  animation: ${transitions.pushLeft} 1s ease;
`;

const StyledCustomButton = styled(CustomButton)`
  width: 15rem;
  margin-top: 2rem;
  animation: ${transitions.slideUp} 1s ease;
  &:hover {
    box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    transition: all 0.2s;
  }
`;

const GoArrow = styled.i`
  font-size: 3rem;
  color: ${palette.gray9}
  animation: ${transitions.pushBottom} 2s infinite ease-out;
  & + & {
    position: relative;
    top: -1rem;
  }
`;

const GoArowWrap = styled.span`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
