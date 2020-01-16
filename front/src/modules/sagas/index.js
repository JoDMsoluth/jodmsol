import { all, fork } from "redux-saga/effects";
import posts from "modules/sagas/posts";
import post from "modules/sagas/post";
import comment from "modules/sagas/comment";

export default function* rootSaga() {
  yield all([fork(posts), fork(post), fork(comment)]);
  // 배열 형태로 추가 ex) yield all([fork(user), fork(post)])
}
