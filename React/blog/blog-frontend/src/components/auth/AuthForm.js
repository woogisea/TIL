import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;

    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

function AuthForm({ type, form, onChange, onSubmit }) {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          name="username"
          value={form.username}
          placeholder="아이디"
          onChange={onChange}
        />
        <StyledInput
          type="password"
          name="password"
          value={form.password}
          placeholder="비밀번호"
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            placeholder="비밀번호 확인"
            onChange={onChange}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
