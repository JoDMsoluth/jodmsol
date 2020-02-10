import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from 'modules/stores/loading';

export const createRequestActionTypes = type => {
  const REQUEST = `${type}_REQUEST`;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [REQUEST, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type));
    console.log(type, action);
    try {
      const response = yield call(request, action.payload);
      console.log('res', response);
      console.log(SUCCESS, FAILURE);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
