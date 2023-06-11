import { createSlice } from '@reduxjs/toolkit';
import { getProductList } from '../actions/product.action';

interface ProductProps {
  loading: boolean;
  productList: {
    title: string;
    image: string;
    category: string;
    description: string;
    price: number;
    rating: number;
    sellerId: string;
    id: string;
  }[];
  error: any;
}

const initialState = {
  loading: false,
  productList: [],
  error: [],
} as ProductProps;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.productList = payload;
    });
    builder.addCase(getProductList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default productSlice.reducer;
