import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplete from '../components/auth/AuthTemplete';

function RegisterPage() {
  return (
    <AuthTemplete>
      <RegisterForm />
    </AuthTemplete>
  );
}

export default RegisterPage;
