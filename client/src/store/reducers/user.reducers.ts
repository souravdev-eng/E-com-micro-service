import { createSlice } from '@reduxjs/toolkit';
import {
  currentUserAction,
  signOutAction,
  userLoginAction,
  userSignUpAction,
} from '../actions/user.action';

interface UserSliceProps {
  loading: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  error: any;
}

const initialState = {
  loading: false,
  user: null,
  error: null,
} as UserSliceProps;

export const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ----------- Sign Up ------------
    builder.addCase(userSignUpAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignUpAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    });
    builder.addCase(userSignUpAction.rejected, (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    });
    // ----------- Sign In ------------
    builder.addCase(userLoginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLoginAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    });
    builder.addCase(userLoginAction.rejected, (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    });
    // ----------- Current User ------------
    builder.addCase(currentUserAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(currentUserAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    });
    builder.addCase(currentUserAction.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // ----------- Sign out ------------
    builder.addCase(signOutAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signOutAction.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(signOutAction.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default userSlice.reducer;
