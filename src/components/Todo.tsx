import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoType } from '../types/todo';
import AboutTodo from './AboutTodo';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';
import { deleteTodoData, updateTodoData } from '../common/localStorage';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteTodo, togleTodoComplete } from '../store/reducers/todosSlice';
import { filterStates } from '../constants/filterState';

type Props = {
  todo: TodoType;
};

function Todo({ todo }: Props) {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(state => state.todos.filter);
  const [hide, setHide] = useState(false);

  const onPressDelete = () => {
    deleteTodoData(todo.id);
    dispatch(deleteTodo(todo.id));
  };

  const onPressRead = () => {
    updateTodoData({ ...todo, isComplete: !todo.isComplete });
    dispatch(togleTodoComplete(todo.id));
  };

  useEffect(() => {
    switch (filterState.id) {
      case filterStates.SHOW_COMPLETED.id:
        setHide(todo.isComplete);
        break;
      case filterStates.SHOW_UNCOMPLETED.id:
        setHide(!todo.isComplete);
        break;
      default:
        hide && setHide(false);
        break;
    }
  }, [filterState.id, hide, todo.isComplete]);

  return (
    <View style={styles.container}>
      <ReadButton onMark={onPressRead} isMarked={todo.isComplete} />
      <AboutTodo
        task={todo.task}
        title={todo.title}
        isComplete={todo.isComplete}
      />
      <DeleteButton onDelete={onPressDelete} />
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  hide: {
    display: 'none',
  },
});
