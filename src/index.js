import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store_config from './configs/store_config';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = store_config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
