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
import { BackgroundColor } from '../constants/colors';

type Props = {
  todo: TodoType;
  isBorder: boolean;
};

function Todo({ todo, isBorder }: Props) {
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
        setHide(!todo.isComplete);
        break;
      case filterStates.SHOW_UNCOMPLETED.id:
        setHide(todo.isComplete);
        break;
      default:
        hide && setHide(false);
        break;
    }
  }, [filterState.id, hide, todo.isComplete]);

  const containerStyles = [
    styles.container,
    hide && styles.hide,
    isBorder && styles.borderBottom,
  ];

  return (
    <View style={containerStyles}>
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
    paddingVertical: 10,
    paddingHorizontal: 17,
    flexDirection: 'row',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: BackgroundColor.ghostWhite,
  },
  hide: {
    display: 'none',
  },
});
