import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextColor } from '../constants/colors';
import { ComponentHeights } from '../constants/sizes';
import { useAppSelector } from '../hooks/redux';
import HR from './HR';
import Todo from './Todo';

function Todos() {
  const todos = useAppSelector(state => state.todos.data);

  return (
    <ScrollView style={styles.container} alwaysBounceVertical={true}>
      {todos.map((todo, index) => (
        <View key={String(todo.id)} style={styles.todos}>
          {index !== 0 && <HR />}
          <Todo todo={todo} />
        </View>
      ))}
      {!todos[0] && (
        <Text style={styles.emptyText}>Список заданий пуст...</Text>
      )}
    </ScrollView>
  );
}

export default Todos;

const styles = StyleSheet.create({
  container: {
    minHeight: 24,
    maxHeight: ComponentHeights.todos,
  },
  todos: {
    paddingHorizontal: 17,
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
