import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store/store';

type initialStataType = {
  male: string[];
  female: string[];
  other: string[];
};

type favouritePersonTypeProp = {
  gender: string;
};

const initialState: initialStataType = {
  male: [],
  female: [],
  other: [],
};

const favouritePersonSlice = createSlice({
  name: 'favouritePerson',
  initialState,
  reducers: {
    addFavouritePerson: (
      state,
      action: PayloadAction<favouritePersonTypeProp>
    ) => {
      if (action.payload === 'male') {
        state.male.push(action.payload);
      }
      if (action.payload === 'female') {
        state.female.push(action.payload);
      }
      if (action.payload === 'n/a') {
        state.other.push(action.payload);
      }
    },
  },
});

export const { addFavouritePerson } = favouritePersonSlice.actions;

export const selectData = (state: RootState) => state.favouritePerson;

export default favouritePersonSlice.reducer;
