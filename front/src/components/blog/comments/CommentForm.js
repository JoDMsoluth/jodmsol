import React, { useState } from 'react';
import styled from 'styled-components';
import { InputContainer, InputSpan } from 'lib/styles/inputStyle';
import 'statics/css/icon.css';
import palette from 'lib/styles/palette';
import CustomButton from 'lib/CustomButton';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const CommentForm = ({
  parentId,
  comment,
  edit,
  setEdit,
  match,
  reply,
  addComment,
  addRecomment,
  updateComment,
  updateRecomment,
}) => {
  const id = edit ? comment._id : reply ? parentId : match.params.id;

  const [userId, setUserId] = useState(comment ? comment.userId : '');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState(comment ? comment.content : '');

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
        <InputContainer style={{ marginBottom: '0' }}>
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
          {edit ? (
            <>
              <CommentButton
                size="medium"
                color="lightGray"
                inline
                onClick={() => setEdit(!edit)}
              >
                Back
              </CommentButton>
              <CommentButton
                size="medium"
                color="lightGray"
                onClick={() => {
                  reply
                    ? updateRecomment({ id, userId, password, content })
                    : updateComment({ id, userId, password, content });
                  setPassword('');
                  setUserId('');
                  setContent('');
                  setEdit(!edit);
                }}
              >
                Update
              </CommentButton>
            </>
          ) : (
            <CommentButton
              size="medium"
              color="lightGray"
              onClick={() => {
                reply
                  ? addRecomment({ id, userId, password, content })
                  : addComment({ id, userId, password, content });
                setPassword('');
                setUserId('');
                setContent('');
              }}
            >
              Write
            </CommentButton>
          )}
        </ButtonWrap>
      </ReplyForm>
    </>
  );
};

CommentForm.propTypes = {
  parentId: PropTypes.string,
  comment: PropTypes.array,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
  match: PropTypes.object,
  reply: PropTypes.bool,
  addComment: PropTypes.func,
  addRecomment: PropTypes.func,
  updateComment: PropTypes.func,
  updateRecomment: PropTypes.func,
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
