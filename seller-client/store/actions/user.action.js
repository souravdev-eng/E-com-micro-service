import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userSignUpAction = createAsyncThunk(
  'user/signup',
  async ({ name, email, password, passwordConform }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/signup`,
        { name, email, password, passwordConform, role: 'seller' },
        { headers: { 'Content-type': 'application/json' } }
      );
      return data;
    } catch (error) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);
export const userLoginAction = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        { headers: { 'Content-type': 'application/json' } }
      );
      return data;
    } catch (error) {
      console.log('err', error);
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);

export const currentUserAction = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/currentuser`);
      return data.currentUser;
    } catch (error) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);

export const signOutAction = createAsyncThunk('user/signout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/api/users/signout`);
    return data;
  } catch (error) {
    console.log('User Login Error: ', error.response.data.errors);
    throw rejectWithValue(error.response.data.errors);
  }
});
