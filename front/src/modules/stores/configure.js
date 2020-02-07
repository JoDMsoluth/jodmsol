import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'modules/stores';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'modules/sagas';

const isDev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  isDev &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export default store;
// 리덕스 개발자도구 적용
