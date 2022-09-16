import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';

import Todos from './components/Todos';
import { getTodosData } from './common/localStorage';
import { useAppDispatch } from './hooks/redux';
import { setTodos } from './store/reducers/todosSlice';

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
    <SafeAreaView>
      <StatusBar backgroundColor={'transparent'} />
      <Header />
      <Todos />
    </SafeAreaView>
  );
};

export default App;
