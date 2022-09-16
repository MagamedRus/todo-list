import { createSlice } from '@reduxjs/toolkit';
import { SHOW_ALL } from '../../constants/filterState';
import { FilterType } from '../../types/filter';

const initialState: FilterType = SHOW_ALL;

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

const filterReducer = filterSlice.reducer;

export default filterReducer;
