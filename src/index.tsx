import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store';
import DevTools from './containers/DevTools';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
