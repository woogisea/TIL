import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';

const LoginForm = () => {
    const { form } = useSelector(({auth}) => ({
        form : auth.login
    }));
    const dispatch = useDispatch();

    const onChange = e => {
        const { value, name } = e.target; 
        dispatch(
            changeField(
                {
                    form : 'login',
                    key : name,
                    value
                }
            )
        )
    };
    const onSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch]);
    
    return (
        <AuthForm type = "login" onSubmit = {onSubmit} onChange = {onChange} form = {form}/>
    );
};

export default LoginForm;