import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import DevTools from './containers/DevTools';

import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/mdbbootstrap/index.css';

ReactDOM.render(
  <Provider store={store}>
    <div> {/* A ne pas supprimer si DevTools présent*/}
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
