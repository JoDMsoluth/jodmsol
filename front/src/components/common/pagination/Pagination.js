import React from "react";
import styled, { css } from "styled-components";
import qs from "qs";
import { Link } from "react-router-dom";
import palette from "lib/styles/palette";
import font from "lib/styles/font";

const buildLink = ({ tag, page }) => {
  const query = qs.stringify({ tag, page });
  return `/blog/?${query}`;
};

export default function Pagination({ page, lastPage, tag }) {
  return (
    <PaginationWrap>
      <CustomLink
        disabled={page === 1}
        to={
          page === 1
            ? buildLink({ tag, page: 1 })
            : buildLink({ tag, page: page - 1 })
        }
      >
        back
      </CustomLink>
      <PageNumber>{page}</PageNumber>
      <CustomLink
        disabled={page === lastPage}
        to={
          page === lastPage
            ? buildLink({ tag, page: lastPage })
            : buildLink({ tag, page: page + 1 })
        }
      >
        Next
      </CustomLink>
    </PaginationWrap>
  );
}

const PaginationWrap = styled.div`
color : ${palette.teal9}
  width: 320px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const CustomLink = styled(Link)`
  pointer-events: ${props => (props.disabled ? "none" : "")};
  background: ${palette.blue3}
  border-radius : 3.5rem;
  text-align : center;
  font-size : 1rem;
  font-weight : 600;
  ${font.normalFont}
  width: 4rem;
  height: 2rem;
  line-height : 1.9rem;
`;
const PageNumber = styled.div``;
