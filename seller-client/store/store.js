import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/user.reducers';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
