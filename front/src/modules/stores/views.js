import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestSaga';

export const initialState = {
  todayViews: 0,
  totalViews: 0,
  viewsError: null,
};

export const [
  LOAD_VIEWS_REQUEST,
  LOAD_VIEWS_SUCCESS,
  LOAD_VIEWS_FAILURE,
] = createRequestActionTypes('LOAD_VIEWS');

export const UNLOAD_VIEWS = 'UNLOAD_VIEWS';

export const loadViews = createAction(LOAD_VIEWS_REQUEST);
export const unloadViews = createAction(UNLOAD_VIEWS);
// 여기추가

export default handleActions(
  {
    [LOAD_VIEWS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.totalViews = action.payload.getTotalViews[0].totalViews;
        draft.todayViews = action.payload.getTodayViews.todayViews;
      }),
    [LOAD_VIEWS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.viewsError = action.payload;
      }),
    [UNLOAD_VIEWS]: () => initialState,
  },
  initialState,
);
