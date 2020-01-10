import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "modules/stores";
import { Provider } from "react-redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "modules/sagas";
import { GlobalStyle } from "./lib/styles/StyledGlobal";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

console.log(store.getState());

// 리덕스 개발자도구 적용

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
