import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../types/filter';
import { SHOW_ALL } from '../../constants/filterState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: SHOW_ALL,
  reducers: {
    changeFilter(state, action: PayloadAction<FilterType>) {
      state = action.payload;
      return state;
    },
    logFilterState(state) {
      console.log(state);
    },
  },
});

export const { changeFilter, logFilterState } = filterSlice.actions;
export default filterSlice.reducer;
