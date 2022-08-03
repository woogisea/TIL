import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import Register from '../components/auth/Register';

function RegisterPage() {
  return (
    <AuthTemplete>
      <Register />
    </AuthTemplete>
  );
}

export default RegisterPage;
