import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({ filter: filterReducer });

export default rootReducer;
