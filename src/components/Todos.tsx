import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextColor } from '../constants/colors';
import { useAppSelector } from '../hooks/redux';
import HR from './HR';
import Todo from './Todo';

function Todos() {
  const todos = useAppSelector(state => state.todos.data);

  return (
    <ScrollView horizontal={false}>
      {todos.map((todo, index) => (
        <View key={String(todo.id)}>
          {index !== 0 && <HR />}
          <Todo todo={todo} />
        </View>
      ))}
      {!todos[0] && <Text style={styles.emptyText}>Список заданий пуст..</Text>}
    </ScrollView>
  );
}

export default Todos;

//26 height of Text, 128 height of Header
const centerMarginTop = Dimensions.get('screen').height / 2 - 26 - 128;

const styles = StyleSheet.create({
  emptyText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 26,
    marginTop: centerMarginTop,
    color: TextColor.darkBrown,
  },
});
