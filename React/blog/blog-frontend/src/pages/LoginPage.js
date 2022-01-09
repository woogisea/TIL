import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import LoginForm from '../container/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplete>
      <LoginForm type="login" />
    </AuthTemplete>
  );
};

export default LoginPage;
