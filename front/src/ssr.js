import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from 'modules/stores/configure';
import App from 'App';

const serverRender = async ctx => {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  return {
    html,
    state: store.getState(),
  };
};

export default serverRender;
