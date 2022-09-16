import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoType } from '../types/todo';
import AboutTodo from './AboutTodo';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';
import { deleteTodo, updateTodo } from '../common/localStorage';
import { useAppSelector } from '../hooks/redux';
import { filterStates } from '../constants/filterState';

type Props = {
  todo: TodoType;
};

function Todo({ todo }: Props) {
  const [isComplete, setIsComplite] = useState(todo.isComplete);
  const [isShow, setIsShow] = useState(true);
  const [isDelete, setIsDelete] = useState(false); // Not better variant for realize it, but better for optimase app
  const filterState = useAppSelector(state => state.filter);

  const onPressDelete = () => {
    deleteTodo(todo.id);
    setIsDelete(true);
  };

  const onPressRead = () => {
    updateTodo({ ...todo, isComplete: !todo.isComplete });
    setIsComplite(prevState => !prevState);
  };

  useEffect(() => {
    if (!isDelete) {
      switch (filterState.id) {
        case filterStates.SHOW_ALL.id:
          !isShow && setIsShow(true);
          break;
        case filterStates.SHOW_COMPLETED.id:
          setIsShow(todo.isComplete);
          break;
        case filterStates.SHOW_UNCOMPLETED.id:
          setIsShow(!todo.isComplete);
          break;
        default:
          break;
      }
    } else {
      setIsShow(false);
    }
  }, [filterState, isDelete, isShow, todo.isComplete]);

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
