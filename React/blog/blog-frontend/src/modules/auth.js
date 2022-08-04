import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  auth: null,
  authError: null,
  count: 0,
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

export const getAuthError = (state) => state.auth.authError;
export const getCount = (state) => state.auth.count;
export const authSelector = createSelector(
  getAuthError,
  getCount,
  (authError, count) => ({
    authError,
    count,
  }),
);

export default authSlice.reducer;
