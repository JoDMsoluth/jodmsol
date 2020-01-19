import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  tags: null,
  tagsError: null,
  lastPage: 1
};

export const [
  LOAD_HASHTAGS_REQUEST,
  LOAD_HASHTAGS_SUCCESS,
  LOAD_HASHTAGS_FAILURE
] = createRequestActionTypes("LOAD_HASHTAGS");

export const UNLOAD_HASHTAGS = "UNLOAD_HASHTAGS";

export const loadHashtags = createAction(
  LOAD_HASHTAGS_REQUEST,
  ({ tag, page, category }) => ({
    tag,
    page,
    category
  })
);
export const unloadHashtags = createAction(UNLOAD_HASHTAGS);
// 여기추가

export default handleActions(
  {
    [LOAD_HASHTAGS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.tags = action.payload;
        draft.lastPage = parseInt(action.meta.headers["last-page"], 10);
      }),
    [LOAD_HASHTAGS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.tagsError = action.payload;
      }),
    [UNLOAD_HASHTAGS]: () => initialState
  },
  initialState
);
