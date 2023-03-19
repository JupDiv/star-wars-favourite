import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store/store';
import Planet from '../../entites/types/Planet';
import { Person } from '../../entites/types/Person';

type initialStataType = {
  persons: Person[] | [];
  planet: string;
};

const initialState: initialStataType = {
  persons: [],
  planet: ``,
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
    addPlanet: (state, action: PayloadAction<string>) => {
      state.planet = action.payload;
    },
  },
});

export const { addPersons, addPlanet } = starWarsSlice.actions;

export const selectData = (state: RootState) => state.data.persons;
export const selectPlanet = (state: RootState) => state.data.planet;

export default starWarsSlice.reducer;
