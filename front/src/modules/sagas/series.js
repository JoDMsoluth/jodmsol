import { all, fork, takeEvery } from 'redux-saga/effects';
import createRequestSaga from 'lib/createRequestSaga';
import {
  addSeriesApi,
  deleteSeriesApi,
  updateSeriesApi,
  loadAllSeriesApi,
  loadSeriesApi,
  searchSeriesApi,
} from './apis/series';
import {
  ADD_SERIES_REQUEST,
  DELETE_SERIES_REQUEST,
  UPDATE_SERIES_REQUEST,
  LOAD_ALL_SERIES_REQUEST,
  LOAD_SERIES_REQUEST,
  SEARCH_SERIES_REQUEST,
} from '../stores/series';

//--------------------------------------------------------
const addSeries = createRequestSaga('ADD_SERIES', addSeriesApi);
const deleteSeries = createRequestSaga('DELETE_SERIES', deleteSeriesApi);
const updateSeries = createRequestSaga('UPDATE_SERIES', updateSeriesApi);
const loadAllSeries = createRequestSaga('LOAD_ALL_SERIES', loadAllSeriesApi);
const loadSeries = createRequestSaga('LOAD_SERIES', loadSeriesApi);
const searchSeries = createRequestSaga('SEARCH_SERIES', searchSeriesApi);
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
function* watchLoadAllSeries() {
  yield takeEvery(LOAD_ALL_SERIES_REQUEST, loadAllSeries);
}
function* watchLoadSeries() {
  yield takeEvery(LOAD_SERIES_REQUEST, loadSeries);
}
function* watchSearchSeries() {
  yield takeEvery(SEARCH_SERIES_REQUEST, searchSeries);
}

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddSeries),
    fork(watchDeleteSeries),
    fork(watchUpdateSeries),
    fork(watchLoadAllSeries),
    fork(watchLoadSeries),
    fork(watchSearchSeries),
  ]);
}
