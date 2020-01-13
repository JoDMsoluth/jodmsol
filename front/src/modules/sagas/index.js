import { all, fork } from "redux-saga/effects";
import posts from "src/modules/sagas/posts";

export default function* rootSaga() {
  yield all([fork(posts)]);
  // 배열 형태로 추가 ex) yield all([fork(user), fork(post)])
}
