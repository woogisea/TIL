import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import todo from './module/todo';

const store = createStore(todo, composeWithDevTools());

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
