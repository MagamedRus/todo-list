import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import ModalAddTaskWithButton from './components/ModalAddTaskWithButton';
import Todos from './components/Todos';
import { getTodosData } from './common/localStorage';
import { useAppDispatch } from './hooks/redux';
import { setTodos } from './store/reducers/todosSlice';
import { BackgroundColor } from './constants/colors';

const App = () => {
  const dispatch = useAppDispatch();

  //upload todos to global storage
  useEffect(() => {
    (async () => {
      const todos = await getTodosData();
      dispatch(setTodos(todos));
    })();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={BackgroundColor.white} />
      <Header />
      <Todos />
      <ModalAddTaskWithButton />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColor.white,
  },
});
