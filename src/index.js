import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mapStateToProps from './action'
import store from './reducer'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
