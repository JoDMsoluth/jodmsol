import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import {
  LOAD_POSTS_REQUEST,
  LOAD_SERIES_POSTS_REQUEST,
  LOAD_TAG_POSTS_REQUEST
} from "../stores/posts";
import {
  loadPostsApi,
  loadHashtagsApi,
  loadSeriesApi,
  loadPostsInSeriesApi,
  loadPostsInTagApi
} from "./apis/posts";
import { LOAD_HASHTAGS_REQUEST } from "modules/stores/hashtags";
import { LOAD_SERIES_REQUEST } from "modules/stores/series";

//--------------------------------------------------------
const loadPosts = createRequestSaga("LOAD_POSTS", loadPostsApi);
const loadHashtags = createRequestSaga("LOAD_HASHTAGS", loadHashtagsApi);
const loadSeries = createRequestSaga("LOAD_SERIES", loadSeriesApi);
const loadPostsInSeries = createRequestSaga(
  "LOAD_SERIES_POSTS",
  loadPostsInSeriesApi
);
const loadPostsInTag = createRequestSaga("LOAD_TAG_POSTS", loadPostsInTagApi);

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
function* watchLoadPostsInSeries() {
  yield takeEvery(LOAD_SERIES_POSTS_REQUEST, loadPostsInSeries);
}
function* watchLoadPostsInTags() {
  yield takeEvery(LOAD_TAG_POSTS_REQUEST, loadPostsInTag);
}
//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchLoadTags),
    fork(watchLoadSeries),
    fork(watchLoadPostsInSeries),
    fork(watchLoadPostsInTags)
  ]);
}
