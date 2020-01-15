import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "src/lib/createRequestSaga";

export const initialState = {
  post: null,
  posts: null,
  postError: null,
  postSuccess: null,
  lastPage: null
};

export const [
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
] = createRequestActionTypes("LOAD_POSTS");

export const UNLOAD_POSTS = "UNLOAD_POSTS";

export const loadPosts = createAction(LOAD_POSTS_REQUEST, ({ tag, page }) => ({
  tag,
  page
}));
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
        draft.postError = action.payload;
      }),
    [UNLOAD_POSTS]: () => initialState
  },
  initialState
);
