import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../types/filter';
import { TodosType, TodoType } from '../../types/todo';
import { filterStates } from '../../constants/filterState';

const todos: TodosType = [
  {
    id: 0,
    title: 'Математика',
    task: 'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки',
    isComplete: true,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: todos,
  reducers: {
    setTodos(state, action: PayloadAction<TodosType>) {
      state = action.payload;
      return state;
    },
    addTodo(state, action: PayloadAction<TodoType>) {
      state.push(action.payload);
      return state;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state = state.filter(todo => todo.id !== action.payload);
      return state;
    },
    filterTodo(state, action: PayloadAction<FilterType>) {
      state = state.filter(todo => {
        const filterState = action.payload;
        switch (filterState.id) {
          case filterStates.SHOW_COMPLETED.id:
            return todo.isComplete;
          case filterStates.SHOW_UNCOMPLETED.id:
            return !todo.isComplete;
          default:
            return true;
        }
      });
      return state;
    },
  },
});

export const { setTodos, addTodo, deleteTodo, filterTodo } = todosSlice.actions;
export default todosSlice.reducer;
