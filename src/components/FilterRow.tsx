import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextColor } from '../constants/colors';

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  innerText: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    lineHeight: 18,
    fontSize: 16,
    color: TextColor.semiGray,
  },
  choosedInnerText: {
    color: TextColor.skyBlue,
  },
});
