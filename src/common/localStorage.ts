import AsyncStorage from '@react-native-community/async-storage';
import { TODO_LIST_DATA } from '../constants/localStorage';
import { TodosType, TodoType } from '../types/todo';

export const deleteTodo = async (todoId: number): Promise<TodosType> => {
  let todos = await getTodos();
  todos.splice(todoId, 1); // removing item
  setTodos(todos);
  return todos;
};

export const getTodos = async (): Promise<TodosType> => {
  const strTodos = await AsyncStorage.getItem(TODO_LIST_DATA);
  let todos = strTodos ? JSON.parse(strTodos) : [];
  return todos;
};

export const addTodo = async (todo: TodoType): Promise<void> => {
  let todos = await getTodos();
  todos.push(todo);
  setTodos(todos);
};

export const updateTodo = async (todo: TodoType): Promise<void> => {
  let todos = await getTodos();
  todos = todos.map((todoItem: TodoType) =>
    todoItem.id === todo.id ? todo : todoItem,
  );
  setTodos(todos);
};

export const setTodos = async (todos: TodosType): Promise<void> => {
  const strTodos = JSON.stringify(todos);
  AsyncStorage.setItem(TODO_LIST_DATA, strTodos); // save to async
};
