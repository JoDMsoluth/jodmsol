import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import { LOAD_POSTS_REQUEST } from "../stores/posts";
import { loadPostsApi, loadHashtagsApi, loadSeriesApi } from "./apis/posts";
import { LOAD_HASHTAGS_REQUEST } from "modules/stores/hashtags";
import { LOAD_SERIES_REQUEST } from "modules/stores/series";

//--------------------------------------------------------
const loadPosts = createRequestSaga("LOAD_POSTS", loadPostsApi);
const loadHashtags = createRequestSaga("LOAD_HASHTAGS", loadHashtagsApi);
const loadSeries = createRequestSaga("LOAD_SERIES", loadSeriesApi);

//---------------------------------------------
function* watchLoadPosts() {
  yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadTags() {
  yield takeEvery(LOAD_HASHTAGS_REQUEST, loadHashtags);
}
function* watchLoadSeries() {
  yield takeEvery(LOAD_SERIES_REQUEST, loadSeries);
}
//---------------------------------------

export default function* userSaga() {
  yield all([fork(watchLoadPosts), fork(watchLoadTags), fork(watchLoadSeries)]);
}
