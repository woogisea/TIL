import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplete from '../components/auth/AuthTemplete';

const RegisterPage = () => {
    return (
        <AuthTemplete>
            <AuthForm type = "register"/>
        </AuthTemplete>
    );
};

export default RegisterPage;