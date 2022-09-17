import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BackgroundColor, TextColor } from '../constants/colors';

type Props = {
  onPress: { (): void };
  innerText: string;
};

const TransparentBlueButton = ({ onPress, innerText }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.innerText}>{innerText}</Text>
  </TouchableOpacity>
);

export default TransparentBlueButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: '100%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: BackgroundColor.skyBlue,
  },
  innerText: {
    fontFamily: 'Inter-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: TextColor.skyBlue,
  },
});
