import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import LoginForm from '../containers/auth/LoginForm';

function LoginPage() {
  return (
    <AuthTemplete>
      <LoginForm />
    </AuthTemplete>
  );
}

export default LoginPage;
