import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestSaga';

export const initialState = {
  posts: null,
  postsError: null,
  postsSuccess: null,
  lastPage: 1,
};

export const [
  SEARCH_POSTS_REQUEST,
  SEARCH_POSTS_SUCCESS,
  SEARCH_POSTS_FAILURE,
] = createRequestActionTypes('SEARCH_POSTS');

export const [
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
] = createRequestActionTypes('LOAD_POSTS');
export const [
  LOAD_TAG_POSTS_REQUEST,
  LOAD_TAG_POSTS_SUCCESS,
  LOAD_TAG_POSTS_FAILURE,
] = createRequestActionTypes('LOAD_TAG_POSTS');
export const [
  LOAD_SERIES_POSTS_REQUEST,
  LOAD_SERIES_POSTS_SUCCESS,
  LOAD_SERIES_POSTS_FAILURE,
] = createRequestActionTypes('LOAD_SERIES_POSTS');

export const UNLOAD_POSTS = 'UNLOAD_POSTS';

export const searchPosts = createAction(
  SEARCH_POSTS_REQUEST,
  ({ category, filter, q, page }) => ({
    category,
    filter,
    q,
    page,
  }),
);

export const loadPostsInSeries = createAction(
  LOAD_SERIES_POSTS_REQUEST,
  ({ category, id, page }) => ({
    category,
    id,
    page,
  }),
);

export const loadPosts = createAction(
  LOAD_POSTS_REQUEST,
  ({ category, tag, page, filter }) => ({
    category,
    tag,
    page,
    filter,
  }),
);

export const loadPostsInTag = createAction(
  LOAD_TAG_POSTS_REQUEST,
  ({ category, tag, page }) => ({
    category,
    tag,
    page,
  }),
);

export const unloadPosts = createAction(UNLOAD_POSTS);
// 여기추가

export default handleActions(
  {
    [LOAD_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log('posts lastpage', action.payload, action.meta.headers);
        draft.posts = action.payload;
        draft.lastPage = parseInt(action.meta.headers['last-page'], 10);
      }),
    [LOAD_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postsError = action.payload;
      }),
    [LOAD_SERIES_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log('posts lastpage', action.payload, action.meta.headers);
        draft.posts = action.payload;
        draft.lastPage = parseInt(action.meta.headers['last-page'], 10);
      }),
    [LOAD_SERIES_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postsError = action.payload;
      }),
    [LOAD_TAG_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log('posts lastpage', action.payload, action.meta.headers);
        draft.posts = action.payload;
        draft.lastPage = parseInt(action.meta.headers['last-page'], 10);
      }),
    [LOAD_TAG_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postsError = action.payload;
      }),
    [SEARCH_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log('action', action);
        draft.posts = action.payload;
      }),
    [SEARCH_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postsError = action.payload;
      }),
    [UNLOAD_POSTS]: () => initialState,
  },
  initialState,
);
