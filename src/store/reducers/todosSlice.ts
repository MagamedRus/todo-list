import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../types/filter';
import { TodosType, TodoType } from '../../types/todo';
import { SHOW_ALL } from '../../constants/filterState';

interface TodosStore {
  filter: FilterType;
  data: TodosType;
}

const todos: TodosType = [];

const initialState: TodosStore = {
  filter: SHOW_ALL,
  data: todos,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TodosType>) {
      state.data = action.payload;
      return state;
    },
    addTodo(state, action: PayloadAction<TodoType>) {
      state.data.push(action.payload);
      return state;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.data = state.data.filter(todo => todo.id !== action.payload);
      return state;
    },
    togleTodoComplete(state, action: PayloadAction<number>) {
      state.data = state.data.map(todo =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo,
      );
    },
    changeFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
      return state;
    },
  },
});

export const {
  setTodos,
  addTodo,
  deleteTodo,
  togleTodoComplete,
  changeFilter,
} = todosSlice.actions;
export default todosSlice.reducer;
