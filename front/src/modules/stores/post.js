import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  post: null,
  postError: null,
  postSuccess: null
};
export const [
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
] = createRequestActionTypes("LOAD_POSTS");
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

export const loadPosts = createAction(LOAD_POSTS_REQUEST, ({ tag, page }) => ({
  tag,
  page
}));
export const uploadImg = createAction(UPLOAD_IMAGES_REQUEST);
export const removeImg = createAction(REMOVE_IMAGE);
export const addPost = createAction(
  ADD_POST_REQUEST,
  ({ title, markdown, tags }) => ({ title, markdown, tags })
);
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
    [UNLOAD_POST]: () => initialState
  },
  initialState
);
