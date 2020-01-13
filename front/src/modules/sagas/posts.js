import { all, fork, takeEvery } from "redux-saga/effects";
import {
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  LOAD_POST_REQUEST,
  LOAD_POSTS_REQUEST
} from "../stores/posts";
import createRequestSaga from "src/lib/createRequestSaga";
import {
  addPostApi,
  deletePostApi,
  updatePostApi,
  loadPostApi,
  loadPostsApi
} from "./apis/posts";

//--------------------------------------------------------
const addPost = createRequestSaga("ADD_POST", addPostApi);
const deletePost = createRequestSaga("DELETE_POST", deletePostApi);
const updatePost = createRequestSaga("UPDATE_POST", updatePostApi);
const loadPost = createRequestSaga("LOAD_POST", loadPostApi);
const loadPosts = createRequestSaga("LOAD_POSTS", loadPostsApi);

//---------------------------------------------

function* watchAddPost() {
  yield takeEvery(ADD_POST_REQUEST, addPost);
}
function* watchDeletePost() {
  yield takeEvery(DELETE_POST_REQUEST, deletePost);
}
function* watchUpdatePost() {
  yield takeEvery(UPDATE_POST_REQUEST, updatePost);
}

function* watchLoadPost() {
  yield takeEvery(LOAD_POST_REQUEST, loadPost);
}

function* watchLoadPosts() {
  yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
}

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchDeletePost),
    fork(watchUpdatePost),
    fork(watchLoadPost),
    fork(watchLoadPosts)
  ]);
}
