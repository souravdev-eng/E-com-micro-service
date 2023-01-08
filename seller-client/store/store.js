import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import usersReducer from './reducers/user.reducers';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const initStore = () =>
  configureStore({
    reducer: {
      users: usersReducer,
    },
  });

export const wrapper = createWrapper(initStore);
export default store;
