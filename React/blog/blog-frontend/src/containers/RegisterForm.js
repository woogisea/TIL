import React, { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, register } from '../modules/auth';


const RegisterForm = () => {
    const { form, auth , authError } = useSelector(({auth}) =>({
        form : auth.register,
        auth : auth.auth,
        authError : auth.authError
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
        const { username, password, passwordConfirm } = form;
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(register({username, password}));
    }

    useEffect(() => {
        dispatch(
            initializeForm('register')
        )
    }, [dispatch])

    useEffect(() => {
        if(authError) {
            console.log('오류 발생');
            console.log(authError);
            return;
        }

        if(auth) {
            console.log('회원가입 성공');
            console.log(auth);
        }
        
    }, [authError, auth]);


    return (
        <AuthForm form = {form} type = "register" onChange = {onChange} onSubmit = {onSubmit} />
    );
};

export default RegisterForm;