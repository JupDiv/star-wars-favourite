import { configureStore } from '@reduxjs/toolkit';
import starWarsSlice from '../reducers/starwarsSlice';
import favouritePersonSlice from '../reducers/favouritePersonSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    data: starWarsSlice,
    favouritePerson: favouritePersonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
