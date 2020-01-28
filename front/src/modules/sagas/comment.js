import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import {
  addCommentApi,
  deleteCommentApi,
  updateCommentApi,
  loadCommentsApi,
  addRecommentApi,
  deleteRecommentApi,
  updateRecommentApi
} from "./apis/comment";
import {
  ADD_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  UPDATE_COMMENT_REQUEST,
  LOAD_COMMENTS_REQUEST,
  ADD_RECOMMENT_REQUEST,
  DELETE_RECOMMENT_REQUEST,
  UPDATE_RECOMMENT_REQUEST,
} from "../stores/comment";
//--------------------------------------------------------
const addComment = createRequestSaga("ADD_COMMENT", addCommentApi);
const deleteComment = createRequestSaga("DELETE_COMMENT", deleteCommentApi);
const updateComment = createRequestSaga("UPDATE_COMMENT", updateCommentApi);
const loadComments = createRequestSaga("LOAD_COMMENTS", loadCommentsApi);
const addRecomment = createRequestSaga("ADD_RECOMMENT", addRecommentApi);
const deleteRecomment = createRequestSaga(
  "DELETE_RECOMMENT",
  deleteRecommentApi
);
const updateRecomment = createRequestSaga(
  "UPDATE_RECOMMENT",
  updateRecommentApi
);
//---------------------------------------------

function* watchAddComment() {
  yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}
function* watchDeleteComment() {
  yield takeEvery(DELETE_COMMENT_REQUEST, deleteComment);
}
function* watchUpdateComment() {
  yield takeEvery(UPDATE_COMMENT_REQUEST, updateComment);
}
function* watchLoadComments() {
  yield takeEvery(LOAD_COMMENTS_REQUEST, loadComments);
}

function* watchAddRecomment() {
  yield takeEvery(ADD_RECOMMENT_REQUEST, addRecomment);
}
function* watchDeleteRecomment() {
  yield takeEvery(DELETE_RECOMMENT_REQUEST, deleteRecomment);
}
function* watchUpdateRecomment() {
  yield takeEvery(UPDATE_RECOMMENT_REQUEST, updateRecomment);
}
//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddComment),
    fork(watchDeleteComment),
    fork(watchUpdateComment),
    fork(watchLoadComments),
    fork(watchAddRecomment),
    fork(watchDeleteRecomment),
    fork(watchUpdateRecomment),
  ]);
}
