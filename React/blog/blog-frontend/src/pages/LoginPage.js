import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import LoginForm from '../container/auth/LoginForm';

const LoginPage = () => {
    return (
        <div>
            <AuthTemplete>
                <LoginForm />
            </AuthTemplete>
        </div>
    );
};

export default LoginPage;