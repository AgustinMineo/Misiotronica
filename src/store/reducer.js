import { createReducer } from '@reduxjs/toolkit';
import { setToken, setRole, clearToken } from './actions.js';

const initialState = {
  token: null,
  role: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(setRole, (state, action) => {
      state.role = action.payload;
    })
    .addCase(clearToken, (state) => {
      state.token = null;
      state.role = null;
    });
});

export { authReducer };