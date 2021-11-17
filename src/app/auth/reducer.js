import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ui: {
    loading: false,
  },
  user: {},
};

export const authReducerSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login_success: (state, { payload }) => {
      state.ui.loading = false;
      state.user = payload;
    },
    login: (state) => {
      state.ui.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login_success, login } = authReducerSlice.actions;

export default authReducerSlice.reducer;
