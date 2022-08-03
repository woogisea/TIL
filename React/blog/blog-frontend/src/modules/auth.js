import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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

export const { registerSuccess, registerFailure, loginSuccess, loginFailure } =
  authSlice.actions;

export default authSlice.reducer;
