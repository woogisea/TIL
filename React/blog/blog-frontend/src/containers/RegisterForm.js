import React, { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';

const RegisterForm = () => {
    const { form } = useSelector(({auth}) =>({
        form : auth.register
    }))
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField(
                {
                    form : 'register',
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
            initializeForm('register')
        )
    }, [dispatch])


    return (
        <AuthForm form = {form} type = "register" onChange = {onChange} onSubmit = {onSubmit} />
    );
};

export default RegisterForm;