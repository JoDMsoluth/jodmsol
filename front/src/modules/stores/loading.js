import { createAction, handleActions } from "redux-actions";
import produce from "immer";

export const initialState = {};

export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = createAction(
  START_LOADING,
  requestType => requestType
);
export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType
);
// 여기추가

export default handleActions(
  {
    [START_LOADING]: (state, action) =>
      produce(state, draft => {
        draft[action.payload] = true;
      }),
    [FINISH_LOADING]: (state, action) =>
      produce(state, draft => {
        draft[action.payload] = false;
      })
  },
  initialState
);
