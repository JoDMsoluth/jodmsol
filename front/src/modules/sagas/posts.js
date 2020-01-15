import { all, fork, takeEvery } from "redux-saga/effects";
import {
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  LOAD_POST_REQUEST,
  LOAD_POSTS_REQUEST,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST
} from "../stores/posts";
import createRequestSaga from "src/lib/createRequestSaga";
import {
  addPostApi,
  deletePostApi,
  updatePostApi,
  loadPostApi,
  loadPostsApi,
  likePostApi,
  unlikePostApi
} from "./apis/posts";

//--------------------------------------------------------
const addPost = createRequestSaga("ADD_POST", addPostApi);
const deletePost = createRequestSaga("DELETE_POST", deletePostApi);
const updatePost = createRequestSaga("UPDATE_POST", updatePostApi);
const loadPost = createRequestSaga("LOAD_POST", loadPostApi);
const loadPosts = createRequestSaga("LOAD_POSTS", loadPostsApi);
const likePost = createRequestSaga("LIKE_POST", likePostApi);
const unlikePost = createRequestSaga("UNLIKE_POST", unlikePostApi);

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
function* watchLikePost() {
  yield takeEvery(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
  yield takeEvery(UNLIKE_POST_REQUEST, unlikePost);
}

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchDeletePost),
    fork(watchUpdatePost),
    fork(watchLoadPost),
    fork(watchLoadPosts),
    fork(watchLikePost),
    fork(watchUnlikePost)
  ]);
}
