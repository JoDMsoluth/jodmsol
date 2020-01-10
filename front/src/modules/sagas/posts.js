import * as baseApi from "modules/sagas/apis/base";
import { all, call, put, fork, delay, takeEvery } from "redux-saga/effects";

//--------------------------------------------------------

function* logIn(action) {
  const loginInfo = yield call(baseApi.logInAPI, action.payload);
  console.log("result : ", loginInfo);
  yield delay(3000);
  try {
    yield put({
      type: "LOG_IN_SUCCESS",
      payload: {
        loginInfo: loginInfo
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: "LOG_IN_FAILURE",
      error: e
    });
  }
}
function* logOut() {
  yield call(
    baseApi.logOutAPI
    // action.payload
  );
  yield delay(3000);
  try {
    yield put({
      type: "LOG_OUT_SUCCESS"
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: "LOG_OUT_FAILURE",
      error: e
    });
  }
}
//---------------------------------------------

function* watchLogin() {
  yield takeEvery("LOG_IN_REQUEST", logIn);
}
function* watchLogout() {
  yield takeEvery("LOG_OUT_REQUEST", logOut);
}

//---------------------------------------

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
