import axios from 'axios';

import { useDispatch } from 'react-redux';
import { registerFailure, registerSuccess } from '../../modules/auth';

export function useRegisterHook() {
  const dispatch = useDispatch();

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

  return { onSubmit };
}
