import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
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
//----

export const [
  ADD_RECOMMENT_REQUEST,
  ADD_RECOMMENT_SUCCESS,
  ADD_RECOMMENT_FAILURE
] = createRequestActionTypes("ADD_RECOMMENT");
export const [
  LOAD_RECOMMENTS_REQUEST,
  LOAD_RECOMMENTS_SUCCESS,
  LOAD_RECOMMENTS_FAILURE
] = createRequestActionTypes("LOAD_RECOMMENTS");
export const [
  DELETE_RECOMMENT_REQUEST,
  DELETE_RECOMMENT_SUCCESS,
  DELETE_RECOMMENT_FAILURE
] = createRequestActionTypes("DELETE_RECOMMENT");
export const [
  UPDATE_RECOMMENT_REQUEST,
  UPDATE_RECOMMENT_SUCCESS,
  UPDATE_RECOMMENT_FAILURE
] = createRequestActionTypes("UPDATE_RECOMMENT");

export const UNLOAD_COMMENTS = "UNLOAD_COMMENTS";

export const addComment = createAction(
  ADD_COMMENT_REQUEST,
  ({ id, userId, password, content }) => ({ id, userId, password, content })
);
export const loadComments = createAction(LOAD_COMMENTS_REQUEST);
export const deleteComment = createAction(DELETE_COMMENT_REQUEST);
export const updateComment = createAction(UPDATE_COMMENT_REQUEST);
export const unloadComments = createAction(UNLOAD_COMMENTS);
// 여기추가
export default handleActions(
  {
    [ADD_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comments.unshift(action.payload);
      }),
    [ADD_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [LOAD_COMMENTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comments = action.payload;
      }),
    [LOAD_COMMENTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [DELETE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comments = action.payload;
      }),
    [DELETE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [UPDATE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.comments = action.payload;
      }),
    [UPDATE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [UNLOAD_COMMENTS]: () => initialState
  },
  initialState
);
