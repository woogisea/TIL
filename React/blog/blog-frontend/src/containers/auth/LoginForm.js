import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, loginFailure, loginSuccess } from '../../modules/auth';

function LoginForm() {
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  async function login() {
    const { username, password } = form;
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

  const onSubmit = (e) => {
    e.preventDefault();

    login();
  };
  return (
    <AuthForm
      type="login"
      onChange={onChange}
      form={form}
      onSubmit={onSubmit}
    />
  );
}

export default LoginForm;
