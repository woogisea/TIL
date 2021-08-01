import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplete from '../components/auth/AuthTemplete';
import Button from '../components/common/Button';

const LoginPage = () => {
    return (
        <div>
            <AuthTemplete>
                <AuthForm type = "login" />
            </AuthTemplete>
        </div>
    );
};

export default LoginPage;