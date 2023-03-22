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
  name: string;
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
      if (action.payload.gender === 'male') {
        state.male.push(action.payload.name);
      }
      if (action.payload.gender === 'female') {
        state.female.push(action.payload.name);
      }
      if (
        action.payload.gender !== 'male' &&
        action.payload.gender !== 'female'
      ) {
        state.other.push(action.payload.name);
      }
    },
    removeFavouritePerson: (
      state,
      action: PayloadAction<favouritePersonTypeProp>
    ) => {
      if (action.payload.gender === 'male') {
        state.male = state.male.filter((item) => item !== action.payload.name);
      }
      if (action.payload.gender === 'female') {
        state.female = state.female.filter(
          (item) => item !== action.payload.name
        );
      }
      if (
        action.payload.gender !== 'male' &&
        action.payload.gender !== 'female'
      ) {
        state.other = state.other.filter(
          (item) => item !== action.payload.name
        );
      }
    },
    resetValueButton: (state, action: PayloadAction<[]>) => {
      state.male = action.payload;
      state.female = action.payload;
      state.other = action.payload;
    },
  },
});

export const { addFavouritePerson, removeFavouritePerson, resetValueButton } =
  favouritePersonSlice.actions;

export const selectData = (state: RootState) => state.favouritePerson;

export default favouritePersonSlice.reducer;
