import { configureStore } from '@reduxjs/toolkit';
import starWarsSlice from '../reducers/charactersDataSlice';
import favouritePersonSlice from '../reducers/favoriteCharactersSlice';

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
