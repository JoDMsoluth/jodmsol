import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import transition from "lib/styles/transition";
import pallete from "lib/styles/pallete";

import logo from "statics/images/logo.png";
import Avatar from "statics/images/Avatar.jpg";
import { center } from "src/lib/styles/arrage";

const AppHeader = ({ match }) => {
  console.log(match);
  return (
    <HeaderContainer>
      <LogoImg src={logo} alt="logo" />
      <StyledLink to="/" path={match.path}>
        Intro
      </StyledLink>
      <StyledLink to="/profile" path={match.path}>
        Profile
      </StyledLink>
      <StyledLink to="/project" path={match.path}>
        Project
      </StyledLink>
      <StyledLink to="/blog" path={match.path}>
        Blog
      </StyledLink>

      <UserAvatar>
        <img src={Avatar} alt="avatar" />
        <span>{`조혜형`}</span>
      </UserAvatar>
    </HeaderContainer>
  );
};

export default withRouter(AppHeader);

const HeaderContainer = styled.div`
  height: 8vh;
  display: grid;
  grid-template-columns: 10rem 7rem 7rem 7rem 7rem 1fr 10rem;
`;

const LogoImg = styled.img`
  animation: ${transition.popIn} 0.5s normal ease-in-out;
  animation-iteration-count: 1;
  width: 10rem;
  height: inherit;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  height: inherit;
  ${center}
  &:visited,
  &:link {
    text-decoration: none;
    color: ${props => (props.to === props.path ? pallete.red3 : pallete.red5)};
  }
  &:hover {
    color: ${pallete.red3};
  }
`;

const UserAvatar = styled.div`
display: inline-block;
grid-column-end: -1;
  height: inherit;
  ${center}
  & img {
    border-radius: 100px;
    border : 1px solid ${pallete.teal2}
    width: 2.5rem;
    height: 2.5rem;
  }
  & span {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${pallete.teal5};
  }
`;
