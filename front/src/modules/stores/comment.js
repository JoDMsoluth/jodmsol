import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  comment: null,
  comments: null,
  commentError: null
};

export const [
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE
] = createRequestActionTypes("ADD_COMMENT");
export const [
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE
] = createRequestActionTypes("LOAD_COMMENTS");
export const [
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
] = createRequestActionTypes("DELETE_COMMENT");
export const [
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE
] = createRequestActionTypes("UPDATE_COMMENT");

export const addComment = createAction(ADD_COMMENT_REQUEST);
export const loadComments = createAction(LOAD_COMMENTS_REQUEST);
export const deleteComment = createAction(DELETE_COMMENT_REQUEST);
export const updateComment = createAction(UPDATE_COMMENT_REQUEST);
// 여기추가
export default handleActions(
  {
    [ADD_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comment = action.payload;
      }),
    [ADD_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [LOAD_COMMENTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comment = action.payload;
      }),
    [LOAD_COMMENTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [DELETE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comment = action.payload;
      }),
    [DELETE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [UPDATE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comment = action.payload;
      }),
    [UPDATE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      })
  },
  initialState
);
