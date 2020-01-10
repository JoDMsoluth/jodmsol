import { all, fork } from "redux-saga/effects";
import base from "src/modules/sagas/posts";
// import axios from "axios";

// axios.defaults.baseURL = "http://kickvillage.com/";

export default function* rootSaga() {
  yield all([fork(base)]);
  // 배열 형태로 추가 ex) yield all([fork(user), fork(post)])
}
