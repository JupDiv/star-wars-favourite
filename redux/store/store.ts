import { configureStore } from '@reduxjs/toolkit';
import starWarsSlice from '../reducers/starwarsSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    data: starWarsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;