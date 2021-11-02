import React, { useState, useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, login } from '../modules/auth';
import { check } from '../modules/user';
import { withRouter } from 'react-router-dom';

const LoginForm = ({history}) => {

    const [error, setError] = useState(null);
    const { form, auth, authError, user } = useSelector(({auth, user}) =>({
        form : auth.login,
        auth : auth.auth,
        authError : auth.authError,
        user : user.user
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
        const { username, password } = form;
        dispatch(login({username, password}));
    }

    useEffect(() => {
        dispatch(
            initializeForm('login')
        )
    }, [dispatch])

    useEffect(() => {
        if(auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
        
        if(authError) {
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패')
            return;
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            }catch(e) {
                console.log('localStorage is not working');
            }
        }
    }, [user, history]);

    return (
        <AuthForm form = {form} type = 'login' onChange = {onChange} onSubmit = {onSubmit} error = {error} />
    );
};

export default withRouter(LoginForm);