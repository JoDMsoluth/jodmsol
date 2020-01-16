import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  tags: null,
  tagsError: null
};

export const [
  LOAD_HASHTAGS_REQUEST,
  LOAD_HASHTAGS_SUCCESS,
  LOAD_HASHTAGS_FAILURE
] = createRequestActionTypes("LOAD_HASHTAG");

export const loadHashtags = createAction(LOAD_HASHTAGS_REQUEST);
// 여기추가

export default handleActions(
  {
    [LOAD_HASHTAGS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.tags = action.payload;
      }),
    [LOAD_HASHTAGS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.tagsError = action.payload;
      })
  },
  initialState
);
