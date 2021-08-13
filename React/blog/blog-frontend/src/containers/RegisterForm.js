import React, { useEffect, useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, register } from '../modules/auth';
import { check } from '../modules/user';
import { withRouter } from 'react-router-dom';


const RegisterForm = ({ history }) => {
    const [error,setError] = useState(null);
    const { form, auth , authError, user} = useSelector(({auth, user}) =>({
        form : auth.register,
        auth : auth.auth,
        authError : auth.authError,
        user : user.user,
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
            setError('비밀번호가 일치하지 않습니다');
            dispatch(changeField({form : 'register', key : 'password', value : ''}));
            dispatch(changeField({form : 'register', key : 'passwordConfirm', value : ''}));
            return;
        }
        if([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하세요');
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
            if(authError.response.statue === 409) {
                setError('이미 존재하는 계정명');
            }
            console.log('오류 발생');
            console.log(authError);
            return;
        }

        if(auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check())
        }
        
    }, [authError, auth, dispatch]);

    useEffect(() => {
        if(user) {
            console.log('check API 성공');
            console.log(user);
            history.push('/');
        }
    }, [user, history])


    return (
        <AuthForm form = {form} type = "register" onChange = {onChange} onSubmit = {onSubmit} error = {error}/>
    );
};

export default withRouter(RegisterForm);