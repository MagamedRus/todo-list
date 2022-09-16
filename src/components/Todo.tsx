import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoType } from '../types/todo';
import AboutTodo from './AboutTodo';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';
import { deleteTodo, updateTodo } from '../common/localStorage';

type Props = {
  todo: TodoType;
};

function Todo({ todo }: Props) {
  const [isComplete, setIsComplite] = useState(todo.isComplete);
  const [isShow, setIsShow] = useState(true);

  const onPressDelete = () => {
    deleteTodo(todo.id);
    setIsShow(prevState => !prevState);
  };

  const onPressRead = () => {
    updateTodo({ ...todo, isComplete: !todo.isComplete });
    setIsComplite(prevState => !prevState);
  };

  return (
    <View style={[isShow ? styles.container : styles.hide]}>
      <ReadButton onMark={onPressRead} isMarked={isComplete} />
      <AboutTodo task={todo.task} title={todo.title} isComplete={isComplete} />
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
