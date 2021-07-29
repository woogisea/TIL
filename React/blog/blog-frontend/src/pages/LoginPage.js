import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplete from '../components/auth/AuthTemplete';

const LoginPage = () => {
    return (
        <AuthTemplete>
            <AuthForm type = "login"/>
        </AuthTemplete>
    );
};

export default LoginPage;