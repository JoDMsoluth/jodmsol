import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import {
  addSeriesApi,
  deleteSeriesApi,
  updateSeriesApi,
  loadSeriesApi,
  loadSeriesPostsApi
} from "./apis/series";
import {
  ADD_SERIES_REQUEST,
  DELETE_SERIES_REQUEST,
  UPDATE_SERIES_REQUEST,
  LOAD_SERIES_REQUEST,
  LOAD_SERIES_POSTS_REQUEST
} from "../stores/series";

//--------------------------------------------------------
const addSeries = createRequestSaga("ADD_SERIES", addSeriesApi);
const deleteSeries = createRequestSaga("DELETE_SERIES", deleteSeriesApi);
const updateSeries = createRequestSaga("UPDATE_SERIES", updateSeriesApi);
const loadSeries = createRequestSaga("LOAD_SERIES", loadSeriesApi);
const loadSeriesPosts = createRequestSaga(
  "LOAD_SERIES_POSTS",
  loadSeriesPostsApi
);

//---------------------------------------------

function* watchAddSeries() {
  yield takeEvery(ADD_SERIES_REQUEST, addSeries);
}
function* watchDeleteSeries() {
  yield takeEvery(DELETE_SERIES_REQUEST, deleteSeries);
}
function* watchUpdateSeries() {
  yield takeEvery(UPDATE_SERIES_REQUEST, updateSeries);
}
function* watchLoadSeries() {
  yield takeEvery(LOAD_SERIES_REQUEST, loadSeries);
}
function* watchLoadSeriesPosts() {
  yield takeEvery(LOAD_SERIES_POSTS_REQUEST, loadSeriesPosts);
}

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddSeries),
    fork(watchDeleteSeries),
    fork(watchUpdateSeries),
    fork(watchLoadSeries),
    fork(watchLoadSeriesPosts)
  ]);
}
