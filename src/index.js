import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Visualisator } from './containers/Visualisator';

export const store = createStore(reducers,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Visualisator />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

