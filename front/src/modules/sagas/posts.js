import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import { LOAD_POSTS_REQUEST, LOAD_TAG_POSTS_REQUEST } from "../stores/posts";
import { loadPostsApi, loadHashtagsApi, loadPostsInTagApi } from "./apis/posts";
import { LOAD_HASHTAGS_REQUEST } from "modules/stores/hashtags";

//--------------------------------------------------------
const loadPosts = createRequestSaga("LOAD_POSTS", loadPostsApi);
const loadHashtags = createRequestSaga("LOAD_HASHTAGS", loadHashtagsApi);
const loadPostsInTag = createRequestSaga("LOAD_TAG_POSTS", loadPostsInTagApi);

//---------------------------------------------
function* watchLoadPosts() {
  yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadTags() {
  yield takeEvery(LOAD_HASHTAGS_REQUEST, loadHashtags);
}
function* watchLoadPostsInTags() {
  yield takeEvery(LOAD_TAG_POSTS_REQUEST, loadPostsInTag);
}
//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchLoadTags),
    fork(watchLoadPostsInTags)
  ]);
}
