import { createAction } from '@reduxjs/toolkit';

export const setToken = createAction('auth/setToken'); // Creo el action para realizar algo, ejemplo setear token
export const setRole = createAction('auth/setRole');
export const clearToken = createAction('auth/clearToken');