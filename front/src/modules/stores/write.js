import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const initialState = {
  markdown: '',
  title: '',
  tags: '',
  desc: '',
  coverImg: null,
};

export const INITIALIZE = 'INITIALIZE';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_MARKDOWN = 'CHANGE_MARKDOWN';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_DESC = 'CHANGE_DESC';

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const changeMarkdown = createAction(CHANGE_MARKDOWN);
export const changeTitle = createAction(CHANGE_TITLE);
export const changeDesc = createAction(CHANGE_DESC);

// 여기추가

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
      }),
    [CHANGE_MARKDOWN]: (state, action) =>
      produce(state, draft => {
        draft.markdown = action.payload;
      }),
    [CHANGE_TITLE]: (state, action) =>
      produce(state, draft => {
        draft.title = action.payload;
      }),
    [CHANGE_DESC]: (state, action) =>
      produce(state, draft => {
        draft.desc = action.payload;
      }),
  },
  initialState,
);
