import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestSaga';

export const initialState = {
  comments: null,
  commentError: null,
};

export const [
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
] = createRequestActionTypes('ADD_COMMENT');
export const [
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
] = createRequestActionTypes('LOAD_COMMENTS');
export const [
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
] = createRequestActionTypes('DELETE_COMMENT');
export const [
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
] = createRequestActionTypes('UPDATE_COMMENT');
export const [
  LIKE_COMMENT_REQUEST,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
] = createRequestActionTypes('LIKE_COMMENT');
export const [
  UNLIKE_COMMENT_REQUEST,
  UNLIKE_COMMENT_SUCCESS,
  UNLIKE_COMMENT_FAILURE,
] = createRequestActionTypes('UNLIKE_COMMENT');
//--------

export const [
  ADD_RECOMMENT_REQUEST,
  ADD_RECOMMENT_SUCCESS,
  ADD_RECOMMENT_FAILURE,
] = createRequestActionTypes('ADD_RECOMMENT');
export const [
  LOAD_RECOMMENTS_REQUEST,
  LOAD_RECOMMENTS_SUCCESS,
  LOAD_RECOMMENTS_FAILURE,
] = createRequestActionTypes('LOAD_RECOMMENTS');
export const [
  DELETE_RECOMMENT_REQUEST,
  DELETE_RECOMMENT_SUCCESS,
  DELETE_RECOMMENT_FAILURE,
] = createRequestActionTypes('DELETE_RECOMMENT');
export const [
  UPDATE_RECOMMENT_REQUEST,
  UPDATE_RECOMMENT_SUCCESS,
  UPDATE_RECOMMENT_FAILURE,
] = createRequestActionTypes('UPDATE_RECOMMENT');
export const [
  LIKE_RECOMMENT_REQUEST,
  LIKE_RECOMMENT_SUCCESS,
  LIKE_RECOMMENT_FAILURE,
] = createRequestActionTypes('LIKE_RECOMMENT');
export const [
  UNLIKE_RECOMMENT_REQUEST,
  UNLIKE_RECOMMENT_SUCCESS,
  UNLIKE_RECOMMENT_FAILURE,
] = createRequestActionTypes('UNLIKE_RECOMMENT');

//----
export const UNLOAD_RECOMMENTS = 'UNLOAD_RECOMMENTS';
export const UNLOAD_COMMENTS = 'UNLOAD_COMMENTS';

export const addComment = createAction(
  ADD_COMMENT_REQUEST,
  ({ id, userId, password, content }) => ({ id, userId, password, content }),
);
export const loadComments = createAction(LOAD_COMMENTS_REQUEST);
export const deleteComment = createAction(DELETE_COMMENT_REQUEST);
export const updateComment = createAction(
  UPDATE_COMMENT_REQUEST,
  ({ id, userId, password, content }) => ({ id, userId, password, content }),
);
//---

export const loadRecomments = createAction(LOAD_RECOMMENTS_REQUEST);
export const addRecomment = createAction(
  ADD_RECOMMENT_REQUEST,
  ({ id, userId, password, content }) => ({ id, userId, password, content }),
);
export const deleteRecomment = createAction(
  DELETE_RECOMMENT_REQUEST,
  ({ id, password }) => ({ id, password }),
);
export const updateRecomment = createAction(
  UPDATE_RECOMMENT_REQUEST,
  ({ id, userId, password, content }) => ({ id, userId, password, content }),
);

export const unloadRecomments = createAction(UNLOAD_RECOMMENTS);
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
        draft.comments = draft.comments.filter(v => v._id !== action.payload);
      }),
    [DELETE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [UPDATE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload._id,
        );
        draft.comments[index].userId = action.payload.userId;
        draft.comments[index].content = action.payload.content;
        draft.comments[index].updatedAt = action.payload.updatedAt;
      }),
    [UPDATE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [LIKE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload._id,
        );
        draft.comments[index] = action.payload;
      }),
    [LIKE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [UNLIKE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload._id,
        );
        draft.comments[index] = action.payload;
      }),
    [UNLIKE_COMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.commentError = action.payload;
      }),
    [ADD_RECOMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload.targetId,
        );
        if (index > -1)
          draft.comments[index].childId.unshift({
            ...action.payload,
            updatedAt: Date.now(),
          });
      }),
    [ADD_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.recommentError = action.payload;
      }),
    [DELETE_RECOMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload.targetId,
        );
        if (index > -1) {
          draft.comments[index].childId = draft.comments[index].childId.filter(
            v => v._id !== action.payload._id,
          );
        }
        console.log('draft.recomments');
      }),
    [DELETE_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.recommentError = action.payload;
      }),
    [UPDATE_RECOMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload.targetId,
        );
        const childIndex = draft.comments[index].childId.findIndex(
          v => v._id === action.payload._id,
        );
        if (index > -1 || childIndex > -1) {
          draft.comments[index].childId[childIndex] = action.payload;
        }
      }),
    [UPDATE_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.recommentError = action.payload;
      }),
    [LIKE_RECOMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.recomments = action.payload;
      }),
    [LIKE_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.recommentError = action.payload;
      }),
    [UNLIKE_RECOMMENT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.recomments = action.payload;
      }),
    [UNLIKE_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.recommentError = action.payload;
      }),
    [UNLOAD_COMMENTS]: () => initialState,
  },
  initialState,
);
