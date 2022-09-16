import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Todo from './src/components/Todo';
// import { useAppSelector } from './src/hooks/redux';

const todo = {
  id: 0,
  title: 'Математика',
  task: 'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки',
  isComplete: true,
};

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <StatusBar backgroundColor={'transparent'} />
      <Todo todo={todo} />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default App;
