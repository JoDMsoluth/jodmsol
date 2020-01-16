import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  likes: null,
  likesError: null
};

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

export const likePost = createAction(LIKE_POST_REQUEST);
export const unlikePost = createAction(UNLIKE_POST_REQUEST);
// 여기추가

export default handleActions(
  {
    [LIKE_POST_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.likes = action.data;
      }),
    [UNLIKE_POST_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.likesError = action.data;
      })
  },
  initialState
);
