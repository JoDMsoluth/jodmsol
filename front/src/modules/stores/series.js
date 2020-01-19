import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  series: null,
  seriesError: null,
  lastPage: 1
};

export const [
  LOAD_SERIES_REQUEST,
  LOAD_SERIES_SUCCESS,
  LOAD_SERIES_FAILURE
] = createRequestActionTypes("LOAD_SERIES");

export const UNLOAD_SERIES = "UNLOAD_SERIES";

export const loadSeries = createAction(
  LOAD_SERIES_REQUEST,
  ({ page, category }) => ({
    page,
    category
  })
);
export const unloadSeries = createAction(UNLOAD_SERIES);
// 여기추가

export default handleActions(
  {
    [LOAD_SERIES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.series = action.payload;
        draft.lastPage = parseInt(action.meta.headers["last-page"], 10);
      }),
    [LOAD_SERIES_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.seriesError = action.payload;
      }),
    [UNLOAD_SERIES]: () => initialState
  },
  initialState
);
