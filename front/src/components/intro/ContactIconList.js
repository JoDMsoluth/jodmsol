import React from 'react';
import styled from 'styled-components';
import facebook from 'statics/images/facebook.PNG';
import instagram from 'statics/images/instagram.PNG';
import kakao from 'statics/images/kakao.PNG';
import twitter from 'statics/images/twitter.PNG';
import gmail from 'statics/images/gmail.PNG';
import github from 'statics/images/github.PNG';
import font from 'lib/styles/font';
import palette from 'lib/styles/palette';

export default function ContactIconList() {
  return (
    <ContactMeWrap>
      <MyName>Hyehyeong Jo</MyName>
      <MyDesc>Front-End Developer</MyDesc>
      <ContactIconWrap>
        <a
          href="https://www.facebook.com/jodmsoluth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon src={facebook} width="30px" height="30px" />
        </a>
        <a
          href="https://www.instagram.com/jodmsoluth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon src={instagram} width="30px" height="30px" />
        </a>
        <a
          href="https://open.kakao.com/o/sNCD8wHb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon src={kakao} width="30px" height="30px" />
        </a>
        <a
          href="https://www.twitter.com/jodmsoluth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon src={twitter} width="30px" height="30px" />
        </a>
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon src={gmail} width="30px" height="30px" />
        </a>
        <a
          href="https://github.com/JoDMsoluth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon src={github} width="30px" height="30px" />
        </a>
      </ContactIconWrap>
    </ContactMeWrap>
  );
}
const ContactMeWrap = styled.div`
  position: absolute;
  top: 20rem;
  left: 11rem;
`;

const MyName = styled.div`
  font-weight: 900;
  font-size: 2rem;
`;
const MyDesc = styled.div`
  font-size: 1rem;
  font-weight: 800;
  ${font.normalFont}
  color:${palette.gray7}
  margin-bottom : 1.5rem;
`;
const ContactIconWrap = styled.div`
  display: flex;
`;
const ContactIcon = styled.img`
  border-radius: 4px;
  margin-right: 0.5rem;
  &:hover {
    transform: translateY(-1px) scale(1.1);
    transition: all 0.2s;
  }
`;
