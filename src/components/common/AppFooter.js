import React from "react";
import styled from "styled-components";
import pallete from "lib/styles/pallete";
import { center } from "src/lib/styles/arrage";
import { Link } from "react-router-dom";

import kakaoTalk from "statics/images/kakaotalk.png";

const AppFooter = () => {
  return (
    <>
      <FooterContainer>
        <FooterHead>
          <FooterMenu to="/">JoDMSoluth</FooterMenu>
          <FooterMenu to="/">Privacy Policy</FooterMenu>
          <FooterMenu to="/">Bug Reports</FooterMenu>
          <MessengerIcon>
            <IconStyle facebook>
              <i className="fab fa-facebook-f"></i>
            </IconStyle>
            <IconStyle github>
              <i className="fab fa-github-alt" />
            </IconStyle>
            <IconStyle kakaotalk>
              <img src={kakaoTalk} alt="kakaoLogo" width="20px" height="20px" />
            </IconStyle>
          </MessengerIcon>
        </FooterHead>
        <FooterContent>
          <ContactMe>
            <span>Contact Me</span>
            <span>Email : JoDmSoluth@gmail.com</span>
            <span>GitHub : JoDmSoluth</span>
            <span>KakaoTalk : JoDmSoluth</span>
          </ContactMe>
          <div>Copyright ⓒ 2019 JoDMSoluth All right reserved.</div>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default AppFooter;

const FooterContainer = styled.div`
  padding: 2rem;
  color: ${pallete.gray5};
  height: 190px;
  background: ${pallete.gray7};
`;

const FooterHead = styled.div`
  height: 3rem;
  display: grid;
  grid-template-columns: 9rem 9rem 9rem 1fr 10rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${pallete.gray5};
`;
const FooterMenu = styled(Link)`
  ${center}
  border-right: 2px solid ${pallete.gray5};
  &:hover {
    color: ${pallete.gray6}
  }
`;

const MessengerIcon = styled.div`
  width: 10rem;
  grid-column-end: -1;
  display: flex;
  justify-content: space-evenly;
`;

const IconStyle = styled.div`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 100px;
  border: 1px solid black;
  position: relative;
  & i,
  & img {
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    border: none;
    transition : all .2s
    transform : translateY(-2px);
    background: ${props =>
      props.facebook ? "#7289da" : props.github ? pallete.gray2 : "	#ffce00"};
  }
`;

//--------------------------------------------------------------------------

const FooterContent = styled.div`
  padding: 1rem 0 0 1.5rem;
  line-height: 2.2rem;
`;
const ContactMe = styled.div`
  font-size: 0.7rem;
  & span {
    margin-left: 2rem;
  }
  & span:first-child {
    margin-left: 0;
    padding-right: 1rem;
    width: 5rem;
    border-right: 2px solid ${pallete.gray5};
  }
`;
