import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import { LOAD_POSTS_REQUEST } from "../stores/posts";
import { loadPostsApi } from "./apis/posts";

//--------------------------------------------------------
const loadPosts = createRequestSaga("LOAD_POSTS", loadPostsApi);

//---------------------------------------------
function* watchLoadPosts() {
  yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
}
//---------------------------------------

export default function* userSaga() {
  yield all([fork(watchLoadPosts)]);
}
