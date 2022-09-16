import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';
import { getTodosData } from './common/localStorage';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { filterTodo, setTodos } from './store/reducers/todosSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(state => state.filter);

  //upload todos to global storage
  useEffect(() => {
    (async () => {
      const todos = await getTodosData();
      dispatch(setTodos(todos));
    })();
  }, [dispatch]);

  //Confirm filters to global todos
  useEffect(() => {
    dispatch(filterTodo(filterState));
  }, [dispatch, filterState]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'transparent'} />
      <Header />
      <Todos />
    </SafeAreaView>
  );
};

export default App;
