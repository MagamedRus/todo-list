import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import BlueButton from './components/BlueButton';
import ModalAddTask from './components/ModalAddTask';
import Todos from './components/Todos';
import { getTodosData } from './common/localStorage';
import { useAppDispatch } from './hooks/redux';
import { setTodos } from './store/reducers/todosSlice';

const App = () => {
  const [showAddModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const toggleShowAddModal = () => setShowModal(prevState => !prevState);

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
      <BlueButton onPress={toggleShowAddModal} innerText={'Добавить'} />
      <ModalAddTask close={toggleShowAddModal} isShow={showAddModal} />
    </SafeAreaView>
  );
};

export default App;
