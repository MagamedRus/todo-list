import { filterStates } from '../constants/filterState';
import { FilterType } from '../types/filter';
import { TodosType } from '../types/todo';

export const getFilteredTodos = (
  filter: FilterType,
  todos: TodosType,
): TodosType => {
  const result = todos.filter(todo => {
    switch (filter.id) {
      case filterStates.SHOW_COMPLETED.id:
        return todo.isComplete;
      case filterStates.SHOW_UNCOMPLETED.id:
        return !todo.isComplete;
      default:
        return true;
    }
  });
  return result;
};
