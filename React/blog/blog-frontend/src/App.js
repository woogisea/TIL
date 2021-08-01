import React from 'react';
import { Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import PostListPage from './Pages/PostListPage';
import PostPage from './Pages/PostPage';
import RegisterPage from './Pages/RegisterPage';
import WritePage from './Pages/WritePage';

const App = () => {
  return (
    <>
      <Route component = {PostListPage} path = {['/@:username', '/']} exact />
      <Route component = {RegisterPage} path = '/register' />
      <Route component = {LoginPage} path ="/login" />
      <Route component = {WritePage} path = "/write" />
      <Route component = {PostPage} path = "/@:username/:postId" />
    </> 
  );
};

export default App;