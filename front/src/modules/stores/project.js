import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestSaga';

export const initialState = {
  project: null,
  projects: null,
  projectError: null,
  projectPosts: null,
  lastPage: 1,
};
export const [
  LOAD_ALL_PROJECT_REQUEST,
  LOAD_ALL_PROJECT_SUCCESS,
  LOAD_ALL_PROJECT_FAILURE,
] = createRequestActionTypes('LOAD_ALL_PROJECT');
export const [
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAILURE,
] = createRequestActionTypes('LOAD_PROJECT');

export const [
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
] = createRequestActionTypes('DELETE_PROJECT');
export const [
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
] = createRequestActionTypes('UPDATE_PROJECT');
export const [
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
] = createRequestActionTypes('ADD_PROJECT');

export const UNLOAD_PROJECT = 'UNLOAD_PROJECT';

export const loadProject = createAction(
  LOAD_ALL_PROJECT_REQUEST,
  ({ category }) => ({
    category,
  }),
);
export const loadProjectPosts = createAction(LOAD_PROJECT_REQUEST, id => id);
export const addProejct = createAction(
  ADD_PROJECT_REQUEST,
  ({ title, markdown, desc, category }) => ({
    title,
    markdown,
    desc,
    category,
  }),
);
export const deleteProejct = createAction(DELETE_PROJECT_REQUEST, id => id);
export const updateProejct = createAction(
  UPDATE_PROJECT_REQUEST,
  ({ id, title, markdown, desc, category }) => ({
    id,
    title,
    markdown,
    desc,
    category,
  }),
);

export const unloadProejct = createAction(UNLOAD_PROJECT);
// 여기추가

export default handleActions(
  {
    [LOAD_ALL_PROJECT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.projects = action.payload;
      }),
    [LOAD_ALL_PROJECT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.projectError = action.payload;
      }),
    [LOAD_PROJECT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.project = action.payload;
      }),
    [LOAD_PROJECT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.projectError = action.payload;
      }),
    [ADD_PROJECT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.project && draft.project.unshift(action.payload);
      }),
    [ADD_PROJECT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.projectError = action.payload;
      }),
    [DELETE_PROJECT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.project = draft.project.filter(v => v._id !== action.payload);
      }),
    [DELETE_PROJECT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.projectError = action.payload;
      }),
    [UPDATE_PROJECT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const index = draft.comments.findIndex(
          v => v._id === action.payload._id,
        );
        draft.project[index].title = action.payload.title;
        draft.project[index].desc = action.payload.desc;
        draft.project[index].updatedAt = action.payload.updatedAt;
      }),
    [UPDATE_PROJECT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.projectError = action.payload;
      }),
    [UNLOAD_PROJECT]: () => initialState,
  },
  initialState,
);
