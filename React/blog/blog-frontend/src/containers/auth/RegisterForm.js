import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Register from '../../components/auth/Register';
import { registerFailure, registerSuccess } from '../../modules/auth';

function RegisterForm() {
  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));
  const dispatch = useDispatch();
  const { reset } = useForm();

  async function register(username, password) {
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        password,
      });
      dispatch(registerSuccess(response.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }

  const onSubmit = (data) => {
    if (data.password !== data.passwordConfirm) {
      alert('오류');
      return;
    }
    register(data.username, data.password);
  };

  useEffect(() => {
    if (auth) {
      reset();
    }
    reset();
  }, [auth, reset]);

  return <Register onSubmit={onSubmit} />;
}

export default RegisterForm;
