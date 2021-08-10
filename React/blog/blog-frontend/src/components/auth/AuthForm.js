import React from 'react';
import styled from 'styled-components';
import palette from  '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;
const StyledInput = styled.input`
    width: 100%;
    font-size: 1rem;
    border: none;
    outline: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;

    &:focus {
        border-bottom: 1px solid ${palette.gray[7]};
    }

    &+&{
        margin-top: 1rem;
    }
`;
const Footer = styled.div`
    margin-top: 2rem;
    text-align : right;

    a{
        color: ${palette.gray[6]};
        text-decoration: underline;

        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;
const textMap = {
    login : '로그인',
    register : '회원가입'
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit = {onSubmit}>
                <StyledInput type = "text" name = "username" placeholder = "아이디" value = {form.username} onChange = {onChange}/>
                <StyledInput type = "password" name = "password" placeholder = "비밀번호" value = {form.password} onChange = {onChange} />
                {type === 'register' && (
                    <StyledInput type = "password" name = "passwordConfirm" placeholder = "비밀번호 확인" value = {form.passwordConfirm} onChange = {onChange}/>
                )}
                <Button fullWidth cyan style = {{marginTop : '1rem'}}>{text}</Button>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to = "/register">회원가입</Link>
                ) : (
                    <Link to = "/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;