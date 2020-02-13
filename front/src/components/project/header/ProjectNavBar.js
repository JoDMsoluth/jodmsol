import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ProjectNavBar() {
  const match = useRouteMatch();
  const { category } = match.params;
  return (
    <>
      <NavBarWrap>
        <Link to={`/projects/all`}>
          <i>
            <i className="far fa-newspaper"></i>
          </i>
          <b>All</b>
        </Link>
        <Link to={`/projects/co`}>
          <i>
            <i className="fas fas fa-building"></i>
          </i>
          <b>Co .</b>
        </Link>
        <Link to={`/projects/team`}>
          <i>
            <i className="fas fa-users"></i>
          </i>
          <b>Team</b>
        </Link>
        <Link to={`/projects/toy`} style={{ marginRight: '0' }}>
          <i>
            <i className="fas fa-user"></i>
          </i>
          <b>Toy</b>
        </Link>
        <ActiveBar category={category}></ActiveBar>
      </NavBarWrap>
    </>
  );
}

const NavBarWrap = styled.div` 
    justify-self: center;
    position relative;
    left:50%
    transform : translateX(-50%);
    width : 28.91rem;
    height : 3rem;
    border-radius : 50px;
    box-shadow : 0px 0px 0px 4px ${palette.gray7};
    
    & a {
        display : inline-block;
        width :7rem;
        height : 3rem;
        margin-right : 0.3rem;
        text-decoration : none;
        position : relative;
        z-index : 2;
        color : ${palette.gray7}
        overflow:hidden;
    }
    & a i {
        font-size : 1.5rem;
        line-height : 3rem
        position : relative;
        left : calc(50% - 2.2rem);
        transition : all .3s ease;
    }
    & a b {
        line-height: 3rem
        font-size : .8rem;
        position : relative;
        top: 4rem;
        left : 2rem;
        transition : all .3s ease;
    }
    & a:hover b{
        top : -0.22rem;
    }
    & a:hover i{
        left : calc(50% - 3rem);
    }
    & a:nth-child(1):hover ~ div {
            left : 0;
    } 
    & a:nth-child(2):hover ~ div {
            left : 7.3rem;
    } 
    & a:nth-child(3):hover  ~ div{
            left : 14.6rem;
    } 
    & a:nth-child(4):hover ~ div {
            left : 21.9rem;
    } 
`;

const ActiveBar = styled.div`
  width: 7rem;
  height: 3rem;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: ${palette.gray2};
  border-radius: 50px;
  box-shadow: 0px 0px 0px 4px ${palette.gray6},
    inset 0px 0px 10px 0px ${palette.gray7};
  z-inex: 1;
  transition: all 0.3s ease-in;
  left: ${props =>
    props.category === 'co'
      ? '7.3rem'
      : props.category === 'team'
      ? '14.6rem'
      : props.category === 'toy'
      ? '21.9rem'
      : '0rem'};
`;
