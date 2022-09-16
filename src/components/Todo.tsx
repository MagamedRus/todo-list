import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoType } from '../types/todo';
import AboutTodo from './AboutTodo';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';
import { deleteTodoData, updateTodoData } from '../common/localStorage';
import { useAppDispatch } from '../hooks/redux';
import { deleteTodo, togleTodoComplete } from '../store/reducers/todosSlice';

type Props = {
  todo: TodoType;
};

function Todo({ todo }: Props) {
  const dispatch = useAppDispatch();

  const onPressDelete = () => {
    deleteTodoData(todo.id);
    dispatch(deleteTodo(todo.id));
  };

  const onPressRead = () => {
    updateTodoData({ ...todo, isComplete: !todo.isComplete });
    dispatch(togleTodoComplete(todo.id));
  };

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
});
