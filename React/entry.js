import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './Containers/MainApp';
import loginReducer from './Reducers/loginReducers';

var store = createStore(loginReducer);

var rootElement = document.getElementById('root');

React.render(
  <Provider store={store}>
   {() => <App />}
  </Provider>
  , rootElement);