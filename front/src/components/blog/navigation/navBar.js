import React from "react";
import styled, { css } from "styled-components";
import palette from "lib/styles/palette";
import { Link, withRouter } from "react-router-dom";

const BlogNavBar = ({ match, location }) => {
  const { category } = match.params;
  const filter = location.pathname.split("/");

  return (
    <>
      <NavBarWrap>
        <Link to={`/blog/${category}?page=1`}>
          <i>
            <i className="far fa-newspaper"></i>
          </i>
          <b>Posts</b>
        </Link>
        <Link to={`/blog/${category}/popular?page=1`}>
          <i>
            <i className="fas fa-heart"></i>
          </i>
          <b>Popular</b>
        </Link>
        <Link to={`/blog/${category}/latest?page=1`}>
          <i>
            <i className="fas fa-clock"></i>
          </i>
          <b>Latest</b>
        </Link>
        <Link to={`/blog/${category}/series?page=1`}>
          <i>
            <i className="fas fa-object-group"></i>
          </i>
          <b>Series</b>
        </Link>
        <Link to={`/blog/${category}/tags?page=1`} style={{ marginRight: "0" }}>
          <i>
            <i className="fas fa-tags"></i>
          </i>
          <b>Tags</b>
        </Link>
        <ActiveBar filter={filter[filter.length - 1]}></ActiveBar>
      </NavBarWrap>
    </>
  );
};
export default withRouter(BlogNavBar);

const NavBarWrap = styled.div` 
    justify-self: center;
    position relative;
    width : 36.21rem;
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
        left : 1.5rem;
        transition : all .3s ease;
    }
    & a:hover b{
        top : -0.22rem;
    }
    & a:hover i{
        left : calc(50% - 3rem);
    }
    & a:nth-child(1):hover ~ div {
            left : 0rem;
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
    & a:nth-child(5):hover ~ div {
            left : 29.2rem;
    }
`;

const ActiveBar = styled.div`
  width: 7rem;
  height: 3rem;
  position: absolute;
  top: 0px;
  left: 0;
  background-color: ${palette.gray2};
  border-radius: 50px;
  box-shadow: 0px 0px 0px 4px ${palette.gray6},
    inset 0px 0px 10px 0px ${palette.gray7};
  z-inex: 1;
  transition: all 0.3s ease-in;
  left: ${props =>
    props.filter === "popular"
      ? "7.3rem"
      : props.filter === "latest"
      ? "14.6rem"
      : props.filter === "series"
      ? "21.9rem"
      : props.filter === "tags"
      ? "29.2rem"
      : "0rem"};
  ${props => console.log(props.filter)}
`;
