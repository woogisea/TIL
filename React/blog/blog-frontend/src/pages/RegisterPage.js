import React from 'react';
import RegisterForm from '../container/auth/RegisterForm';
import AuthTemplete from '../components/auth/AuthTemplete';

const RegisterPage = () => {
  return (
    <AuthTemplete>
      <RegisterForm type="register" />
    </AuthTemplete>
  );
};

export default RegisterPage;
