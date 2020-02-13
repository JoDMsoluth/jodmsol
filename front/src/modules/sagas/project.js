import { all, fork, takeEvery } from 'redux-saga/effects';
import createRequestSaga from 'lib/createRequestSaga';
import {
  addProjectApi,
  deleteProjectApi,
  updateProjectApi,
  loadAllProjectApi,
  loadProjectApi,
} from './apis/project';
import {
  ADD_PROJECT_REQUEST,
  DELETE_PROJECT_REQUEST,
  UPDATE_PROJECT_REQUEST,
  LOAD_ALL_PROJECT_REQUEST,
  LOAD_PROJECT_REQUEST,
} from '../stores/project';

//--------------------------------------------------------
const addProject = createRequestSaga('ADD_PROJECT', addProjectApi);
const deleteProject = createRequestSaga('DELETE_PROJECT', deleteProjectApi);
const updateProject = createRequestSaga('UPDATE_PROJECT', updateProjectApi);
const loadAllProject = createRequestSaga('LOAD_ALL_PROJECT', loadAllProjectApi);
const loadProject = createRequestSaga('LOAD_PROJECT', loadProjectApi);
//---------------------------------------------

function* watchAddProject() {
  yield takeEvery(ADD_PROJECT_REQUEST, addProject);
}
function* watchDeleteProject() {
  yield takeEvery(DELETE_PROJECT_REQUEST, deleteProject);
}
function* watchUpdateProject() {
  yield takeEvery(UPDATE_PROJECT_REQUEST, updateProject);
}
function* watchLoadAllProject() {
  yield takeEvery(LOAD_ALL_PROJECT_REQUEST, loadAllProject);
}
function* watchLoadProject() {
  yield takeEvery(LOAD_PROJECT_REQUEST, loadProject);
}

//---------------------------------------

export default function* userSaga() {
  yield all([
    fork(watchAddProject),
    fork(watchDeleteProject),
    fork(watchUpdateProject),
    fork(watchLoadAllProject),
    fork(watchLoadProject),
  ]);
}
