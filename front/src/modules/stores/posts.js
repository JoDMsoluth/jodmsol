import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "src/lib/createRequestSaga";

export const initialState = {
  post: null,
  posts: null,
  postError: null,
  postSuccess: null
};

export const [
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
] = createRequestActionTypes("LOAD_POSTS");
export const [
  LOAD_HASHTAG_REQUEST,
  LOAD_HASHTAG_SUCCESS,
  LOAD_HASHTAG_FAILURE
] = createRequestActionTypes("LOAD_HASHTAG");
export const [
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE
] = createRequestActionTypes("UPLOAD_IMAGES");
export const [
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
] = createRequestActionTypes("ADD_POST");
export const [
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
] = createRequestActionTypes("LIKE_POST");
export const [
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE
] = createRequestActionTypes("UNLIKE_POST");
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
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
] = createRequestActionTypes("DELETE_POST");
export const [
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE
] = createRequestActionTypes("LOAD_POST");
export const [
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE
] = createRequestActionTypes("UPDATE_POST");

export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const UNLOAD_POST = "UNLOAD_POST";

export const loadPosts = createAction(LOAD_POSTS_REQUEST);
export const loadHashTags = createAction(LOAD_HASHTAG_REQUEST);
export const uploadImg = createAction(UPLOAD_IMAGES_REQUEST);
export const removeImg = createAction(REMOVE_IMAGE);
export const addPost = createAction(ADD_POST_REQUEST);
export const likePost = createAction(LIKE_POST_REQUEST);
export const unlikePost = createAction(UNLIKE_POST_REQUEST);
export const addComment = createAction(ADD_COMMENT_REQUEST);
export const loadComments = createAction(LOAD_COMMENTS_REQUEST);
export const deletePost = createAction(DELETE_POST_REQUEST, id => id);
export const loadPost = createAction(LOAD_POST_REQUEST, id => id);
export const updatePost = createAction(UPDATE_POST_REQUEST);
export const unloadPost = createAction(UNLOAD_POST);

// 여기추가

export default handleActions(
  {
    [LOAD_POST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.post = action.payload;
      }),
    [LOAD_POST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [DELETE_POST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.postSuccess = action.payload;
      }),
    [DELETE_POST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [UPDATE_POST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.post = action.payload;
      }),
    [UPDATE_POST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [ADD_POST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.postSuccess = action.payload;
      }),
    [ADD_POST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [LOAD_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.posts = action.payload;
      }),
    [LOAD_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [UNLOAD_POST]: () => initialState
  },
  initialState
);
