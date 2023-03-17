import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store/store';
import type { Data } from '../../entites/types/Data';

type initialStataType = {
  data: [] | Data;
};

const initialState: initialStataType = {
  data: [],
};

export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Data>) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = starWarsSlice.actions;

export const selectData = (state: RootState) => state.data;

export default starWarsSlice.reducer;
