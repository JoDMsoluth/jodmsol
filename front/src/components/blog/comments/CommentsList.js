import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CommentsItem from "./CommentsItem";
const dummydata = [
  {
    userId: "실버제로",
    date: "1일전",
    content: "나는 오늘 밥을 먹었따 그리고 잤다",
    number: 1,
    child: [
      {
        userId: "실버제로",
        date: "1일전",
        content: "나는 오늘 밥을 먹었따 그리고 잤다",
        number: 1
      },
      {
        userId: "실버제로",
        date: "1일전",
        content: "나는 오늘 밥을 먹었따 그리고 잤다",
        number: 1
      }
    ]
  },
  {
    userId: "실버제로",
    date: "1일전",
    content: "나는 오늘 밥을 먹었따 그리고 잤다",
    number: 1,
    child: []
  },
  {
    userId: "실버제로",
    date: "1일전",
    content: "나는 오늘 밥을 먹었따 그리고 잤다",
    number: 1,
    child: []
  },
  {
    userId: "실버제로",
    date: "1일전",
    content: "나는 오늘 밥을 먹었따 그리고 잤다",
    number: 1,
    child: []
  },
  {
    userId: "실버제로",
    date: "1일전",
    content: "나는 오늘 밥을 먹었따 그리고 잤다",
    number: 1,
    child: []
  }
];
export default function CommentsList() {
  return (
    <>
      <CommentsListWrap>
        {dummydata.map((data, i) => (
          <CommentsItem key={`${data.userId}.${i}`} data={data} />
        ))}
      </CommentsListWrap>
    </>
  );
}

const CommentsListWrap = styled.div`
background : ${palette.gray1}
display : inline-block;  
width : 100%;
height: 100%;
`;
