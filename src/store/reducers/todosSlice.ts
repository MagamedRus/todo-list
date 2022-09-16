import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../types/filter';
import { TodosType, TodoType } from '../../types/todo';
import { getFilteredTodos } from '../../common/filters';
import { SHOW_ALL } from '../../constants/filterState';

interface TodosStore {
  filter: FilterType;
  todos: TodosType;
}

const todos: TodosType = [
  {
    id: 0,
    title: 'Математика',
    task: 'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки',
    isComplete: true,
  },
];

const initialState: TodosStore = {
  filter: SHOW_ALL,
  todos: todos,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TodosType>) {
      state.todos = action.payload;
      return state;
    },
    addTodo(state, action: PayloadAction<TodoType>) {
      state.todos.push(action.payload);
      return state;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      return state;
    },
    togleTodoComplete(state, action: PayloadAction<number>) {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo,
      );
    },
    changeFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
      state.todos = getFilteredTodos(state.filter, state.todos);
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
