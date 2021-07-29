import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store = {store}>
      <Route component = {PostListPage} path = {['/@:username', '/']} exact />
      <Route component = {LoginPage} path = "/login" />
      <Route component = {RegisterPage} path = "/register" />
      <Route component = {WritePage} path = "/write" />
      <Route component = {PostPage} path = "/@:username/:postId" />
    </Provider>
  );
};

export default App;