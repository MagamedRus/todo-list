import AsyncStorage from '@react-native-community/async-storage';
import { TODO_LIST_DATA } from '../constants/localStorage';
import { TodosType, TodoType } from '../types/todo';

export const deleteTodoData = async (todoId: number): Promise<TodosType> => {
  let todos = await getTodosData();
  todos.splice(todoId, 1); // removing item
  setTodosData(todos);
  return todos;
};

export const getTodosData = async (): Promise<TodosType> => {
  const strTodos = await AsyncStorage.getItem(TODO_LIST_DATA);
  let todos = strTodos ? JSON.parse(strTodos) : [];
  return todos;
};

export const addTodoData = async (todo: TodoType): Promise<void> => {
  let todos = await getTodosData();
  todos.push(todo);
  setTodosData(todos);
};

export const updateTodoData = async (todo: TodoType): Promise<void> => {
  let todos = await getTodosData();
  todos = todos.map((todoItem: TodoType) =>
    todoItem.id === todo.id ? todo : todoItem,
  );
  setTodosData(todos);
};

export const setTodosData = async (todos: TodosType): Promise<void> => {
  const strTodos = JSON.stringify(todos);
  AsyncStorage.setItem(TODO_LIST_DATA, strTodos); // save to async
};
