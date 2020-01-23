import React, { useState } from "react";
import styled from "styled-components";
import { InputContainer, InputSpan } from "lib/styles/inputStyle";
import "statics/css/icon.css";
import palette from "lib/styles/palette";
import CustomButton from "lib/CustomButton";
import { withRouter } from "react-router-dom";

const CommentForm = ({ comment, edit, setEdit, addComment, match }) => {
  const { id } = match.params;

  const [userId, setUserId] = useState(comment ? comment.userId : "");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState(comment ? comment.content : "");

  const onChangeUserId = e => {
    setUserId(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangeContent = e => {
    setContent(e.target.value);
  };

  return (
    <>
      <ReplyForm>
        <FormHead>
          <CustomInputWrap>
            <InputSpan
              type="text"
              name="userId"
              value={userId}
              placeholder="User Id"
              onChange={onChangeUserId}
            />
            <i className="fas fa-user input-icon vertical-center"></i>
          </CustomInputWrap>
          <CustomInputWrap>
            <InputSpan
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChangePassword}
            />
            <i className="fas fa-key input-icon vertical-center"></i>
          </CustomInputWrap>
        </FormHead>
        <InputContainer style={{ marginBottom: "0" }}>
          <CustomContentInput
            type="text"
            name="content"
            value={content}
            placeholder="Content"
            onChange={onChangeContent}
          />
          <i className="fas fa-align-left input-icon vertical-center"></i>
        </InputContainer>
        <ButtonWrap>
          {edit && (
            <CommentButton
              size="medium"
              color="lightGray"
              inline
              onClick={() => setEdit(!edit)}
            >
              Back
            </CommentButton>
          )}

          <CommentButton
            size="medium"
            color="lightGray"
            onClick={() => {
              addComment({ id, userId, password, content });
              setPassword("");
              setUserId("");
              setContent("");
            }}
          >
            Write
          </CommentButton>
        </ButtonWrap>
      </ReplyForm>
    </>
  );
};

export default withRouter(CommentForm);

const ReplyForm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 5rem;
  & i {
    padding-left: 0.7rem;
  }
`;

const FormHead = styled.div`
  width: 28rem;
  display: flex;
`;

const CustomInputWrap = styled(InputContainer)`
  margin-bottom: 0.5rem;
  & > input,
  i {
    color: ${palette.gray6};
  }
`;

const CustomContentInput = styled(InputSpan)`
  width: 100%;
  color: ${palette.gray6};
  & + i {
    color: ${palette.gray6};
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 1rem;
  right: 5rem;
`;

const CommentButton = styled(CustomButton)`
  border-color : ${palette.gray3}
  color : ${palette.gray6}
  &:hover {
    border-color : ${palette.gray6}
    color : ${palette.gray7}
    backgorund : ${palette.gray4}
  }
`;
