import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../components/auth/Login';
import { loginFailure, loginSuccess } from '../../modules/auth';

function LoginForm() {
  const { authError } = useSelector(({ auth }) => ({
    authError: auth.authError,
  }));

  const dispatch = useDispatch();

  async function login(username, password) {
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });
      dispatch(loginSuccess(response.data));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  }

  const onSubmit = (data) => {
    login(data.username, data.password);
  };

  useEffect(() => {
    if (authError) {
      alert('아이디와 비밀번호가 일치하지 않습니다.');
    }
  }, [authError]);

  return <Login onSubmit={onSubmit} />;
}

export default LoginForm;
