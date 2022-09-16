import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  onPress: { (): void };
  innerText: string;
  isChoosed: boolean;
};

const FilterRow = ({ onPress, innerText, isChoosed }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={[styles.innerText, isChoosed && styles.choosedInnerText]}>
      {innerText}
    </Text>
  </TouchableOpacity>
);

export default FilterRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '',
  },
  innerText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: 18,
    fontSize: 16,
    color: '#737A82',
  },
  choosedInnerText: {
    color: '#3785CC',
  },
});
