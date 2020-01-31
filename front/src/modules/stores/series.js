import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { createRequestActionTypes } from "lib/createRequestSaga";

export const initialState = {
  series: null,
  seriesError: null,
  seriesPosts: null,
  lastPage: 1
};

export const [
  LOAD_SERIES_REQUEST,
  LOAD_SERIES_SUCCESS,
  LOAD_SERIES_FAILURE
] = createRequestActionTypes("LOAD_SERIES");
export const [
  LOAD_SERIES_POSTS_REQUEST,
  LOAD_SERIES_POSTS_SUCCESS,
  LOAD_SERIES_POSTS_FAILURE
] = createRequestActionTypes("LOAD_SERIES_POSTS");

export const [
  DELETE_SERIES_REQUEST,
  DELETE_SERIES_SUCCESS,
  DELETE_SERIES_FAILURE
] = createRequestActionTypes("DELETE_SERIES");
export const [
  UPDATE_SERIES_REQUEST,
  UPDATE_SERIES_SUCCESS,
  UPDATE_SERIES_FAILURE
] = createRequestActionTypes("UPDATE_SERIES");
export const [
  ADD_SERIES_REQUEST,
  ADD_SERIES_SUCCESS,
  ADD_SERIES_FAILURE
] = createRequestActionTypes("ADD_SERIES");

export const UNLOAD_SERIES = "UNLOAD_SERIES";

export const loadSeries = createAction(
  LOAD_SERIES_REQUEST,
  ({ page, category }) => ({
    page,
    category
  })
);
export const loadSeriesPosts = createAction(
  LOAD_SERIES_POSTS_REQUEST,
  id => id
);
export const addSeries = createAction(
  ADD_SERIES_REQUEST,
  ({ title, markdown, desc, category }) => ({ title, markdown, desc, category })
);
export const deleteSeries = createAction(DELETE_SERIES_REQUEST, id => id);
export const updateSeries = createAction(
  UPDATE_SERIES_REQUEST,
  ({ id, title, markdown, desc, category }) => ({
    id,
    title,
    markdown,
    desc,
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
    [LOAD_SERIES_POSTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.seriesPosts = action.payload;
      }),
    [LOAD_SERIES_POSTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.seriesError = action.payload;
      }),
    [ADD_SERIES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.series && draft.series.unshift(action.payload);
      }),
    [ADD_SERIES_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.seriesError = action.payload;
      }),
    [DELETE_SERIES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.series = draft.series.filter(v => v._id !== action.payload);
      }),
    [DELETE_SERIES_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.seriesError = action.payload;
      }),
    [UPDATE_SERIES_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload._id
        );
        draft.series[index].title = action.payload.title;
        draft.series[index].desc = action.payload.desc;
        draft.series[index].updatedAt = action.payload.updatedAt;
      }),
    [UPDATE_SERIES_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.seriesError = action.payload;
      }),
    [UNLOAD_SERIES]: () => initialState
  },
  initialState
);
