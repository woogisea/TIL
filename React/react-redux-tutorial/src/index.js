import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer  from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

//스토어 만들고 적용하기
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store = {store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

