import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../api/baseUrl';

interface LoginProps {
  email: string;
  password: string;
}
interface userSignUpProps {
  name: string;
  email: string;
  password: string;
  passwordConform: string;
}

export const userSignUpAction = createAsyncThunk(
  'user/signup',
  async (data: userSignUpProps, { rejectWithValue }) => {
    const { name, email, password, passwordConform } = data;
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/signup`,
        { name, email, password, passwordConform },
        { headers: { 'Content-type': 'application/json' } }
      );
      return data;
    } catch (error: any) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);
export const userLoginAction = createAsyncThunk(
  'user/login',
  async (data: LoginProps, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/login`,
        { email, password },
        { headers: { 'Content-type': 'application/json' } }
      );
      return data;
    } catch (error: any) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);

export const currentUserAction = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/currentuser`);
      return data.currentUser;
    } catch (error: any) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  }
);

export const signOutAction = createAsyncThunk('user/signout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signout`);
    return data;
  } catch (error: any) {
    console.log('User Login Error: ', error.response.data.errors);
    throw rejectWithValue(error.response.data.errors);
  }
});
