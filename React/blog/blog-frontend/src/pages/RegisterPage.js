import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplete from '../components/auth/AuthTemplete';

const RegisterPage = () => {
    return (
        <div>
            <AuthTemplete>
                <AuthForm type = "register" />
            </AuthTemplete>
        </div>
    );
};

export default RegisterPage;