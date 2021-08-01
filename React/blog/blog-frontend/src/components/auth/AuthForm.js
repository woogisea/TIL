import React from 'react';
import styled from 'styled-components'
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const AuthFormBox = styled.div`
    h3 {
        color : ${palette.gray[8]}
    }
`;
const StyledInput = styled.input`
    width: 100%;
    border: none;
    font-size: 1rem;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;

    &+&{
        margin-top: 1rem;
    }

    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
`;

const Footer = styled.div`
    text-align: right;
    margin-top: 2rem;

    a {
        text-decoration: underline;
        color: ${palette.gray[6]};

        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

//버튼의 기본적인 틀을 지키면서 해당 폼에서만 적용
const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const textMap = {
    login : '로그인',
    register : '회원가입'
};

const AuthForm = ({ type }) => {
    const text = textMap[type];
    return(
        <AuthFormBox>
            <h3>{text}</h3>
            <form>
                <StyledInput name = "username" placeholder = "아이디" />
                <StyledInput type = "password" name = "password" placeholder = "비밀번호"/>
                {type === 'register' && (
                    <StyledInput type = "password" name = "passwordConfirm" placeholder = "비밀번호 확인"/>
                )}
                <ButtonWithMarginTop fullWidth cyan>{text}</ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to = '/register'>회원가입</Link>
                ) : (
                    <Link to = '/login'>로그인</Link>
                )}
            </Footer>
        </AuthFormBox>
    );
};

export default AuthForm;