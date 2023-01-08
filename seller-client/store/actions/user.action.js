import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userSignUpAction = createAsyncThunk(
  'user/signup',
  async ({ name, email, password, passwordConform, url }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${url}/users/signup`,
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
  async (email, password, url, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        // `${url}/users/login`,
        `/api/users/login`,
        { email, password },
        { headers: { 'Content-type': 'application/json' } }
      );
      return data;
    } catch (error) {
      console.log('err', error);
      // console.log('User Login Error: ', error.response.data.errors);
      // throw rejectWithValue(error.response.data.errors);
      throw rejectWithValue(['Error']);
    }
  }
);

export const currentUserAction = createAsyncThunk(
  'user/current',
  async ({ url }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${url}/users/currentuser`);
      return data.currentUser;
    } catch (error) {
      console.log('User Login Error: ', error.response.data.errors);
      // throw rejectWithValue(error.response.data.errors);
    }
  }
);

export const signOutAction = createAsyncThunk(
  'user/signout',
  async ({ url }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${url}/users/signout`);
      return data;
    } catch (error) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);
