import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    username: '',
    password: '',
  },
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeField: (state, action) => {
      state[action.payload.form][action.payload.key] = action.payload.value;
    },
    initializeForm: (state, action) => {
      Object.assign(state[action.payload], initialState[action.payload]);
    },
    registerSuccess(state, action) {
      state.auth = action.payload;
      state.authError = null;
    },
    registerFailure(state, action) {
      state.authError = action.payload;
    },
    loginSuccess(state, action) {
      state.auth = action.payload;
      state.authError = null;
    },
    loginFailure(state, action) {
      state.authError = action.payload;
    },
  },
});

export const {
  changeField,
  initializeForm,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export default authSlice.reducer;
