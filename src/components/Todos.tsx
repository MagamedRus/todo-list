import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../hooks/redux';
import HR from './HR';
import Todo from './Todo';

function Todos() {
  const todos = useAppSelector(state => state.todos.data);

  return (
    <>
      {todos.map((todo, index) => (
        <View key={String(todo.id)}>
          {index !== 0 && <HR />}
          <Todo todo={todo} />
        </View>
      ))}
    </>
  );
}

export default Todos;
