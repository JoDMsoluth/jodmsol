import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import arrange from 'lib/styles/arrage';
import { Link } from 'react-router-dom';

import kakaoTalk from 'statics/images/kakaotalk.png';

const AppFooter = () => {
  return (
    <>
      <FooterWrap>
        <FooterHead>
          <FooterMenu to="/">JoDMSoluth</FooterMenu>
          <FooterMenu to="/">Privacy Policy</FooterMenu>
          <FooterMenu to="/">Bug Reports</FooterMenu>
          <MessengerIcon>
            <a
              href="https://www.facebook.com/jodmsoluth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyle facebook>
                <i className="fab fa-facebook-f"></i>
              </IconStyle>
            </a>
            <a
              href="https://github.com/JoDMsoluth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyle github>
                <i className="fab fa-github-alt" />
              </IconStyle>
            </a>
            <a
              href="https://open.kakao.com/o/sNCD8wHb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyle kakaotalk>
                <img
                  src={kakaoTalk}
                  alt="kakaoLogo"
                  width="20px"
                  height="20px"
                />
              </IconStyle>
            </a>
          </MessengerIcon>
        </FooterHead>
        <FooterContent>
          <span>Contact Me</span>
          <ContactMe>
            <span>Email : JoDmSoluth@gmail.com</span>
            <span>Phone : 010-4365-0214</span>
            <span>KakaoTalk : JoDmSoluth</span>
          </ContactMe>
          <div>Copyright ⓒ 2019 JoDMSoluth All right reserved.</div>
        </FooterContent>
      </FooterWrap>
    </>
  );
};

export default AppFooter;

const FooterWrap = styled.div`
  padding: 1.3rem 1rem;
  color: ${palette.gray5};
  height: 11rem;
  background: ${palette.gray7};
`;

const FooterHead = styled.div`
  height: 3rem;
  display: grid;
  grid-template-columns: 9rem 9rem 9rem 1fr 10rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${palette.gray5};
`;
const FooterMenu = styled(Link)`
  ${arrange.center}
  border-right: 2px solid ${palette.gray5};
  &:hover {
    color: ${palette.gray6}
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
      props.facebook ? '#7289da' : props.github ? palette.gray2 : '	#ffce00'};
  }
`;

//--------------------------------------------------------------------------

const FooterContent = styled.div`
  padding: 1.5rem 0 0 1.5rem;
  width: 100%;
  font-size: 0.7rem;
  display: grid;
  grid-template-columns: 5rem 32rem;
  grid-template-rows: 20px 33px;
  & > span:first-child {
    align-self: center
    border-right: 2px solid ${palette.gray5};
  }
  & div:last-child {
    font-size: 1rem;
    grid-row: 2;
    grid-column: 1 / 3;
    align-self: end;
  }
`;
const ContactMe = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
`;
