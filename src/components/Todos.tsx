import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { TextColor } from '../constants/colors';
import { ComponentHeights } from '../constants/sizes';
import { useAppSelector } from '../hooks/redux';
import Todo from './Todo';

function Todos() {
  const todos = useAppSelector(state => state.todos.data);

  return (
    <ScrollView style={styles.container} alwaysBounceVertical={true}>
      {todos.map((todo, index) => (
        <Todo key={String(todo.id)} todo={todo} isBorder={index !== 0} />
      ))}
      {!todos[0] && <Text style={styles.emptyText}>Список задач пуст...</Text>}
    </ScrollView>
  );
}

export default Todos;

const styles = StyleSheet.create({
  container: {
    minHeight: 24,
    maxHeight: ComponentHeights.todos,
    paddingBottom: 36,
  },
  emptyText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    height: ComponentHeights.todos,
    color: TextColor.darkBrown,
  },
});
