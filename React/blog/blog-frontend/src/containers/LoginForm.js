import React, { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';

const LoginForm = () => {
    const { form } = useSelector(({auth}) =>({
        form : auth.login
    }))
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;
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
    }

    useEffect(() => {
        dispatch(
            initializeForm('login')
        )
    }, [dispatch])


    return (
        <AuthForm form = {form} type = "login" onChange = {onChange} onSubmit = {onSubmit} />
    );
};

export default LoginForm;