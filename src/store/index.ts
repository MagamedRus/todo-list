import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterSlice';
import todosReducer from './reducers/todosSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todosReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
