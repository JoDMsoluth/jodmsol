import React, { useState } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import { InputSpan } from "lib/styles/inputStyle";
import "statics/css/icon.css";
import CustomButton from "lib/CustomButton";

export default function DeleteQuestion({
  id,
  toggleQuestion,
  setToggleQustion,
  deleteComment,
  deleteRecomment,
  reply
}) {
  const [password, setPassowrd] = useState("");
  const onChangePassword = e => {
    setPassowrd(e.target.value);
  };
  return (
    <>
      <QuestionWrap>
        <CustomInputWrap>
          <InputSpan
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChangePassword}
          />
          <i className="fas fa-key input-icon"></i>
        </CustomInputWrap>
        <CustomButton
          color="transparent"
          size="medium"
          inline
          onClick={() =>
            reply
              ? deleteRecomment({ id, password })
              : deleteComment({ id, password })
          }
        >
          delete
        </CustomButton>
        <CustomButton
          color="transparent"
          size="medium"
          onClick={() => {
            setToggleQustion(!toggleQuestion);
          }}
        >
          back
        </CustomButton>
      </QuestionWrap>
    </>
  );
}

const QuestionWrap = styled.div`
position : absolute;
display : inline-block;
top : 0;
right: 0;
padding : 0.5rem 0.5rem;
background : ${palette.gray0}
border : 1px solid ${palette.gray1}
`;

const CustomInputWrap = styled.div`
  position: relative;
  height: 35px;
  color: rgba(0, 0, 255, 0.25);
  display: inline-block;
  & > input,
  i {
    color: ${palette.gray6};
  }
`;
