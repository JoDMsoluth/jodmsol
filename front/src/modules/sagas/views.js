import { all, fork, takeEvery } from 'redux-saga/effects';
import createRequestSaga from 'lib/createRequestSaga';
import { LOAD_VIEWS_REQUEST } from 'modules/stores/views';
import { loadViewsApi } from './apis/views';

//--------------------------------------------------------
const loadViews = createRequestSaga('LOAD_VIEWS', loadViewsApi);

//---------------------------------------------

function* watchLoadViews() {
  yield takeEvery(LOAD_VIEWS_REQUEST, loadViews);
}

//---------------------------------------

export default function* userSaga() {
  yield all([fork(watchLoadViews)]);
}
