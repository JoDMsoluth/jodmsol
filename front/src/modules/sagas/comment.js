import { all, fork, takeEvery } from "redux-saga/effects";
import createRequestSaga from "lib/createRequestSaga";
import {
  addCommentApi,
  deleteCommentApi,
  updateCommentApi,
  loadCommentsApi
} from "./apis/comment";
import {
  ADD_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  UPDATE_COMMENT_REQUEST,
  LOAD_COMMENTS_REQUEST
} from "../stores/comment";

//--------------------------------------------------------
const addComment = createRequestSaga("ADD_COMMENT", addCommentApi);
const deleteComment = createRequestSaga("DELETE_COMMENT", deleteCommentApi);
const updateComment = createRequestSaga("UPDATE_COMMENT", updateCommentApi);
const loadComments = createRequestSaga("LOAD_COMMENTS", loadCommentsApi);
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

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddComment),
    fork(watchDeleteComment),
    fork(watchUpdateComment),
    fork(watchLoadComments)
  ]);
}
