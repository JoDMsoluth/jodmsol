import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  posts: null,
  postsError: null,
  postsSuccess: null,
  lastPage: null
};

export const [
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
] = createRequestActionTypes("LOAD_POSTS");

export const UNLOAD_POSTS = "UNLOAD_POSTS";

export const loadPosts = createAction(
  LOAD_POSTS_REQUEST,
  ({ latest, parpular, category, series, tag, page, filter }) => ({
    latest,
    parpular,
    category,
    series,
    tag,
    page,
    filter
  })
);
export const unloadPosts = createAction(UNLOAD_POSTS);
// 여기추가

export default handleActions(
  {
    [LOAD_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log("posts lastpage", action.payload, action.meta.headers);
        draft.posts = action.payload;
        draft.lastPage = parseInt(action.meta.headers["last-page"], 10);
      }),
    [LOAD_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.postsError = action.payload;
      }),
    [UNLOAD_POSTS]: () => initialState
  },
  initialState
);
