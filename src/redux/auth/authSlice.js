import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});
// Експортуємо редюсер
export const authReducer = authSlice.reducer;
