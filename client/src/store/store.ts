import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/product.reducer';
import usersReducer from './reducers/user.reducers';

const store = configureStore({
  reducer: {
    users: usersReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
