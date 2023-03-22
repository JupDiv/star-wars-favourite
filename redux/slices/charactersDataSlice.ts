import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { Person } from '../../entites/types/CharasterTypes';

type initialStataType = {
  persons: Person[] | [];
};

const initialState: initialStataType = {
  persons: [],
};

export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    addPersons: (state, action: PayloadAction<Person[]>) => {
      state.persons = action.payload;
      state.persons.map((person) => {
        person.id = (Math.random() * 1000).toFixed(5);
      });
    },
  },
});

export const { addPersons } = starWarsSlice.actions;

export const selectData = (state: RootState) => state.data.persons;

export default starWarsSlice.reducer;
