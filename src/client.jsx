import * as React from 'react';
import { render } from 'react-dom';

import App from './component/App/';
import { Provider } from "react-redux";
import store from "./store/index";

import 'bootstrap/dist/css/bootstrap.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import { addArticle } from "./actions/index";
// store.subscribe(() => console.log('Look ma, Redux!!'))
window.store = store;
// window.addArticle = addArticle;

if (process && !process.env.production && module.hot) {
  module.hot.accept();
  // module.hot.dispose(function() {
  //   clearInterval(timer);
  // });
}