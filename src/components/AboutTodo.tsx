import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextColor } from '../constants/colors';

type Props = {
  title: string;
  task: string;
  isComplete: boolean;
};

const AboutTodo = ({ task, title, isComplete }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={isComplete ? styles.completedTask : styles.task}>
        {task}
      </Text>
    </View>
  );
};

export default AboutTodo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 17,
    flex: 1,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 26,
    color: TextColor.darkBrown,
  },
  task: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
    color: TextColor.darkBrown,
  },
  completedTask: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
    color: TextColor.semiDarkGray,
    textDecorationLine: 'line-through',
  },
});
