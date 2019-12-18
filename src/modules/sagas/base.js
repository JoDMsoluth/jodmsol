import * as baseApi from "modules/sagas/apis/base";
import {
  all,
  call,
  put,
  fork,
  delay,
  takeEvery,
  takeLatest
} from "redux-saga/effects";

import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  DELETE_USER_REQUEST,
  LOAD_USER_REQUEST,
  EDIT_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE
} from "modules/stores/base";

//--------------------------------------------------------

function* logIn(action) {
  const loginInfo = yield call(baseApi.logInAPI, action.payload);
  console.log("result : ", loginInfo);
  yield delay(3000);
  try {
    yield put({
      type: LOG_IN_SUCCESS,
      payload: {
        loginInfo: loginInfo
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
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
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}
function* signUp(action) {
  try {
    const result = yield call(baseApi.signUpAPI, action.payload);
    yield delay(3000);
    console.log("signup result", result.result);
    yield put({
      type: SIGN_UP_SUCCESS,
      result: result.result
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}
function* deleteUser(action) {
  const result = yield call(baseApi.deleteUserAPI, action.payload);
  console.log("deleteUser result", result.result);
  try {
    yield put({
      type: DELETE_USER_SUCCESS,
      result: result.result
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: DELETE_USER_FAILURE,
      error: e
    });
  }
}
function* loadUser(action) {
  const result = yield call(
    baseApi.loadUserAPI,
    "gldjfh7"
    // action.payload.userId
  );
  console.log("loadUser result", result);
  try {
    yield put({
      type: LOAD_USER_SUCCESS,
      result: result
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}
function* editUser(action) {
  const result = yield call(baseApi.editUserAPI, action.payload);
  console.log("edit profile", result.result);
  try {
    yield put({
      type: EDIT_USER_SUCCESS,
      result: result.result
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: EDIT_USER_FAILURE,
      error: e
    });
  }
}
//---------------------------------------------

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}
function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchDeleteUser() {
  yield takeLatest(DELETE_USER_REQUEST, deleteUser);
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
function* watchEditUser() {
  yield takeEvery(EDIT_USER_REQUEST, editUser);
}

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLogout),
    fork(watchDeleteUser),
    fork(watchLoadUser),
    fork(watchEditUser)
  ]);
}
