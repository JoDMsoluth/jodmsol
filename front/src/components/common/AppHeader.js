import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import transition from 'lib/styles/transition';
import palette from 'lib/styles/palette';
import font from 'lib/styles/font';
import logo from 'statics/images/logo.png';
import Avatar from 'statics/images/Avatar.jpg';
import arrange from 'lib/styles/arrage';

const AppHeader = () => {
  const match = useRouteMatch();

  console.log(match);
  return (
    <HeaderWrap>
      <LogoImg src={logo} alt="logo" />
      <StyledLink to="/" path={match.path}>
        <span>INTRO</span>
      </StyledLink>
      <StyledLink to="/profile" path={match.path}>
        <span>PROFILE</span>
      </StyledLink>
      <StyledLink to="/projects/all" path={match.path}>
        <span>PROJECT</span>
      </StyledLink>
      <StyledLink to="/blog/study?page=1" path={match.path}>
        <span>BLOG</span>
      </StyledLink>

      <UserAvatar>
        <img src={Avatar} alt="avatar" />
        <UserDesc>
          <div>{`Jo\nHyehyeong`}</div>

          <div>Front-end developer</div>
        </UserDesc>
      </UserAvatar>
    </HeaderWrap>
  );
};

export default AppHeader;

const HeaderWrap = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 10rem repeat(4, 9rem) 1fr 10rem;

  border-bottom: 1px solid ${palette.gray1};
`;

const LogoImg = styled.img`
  animation: ${transition.popIn} 0.5s normal ease-in-out;
  animation-iteration-count: 1;
  width: 10rem;
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 1.5rem;
  ${arrange.center}
  &:visited,
  &:link {
    text-decoration: none;
    color: ${props =>
      props.to === props.path ? palette.gray7 : palette.gray9};
  }
  & > span {
    border-bottom: ${props => props.to === props.path && '2px solid #495057'};
  }
  &:hover {
    color: ${palette.gray7};
    & > span {
      border-bottom: 2px solid ${palette.gray7};
    }
  }
`;

const UserAvatar = styled.div`
  display: inline-block;
  grid-column-end: -1;
  transform: translateX(0.5rem);
  height: inherit;
  & img {
    margin-right: 0.7rem
  }
  ${arrange.center}
  flex-direction: row;
  & img {
    border-radius: 100px;
    border : 1px solid ${palette.gray9}
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const UserDesc = styled.div`
  & div:first-child {
    ${font.italicFont}
    font-size : 1.2rem
    font-weight : 3rem;
    transform: translateY(2px);
  }
  & div:last-child {
    color : ${palette.gray7}
    font-size: 0.6rem;
    ${font.normalFont}
    font-weight : bold;
    transform: translateY(-2px);
  }
`;
