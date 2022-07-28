import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import {
  changeField,
  initializeForm,
  registerFailure,
  registerSuccess,
} from '../../modules/auth';

function RegisterForm() {
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  async function register() {
    const { username, password } = form;
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        password,
      });
      dispatch(registerSuccess(response.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
    console.log(username, password);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    register();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterForm;
