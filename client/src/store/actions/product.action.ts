import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../api/baseUrl';

export const getProductList = createAsyncThunk('get/allproduct', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/product`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return data;
  } catch (error: any) {
    throw rejectWithValue(error.response.data.errors);
  }
});
