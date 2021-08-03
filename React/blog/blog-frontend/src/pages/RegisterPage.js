import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import RegisterForm from '../container/auth/RegisterForm';

const RegisterPage = () => {
    return (
        <div>
            <AuthTemplete>
                <RegisterForm />
            </AuthTemplete>
        </div>
    );
};

export default RegisterPage;