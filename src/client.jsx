import * as React from 'react';
import { render } from 'react-dom';

import App from './component/App/';

render(
    <App />,
  document.getElementById('root')
);


if (process && !process.env.production && module.hot) {
  module.hot.accept();
  // module.hot.dispose(function() {
  //   clearInterval(timer);
  // });
}