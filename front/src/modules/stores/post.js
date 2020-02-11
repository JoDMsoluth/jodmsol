import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestSaga';

export const initialState = {
  post: null,
  postError: null,
  postSuccess: null,
  toc: null,
  activeHeading: null,
  coverImg: null,
  images: null,
};
export const [
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
] = createRequestActionTypes('UPLOAD_IMAGES');
export const [
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
] = createRequestActionTypes('UPLOAD_IMAGE');

export const [
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
] = createRequestActionTypes('ADD_POST');
export const [
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
] = createRequestActionTypes('DELETE_POST');
export const [
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
] = createRequestActionTypes('LOAD_POST');
export const [
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('UPDATE_POST');

export const [
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
] = createRequestActionTypes('LIKE_POST');
export const [
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
] = createRequestActionTypes('UNLIKE_POST');

export const likePost = createAction(LIKE_POST_REQUEST);
export const unlikePost = createAction(UNLIKE_POST_REQUEST);

export const SET_TOC = 'SET_TOC';
export const SET_ACTIVE_HEADING = 'SET_ACTIVE_HEADING';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const UNLOAD_POST = 'UNLOAD_POST';

export const setToc = createAction(SET_TOC, toc => toc);
export const uploadImg = createAction(
  UPLOAD_IMAGES_REQUEST,
  ({ imageFormData }) => ({ imageFormData }),
);
export const removeImg = createAction(REMOVE_IMAGE);
export const addPost = createAction(
  ADD_POST_REQUEST,
  ({ title, markdown, tags, id, category, coverImg }) => ({
    title,
    markdown,
    tags,
    id,
    category,
    coverImg,
  }),
);

export const deletePost = createAction(DELETE_POST_REQUEST, id => id);
export const loadPost = createAction(LOAD_POST_REQUEST, id => id);
export const updatePost = createAction(UPDATE_POST_REQUEST);
export const unloadPost = createAction(UNLOAD_POST);
export const setActiveHeading = createAction(SET_ACTIVE_HEADING, id => id);

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
    [SET_TOC]: (state, action) =>
      produce(state, draft => {
        draft.toc = action.payload;
      }),
    [SET_ACTIVE_HEADING]: (state, action) =>
      produce(state, draft => {
        draft.activeHeading = action.payload;
      }),
    [LIKE_POST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.post.likes = action.payload;
      }),
    [LIKE_POST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [UNLIKE_POST_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.post.likes = action.payload;
      }),
    [UNLIKE_POST_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [UPLOAD_IMAGE_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.coverImg = action.payload;
      }),
    [UPLOAD_IMAGE_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [UPLOAD_IMAGES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.images = action.payload;
      }),
    [UPLOAD_IMAGES_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postError = action.payload;
      }),
    [REMOVE_IMAGE]: state =>
      produce(state, draft => {
        draft.coverImg = null;
      }),

    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);
