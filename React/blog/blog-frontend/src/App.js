import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      <Route component={WritePage} path="/write"></Route>
      <Route component={PostPage} path="/@:username/:postId"></Route>
      <Route component={PostListPage} path={['/@:username', '/']} exact></Route>
    </>
  );
};

export default App;
